document.addEventListener('DOMContentLoaded', function() {
    const toolbar = document.getElementById('toolbar');
    const backToHomeButton = document.getElementById('backToHomeButton');
    const addNewButton = document.getElementById('addNewButton');
    const searchButton = document.getElementById('searchButton');
    const printListButton = document.getElementById('printListButton');
    const settingsButton = document.getElementById('settingsButton');
    const searchField = document.getElementById('searchField');
    const toolbarPopup = document.getElementById('toolbarPopup');
    const tpButton = document.querySelectorAll('.tpButton');
    const tph4 = document.getElementById('tph4');

    let toolbarWidth = 340;
    let toolbarHeight = 120;
    let toolbarPopupWidth = 150;
    let toolbarPopupHeight = 50;
    let searchActive = false;
    let addActive = false;

    const resView = () => {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;

        toolbar.style.left = (screenWidth - toolbarWidth) / 2 + "px";
        toolbar.style.top = screenHeight - toolbarHeight + "px";

        toolbarPopup.style.left = (screenWidth - toolbarPopupWidth) / 2 + "px";
        toolbarPopup.style.top = screenHeight - toolbarPopupHeight - 200 + "px";
    }
    const showPopupFunc = (width, height, mode, disable) => {
        if(mode === 'search')
        {
            if(disable === false) 
            {
                toolbarPopup.style.width = width + 'px';
                toolbarPopup.style.height = height + 'px';
                toolbarPopupWidth = width;
                toolbarPopupHeight = height;

                toolbarPopup.style.opacity = '100%';
                tph4.style.display = 'flex';
                tph4.style.opacity = '100%';
                tpButton.forEach(tpb => {
                    tpb.style.display = 'flex';
                    tpb.style.opacity = '100%'
                });
            }
            if(disable === true)
            {
                toolbarPopup.style.width = width + 'px';
                toolbarPopup.style.height = height + 'px';
                toolbarPopupWidth = width;
                toolbarPopupHeight = height;

                toolbarPopup.style.opacity = '0%';
                tph4.style.display = 'none';
                tph4.style.opacity = '0%';
                tpButton.forEach(tpb => {
                    tpb.style.display = 'none';
                    tpb.style.opacity = '0%'
                });
            }
        };
        if(mode === 'addNew')
        {
            if(disable === false)
            {
                toolbarPopup.style.width = width + 'px';
                toolbarPopup.style.height = height + 'px';
                toolbarPopupWidth = width;
                toolbarPopupHeight = height;

                toolbarPopup.style.opacity = '100%';
                addActive = true;
            }
            if(disable === true)
            {
                toolbarPopup.style.width = width + 'px';
                toolbarPopup.style.height = height + 'px';
                toolbarPopupWidth = width;
                toolbarPopupHeight = height;

                toolbarPopup.style.opacity = '0%';
                addActive = false;
            }
        }
    }
    const searchMode = () => {
        if(searchActive === false & addActive === false) 
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
        if(addActive === true)
        {
            showPopupFunc(150, 50, 'addNew', true);
        }
    }

    printListButton.addEventListener('click', function() {
        if(searchActive === false & addActive === false)
        {
            print();
        }
    });
    searchField.addEventListener('focus', function() {
        showPopupFunc(150, 50, 'search', false);
    });
    searchField.addEventListener('blur', function() {
        showPopupFunc(150, 50, 'search', true);
    });
    addNewButton.addEventListener('click', function() {
        showPopupFunc(300, 400, 'addNew', false);
    });
    searchButton.addEventListener('click', searchMode);
    backToHomeButton.addEventListener('click', back);

    setInterval(resView, 1);
});
