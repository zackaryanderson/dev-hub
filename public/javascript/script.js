const activeTab = () => {
    let loc = window.location.pathname;
    switch(loc) {
        case '/':
            document.querySelector('.explore-tab').classList.add("active");
            break;
        case '/codehelp':
            document.querySelector('.code-help-tab').classList.add("active");
            break;
        case '/following':
            document.querySelector('.following-tab').classList.add("active");
            break;
        case '/userpage':
            document.querySelector('.home-tab').classList.add("active");
            break;
        default:
            break;
    }
}

activeTab();