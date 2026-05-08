const products = [
    {
        id: 1,
        name: "MacBook Pro M3",
        category: "laptop",
        price: "$1,999",
        description: "Latest Apple Silicon with incredible performance. The MacBook Pro M3 delivers unprecedented speed and efficiency for professionals.",
        specs: "Apple M3 chip with 8-core CPU and 10-core GPU, 16GB RAM, 512GB SSD, 14-inch Liquid Retina XDR display",
        features: "Battery life up to 18 hours, 1080p FaceTime HD camera, Six speakers with spatial audio, Two Thunderbolt ports",
        warranty: "1 year Apple warranty",
        color: "Space Gray, Silver",
        images: [
            "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_16_2023_M3_Pro/IMG_1256.JPG",
            "https://wise-tech.com.pk/wp-content/uploads/2024/01/Apple-MacBook-Pro-M3-Space-Black-Keyboard.png",
            "https://www.aiconiccomputers.co.ke/wp-content/uploads/2025/10/APPLE-MACBOOK-PRO-MRW43B-M3-PRO.jpg",
            "https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large.jpg"
        ]
    },
    {
        id: 2,
        name: "Dell XPS 15",
        category: "laptop",
        price: "$1,499",
        description: "Premium Windows Laptop with stunning display. The Dell XPS 15 combines power and portability in a stunning design.",
        specs: "Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3050, 15.6-inch 3.5K OLED display",
        features: "InfinityEdge display, Fingerprint reader, Backlit keyboard, 86Whr battery, Windows 11 Pro",
        warranty: "2 years Dell warranty",
        color: "Platinum Silver",
        images: [
            "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22964107/akrales_211015_4758_0067.jpg?quality=90&strip=all&crop=0,0,100,100",
            "https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/d/e/dell_xps_156_-_tejar_2.jpg",
            "https://computers.pk/wp-content/uploads/2024/09/xps-category.jpg",
            "https://s.yimg.com/ny/api/res/1.2/xmfplpqLdkvnqwCLYAMqFA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04MzI-/https://s.yimg.com/os/creatr-uploaded-images/2020-05/aa4bd840-9524-11ea-8a66-cfc6e9ca0901"
        ]
    },
    {
        id: 3,
        name: "HP Spectre",
        category: "laptop",
        price: "$1,299",
        description: "Convertible Laptop with premium build quality and versatile design.",
        specs: "Intel Core i7-1260P, 16GB RAM, 1TB SSD, Intel Iris Xe Graphics, 13.5-inch 3K2K OLED touch display",
        features: "360° hinge, HP Tilt Pen included, Bang & Olufsen speakers, Privacy camera shutter",
        warranty: "1 year HP warranty",
        color: "Nightfall Black, Poseidon Blue",
        images: [
            "https://www.gdgtme.com/wp-content/uploads/2023/02/HP-Spectre-x360-2-In-1-Laptop-Review-4-1024x694.jpg",
            "https://www.zdnet.com/a/img/resize/82ef73d73ca55b9b2c4e2eadb194e8dfb6e98e9e/2021/06/01/f142a480-28e0-48ab-8756-371966789aaf/hp-spectre-x360-14-main.jpg?auto=webp&width=1280",
            "https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/laptops-and-2-n-1s/spectre/version-2023/Mob-d-ex-image-component-1280-full-bleed@2x.png",
            "https://i.pcmag.com/imagery/reviews/03EnAx0aST5jQuclTOyced0-2.fit_lim.size_1943x1092.v_1569469968.png"
        ]
    },
    {
        id: 4,
        name: "AirPods Pro",
        category: "audio",
        price: "$249",
        description: "Noise Cancelling with immersive sound quality and seamless integration.",
        specs: "Active Noise Cancellation, Transparency mode, Adaptive EQ, Spatial audio with dynamic head tracking",
        features: "Sweat and water resistant, Multiple ear tips, MagSafe charging case, Up to 4.5 hours listening time",
        warranty: "1 year Apple warranty",
        color: "White",
        images: [
            "https://helios-i.mashable.com/imagery/articles/06p5PGAjzDSZysaktotmIwr/hero-image.fill.size_1248x702.v1699805275.jpg",
            "https://images.macrumors.com/t/kq3GdmuKQvvgItx8sLrgOKQu59o=/800x0/smart/article-new/2025/09/airpods-pro-3-blue.jpeg?lossy",
            "https://powerhouseexpress.com.pk/cdn/shop/files/airpods-pro-matte-black.webp?v=1745669498",
            "https://www.apple.com/v/airpods-pro/r/images/overview/highlights/highlights_live_translation__ga7nep85dr6m_large.jpg"
        ]
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        category: "audio",
        price: "$399",
        description: "Premium Headphones with industry-leading noise cancellation technology.",
        specs: "Industry-leading ANC, 30mm driver units, Bluetooth 5.2, LDAC codec support",
        features: "30-hour battery life, Quick charging, Multipoint connection, Speak-to-chat technology",
        warranty: "1 year Sony warranty",
        color: "Black, Silver",
        images: [
            "https://pcstore.pk/wp-content/uploads/2023/07/Sony-WH-1000XM5-Wireless-Noise-Canceling-Headphones-blue-Pcstore-Price-in-pakistan-img3.png",
            "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/a/s/asus_myshop-pk-7_79.jpg",
            "https://static-01.daraz.pk/p/ac139f712a6760edcc36088e2a252ee4.jpg",
            "https://media.littlewoods.com/i/littlewoods/UX5X4_SQ6_0000000004_BLACK_SLd2?$pdp_300x400_x2$&fmt=jpg"
        ]
    },
    {
        id: 6,
        name: "JBL Speaker",
        category: "audio",
        price: "$149",
        description: "Portable Bluetooth speaker with powerful sound and rugged design.",
        specs: "5W output, Bluetooth 5.1, 3.5mm aux input, Built-in microphone",
        features: "5 hours playtime, IP67 waterproof, Compact design, Speakerphone function",
        warranty: "1 year JBL warranty",
        color: "Multiple colors available",
        images: [
            "https://xcessorieshub.com/wp-content/uploads/2024/05/JBL-Go-4.webp",
            "https://dynsol.pk/cdn/shop/files/JBL_Go_4_Portable_Bluetooth_Speaker_Best_Price_in_Pakistan_dynsol.pk.jpg?v=1773476047&width=1445",
            "https://www.dablew.pk/images/product_gallery/dablew-image-4275.jpg",
            "https://images.priceoye.pk/jbl-m3-mini-wireless-bluetooth-speaker-pakistan-priceoye-oc01f-500x500.webp"
        ]
    },
    {
        id: 7,
        name: "Canon EOS R5",
        category: "camera",
        price: "$3,899",
        description: "Professional Mirrorless camera with 8K video capability and advanced autofocus.",
        specs: "45MP full-frame sensor, 8K video recording, Dual Pixel CMOS AF II, 12 fps mechanical shutter",
        features: "5-axis image stabilization, Weather-sealed body, Dual memory card slots, Vari-angle touchscreen",
        warranty: "2 years Canon warranty",
        color: "Black",
        images: [
            "https://m.media-amazon.com/images/I/61LzfUQJl-L._AC_UF894,1000_QL80_.jpg",
            "https://1.img-dpreview.com/files/p/E~TS1180x0~articles/1836020853/body/Canon-EOS-R5-lead-03b.jpeg",
            "https://asia.canon/media/image/2020/07/04/687f02c021db4bd392ad0a483d620a57_cardslot.jpg",
            "https://www.premiumbeat.com/blog/wp-content/uploads/2020/07/Canon-EOS-R5-cover.jpg"
        ]
    },
    {
        id: 8,
        name: "Sony A7III",
        category: "camera",
        price: "$1,999",
        description: "Full Frame Camera with excellent low-light performance and reliable autofocus.",
        specs: "24.2MP full-frame sensor, 4K video recording, 693-point phase-detection AF, 10 fps shooting",
        features: "5-axis stabilization, 710 shots per charge, Dual SD slots, Weather-sealed body",
        warranty: "1 year Sony warranty",
        color: "Black",
        images: [
            "https://shotkit.com/wp-content/uploads/2018/05/Sony-a7-iii-review-shotkit-jason-vinson-013.jpg",
            "https://nofilmschool.com/media-library/a7iii-drop.jpg?id=34058591&width=1245&height=700&coordinates=0%2C0%2C0%2C1",
            "https://images.olx.com.pk/thumbnails/614245978-400x300.jpeg",
            "https://shotkit.com/wp-content/uploads/bb-plugin/cache/Best_Sony_a7III_Lenses-landscape-9d1762a620cc0ebae87427d7a7fc7dbd-zybravgx2q47.jpg"
        ]
    },
    {
        id: 9,
        name: "Nikon Z6",
        category: "camera",
        price: "$1,799",
        description: "Mirrorless Camera with professional features and excellent image quality.",
        specs: "24.5MP BSI full-frame sensor, 4K video up to 30p, 273-point hybrid AF system, 12 fps continuous shooting",
        features: "5-axis VR image stabilization, 3.2-inch tilting touchscreen, High-res viewfinder, Magnesium alloy body",
        warranty: "1 year Nikon warranty",
        color: "Black",
        images: [
            "https://blog.michaelclarkphoto.com/wp-content/uploads/2019/01/01-7887-post/z6(pp_w768_h768).jpg",
            "https://photographylife.com/wp-content/uploads/2021/05/Nikon-Z6-II-Mirrorless-Camera.jpg",
            "https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/StandardImage/nikon_z6_iii_reivew_01_hero_photos_for_web.jpg",
            "https://images.contentstack.io/v3/assets/blt0e5ec1de4817c440/blta96349e5f944f8c9/65b2852638270379efa37981/quicklinks-Z6-autofocus.jpg"
        ]
    },
    {
        id: 10,
        name: "MacBook Pro M3",
        category: "laptop",
        price: "$1,999",
        description: "Latest Apple Silicon with incredible performance. The MacBook Pro M3 delivers unprecedented speed and efficiency for professionals.",
        specs: "Apple M3 chip with 8-core CPU and 10-core GPU, 16GB RAM, 512GB SSD, 14-inch Liquid Retina XDR display",
        features: "Battery life up to 18 hours, 1080p FaceTime HD camera, Six speakers with spatial audio, Two Thunderbolt ports",
        warranty: "1 year Apple warranty",
        color: "Space Gray, Silver",
        images: [
            "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_16_2023_M3_Pro/IMG_1256.JPG",
            "https://wise-tech.com.pk/wp-content/uploads/2024/01/Apple-MacBook-Pro-M3-Space-Black-Keyboard.png",
            "https://www.aiconiccomputers.co.ke/wp-content/uploads/2025/10/APPLE-MACBOOK-PRO-MRW43B-M3-PRO.jpg",
            "https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/article/Apple-MacBook-Pro-2up-231030_Full-Bleed-Image.jpg.large.jpg"
        ]
    },
    {
        id: 16,
        name: "Dell XPS 15",
        category: "laptop",
        price: "$1,499",
        description: "Premium Windows Laptop with stunning display. The Dell XPS 15 combines power and portability in a stunning design.",
        specs: "Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3050, 15.6-inch 3.5K OLED display",
        features: "InfinityEdge display, Fingerprint reader, Backlit keyboard, 86Whr battery, Windows 11 Pro",
        warranty: "2 years Dell warranty",
        color: "Platinum Silver",
        images: [
            "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22964107/akrales_211015_4758_0067.jpg?quality=90&strip=all&crop=0,0,100,100",
            "https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/d/e/dell_xps_156_-_tejar_2.jpg",
            "https://computers.pk/wp-content/uploads/2024/09/xps-category.jpg",
            "https://s.yimg.com/ny/api/res/1.2/xmfplpqLdkvnqwCLYAMqFA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04MzI-/https://s.yimg.com/os/creatr-uploaded-images/2020-05/aa4bd840-9524-11ea-8a66-cfc6e9ca0901"
        ]
    },
    {
        id: 14,
        name: "HP Spectre",
        category: "laptop",
        price: "$1,299",
        description: "Convertible Laptop with premium build quality and versatile design.",
        specs: "Intel Core i7-1260P, 16GB RAM, 1TB SSD, Intel Iris Xe Graphics, 13.5-inch 3K2K OLED touch display",
        features: "360° hinge, HP Tilt Pen included, Bang & Olufsen speakers, Privacy camera shutter",
        warranty: "1 year HP warranty",
        color: "Nightfall Black, Poseidon Blue",
        images: [
            "https://www.gdgtme.com/wp-content/uploads/2023/02/HP-Spectre-x360-2-In-1-Laptop-Review-4-1024x694.jpg",
            "https://www.zdnet.com/a/img/resize/82ef73d73ca55b9b2c4e2eadb194e8dfb6e98e9e/2021/06/01/f142a480-28e0-48ab-8756-371966789aaf/hp-spectre-x360-14-main.jpg?auto=webp&width=1280",
            "https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/laptops-and-2-n-1s/spectre/version-2023/Mob-d-ex-image-component-1280-full-bleed@2x.png",
            "https://i.pcmag.com/imagery/reviews/03EnAx0aST5jQuclTOyced0-2.fit_lim.size_1943x1092.v_1569469968.png"
        ]
    },
    {
        id: 11,
        name: "AirPods Pro",
        category: "audio",
        price: "$249",
        description: "Noise Cancelling with immersive sound quality and seamless integration.",
        specs: "Active Noise Cancellation, Transparency mode, Adaptive EQ, Spatial audio with dynamic head tracking",
        features: "Sweat and water resistant, Multiple ear tips, MagSafe charging case, Up to 4.5 hours listening time",
        warranty: "1 year Apple warranty",
        color: "White",
        images: [
            "https://helios-i.mashable.com/imagery/articles/06p5PGAjzDSZysaktotmIwr/hero-image.fill.size_1248x702.v1699805275.jpg",
            "https://images.macrumors.com/t/kq3GdmuKQvvgItx8sLrgOKQu59o=/800x0/smart/article-new/2025/09/airpods-pro-3-blue.jpeg?lossy",
            "https://powerhouseexpress.com.pk/cdn/shop/files/airpods-pro-matte-black.webp?v=1745669498",
            "https://www.apple.com/v/airpods-pro/r/images/overview/highlights/highlights_live_translation__ga7nep85dr6m_large.jpg"
        ]
    },
    {
        id: 17,
        name: "Sony WH-1000XM5",
        category: "audio",
        price: "$399",
        description: "Premium Headphones with industry-leading noise cancellation technology.",
        specs: "Industry-leading ANC, 30mm driver units, Bluetooth 5.2, LDAC codec support",
        features: "30-hour battery life, Quick charging, Multipoint connection, Speak-to-chat technology",
        warranty: "1 year Sony warranty",
        color: "Black, Silver",
        images: [
            "https://pcstore.pk/wp-content/uploads/2023/07/Sony-WH-1000XM5-Wireless-Noise-Canceling-Headphones-blue-Pcstore-Price-in-pakistan-img3.png",
            "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/a/s/asus_myshop-pk-7_79.jpg",
            "https://static-01.daraz.pk/p/ac139f712a6760edcc36088e2a252ee4.jpg",
            "https://media.littlewoods.com/i/littlewoods/UX5X4_SQ6_0000000004_BLACK_SLd2?$pdp_300x400_x2$&fmt=jpg"
        ]
    },
    {
        id: 15,
        name: "JBL Speaker",
        category: "audio",
        price: "$149",
        description: "Portable Bluetooth speaker with powerful sound and rugged design.",
        specs: "5W output, Bluetooth 5.1, 3.5mm aux input, Built-in microphone",
        features: "5 hours playtime, IP67 waterproof, Compact design, Speakerphone function",
        warranty: "1 year JBL warranty",
        color: "Multiple colors available",
        images: [
            "https://xcessorieshub.com/wp-content/uploads/2024/05/JBL-Go-4.webp",
            "https://dynsol.pk/cdn/shop/files/JBL_Go_4_Portable_Bluetooth_Speaker_Best_Price_in_Pakistan_dynsol.pk.jpg?v=1773476047&width=1445",
            "https://www.dablew.pk/images/product_gallery/dablew-image-4275.jpg",
            "https://images.priceoye.pk/jbl-m3-mini-wireless-bluetooth-speaker-pakistan-priceoye-oc01f-500x500.webp"
        ]
    },
    {
        id: 12,
        name: "Canon EOS R5",
        category: "camera",
        price: "$3,899",
        description: "Professional Mirrorless camera with 8K video capability and advanced autofocus.",
        specs: "45MP full-frame sensor, 8K video recording, Dual Pixel CMOS AF II, 12 fps mechanical shutter",
        features: "5-axis image stabilization, Weather-sealed body, Dual memory card slots, Vari-angle touchscreen",
        warranty: "2 years Canon warranty",
        color: "Black",
        images: [
            "https://m.media-amazon.com/images/I/61LzfUQJl-L._AC_UF894,1000_QL80_.jpg",
            "https://1.img-dpreview.com/files/p/E~TS1180x0~articles/1836020853/body/Canon-EOS-R5-lead-03b.jpeg",
            "https://asia.canon/media/image/2020/07/04/687f02c021db4bd392ad0a483d620a57_cardslot.jpg",
            "https://www.premiumbeat.com/blog/wp-content/uploads/2020/07/Canon-EOS-R5-cover.jpg"
        ]
    },
    {
        id: 18,
        name: "Sony A7III",
        category: "camera",
        price: "$1,999",
        description: "Full Frame Camera with excellent low-light performance and reliable autofocus.",
        specs: "24.2MP full-frame sensor, 4K video recording, 693-point phase-detection AF, 10 fps shooting",
        features: "5-axis stabilization, 710 shots per charge, Dual SD slots, Weather-sealed body",
        warranty: "1 year Sony warranty",
        color: "Black",
        images: [
            "https://shotkit.com/wp-content/uploads/2018/05/Sony-a7-iii-review-shotkit-jason-vinson-013.jpg",
            "https://nofilmschool.com/media-library/a7iii-drop.jpg?id=34058591&width=1245&height=700&coordinates=0%2C0%2C0%2C1",
            "https://images.olx.com.pk/thumbnails/614245978-400x300.jpeg",
            "https://shotkit.com/wp-content/uploads/bb-plugin/cache/Best_Sony_a7III_Lenses-landscape-9d1762a620cc0ebae87427d7a7fc7dbd-zybravgx2q47.jpg"
        ]
    },
    {
        id: 13,
        name: "Nikon Z6",
        category: "camera",
        price: "$1,799",
        description: "Mirrorless Camera with professional features and excellent image quality.",
        specs: "24.5MP BSI full-frame sensor, 4K video up to 30p, 273-point hybrid AF system, 12 fps continuous shooting",
        features: "5-axis VR image stabilization, 3.2-inch tilting touchscreen, High-res viewfinder, Magnesium alloy body",
        warranty: "1 year Nikon warranty",
        color: "Black",
        images: [
            "https://blog.michaelclarkphoto.com/wp-content/uploads/2019/01/01-7887-post/z6(pp_w768_h768).jpg",
            "https://photographylife.com/wp-content/uploads/2021/05/Nikon-Z6-II-Mirrorless-Camera.jpg",
            "https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/StandardImage/nikon_z6_iii_reivew_01_hero_photos_for_web.jpg",
            "https://images.contentstack.io/v3/assets/blt0e5ec1de4817c440/blta96349e5f944f8c9/65b2852638270379efa37981/quicklinks-Z6-autofocus.jpg"
        ]
    }
];

