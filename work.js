// Product data array with detailed information
const products = [
    // Laptops
    {
        id: 1,
        name: "MacBook Pro M3",
        category: "laptop",
        price: "$1,999",
        description: "Latest Apple Silicon with incredible performance",
        image: "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_16_2023_M3_Pro/IMG_1256.JPG",
        specs: "Apple M3 chip with 8-core CPU and 10-core GPU, 16GB RAM, 512GB SSD, 14-inch Liquid Retina XDR display",
        features: "Battery life up to 18 hours, 1080p FaceTime HD camera, Six speakers with spatial audio, Two Thunderbolt ports",
        warranty: "1 year Apple warranty",
        color: "Space Gray, Silver"
    },
    {
        id: 2,
        name: "Dell XPS 15",
        category: "laptop",
        price: "$1,499",
        description: "Premium Windows Laptop with stunning display",
        image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22964107/akrales_211015_4758_0067.jpg?quality=90&strip=all&crop=0,0,100,100",
        specs: "Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3050, 15.6-inch 3.5K OLED display",
        features: "InfinityEdge display, Fingerprint reader, Backlit keyboard, 86Whr battery, Windows 11 Pro",
        warranty: "2 years Dell warranty",
        color: "Platinum Silver"
    },
    {
        id: 3,
        name: "HP Spectre",
        category: "laptop",
        price: "$1,299",
        description: "Convertible Laptop with premium build",
        image: "https://www.gdgtme.com/wp-content/uploads/2023/02/HP-Spectre-x360-2-In-1-Laptop-Review-4-1024x694.jpg",
        specs: "Intel Core i7-1260P, 16GB RAM, 1TB SSD, Intel Iris Xe Graphics, 13.5-inch 3K2K OLED touch display",
        features: "360° hinge, HP Tilt Pen included, Bang & Olufsen speakers, Privacy camera shutter",
        warranty: "1 year HP warranty",
        color: "Nightfall Black, Poseidon Blue"
    },

    // Audio Products
    {
        id: 4,
        name: "AirPods Pro",
        category: "audio",
        price: "$249",
        description: "Noise Cancelling with immersive sound",
        image: "https://helios-i.mashable.com/imagery/articles/06p5PGAjzDSZysaktotmIwr/hero-image.fill.size_1248x702.v1699805275.jpg",
        specs: "Active Noise Cancellation, Transparency mode, Adaptive EQ, Spatial audio with dynamic head tracking",
        features: "Sweat and water resistant, Multiple ear tips, MagSafe charging case, Up to 4.5 hours listening time",
        warranty: "1 year Apple warranty",
        color: "White"
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        category: "audio",
        price: "$399",
        description: "Premium Headphones with industry-leading noise cancellation",
        image: "https://pcstore.pk/wp-content/uploads/2023/07/Sony-WH-1000XM5-Wireless-Noise-Canceling-Headphones-blue-Pcstore-Price-in-pakistan-img3.png",
        specs: "Industry-leading ANC, 30mm driver units, Bluetooth 5.2, LDAC codec support",
        features: "30-hour battery life, Quick charging, Multipoint connection, Speak-to-chat technology",
        warranty: "1 year Sony warranty",
        color: "Black, Silver"
    },
    {
        id: 6,
        name: "JBL Speaker",
        category: "audio",
        price: "$149",
        description: "Portable Bluetooth with powerful sound",
        image: "https://xcessorieshub.com/wp-content/uploads/2024/05/JBL-Go-4.webp",
        specs: "5W output, Bluetooth 5.1, 3.5mm aux input, Built-in microphone",
        features: "5 hours playtime, IP67 waterproof, Compact design, Speakerphone function",
        warranty: "1 year JBL warranty",
        color: "Multiple colors available"
    },

    // Cameras
    {
        id: 7,
        name: "Canon EOS R5",
        category: "camera",
        price: "$3,899",
        description: "Professional Mirrorless with 8K video",
        image: "https://m.media-amazon.com/images/I/61LzfUQJl-L._AC_UF894,1000_QL80_.jpg",
        specs: "45MP full-frame sensor, 8K video recording, Dual Pixel CMOS AF II, 12 fps mechanical shutter",
        features: "5-axis image stabilization, Weather-sealed body, Dual memory card slots, Vari-angle touchscreen",
        warranty: "2 years Canon warranty",
        color: "Black"
    },
    {
        id: 8,
        name: "Sony A7III",
        category: "camera",
        price: "$1,999",
        description: "Full Frame Camera with excellent low-light performance",
        image: "https://shotkit.com/wp-content/uploads/2018/05/Sony-a7-iii-review-shotkit-jason-vinson-013.jpg",
        specs: "24.2MP full-frame sensor, 4K video recording, 693-point phase-detection AF, 10 fps shooting",
        features: "5-axis stabilization, 710 shots per charge, Dual SD slots, Weather-sealed body",
        warranty: "1 year Sony warranty",
        color: "Black"
    },
    {
        id: 9,
        name: "Nikon Z6",
        category: "camera",
        price: "$1,799",
        description: "Mirrorless Camera with professional features",
        image: "https://blog.michaelclarkphoto.com/wp-content/uploads/2019/01/01-7887-post/z6(pp_w768_h768).jpg",
        specs: "24.5MP BSI full-frame sensor, 4K video up to 30p, 273-point hybrid AF system, 12 fps continuous shooting",
        features: "5-axis VR image stabilization, 3.2-inch tilting touchscreen, High-res viewfinder, Magnesium alloy body",
        warranty: "1 year Nikon warranty",
        color: "Black"

    },
    {
        id: 10,
        name: "MacBook Pro M3",
        category: "laptop",
        price: "$1,999",
        description: "Latest Apple Silicon with incredible performance",
        image: "https://wise-tech.com.pk/wp-content/uploads/2024/01/Apple-MacBook-Pro-M3-Space-Black-Keyboard.png",
        specs: "Apple M3 chip with 8-core CPU and 10-core GPU, 16GB RAM, 512GB SSD, 14-inch Liquid Retina XDR display",
        features: "Battery life up to 18 hours, 1080p FaceTime HD camera, Six speakers with spatial audio, Two Thunderbolt ports",
        warranty: "1 year Apple warranty",
        color: "Space Gray, Silver"
    },
    {
        id: 11,
        name: "AirPods Pro",
        category: "audio",
        price: "$249",
        description: "Noise Cancelling with immersive sound",
        image: "https://www.apple.com/v/airpods-pro/r/images/overview/highlights/highlights_live_translation__ga7nep85dr6m_large.jpg",
        specs: "Active Noise Cancellation, Transparency mode, Adaptive EQ, Spatial audio with dynamic head tracking",
        features: "Sweat and water resistant, Multiple ear tips, MagSafe charging case, Up to 4.5 hours listening time",
        warranty: "1 year Apple warranty",
        color: "White"
    },
    {
        id: 12,
        name: "Canon EOS R5",
        category: "camera",
        price: "$3,899",
        description: "Professional Mirrorless with 8K video",
        image: "https://www.premiumbeat.com/blog/wp-content/uploads/2020/07/Canon-EOS-R5-cover.jpg",
        specs: "45MP full-frame sensor, 8K video recording, Dual Pixel CMOS AF II, 12 fps mechanical shutter",
        features: "5-axis image stabilization, Weather-sealed body, Dual memory card slots, Vari-angle touchscreen",
        warranty: "2 years Canon warranty",
        color: "Black"
    },
    {
        id: 13,
        name: "Nikon Z6",
        category: "camera",
        price: "$1,799",
        description: "Mirrorless Camera with professional features",
        image: "https://images.contentstack.io/v3/assets/blt0e5ec1de4817c440/blta96349e5f944f8c9/65b2852638270379efa37981/quicklinks-Z6-autofocus.jpg",
        specs: "24.5MP BSI full-frame sensor, 4K video up to 30p, 273-point hybrid AF system, 12 fps continuous shooting",
        features: "5-axis VR image stabilization, 3.2-inch tilting touchscreen, High-res viewfinder, Magnesium alloy body",
        warranty: "1 year Nikon warranty",
        color: "Black"

    },
    {
        id: 14,
        name: "HP Spectre",
        category: "laptop",
        price: "$1,299",
        description: "Convertible Laptop with premium build",
        image: "https://i.pcmag.com/imagery/reviews/03EnAx0aST5jQuclTOyced0-2.fit_lim.size_1943x1092.v_1569469968.png",
        specs: "Intel Core i7-1260P, 16GB RAM, 1TB SSD, Intel Iris Xe Graphics, 13.5-inch 3K2K OLED touch display",
        features: "360° hinge, HP Tilt Pen included, Bang & Olufsen speakers, Privacy camera shutter",
        warranty: "1 year HP warranty",
        color: "Nightfall Black, Poseidon Blue"
    },
    {
        id: 15,
        name: "JBL Speaker",
        category: "audio",
        price: "$149",
        description: "Portable Bluetooth with powerful sound",
        image: "https://images.priceoye.pk/jbl-m3-mini-wireless-bluetooth-speaker-pakistan-priceoye-oc01f-500x500.webp",
        specs: "5W output, Bluetooth 5.1, 3.5mm aux input, Built-in microphone",
        features: "5 hours playtime, IP67 waterproof, Compact design, Speakerphone function",
        warranty: "1 year JBL warranty",
        color: "Multiple colors available"
    },
    {
        id: 16,
        name: "Dell XPS 15",
        category: "laptop",
        price: "$1,499",
        description: "Premium Windows Laptop with stunning display",
        image: "https://s.yimg.com/ny/api/res/1.2/xmfplpqLdkvnqwCLYAMqFA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04MzI-/https://s.yimg.com/os/creatr-uploaded-images/2020-05/aa4bd840-9524-11ea-8a66-cfc6e9ca0901",
        specs: "Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3050, 15.6-inch 3.5K OLED display",
        features: "InfinityEdge display, Fingerprint reader, Backlit keyboard, 86Whr battery, Windows 11 Pro",
        warranty: "2 years Dell warranty",
        color: "Platinum Silver"
    },
    {
        id: 17,
        name: "Sony WH-1000XM5",
        category: "audio",
        price: "$399",
        description: "Premium Headphones with industry-leading noise cancellation",
        image: "https://media.littlewoods.com/i/littlewoods/UX5X4_SQ6_0000000004_BLACK_SLd2?$pdp_300x400_x2$&fmt=jpg",
        specs: "Industry-leading ANC, 30mm driver units, Bluetooth 5.2, LDAC codec support",
        features: "30-hour battery life, Quick charging, Multipoint connection, Speak-to-chat technology",
        warranty: "1 year Sony warranty",
        color: "Black, Silver"
    },
    {
        id: 18,
        name: "Sony A7III",
        category: "camera",
        price: "$1,999",
        description: "Full Frame Camera with excellent low-light performance",
        image: "https://shotkit.com/wp-content/uploads/bb-plugin/cache/Best_Sony_a7III_Lenses-landscape-9d1762a620cc0ebae87427d7a7fc7dbd-zybravgx2q47.jpg",
        specs: "24.2MP full-frame sensor, 4K video recording, 693-point phase-detection AF, 10 fps shooting",
        features: "5-axis stabilization, 710 shots per charge, Dual SD slots, Weather-sealed body",
        warranty: "1 year Sony warranty",
        color: "Black"
    },

];

