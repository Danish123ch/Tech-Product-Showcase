// ============================================
// SIMPLE CATALOG PAGE FUNCTIONS
// ============================================

// Check if we're on catalog page
if (document.getElementById('catalogGrid')) {
    
    let catalogCurrentPage = 1;
    let catalogCurrentFilter = 'all';
    let catalogAllProducts = [];
    let catalogFilteredProducts = [];
    const productsPerPage = 6;
    
    // Get unique products (remove duplicates by id)
    function getUniqueProducts() {
        const unique = [];
        const seenIds = new Set();
        for (const p of products) {
            if (!seenIds.has(p.id)) {
                seenIds.add(p.id);
                unique.push(p);
            }
        }
        return unique;
    }
    
    // Update category counts
    function updateCategoryCounts() {
        const uniqueProducts = getUniqueProducts();
        const laptopCount = uniqueProducts.filter(p => p.category === 'laptop').length;
        const audioCount = uniqueProducts.filter(p => p.category === 'audio').length;
        const cameraCount = uniqueProducts.filter(p => p.category === 'camera').length;
        
        document.getElementById('laptopCount').textContent = laptopCount;
        document.getElementById('audioCount').textContent = audioCount;
        document.getElementById('cameraCount').textContent = cameraCount;
    }
    
    // Filter catalog products
    window.filterCatalog = function(category) {
        catalogCurrentFilter = category;
        catalogCurrentPage = 1;
        
        // Update active button
        document.querySelectorAll('.catalog-filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.includes(category === 'all' ? 'All' : 
                category === 'laptop' ? 'Laptops' :
                category === 'audio' ? 'Audio' : 'Cameras')) {
                btn.classList.add('active');
            }
        });
        
        // Filter products
        const uniqueProducts = getUniqueProducts();
        if (category === 'all') {
            catalogFilteredProducts = [...uniqueProducts];
        } else {
            catalogFilteredProducts = uniqueProducts.filter(p => p.category === category);
        }
        
        displayCatalogProducts();
    };
    
    // Display products
    function displayCatalogProducts() {
        const grid = document.getElementById('catalogGrid');
        if (!grid) return;
        
        const start = 0;
        const end = catalogCurrentPage * productsPerPage;
        const productsToShow = catalogFilteredProducts.slice(start, end);
        
        if (productsToShow.length === 0) {
            grid.innerHTML = '<div style="text-align:center; grid-column:1/-1; padding:60px;">No products found in this category</div>';
            document.getElementById('loadMoreContainer').style.display = 'none';
            return;
        }
        
        grid.innerHTML = productsToShow.map(product => `
            <div class="catalog-product-card">
                <div class="catalog-product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="catalog-product-info">
                    <h3 class="catalog-product-name">${product.name}</h3>
                    <p class="catalog-product-desc">${product.description.substring(0, 80)}...</p>
                    <div class="catalog-product-price">${product.price}</div>
                    <button class="catalog-product-btn" onclick="openProductPage(${product.id})">View Details</button>
                </div>
            </div>
        `).join('');
        
        // Show/hide load more button
        const loadMoreContainer = document.getElementById('loadMoreContainer');
        if (loadMoreContainer) {
            if (end >= catalogFilteredProducts.length) {
                loadMoreContainer.style.display = 'none';
            } else {
                loadMoreContainer.style.display = 'block';
            }
        }
    }
    
    // Load more products
    window.loadMoreCatalog = function() {
        catalogCurrentPage++;
        displayCatalogProducts();
    };
    
    // Initialize catalog
    updateCategoryCounts();
    window.filterCatalog('all');
}
// Add this inside your catalog page if statement
window.performCatalogSearch = function(searchTerm) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = searchTerm;
        searchInput.dispatchEvent(new Event('keyup'));
    }
};

// Check for stored search term when catalog loads
const urlParams = new URLSearchParams(window.location.search);
const urlSearchTerm = urlParams.get('search');
if (urlSearchTerm) {
    setTimeout(() => {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = decodeURIComponent(urlSearchTerm);
            searchInput.dispatchEvent(new Event('keyup'));
        }
    }, 300);
}