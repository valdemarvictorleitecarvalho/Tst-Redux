/**
* Get the element from the page's main container.
* @type {HTMLElement}
*/
const container = document.getElementById('container');

/**
* Selects the left panel of the page.
* @type {HTMLElement}
*/
const leftPanel = document.querySelector('.toggle-left');

/**
* Selects the right panel of the page.
* @type {HTMLElement}
*/
const rightPanel = document.querySelector('.toggle-right');

/**
* Adds an event listener to the right panel.
* Adds the "active" class from the container when the mouse is over the right panel.
*
* @event mouseenter
* @function
*/
rightPanel.addEventListener('mouseenter', () => {
    container.classList.add("active");
});

/**
* Adds an event listener to the left panel.
* Removes the "active" class from the container when the mouse is over the left panel.
*
* @event mouseenter
* @function
*/
leftPanel.addEventListener('mouseenter', () => {
    container.classList.remove("active");
});
