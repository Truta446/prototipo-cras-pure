class Helper{
    static hideAndShow(hide,show){
        document.querySelector(hide).className += ' hidden';
        document.querySelector(show).className = document.querySelector(show).className.replace('hidden', '');
    }
}