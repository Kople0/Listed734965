document.addEventListener('DOMContentLoaded', function() {
    const toolbar = document.getElementById('toolbar');
    const backToHomeButton = document.getElementById('backToHomeButton');
    const addNewButton = document.getElementById('addNewButton');
    const searchButton = document.getElementById('searchButton');
    const printListButton = document.getElementById('printListButton');
    const settingsButton = document.getElementById('settingsButton');
    const searchField = document.getElementById('searchField');
    const toolbarPopup = document.getElementById('toolbarPopup');

    let toolbarWidth = 340;
    let toolbarHeight = 120;
    let toolbarPopupWidth = 150;
    let toolbarPopupHeight = 200;
    let searchActive = false;

    const resView = () => {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;

        toolbar.style.left = (screenWidth - toolbarWidth) / 2 + "px";
        toolbar.style.top = screenHeight - toolbarHeight + "px";

        toolbarPopup.style.left = (screenWidth - toolbarPopupWidth) / 2 + "px";
        toolbarPopup.style.top = screenHeight - toolbarPopupHeight + "px";
    }
    const searchFunc = () => {
        if(searchField.value != '') 
        {
            toolbarPopup.style.opacity = '100%';
        }
        else 
        {
            toolbarPopup.style.opacity = '0%';
        }
    }
    const searchMode = () => {
        if(searchActive === false) 
        {
            toolbar.style.transitionDuration = '0.3s';

            searchField.value = '';

            toolbar.style.width = "500px";
            toolbarWidth = 500;

            addNewButton.style.display = 'none';
            searchButton.style.display = 'none';
            printListButton.style.display = 'none';
            settingsButton.style.display = 'none';
            searchField.style.display = 'inline';

            searchActive = true;
        }
    }
    const back = () => {
        if(searchActive === true)
        {
            toolbar.style.transitionDuration = '0.3s';

            toolbar.style.width = "340px";
            toolbarWidth = 340;

            searchField.style.display = 'none';
            addNewButton.style.display = 'flex';
            searchButton.style.display = 'flex';
            printListButton.style.display = 'flex';
            settingsButton.style.display = 'flex';

            searchField.value = '';

            searchActive = false;
        }
    }

    printListButton.addEventListener('click', function() {
        print();
    })
    searchButton.addEventListener('click', searchMode);
    backToHomeButton.addEventListener('click', back);

    setInterval(resView, 1);
    setInterval(searchFunc, 1);
});