let currentProduct = null;

function goBack() {
    window.location.href = 'index.html';
}

function changeImage(imageUrl) {
    document.getElementById('mainImage').src = imageUrl;
    // Update active thumbnail styling
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === imageUrl) {
            thumb.classList.add('active');
        }
    });
}

function loadProductDetails() {
    // Get product ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        // Try to get from localStorage
        const storedId = localStorage.getItem('selectedProductId');
        currentProduct = products.find(p => p.id == storedId);
    } else {
        currentProduct = products.find(p => p.id === productId);
    }

    if (!currentProduct) {
        goBack();
        return;
    }

    // Set page title
    document.title = `${currentProduct.name} - Techea`;

    // Set main image
    document.getElementById('mainImage').src = currentProduct.images[0];

    // Generate thumbnails
    const thumbnailGrid = document.getElementById('thumbnailGrid');
    thumbnailGrid.innerHTML = '';
    currentProduct.images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.alt = `${currentProduct.name} view ${index + 1}`;
        thumb.className = 'thumbnail';
        if (index === 0) thumb.classList.add('active');
        thumb.onclick = () => changeImage(img);
        thumbnailGrid.appendChild(thumb);
    });

    // Set product details
    document.getElementById('productTitle').textContent = currentProduct.name;
    document.getElementById('productPrice').textContent = currentProduct.price;
    document.getElementById('productDescription').textContent = currentProduct.description;

    // Parse specs into list
    const specsArray = currentProduct.specs.split(', ');
    const specsList = document.getElementById('specsList');
    specsList.innerHTML = '';
    specsArray.forEach(spec => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="spec-label">•</span><span class="spec-value">${spec}</span>`;
        specsList.appendChild(li);
    });

    // Parse features into list
    const featuresArray = currentProduct.features.split(', ');
    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = '';
    featuresArray.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="spec-label">✓</span><span class="spec-value">${feature}</span>`;
        featuresList.appendChild(li);
    });

    document.getElementById('productWarranty').textContent = currentProduct.warranty;
    document.getElementById('productColors').textContent = currentProduct.color;
    document.getElementById('productCategory').textContent = currentProduct.category.toUpperCase();
}

// Load details when page loads
document.addEventListener('DOMContentLoaded', loadProductDetails);
function goBackToHome() {
            window.location.href = 'products.html';
        }