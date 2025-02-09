document.addEventListener('DOMContentLoaded', () => {
    // ハンバーガーメニューの制御
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;

    hamburger?.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        // ハンバーガーメニューのアニメーション
        hamburger.classList.toggle('active');
        
        // ナビゲーションメニューの表示/非表示
        if (navLinks) {
            if (isMenuOpen) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navLinks.style.padding = '1rem';
            } else {
                navLinks.style.display = 'none';
            }
        }
    });

    // グリッチエフェクト
    const glitchTexts = document.querySelectorAll('h1, h2, .logo');
    
    function createGlitch(element) {
        const text = element.textContent;
        let glitchInterval;
        
        element.addEventListener('mouseover', () => {
            glitchInterval = setInterval(() => {
                const glitchedText = text.split('').map(char => {
                    if (Math.random() < 0.1) {
                        const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
                        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    }
                    return char;
                }).join('');
                
                element.textContent = glitchedText;
            }, 50);
        });
        
        element.addEventListener('mouseout', () => {
            clearInterval(glitchInterval);
            element.textContent = text;
        });
    }
    
    glitchTexts.forEach(createGlitch);

    // スクロールアニメーション
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.transform = 'none';
                entry.target.style.opacity = '1';
                
                // サイバーパンクスタイルのアニメーション
                const elements = entry.target.querySelectorAll('.skill-card, .project-card, .about-details, .about-strengths');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.transform = 'none';
                        el.style.opacity = '1';
                    }, index * 200);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)';
        
        const elements = section.querySelectorAll('.skill-card, .project-card, .about-details, .about-strengths');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1)';
        });
        
        observer.observe(section);
    });

    // ネオンフリッカー効果
    const neonElements = document.querySelectorAll('.btn, .social-link, .skill-card i');
    
    function addNeonFlicker(element) {
        setInterval(() => {
            if (Math.random() < 0.03) {
                element.style.opacity = '0.7';
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 50);
            }
        }, 500);
    }
    
    neonElements.forEach(addNeonFlicker);

    // マウスカーソルエフェクト
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // スクロール時のヘッダーの制御
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (header) {
            if (scrollTop > lastScrollTop) {
                // 下スクロール時
                header.style.transform = 'translateY(-100%)';
            } else {
                // 上スクロール時
                header.style.transform = 'translateY(0)';
            }
            header.style.transition = 'transform 0.3s ease';
        }
        
        lastScrollTop = scrollTop;
    });

    // スキルアイコンのアニメーション
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
}); 