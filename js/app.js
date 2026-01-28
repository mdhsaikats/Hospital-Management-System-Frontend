document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('app-sidebar-backdrop');
    const openSidebarButtons = document.querySelectorAll('[data-toggle="sidebar"]');
    const closeSidebarButtons = document.querySelectorAll('[data-dismiss="sidebar"]');

    const openSidebar = () => {
        if (!sidebar) return;
        sidebar.classList.remove('-translate-x-full');
        backdrop?.classList.remove('hidden');
    };

    const closeSidebar = () => {
        if (!sidebar) return;
        sidebar.classList.add('-translate-x-full');
        backdrop?.classList.add('hidden');
    };

    openSidebarButtons.forEach(btn => btn.addEventListener('click', openSidebar));
    closeSidebarButtons.forEach(btn => btn.addEventListener('click', closeSidebar));
    backdrop?.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeSidebar();
            hideUserMenu();
        }
    });

    // Accordion toggles for nav groups
    document.querySelectorAll('[data-accordion-trigger]').forEach(trigger => {
        const targetId = trigger.getAttribute('data-accordion-target');
        const icon = trigger.querySelector('[data-accordion-icon]');
        trigger.addEventListener('click', () => {
            if (!targetId) return;
            const target = document.getElementById(targetId);
            if (!target) return;
            const isOpen = !target.classList.contains('hidden');
            target.classList.toggle('hidden');
            if (icon) {
                icon.classList.toggle('rotate-180', !isOpen);
            }
        });
    });

    // User menu dropdown
    const userMenuButton = document.querySelector('[data-user-menu-button]');
    const userMenu = document.querySelector('[data-user-menu]');

    const hideUserMenu = () => userMenu?.classList.add('hidden');
    const toggleUserMenu = () => userMenu?.classList.toggle('hidden');

    if (userMenuButton && userMenu) {
        userMenuButton.addEventListener('click', event => {
            event.stopPropagation();
            toggleUserMenu();
        });

        document.addEventListener('click', event => {
            if (!userMenu.contains(event.target) && !userMenuButton.contains(event.target)) {
                hideUserMenu();
            }
        });
    }
});