// Function to create product card
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

// NEW FUNCTION: Open product details in a new webpage
function openProductPage(productId) {
    // Store product data in localStorage to retrieve on the new page
    localStorage.setItem('selectedProductId', productId);
    localStorage.setItem('productsData', JSON.stringify(products));

    // Navigate to product-details.html in the same tab
    window.location.href = 'product-details.html';
}

// Function to display products
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = ''; // Clear existing products

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        displayProducts(filtered);
    }

    // Update active button styling
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
}

// Initialize products when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);

    // Add event listeners to filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterProducts(category);
        });
    });
});
// ============================================
// BACKGROUND SLIDER FOR HERO SECTION
// ============================================

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slider-dot');
let slideInterval;

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle index bounds
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    currentSlide = index;
    
    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
    resetInterval();
}

function prevSlide() {
    showSlide(currentSlide - 1);
    resetInterval();
}

function goToSlide(index) {
    showSlide(index);
    resetInterval();
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

// Initialize slider
if (slides.length > 0) {
    showSlide(0);
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}
// Navigate to category page
function navigateToCategory(category) {
    // Store category in localStorage
    localStorage.setItem('selectedCategory', category);
    localStorage.setItem('allProducts', JSON.stringify(products));
    
    // Open category page
    window.location.href = 'category-page.html';
}
// Function to create horizontal scroll product cards
function createHorizontalProductCard(product) {
    const card = document.createElement('div');
    card.className = 'scroll-product-card';
    
    card.innerHTML = `
        <div class="scroll-product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="scroll-product-info">
            <h4 class="scroll-product-name">${product.name}</h4>
            <p class="scroll-product-description">${product.description.substring(0, 60)}...</p>
            <div class="scroll-product-price">${product.price}</div>
            <button class="scroll-info-btn" onclick="openProductPage(${product.id})">View Info</button>
        </div>
    `;
    
    return card;
}

// // Function to load horizontal sections (4 products per category)
// function loadHorizontalSections() {
//     // Get unique products per category (limit to 4)
//     const laptops = products.filter(p => p.category === 'laptop').slice(0, 5);
//     const audio = products.filter(p => p.category === 'audio').slice(0, 5);
//     const cameras = products.filter(p => p.category === 'camera').slice(0, 5);
    
//     // Populate laptop section
//     const laptopScroll = document.getElementById('laptopScroll');
//     if (laptopScroll) {
//         laptopScroll.innerHTML = '';
//         laptops.forEach(product => {
//             laptopScroll.appendChild(createHorizontalProductCard(product));
//         });
//     }
    
//     // Populate audio section
//     const audioScroll = document.getElementById('audioScroll');
//     if (audioScroll) {
//         audioScroll.innerHTML = '';
//         audio.forEach(product => {
//             audioScroll.appendChild(createHorizontalProductCard(product));
//         });
//     }
    
//     // Populate camera section
//     const cameraScroll = document.getElementById('cameraScroll');
//     if (cameraScroll) {
//         cameraScroll.innerHTML = '';
//         cameras.forEach(product => {
//             cameraScroll.appendChild(createHorizontalProductCard(product));
//         });
//     }
// }
function loadHorizontalSections() {
    const laptops = products.filter(p => p.category === 'laptop').slice(0, 5);
    const audio = products.filter(p => p.category === 'audio').slice(0, 5);
    const cameras = products.filter(p => p.category === 'camera').slice(0, 5);
    
    // Use optional chaining or if-checks for EVERY element
    const laptopScroll = document.getElementById('laptopScroll');
    if (laptopScroll) {
        laptopScroll.innerHTML = '';
        laptops.forEach(product => laptopScroll.appendChild(createHorizontalProductCard(product)));
    }
    
    const audioScroll = document.getElementById('audioScroll');
    if (audioScroll) {
        audioScroll.innerHTML = '';
        audio.forEach(product => audioScroll.appendChild(createHorizontalProductCard(product)));
    }
    
    const cameraScroll = document.getElementById('cameraScroll');
    if (cameraScroll) {
        cameraScroll.innerHTML = '';
        cameras.forEach(product => cameraScroll.appendChild(createHorizontalProductCard(product)));
    }
}


// Update your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    
    // Load horizontal sections
    loadHorizontalSections();
    
    // Add event listeners to filter buttons (if they exist)
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterProducts(category);
        });
    });
});
// ============================================
// GLOBAL SEARCH FUNCTIONALITY (Works on all pages)
// ============================================

