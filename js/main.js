class AppLayout {
    constructor(props) {
        this.navEl = document.querySelector('nav');
        this.main = document.querySelector('main');
        this.menuContainer = document.querySelector(props.menuContainer);
        this.menuButton = document.querySelector(props.menuButton);
        this.menuRetractionButton = document.querySelector(props.menuRetractionButton);
        this.menuButton.addEventListener('click', () => this.toggleMenu());
        this.menuRetractionButton.addEventListener('click', () => this.retractMenu());

        this.createRoutes(this.navEl.querySelectorAll('a'));
        this.toogleTabLink(document.querySelectorAll('.tab-link'));
    }

    createRoutes(links) {
        links.forEach(link => {
            link.addEventListener('click', evt => {
                evt.preventDefault();
                this.changeView(evt.target.hash || evt.target.parentNode.hash);
            });
        });
    }

    changeView(view) {
        let viewEl = document.querySelector(view);

        if (viewEl) {
            document.querySelector('.page.active').className = 'page';
            viewEl.className += ' active';
        }
    }

    toggleMenu() {
        let menuWidth = getComputedStyle(this.main).getPropertyValue('--opened-menu-width');
        let mainWidth = 100 - ~~menuWidth.replace('vw', '') + 'vw';

        if (this.menuContainer.className === 'hidden') {
            this.main.style.width = mainWidth;
            this.main.style.left = menuWidth;
            this._changeClass(this.menuContainer, 'active');
        } else {
            this.main.style.width = '100vw';
            this.main.style.left = '0';
            this._changeClass(this.menuContainer, 'hidden');
        }
    }
    
    toogleTabLink(tabs){
        tabs.forEach(tab => {
            tab.addEventListener('click', evt => {
                let tabId = evt.target.dataset.tabId;

                document.querySelector('.tab-link.active').className = 'tab-link';
                document.querySelector('.tab-area.active').className = 'tab-area';

                evt.target.className += ' active';
                document.querySelector(`#${tabId}`).className += ' active';            
            });
        })
    }

    retractMenu() {
        let menuWidth = getComputedStyle(this.main).getPropertyValue('--retracted-menu-width');
        let activeMenuWidth = getComputedStyle(this.main).getPropertyValue('--opened-menu-width');
        let mainWidth = '94vw';

        if (this.menuContainer.className === 'active') {
            this._changeClass(this.menuContainer, 'retracted');
            this.main.style.width = mainWidth;
            this.main.style.left = menuWidth;
        } else {
            this._changeClass(this.menuContainer, 'active');
            this.main.style.width = 100 - ~~activeMenuWidth.replace('vw', '') + 'vw';
            this.main.style.left = activeMenuWidth;
        }
    }

    _changeClass(el, clazz) {
        el.className = clazz;
    }

    _showView(last, newView) {

    }
}

let appLayout = new AppLayout({
    menuContainer: '#menu',
    menuButton: '#menu-button',
    menuRetractionButton: '#menu-retract'
});

