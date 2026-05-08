// ============================================
// ARTICLE DETAILS PAGE FUNCTIONS
// ============================================

// Complete article data with full content
const fullArticles = {
    1: {
        id: 1,
        title: "Ultimate Guide to Buying a Laptop in 2024",
        category: "buying-guide",
        categoryDisplay: "BUYING GUIDE",
        excerpt: "Everything you need to know before buying your next laptop - from processors to battery life.",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
        date: "March 15, 2024",
        readTime: "8 min read",
        views: "2.5k",
        content: `
            <h2>Introduction</h2>
            <p>Buying a laptop in 2024 can be overwhelming with so many options available. This comprehensive guide will help you understand what to look for and make an informed decision.</p>
            
            <h2>1. Understanding Processors (CPU)</h2>
            <p>The processor is the brain of your laptop. In 2024, you'll find Intel's 14th Gen (Ultra series) and AMD's Ryzen 8000 series. For most users, an Intel Core i5 or AMD Ryzen 5 offers the best balance of performance and value. If you're into gaming or video editing, consider i7/i9 or Ryzen 7/9.</p>
            
            <h2>2. RAM - How Much Do You Need?</h2>
            <p>8GB is the absolute minimum in 2024. For smooth multitasking, 16GB is recommended. Power users and content creators should go for 32GB or more.</p>
            
            <h2>3. Storage Options</h2>
            <p>SSD (Solid State Drive) is non-negotiable in 2024. Look for at least 512GB NVMe SSD. Some laptops offer dual SSD slots for future upgrades.</p>
            
            <h2>4. Display Quality</h2>
            <p>1080p is standard, but 1440p and 4K options are available. Consider OLED panels for better colors and contrast. For outdoor use, look for 400+ nits brightness.</p>
            
            <h2>5. Battery Life</h2>
            <p>Look for laptops that offer 8+ hours of real-world battery life. Ultrabooks and MacBooks typically excel in this area.</p>
            
            <h2>Top Recommendations for 2024</h2>
            <ul>
                <li><strong>Best Overall:</strong> MacBook Pro M3 - Perfect for professionals</li>
                <li><strong>Best Windows Laptop:</strong> Dell XPS 15 - Premium build and performance</li>
                <li><strong>Best Value:</strong> HP Spectre - Great balance of features and price</li>
            </ul>
            
            <blockquote>Pro Tip: Always read reviews and watch video tests before making a purchase decision. Real-world performance can differ from spec sheets.</blockquote>
            
            <p>Remember, the best laptop is one that fits your specific needs and budget. Take your time, do your research, and don't get caught up in specs you'll never use!</p>
        `,
        relatedProducts: [1, 2, 3] // Product IDs that relate to this article
    },
    2: {
        id: 2,
        title: "AirPods Pro 2 vs Sony WF-1000XM5: Which One to Buy?",
        category: "reviews",
        categoryDisplay: "REVIEW",
        excerpt: "Detailed comparison of the top noise-cancelling earbuds in 2024.",
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800",
        date: "March 10, 2024",
        readTime: "6 min read",
        views: "1.8k",
        content: `
            <h2>The Battle of Premium Earbuds</h2>
            <p>Apple's AirPods Pro 2 and Sony's WF-1000XM5 are the top contenders in the premium wireless earbud market. Let's compare them side by side.</p>
            
            <h2>Sound Quality</h2>
            <p><strong>Sony WF-1000XM5</strong> takes the lead with richer bass and more detailed mids. The 8.4mm drivers deliver exceptional clarity. <strong>AirPods Pro 2</strong> offers balanced, neutral sound with excellent Spatial Audio support.</p>
            
            <h2>Noise Cancellation</h2>
            <p>Both are industry-leading, but Sony edges ahead with adaptive noise cancellation that automatically adjusts to your environment. Apple's H2 chip provides excellent ANC that's very close.</p>
            
            <h2>Battery Life</h2>
            <p>Sony offers 8 hours (24 with case) vs Apple's 6 hours (30 with case). Sony wins for longer single-charge listening.</p>
            
            <h2>Ecosystem Integration</h2>
            <p>If you're in the Apple ecosystem, AirPods Pro 2 are the obvious choice with seamless switching, Find My integration, and Siri access. Sony works great across all platforms.</p>
            
            <h2>Verdict</h2>
            <p>Choose <strong>AirPods Pro 2</strong> if you're an Apple user. Pick <strong>Sony WF-1000XM5</strong> for slightly better sound quality and Android compatibility.</p>
        `,
        relatedProducts: [4, 5]
    },
    3: {
        id: 3,
        title: "5 Photography Tips for Beginners",
        category: "tips-tricks",
        categoryDisplay: "TIPS & TRICKS",
        excerpt: "Master your camera with these simple yet effective photography techniques.",
        image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800",
        date: "March 5, 2024",
        readTime: "5 min read",
        views: "3.2k",
        content: `
            <h2>Tip 1: Understand the Exposure Triangle</h2>
            <p>Aperture, shutter speed, and ISO work together to create a properly exposed image. Learn how each affects your photo and when to adjust them.</p>
            
            <h2>Tip 2: Use the Rule of Thirds</h2>
            <p>Imagine breaking an image into thirds (horizontally and vertically). Place key elements along these lines or at their intersections for more balanced compositions.</p>
            
            <h2>Tip 3: Shoot in RAW</h2>
            <p>RAW files contain more data than JPEGs, giving you greater flexibility in editing. You can recover highlights, adjust white balance, and fine-tune exposure more effectively.</p>
            
            <h2>Tip 4: Master Natural Light</h2>
            <p>The golden hours (just after sunrise and before sunset) provide the most flattering light. Avoid harsh midday sun that creates unflattering shadows.</p>
            
            <h2>Tip 5: Practice, Practice, Practice</h2>
            <p>The best way to improve your photography is to shoot regularly. Challenge yourself with different subjects and lighting conditions.</p>
        `,
        relatedProducts: [7, 8, 9]
    },
    4: {
        id: 4,
        title: "M3 Chip Explained: What's New?",
        category: "tech-news",
        categoryDisplay: "TECH NEWS",
        excerpt: "Apple's latest M3 chip brings massive performance improvements.",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800",
        date: "February 28, 2024",
        readTime: "4 min read",
        views: "4.1k",
        content: `
            <h2>Apple's Next-Generation Silicon</h2>
            <p>The M3 chip represents Apple's third generation of custom silicon for Macs. Built on 3nm technology, it delivers unprecedented performance and efficiency.</p>
            
            <h2>Key Improvements</h2>
            <ul>
                <li><strong>3nm Process:</strong> More transistors, better power efficiency</li>
                <li><strong>Dynamic Caching:</strong> GPU memory allocation optimized in real-time</li>
                <li><strong>Hardware-Accelerated Ray Tracing:</strong> Enhanced graphics performance</li>
                <li><strong>Mesh Shading:</strong> Improved gaming and 3D rendering</li>
            </ul>
            
            <h2>Performance Gains</h2>
            <p>Apple claims the M3 is up to 20% faster than M2 in CPU tasks and up to 30% faster in GPU performance. The M3 Max can handle demanding tasks like 3D modeling and 8K video editing with ease.</p>
            
            <h2>Which Macs Get M3?</h2>
            <p>The M3 chip is available in the latest MacBook Pro models. The M3 Pro and M3 Max offer even more cores for professional workflows.</p>
        `,
        relatedProducts: [1, 10, 16]
    },
    5: {
        id: 5,
        title: "Best Budget Headphones Under $100",
        category: "buying-guide",
        categoryDisplay: "BUYING GUIDE",
        excerpt: "Top affordable headphones that don't compromise on quality.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
        date: "February 20, 2024",
        readTime: "7 min read",
        views: "1.5k",
        content: `
            <h2>Great Sound Doesn't Have to Be Expensive</h2>
            <p>You don't need to spend hundreds to get good audio quality. Here are our top picks under $100.</p>
            
            <h2>Top Picks</h2>
            <p><strong>JBL Tune 510BT:</strong> Excellent value with 40-hour battery life and punchy bass.</p>
            <p><strong>Anker Soundcore Life Q10:</strong> 60-hour battery and comfortable fit for long listening sessions.</p>
            <p><strong>Sony WH-CH510:</strong> Lightweight design with Sony's signature sound quality.</p>
            
            <h2>What to Look For</h2>
            <ul>
                <li>Battery life (aim for 20+ hours)</li>
                <li>Comfort for extended wear</li>
                <li>Bluetooth 5.0 or newer for stable connection</li>
                <li>Built-in microphone for calls</li>
            </ul>
        `,
        relatedProducts: [6, 15]
    },
    6: {
        id: 6,
        title: "Camera Sensor Sizes Explained",
        category: "tips-tricks",
        categoryDisplay: "TIPS & TRICKS",
        excerpt: "Understanding full-frame, APS-C, and Micro Four Thirds sensors.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
        date: "February 15, 2024",
        readTime: "6 min read",
        views: "2.1k",
        content: `
            <h2>Sensor Size Matters</h2>
            <p>The sensor is the heart of your camera. Its size dramatically affects image quality, low-light performance, and depth of field.</p>
            
            <h2>Full-Frame (35mm)</h2>
            <p>The largest common sensor size. Offers the best low-light performance, dynamic range, and shallow depth of field. Found in professional cameras like Sony A7III and Canon EOS R5.</p>
            
            <h2>APS-C (Crop Sensor)</h2>
            <p>Smaller than full-frame but still excellent. Most common in enthusiast cameras. Offers a good balance of quality and affordability.</p>
            
            <h2>Micro Four Thirds</h2>
            <p>Even smaller sensor size. Cameras are more compact and lightweight. Still capable of great images, especially for travel photography.</p>
            
            <h2>Which One Should You Choose?</h2>
            <p>For professionals: Full-frame. For enthusiasts: APS-C offers great value. For travelers: Micro Four Thirds provides portability.</p>
        `,
        relatedProducts: [7, 8, 9, 12, 13, 18]
    }
};

