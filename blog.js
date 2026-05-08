// ============================================
// BLOG & ARTICLES DATA
// ============================================

const articles = [
    {
        id: 1,
        title: "Ultimate Guide to Buying a Laptop in 2024",
        category: "buying-guide",
        excerpt: "Everything you need to know before buying your next laptop - from processors to battery life.",
        content: "Full article content here...",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        date: "March 15, 2024",
        readTime: "8 min read",
        views: "2.5k"
    },
    {
        id: 2,
        title: "AirPods Pro 2 vs Sony WF-1000XM5: Which One to Buy?",
        category: "reviews",
        excerpt: "Detailed comparison of the top noise-cancelling earbuds in 2024.",
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400",
        date: "March 10, 2024",
        readTime: "6 min read",
        views: "1.8k"
    },
    {
        id: 3,
        title: "5 Photography Tips for Beginners",
        category: "tips-tricks",
        excerpt: "Master your camera with these simple yet effective photography techniques.",
        image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=400",
        date: "March 5, 2024",
        readTime: "5 min read",
        views: "3.2k"
    },
    {
        id: 4,
        title: "M3 Chip Explained: What's New?",
        category: "tech-news",
        excerpt: "Apple's latest M3 chip brings massive performance improvements.",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
        date: "February 28, 2024",
        readTime: "4 min read",
        views: "4.1k"
    },
    {
        id: 5,
        title: "Best Budget Headphones Under $100",
        category: "buying-guide",
        excerpt: "Top affordable headphones that don't compromise on quality.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        date: "February 20, 2024",
        readTime: "7 min read",
        views: "1.5k"
    },
    {
        id: 6,
        title: "Camera Sensor Sizes Explained",
        category: "tips-tricks",
        excerpt: "Understanding full-frame, APS-C, and Micro Four Thirds sensors.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
        date: "February 15, 2024",
        readTime: "6 min read",
        views: "2.1k"
    }
];

let currentBlogFilter = 'all';

function displayBlogArticles() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    
    let filtered = articles;
    if (currentBlogFilter !== 'all') {
        filtered = articles.filter(a => a.category === currentBlogFilter);
    }
    
    grid.innerHTML = filtered.map(article => `
        <div class="blog-card">
            <div class="blog-image">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="blog-info" style="padding: 20px;">
                <span class="blog-category">${article.category.replace('-', ' ').toUpperCase()}</span>
                <h3 class="blog-title">${article.title}</h3>
                <p class="blog-excerpt">${article.excerpt}</p>
                <div class="blog-meta">
                    <span>📅 ${article.date}</span>
                    <span>⏱️ ${article.readTime}</span>
                    <button class="read-more-small" onclick="openArticle(${article.id})" style="background: linear-gradient(135deg, rgb(121, 15, 72), aqua); color: white; border: none; padding: 5px 15px; border-radius: 15px; cursor: pointer;">Read</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterBlog(category) {
    currentBlogFilter = category;
    document.querySelectorAll('.blog-filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(category === 'all' ? 'all' : 
            category === 'buying-guide' ? 'buying' :
            category === 'tech-news' ? 'news' :
            category === 'tips-tricks' ? 'tips' : 'reviews')) {
            btn.classList.add('active');
        }
    });
    displayBlogArticles();
}

function openArticle(id) {
    // Store article ID and redirect to article page
    localStorage.setItem('articleId', id);
    window.location.href = 'article.html';
}

function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value;
    if (email) {
        alert(`Thank you for subscribing! You'll receive tech updates at ${email}`);
        document.getElementById('newsletterEmail').value = '';
    } else {
        alert('Please enter a valid email address');
    }
}

// Initialize blog if on blog page
if (document.getElementById('blogGrid')) {
    displayBlogArticles();
}