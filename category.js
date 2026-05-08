function goBackToHome() {
            window.location.href = 'products.html';
        }

        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-category', product.category);

            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">${product.price}</div>
                    <button class="info" onclick="openProductPage(${product.id})">View Info</button>
                </div>
            `;
            return card;
        }

        function loadCategoryPage() {
            const category = localStorage.getItem('selectedCategory');
            const allProducts = JSON.parse(localStorage.getItem('allProducts'));
            
            if (!allProducts) {
                window.location.href = 'index.html';
                return;
            }
            
            let filteredProducts = [];
            let categoryName = '';
            let categoryDesc = '';
            
            if (category === 'all') {
                filteredProducts = allProducts;
                categoryName = 'All Products';
                categoryDesc = 'Explore our complete collection of premium tech products';
            } else if (category === 'laptop') {
                filteredProducts = allProducts.filter(p => p.category === 'laptop');
                categoryName = 'Laptops';
                categoryDesc = 'Powerful laptops for work, creativity, and entertainment';
            } else if (category === 'audio') {
                filteredProducts = allProducts.filter(p => p.category === 'audio');
                categoryName = 'Audio Devices';
                categoryDesc = 'Premium headphones and speakers for immersive sound';
            } else if (category === 'camera') {
                filteredProducts = allProducts.filter(p => p.category === 'camera');
                categoryName = 'Cameras';
                categoryDesc = 'Professional cameras to capture your precious moments';
            }
            
            document.getElementById('categoryTitle').textContent = categoryName;
            document.getElementById('categoryDesc').textContent = categoryDesc;
            
            const grid = document.getElementById('categoryProductsGrid');
            grid.innerHTML = '';
            
            if (filteredProducts.length === 0) {
                grid.innerHTML = '<div class="no-products">No products found in this category</div>';
                return;
            }
            
            filteredProducts.forEach(product => {
                const card = createProductCard(product);
                grid.appendChild(card);
            });
        }
        
        function openProductPage(productId) {
            localStorage.setItem('selectedProductId', productId);
            localStorage.setItem('productsData', localStorage.getItem('allProducts'));
            window.location.href = 'product-details.html';
        }
        
        document.addEventListener('DOMContentLoaded', loadCategoryPage);