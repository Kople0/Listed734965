document.addEventListener('DOMContentLoaded', function() {
    const toolbar = document.getElementById('toolbar');

    const resView = () => {
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;

        toolbar.style.left = (screenWidth - 270) / 2 + "px";
        toolbar.style.top = screenHeight - 120 + "px";
    }

    setInterval(resView, 1);
});
