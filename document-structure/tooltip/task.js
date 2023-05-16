/*const tooltipses = [...document.querySelectorAll('has_tooltip')];

tooltipses.forEach(tooltipLink => {
    tooltipLink.addEventListener('click', (event) => {
        event.preventDefault();

        const tooltipText = document.createElement('div');
        tooltipText.classList.add('tooltip_text');

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = tooltipLink.getAttribute('title');
    tooltip.classList.add('tooltip_active');

        const tooltipLinkActive = tooltipLink.querySelector('.tooltip_active');
        if(tooltipLinkActive) {
            tooltipLinkActive.remove();
            return;
        }

        const coordinates = tooltipLink.getBoundingClientRect();
        const coordinatesTop = coordinates.top + window.pageYOffset;
        const coordinatesLeft = coordinates.left + window.pageXOffset;
    
        tooltip.style.top = coordinatesTop + coordinates.height + 'px';
        tooltip.style.left = coordinatesLeft + 'px';
    
        tooltipLink.appendChild(tooltip);
    });
});*/

const tooltipses = [...document.querySelectorAll('.has-tooltip')];

tooltipses.forEach(tooltipLink => {
  tooltipLink.addEventListener('click', (event) => {
    event.preventDefault();

    const tooltipText = document.createElement('div');
    tooltipText.classList.add('tooltip_text');

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = tooltipLink.getAttribute('title');
    tooltip.classList.add('tooltip_active');

    const tooltipActive = tooltipLink.querySelector('.tooltip_active');
    if(tooltipActive) {
        tooltipActive.remove();
        return;
    }
    
    const coordinates = tooltipLink.getBoundingClientRect();
    const coordinatesTop = coordinates.top + window.pageYOffset;
    const coordinatesLeft = coordinates.left + window.pageXOffset;

    tooltip.style.top = coordinatesTop + coordinates.height + 'px';
    tooltip.style.left = coordinatesLeft + 'px';

    tooltipLink.appendChild(tooltip);
  });
});