const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.querySelector('nav');

// Ensure all elements exist
if (open && close && nav) {
    const toggle = () => {
        // Toggle classes based on the current state
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
            open.style.display = 'block';
            close.style.display = 'none';
        } else {
            nav.style.display = 'block';
            open.style.display = 'none';
            close.style.display = 'block';
        }
    };

    // Event listeners for open/close
    open.addEventListener('click', toggle);
    close.addEventListener('click', toggle);

    // Function to reset the layout on screen resize
    const handleResize = () => {
        if (window.innerWidth > 800) {
            // Reset styles for desktop view
            open.style.display = 'none';
            close.style.display = 'none';
            nav.style.display = 'block';
        } else {
            // Ensure mobile styles are respected
            open.style.display = 'block';
            close.style.display = 'none';
            nav.style.display = 'none'; // Initially hide the nav
        }
    };

    // Run the function on page load and window resize
    window.addEventListener('resize', handleResize);
    handleResize();  // Ensure the correct layout on page load
} else {
    console.error('Element with id "open", "close", or "nav" not found.');
}