// Load article when on article page
if (window.location.pathname.includes('article.html')) {
    loadArticle();
}

function loadArticle() {
    const articleId = localStorage.getItem('articleId');
    const article = fullArticles[articleId];
    
    if (!article) {
        document.getElementById('articleContainer').innerHTML = `
            <div style="text-align: center; padding: 60px;">
                <h2>Article not found</h2>
                <button onclick="goBackToBlog()" class="back-blog-btn">Back to Blog</button>
            </div>
        `;
        return;
    }
    
    // Display article content
    document.getElementById('articleContainer').innerHTML = `
        <div class="article-header">
            <span class="article-category">${article.categoryDisplay}</span>
            <h1 class="article-title">${article.title}</h1>
            <div class="article-meta">
                <span>📅 ${article.date}</span>
                <span>⏱️ ${article.readTime}</span>
                <span>👁️ ${article.views} views</span>
            </div>
        </div>
        <img src="${article.image}" alt="${article.title}" class="article-featured-image">
        <div class="article-content">
            ${article.content}
        </div>
    `;
    
    // Load related products
    if (article.relatedProducts && article.relatedProducts.length > 0) {
        loadRelatedProducts(article.relatedProducts);
        document.getElementById('relatedProducts').style.display = 'block';
    }
}

function loadRelatedProducts(productIds) {
    const grid = document.getElementById('relatedProductsGrid');
    if (!grid) return;
    
    // Get unique products
    const uniqueProducts = [];
    const seenIds = new Set();
    for (const p of products) {
        if (!seenIds.has(p.id)) {
            seenIds.add(p.id);
            uniqueProducts.push(p);
        }
    }
    
    const related = uniqueProducts.filter(p => productIds.includes(p.id));
    
    if (related.length === 0) {
        document.getElementById('relatedProducts').style.display = 'none';
        return;
    }
    
    grid.innerHTML = related.map(product => `
        <div class="related-product-card" onclick="openProductPage(${product.id})">
            <div class="related-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="related-product-info">
                <h4 class="related-product-name">${product.name}</h4>
                <div class="related-product-price">${product.price}</div>
                <button class="related-view-btn">View Details</button>
            </div>
        </div>
    `).join('');
}

function goBackToBlog() {
    window.location.href = 'blog.html';
}