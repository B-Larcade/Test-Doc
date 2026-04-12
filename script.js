//I had to remake this whole file but now it works atleast
const iconList = document.querySelectorAll('.icon-list ul li');
const directMessage = document.getElementById('direct-message');
const withinServer = document.getElementById('within-server');

//This is the old iconlist logic 
iconList.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        iconList.forEach(i => i.classList.remove('active'));
        icon.classList.add('active');

        if (index === 0) {
            directMessage.style.display = 'grid';
            withinServer.style.display = 'none';
        } else {
            directMessage.style.display = 'none';
            withinServer.style.display = 'grid';
        }
    });
});

// Auto sets DMs to be the active thingy
iconList[0].classList.add('active');
directMessage.style.display = 'grid';
withinServer.style.display = 'none';


//get the class using this instead of the dumb getElementsByClassName
const sidebarContainer = document.querySelectorAll('.sidebar-container');

sidebarContainer.forEach((Container) => {
    Container.addEventListener('click', () => {

        // get rid of all of the actives each time to stop from everything being active
        sidebarContainer.forEach(c => {
            c.classList.remove('active');

            // get rid of all active images
            c.querySelector('.img-active').style.display = 'none';
            c.querySelector('.img-unactive').style.display = 'grid';
        });

        // add the active class to the clicked on container
        Container.classList.add('active');

        // show the images that corispond with the active container
        Container.querySelector('.img-active').style.display = 'grid';
        Container.querySelector('.img-unactive').style.display = 'none';
    });
});

// thos is the initial state for server sidebar
sidebarContainer.forEach(c => {
    const activeImg = c.querySelector('.img-active');
    const unactiveImg = c.querySelector('.img-unactive');

    if (c.classList.contains('active')) {
        activeImg.style.display = 'grid';
        unactiveImg.style.display = 'none';
    } else {
        activeImg.style.display = 'none';
        unactiveImg.style.display = 'grid';
    }
});
