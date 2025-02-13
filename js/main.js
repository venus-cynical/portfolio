document.addEventListener('DOMContentLoaded', () => {
    // ハンバーガーメニューの制御
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;

    hamburger?.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        hamburger.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });

    // クリック以外の場所をタップした時にメニューを閉じる
    document.addEventListener('click', (e) => {
        if (isMenuOpen && !e.target.closest('.nav')) {
            isMenuOpen = false;
            hamburger?.classList.remove('active');
            navLinks?.classList.remove('active');
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

    // スクロール時のヘッダーの制御
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        // モバイル画面サイズ（768px以下）の場合は、ヘッダーを常に表示
        if (window.innerWidth <= 768) {
            if (header) {
                header.style.transform = 'translateY(0)';
            }
            return;
        }

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

    // リサイズ時にもヘッダーの表示を制御
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768 && header) {
            header.style.transform = 'translateY(0)';
        }
    });

    // スキルアイコンのアニメーション
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'all 0.3s ease';
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