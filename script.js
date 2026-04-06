// get all of the elements
const iconList = document.querySelectorAll('.icon-list ul li');
const directMessage = document.getElementById('direct-message');
const withinServer = document.getElementById('within-server');

// Add click event to each icon
iconList.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        // Removes the active tag from all so once clicked it only one is active
        iconList.forEach(i => i.classList.remove('active'));
        // THis tells the object if it is active after it removes it 
        icon.classList.add('active');

        // switch between both of them 
        if (index === 0) {
            // Dms
            directMessage.style.display = 'grid';
            withinServer.style.display = 'none';
        } else {
            // server
            directMessage.style.display = 'none';
            withinServer.style.display = 'grid';
        }
    });
});

// Initially show dm's first
iconList[0].classList.add('active');
directMessage.style.display = 'grid';
withinServer.style.display = 'none';
