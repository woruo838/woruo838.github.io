// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 赛博朋克打字机效果
    const typewriter = document.getElementById('typewriter');
    const commands = [
        'neo@matrix:~$ whoami',
        'neo@matrix:~$ cat /dev/neural_interface',
        'neo@matrix:~$ ls -la /cyberpunk/2077/',
        'neo@matrix:~$ python3 neural_hack.py',
        'neo@matrix:~$ nmap -sS corporate.net',
        'neo@matrix:~$ ./jack_into_matrix.sh',
        'neo@matrix:~$ decrypt --quantum-key reality.enc',
        'neo@matrix:~$ sudo rm -rf /system/control'
    ];
    
    // 移动端简化命令
    const mobileCommands = [
        'neo@matrix:~$ whoami',
        'neo@matrix:~$ cat /dev/neural',
        'neo@matrix:~$ ls -la /cyber/',
        'neo@matrix:~$ python3 hack.py',
        'neo@matrix:~$ nmap corporate.net',
        'neo@matrix:~$ ./matrix.sh',
        'neo@matrix:~$ decrypt reality.enc',
        'neo@matrix:~$ sudo rm -rf /system'
    ];
    
    let commandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        // 根据屏幕宽度选择命令集
        const isMobile = window.innerWidth <= 768;
        const selectedCommands = isMobile ? mobileCommands : commands;
        const currentCommand = selectedCommands[commandIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentCommand.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriter.textContent = currentCommand.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentCommand.length) {
            typeSpeed = 2000; // 暂停时间
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            commandIndex = (commandIndex + 1) % selectedCommands.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // 启动打字机效果
    setTimeout(typeEffect, 1000);
    
    // 赛博朋克ASCII艺术动画
    const asciiArt = [
        '    ╔═══════════════════════════════════════════════════════╗',
        '    ║  ██████╗██╗   ██╗██████╗ ███████╗██████╗ ██████╗ ██╗   ██╗███╗   ██╗██╗  ██╗ ║',
        '    ║ ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗██╔══██╗██║   ██║████╗  ██║██║ ██╔╝ ║',
        '    ║ ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝██████╔╝██║   ██║██╔██╗ ██║█████╔╝  ║',
        '    ║ ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗██╔═══╝ ██║   ██║██║╚██╗██║██╔═██╗  ║',
        '    ║ ╚██████╗   ██║   ██████╔╝███████╗██║  ██║██║     ╚██████╔╝██║ ╚████║██║  ██╗ ║',
        '    ║  ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝ ║',
        '    ║                    [ NEURAL INTERFACE ACTIVATED ]                    ║',
        '    ╚═══════════════════════════════════════════════════════╝'
    ];
    
    // 移动端简化版ASCII艺术
    const mobileAsciiArt = [
        '╔═══════════════════════════════╗',
        '║    ██████╗██╗   ██╗██████╗    ║',
        '║   ██╔════╝╚██╗ ██╔╝██╔══██╗   ║',
        '║   ██║      ╚████╔╝ ██████╔╝   ║',
        '║   ██║       ╚██╔╝  ██╔══██╗   ║',
        '║   ╚██████╗   ██║   ██████╔╝   ║',
        '║    ╚═════╝   ╚═╝   ╚═════╝    ║',
        '║     [ NEURAL INTERFACE ]      ║',
        '╚═══════════════════════════════╝'
    ];
    
    const asciiOutput = document.getElementById('ascii-output');
    let lineIndex = 0;
    
    function displayAsciiArt() {
        // 根据屏幕宽度选择ASCII艺术版本
        const isMobile = window.innerWidth <= 768;
        const selectedArt = isMobile ? mobileAsciiArt : asciiArt;
        
        if (lineIndex < selectedArt.length) {
            asciiOutput.textContent += selectedArt[lineIndex] + '\n';
            lineIndex++;
            setTimeout(displayAsciiArt, 200);
        }
    }
    
    // 监听窗口大小变化，重新渲染ASCII艺术
    function handleResize() {
        const isMobile = window.innerWidth <= 768;
        const selectedArt = isMobile ? mobileAsciiArt : asciiArt;
        
        // 重新渲染ASCII艺术
        asciiOutput.textContent = '';
        lineIndex = 0;
        
        function redisplayArt() {
            if (lineIndex < selectedArt.length) {
                asciiOutput.textContent += selectedArt[lineIndex] + '\n';
                lineIndex++;
                setTimeout(redisplayArt, 50); // 更快的重新渲染
            }
        }
        
        redisplayArt();
    }
    
    // 添加窗口大小变化监听器
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 300);
    });
    
    // 延迟显示ASCII艺术
    setTimeout(displayAsciiArt, 2000);
    
    // 数字计数动画
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }
    
    // 观察者API用于触发动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 添加动画类
                entry.target.classList.add('animate');
                
                // 如果是统计数字，启动计数动画
                if (entry.target.classList.contains('stat-number')) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                }
                
                // 如果是技能标签，添加延迟动画
                if (entry.target.classList.contains('skill-tag')) {
                    const tags = entry.target.parentElement.querySelectorAll('.skill-tag');
                    tags.forEach((tag, index) => {
                        setTimeout(() => {
                            tag.style.transform = 'scale(1.1)';
                            setTimeout(() => {
                                tag.style.transform = 'scale(1)';
                            }, 200);
                        }, index * 100);
                    });
                }
                
                // 停止观察已动画的元素
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.stat-number, .skill-category, .project-card, .contact-item');
    animatedElements.forEach(el => observer.observe(el));
    
    // 平滑滚动导航
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 赛博朋克鼠标跟踪效果
    let mouseX = 0;
    let mouseY = 0;
    const colors = ['#00ffff', '#ff0080', '#ff6600', '#00ff00', '#ff00ff'];
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // 创建随机颜色的光点
        if (Math.random() > 0.7) {
            createCyberpunkParticle(mouseX, mouseY);
        }
    });
    
    // 创建赛博朋克粒子效果
    function createCyberpunkParticle(x, y) {
        const particle = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 6 + 2;
        
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 ${size * 3}px ${color};
            opacity: 0.9;
        `;
        
        document.body.appendChild(particle);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 50 + 20;
        const lifetime = Math.random() * 1000 + 500;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        let startTime = Date.now();
        
        function animateParticle() {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / lifetime;
            
            if (progress >= 1) {
                document.body.removeChild(particle);
                return;
            }
            
            const currentX = x + Math.cos(angle) * velocity * progress;
            const currentY = y + Math.sin(angle) * velocity * progress;
            
            particle.style.left = currentX + 'px';
            particle.style.top = currentY + 'px';
            particle.style.opacity = 0.9 * (1 - progress);
            particle.style.transform = `scale(${1 - progress * 0.5})`;
            
            requestAnimationFrame(animateParticle);
        }
        
        requestAnimationFrame(animateParticle);
    }
    
    // 创建背景粒子系统
    function createBackgroundParticles() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createCyberpunkParticle(x, y);
            }, i * 200);
        }
    }
    
    // 定期创建背景粒子
    setInterval(createBackgroundParticles, 5000);
    
    // 初始粒子
    setTimeout(createBackgroundParticles, 2000);
    
    // 键盘事件监听（彩蛋）
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            activateMatrixMode();
            konamiCode = [];
        }
    });
    
    // 赛博朋克模式彩蛋
    function activateMatrixMode() {
        const cyberpunkOverlay = document.createElement('div');
        cyberpunkOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(0, 0, 0, 0.95), rgba(26, 0, 51, 0.95), rgba(0, 10, 26, 0.95));
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Fira Code', monospace;
            color: #00ffff;
            font-size: 2rem;
            text-align: center;
            animation: cyberpunkFade 0.8s ease-in;
        `;
        
        cyberpunkOverlay.innerHTML = `
            <div style="position: relative; z-index: 2;">
                <div style="margin-bottom: 30px; background: linear-gradient(45deg, #00ffff, #ff0080, #ff6600); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 0 30px #00ffff;">⚡ NEURAL LINK ESTABLISHED ⚡</div>
                <div style="font-size: 1.2rem; color: #ff0080; margin-bottom: 20px; text-shadow: 0 0 10px #ff0080;">Welcome to the Cyberpunk Reality...</div>
                <div style="font-size: 1rem; color: #00ffff; margin-bottom: 20px; text-shadow: 0 0 5px #00ffff;">System Status: FULLY OPERATIONAL</div>
                <div style="font-size: 0.9rem; color: #ff6600; text-shadow: 0 0 5px #ff6600;">Neural Interface: SYNCHRONIZED</div>
                <div style="font-size: 0.8rem; margin-top: 30px; opacity: 0.8; color: #ffffff;">Click anywhere to jack out...</div>
            </div>
        `;
        
        document.body.appendChild(cyberpunkOverlay);
        
        // 添加赛博朋克雨效果
        createCyberpunkRain(cyberpunkOverlay);
        
        // 添加脉冲效果
        createPulseEffect(cyberpunkOverlay);
        
        cyberpunkOverlay.addEventListener('click', function() {
            cyberpunkOverlay.style.animation = 'cyberpunkFade 0.8s ease-out reverse';
            setTimeout(() => {
                document.body.removeChild(cyberpunkOverlay);
            }, 800);
        });
        
        // 自动关闭
        setTimeout(() => {
            if (document.body.contains(cyberpunkOverlay)) {
                cyberpunkOverlay.click();
            }
        }, 6000);
    }
    
    // 赛博朋克雨效果
    function createCyberpunkRain(container) {
        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン⚡◆◇◈◉●○◎◐◑◒◓◔◕◖◗◘◙◚◛◜◝◞◟◠◡◢◣◤◥◦◧◨◩◪◫◬◭◮◯';
        const colors = ['#00ffff', '#ff0080', '#ff6600', '#00ff00', '#ff00ff'];
        
        for (let i = 0; i < 60; i++) {
            const column = document.createElement('div');
            const color = colors[Math.floor(Math.random() * colors.length)];
            column.style.cssText = `
                position: absolute;
                top: -150px;
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 16 + 8}px;
                color: ${color};
                text-shadow: 0 0 10px ${color};
                animation: cyberpunkFall ${Math.random() * 4 + 2}s linear infinite;
                opacity: ${Math.random() * 0.7 + 0.3};
                z-index: 1;
            `;
            
            let text = '';
            for (let j = 0; j < Math.random() * 25 + 8; j++) {
                text += characters[Math.floor(Math.random() * characters.length)] + '<br>';
            }
            column.innerHTML = text;
            
            container.appendChild(column);
        }
    }
    
    // 脉冲效果
    function createPulseEffect(container) {
        for (let i = 0; i < 5; i++) {
            const pulse = document.createElement('div');
            pulse.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: ${100 + i * 50}px;
                height: ${100 + i * 50}px;
                border: 2px solid rgba(0, 255, 255, ${0.3 - i * 0.05});
                border-radius: 50%;
                transform: translate(-50%, -50%);
                animation: cyberpunkPulse ${2 + i * 0.5}s ease-in-out infinite;
                z-index: 1;
            `;
            container.appendChild(pulse);
        }
    }
    
    // 添加赛博朋克CSS动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cyberpunkFade {
            from { 
                opacity: 0;
                transform: scale(0.8);
                filter: blur(10px);
            }
            to { 
                opacity: 1;
                transform: scale(1);
                filter: blur(0);
            }
        }
        
        @keyframes cyberpunkFall {
            to { 
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes cyberpunkPulse {
            0%, 100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 0.3;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.2);
                opacity: 0.1;
            }
        }
        
        .animate {
            animation: cyberpunkSlideIn 1s ease-out;
        }
        
        @keyframes cyberpunkSlideIn {
            from {
                opacity: 0;
                transform: translateY(50px) scale(0.9);
                filter: blur(5px);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
            }
        }
        
        @keyframes neonGlow {
            0%, 100% {
                text-shadow: 
                    0 0 5px currentColor,
                    0 0 10px currentColor,
                    0 0 15px currentColor;
            }
            50% {
                text-shadow: 
                    0 0 10px currentColor,
                    0 0 20px currentColor,
                    0 0 30px currentColor,
                    0 0 40px currentColor;
            }
        }
    `;
    document.head.appendChild(style);
    
    // 页面加载完成后的初始动画
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 3000);
    
    // 赛博朋克终端历史记录
    const cyberpunkHistory = [
        'Neural link established: ' + new Date().toLocaleString(),
        'System: CyberpunkOS 2077.1 Neural Edition',
        'Kernel: Linux 6.66.0-cyberpunk-enhanced',
        'Uptime: 2077 days, 20:77 (time dilation active)',
        'Neural load: 42.0%, 69.0%, 133.7%',
        'Memory usage: 31337/∞ TB (quantum storage)',
        'Disk usage: 77% of ∞ Quantum Drive',
        'Network: Connected via Neural Net Protocol',
        'Security status: MAXIMUM PARANOIA',
        'Firewall: GHOST IN THE SHELL v3.0',
        'Welcome back to the future, cyber-samurai.'
    ];
    
    // 赛博朋克控制台彩蛋
    console.log('%c⚡ CYBERPUNK PORTFOLIO NEURAL LINK ESTABLISHED ⚡', 'color: #00ffff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ffff;');
    console.log('%c🔮 Neural Interface Information:', 'color: #ff0080; font-size: 16px; font-weight: bold;');
    cyberpunkHistory.forEach((line, index) => {
        const colors = ['#00ffff', '#ff0080', '#ff6600', '#00ff00', '#ff00ff'];
        const color = colors[index % colors.length];
        console.log('%c' + line, `color: ${color}; font-family: 'Fira Code', monospace; text-shadow: 0 0 5px ${color};`);
    });
    console.log('%c\n🎮 Try the Konami Code for a cyberpunk surprise! ↑↑↓↓←→←→BA', 'color: #ff6600; font-style: italic; font-size: 14px;');
    console.log('%c🌐 Neural Network Status: FULLY SYNCHRONIZED', 'color: #00ff00; font-weight: bold;');
    
    // 性能监控
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`%cPage loaded in ${loadTime}ms`, 'color: #00ff00;');
            }, 0);
        });
    }
});