// Get unique products for search
function getSearchProducts() {
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

// Perform global search
function performGlobalSearch() {
    const input = document.getElementById('globalSearchInput');
    const searchTerm = input.value.toLowerCase().trim();
    const dropdown = document.getElementById('searchDropdown');
    
    if (searchTerm === '') {
        dropdown.classList.remove('show');
        return;
    }
    
    const allProducts = getSearchProducts();
    const results = allProducts.filter(product => {
        return product.name.toLowerCase().includes(searchTerm) ||
               product.description.toLowerCase().includes(searchTerm) ||
               product.category.toLowerCase().includes(searchTerm);
    });
    
    // Display results in dropdown
    if (results.length === 0) {
        dropdown.innerHTML = `<div class="search-no-results">🔍 No products found for "${searchTerm}"</div>`;
    } else {
        let resultsHTML = '';
        const topResults = results.slice(0, 5);
        
        topResults.forEach(product => {
            resultsHTML += `
                <div class="search-result-item" onclick="goToProduct(${product.id})">
                    <img src="${product.image}" alt="${product.name}" class="search-result-image">
                    <div class="search-result-info">
                        <div class="search-result-name">${product.name}</div>
                        <div class="search-result-category">${product.category.toUpperCase()}</div>
                    </div>
                    <div class="search-result-price">${product.price}</div>
                </div>
            `;
        });
        
        if (results.length > 5) {
            resultsHTML += `<div class="search-view-all" onclick="viewAllSearchResults('${searchTerm}')">
                View all ${results.length} results →
            </div>`;
        }
        
        dropdown.innerHTML = resultsHTML;
    }
    
    dropdown.classList.add('show');
}

// Handle search on Enter key
function handleGlobalSearch(event) {
    if (event.key === 'Enter') {
        const searchTerm = event.target.value.toLowerCase().trim();
        if (searchTerm) {
            viewAllSearchResults(searchTerm);
        }
    } else {
        performGlobalSearch();
    }
}

// Navigate to product directly from search
function goToProduct(productId) {
    localStorage.setItem('selectedProductId', productId);
    localStorage.setItem('productsData', JSON.stringify(products));
    window.location.href = 'product-details.html';
}

// View all search results (redirect to catalog page with search)
function viewAllSearchResults(searchTerm) {
    // Save search term to localStorage
    localStorage.setItem('globalSearchTerm', searchTerm);
    // Redirect to catalog page
    window.location.href = 'products.html?search=' + encodeURIComponent(searchTerm);
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.nav-search');
    const dropdown = document.getElementById('searchDropdown');
    
    if (searchContainer && !searchContainer.contains(event.target)) {
        if (dropdown) dropdown.classList.remove('show');
    }
});

