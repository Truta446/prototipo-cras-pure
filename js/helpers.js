class Helper{
    static hideAndShow(hide,show){
        document.querySelector(hide).className += ' hidden';
        document.querySelector(show).className = document.querySelector(show).className.replace('hidden', '');
    }

    static hideEverBut(show, parent, contentContainer){
        let children = document.querySelector(parent).querySelector(contentContainer).children;

        Object.entries(children).map(child => {
            if(child[1].className.includes('content-page')){
                child[1].className = child[1].className.replace('hidden', '');

                if(child[1].id == show){
                    child[1].className = child[1].className.replace('hidden', '');
                } else {
                    child[1].className += 'hidden';
                }                    
            }
        })
    }

    static changeToolBarTitle(props){
        let contextHeaderEl = document.querySelector(props.el + ' > .context-header');
        let titleInner = '';

        props.titles.map(title => {
            titleInner +=  `<a class="context-nav-item" data-action="${title.action}" class="context-title">${title.name}</a>`;
        });

        contextHeaderEl.innerHTML = titleInner;
        
        document.querySelectorAll('.context-nav-item').forEach(item => {
            item.addEventListener('click', evt => {
                let action = evt.target.dataset.action;
                
                Helper.hideEverBut(action, props.el, props.contentContainer);
            })
        });
    }
}