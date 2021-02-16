const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images
Going to use for loop since its running through for a number of images*/

for (i =1; i < 6; i++) {
    let pic = ('images/pic' + i +'.jpg')
    const newImage = document.createElement('img');
    newImage.setAttribute('src',pic);
    thumbBar.appendChild(newImage);
    newImage.onclick = function changePic() {
        displayedImage.src = pic;
    }
}

/* Wiring up the Darken/Lighten button */

//view = document.getElementsByClassName('dark')
//if (document.getElementsByName('dark'))
btn.onclick = function viewMode () {
    if (btn.getAttribute('class') === 'dark') {
        // overlay class to lighten
        overlay.setAttribute('class', 'light');
        btn.setAttribute('class', 'light');
        // change text to lighten
        btn.textContent = 'Lighten';
        // change BG color to "rgba(0,0,0,0.5)" --- I did this with the CSS since I was changing it anyway
    } else {
        // overlay class darken
        overlay.setAttribute('class', 'dark');
        btn.setAttribute('class', 'dark');
        // text darken
        btn.textContent = 'Darken';
        // bg color rgba(0,0,0,0) --- I did this with the CSS since I was changing it anyway
    }
    //console.log('This is the Function') // 
}