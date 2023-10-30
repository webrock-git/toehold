document.addEventListener("DOMContentLoaded", function () {
    const headerContainers = document.querySelectorAll(".wp-block-toehold-header-container");
    headerContainers.forEach((headerContainer) => {
        if (headerContainer) {
            const headerTopbarMenu = headerContainer.querySelector('.header-topbar-menu');
            const sidebarTopbarMenu = headerContainer.querySelector('.sidebar-topbar-container');
            const mobileLogo = headerContainer.querySelector('.mobile-logo');
            const hamburgerButton = headerContainer.querySelector('.hamburger-button');
            const sidebar = headerContainer.querySelector('.wp-block-toehold-navmenu');
            const closeButton = headerContainer.querySelector('.close-button');
            const menuExtraButtonContainer = headerContainer.querySelector('.sidebar-extra-button-container');
            const menuExtraButton = headerContainer.querySelector('.wp-block-toehold-button:not(.is-style-social)');
            const overlay = headerContainer.querySelector('.menu-overlay');
            const socialButtons = headerContainer.querySelectorAll('.wp-block-toehold-button.is-style-social');
			const socialButtonsContainer = headerContainer.querySelector('.sidebar-social-button-container');

            if (headerTopbarMenu) {
                const cloneTopbarMenu = headerTopbarMenu.cloneNode(true);
                sidebarTopbarMenu.appendChild(cloneTopbarMenu);
            }

            setTimeout(() => {
                const customLogo = headerContainer.querySelector('.custom-logo-link');
                if (customLogo) {
                    const cloneCustomLogo = customLogo.cloneNode(true);
                    mobileLogo.appendChild(cloneCustomLogo);
                }
            }, 2500)

            if (hamburgerButton && sidebar) {
                hamburgerButton.addEventListener('click', () => {
                    sidebar.classList.toggle('is-open');
                    sidebar.classList.toggle('is-sidebar-open');
                    overlay.classList.toggle('is-open');
                })
            }

            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    sidebar.classList.remove('is-open');
                    overlay.classList.remove('is-open');
                    setTimeout(() => {
                        sidebar.classList.remove('is-sidebar-open');
                    }, 1000)
                })
            }

            if (overlay) {
                overlay.addEventListener('click', () => {
                    sidebar.classList.remove('is-open');
                    overlay.classList.remove('is-open');
                    setTimeout(() => {
                        sidebar.classList.remove('is-sidebar-open');
                    }, 1000)
                })
            }

            if (menuExtraButton && menuExtraButtonContainer) {
                const cloneMenuExtraButton = menuExtraButton.cloneNode(true);
                menuExtraButtonContainer.appendChild(cloneMenuExtraButton);
            }

            if(socialButtons && socialButtonsContainer){
				socialButtons.forEach((socialButton) => {
					const cloneSocialButton = socialButton.cloneNode(true);
					socialButtonsContainer.appendChild(cloneSocialButton);
				})
			}
        }
    })
})