// Check if coming from search on catalog page
if (window.location.pathname.includes('products.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');
    
    if (searchTerm) {
        // Store search term and trigger search on catalog page
        localStorage.setItem('globalSearchTerm', searchTerm);
        
        // Wait for catalog to load then perform search
        setTimeout(() => {
            if (typeof filterCatalog === 'function') {
                const searchInput = document.getElementById('globalSearchInput');
                if (searchInput) {
                    searchInput.value = searchTerm;
                }
                performCatalogSearch(searchTerm);
            }
        }, 500);
    }
}

// Function to search within catalog page
function performCatalogSearch(searchTerm) {
    if (typeof filterCatalog === 'function') {
        const input = document.getElementById('searchInput');
        if (input) {
            input.value = searchTerm;
            input.dispatchEvent(new Event('keyup'));
        } else {
            // If no search input on page, filter products directly
            const allProducts = getSearchProducts();
            const results = allProducts.filter(product => {
                return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.category.toLowerCase().includes(searchTerm.toLowerCase());
            });
            
            if (typeof filterCatalog === 'function') {
                // Temporarily override filter to show search results
                window.catalogFilteredProducts = results;
                if (typeof displayCatalogProducts === 'function') {
                    displayCatalogProducts();
                }
            }
        }
    }
}
// Compact Contact Form Submission
function submitCompactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('compactName').value;
    const email = document.getElementById('compactEmail').value;
    const message = document.getElementById('compactMessage').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Hide form, show success
    document.querySelector('.contact-compact-right form').style.display = 'none';
    document.getElementById('compactSuccess').style.display = 'block';
    
    // Reset after 3 seconds (optional)
    setTimeout(() => {
        document.getElementById('compactContactForm').reset();
        document.querySelector('.contact-compact-right form').style.display = 'block';
        document.getElementById('compactSuccess').style.display = 'none';
    }, 3000);
}
// Force hide loader after 3 seconds even if scripts struggle
setTimeout(() => {
    const loader = document.querySelector('.loader') || document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }
}, 3000);