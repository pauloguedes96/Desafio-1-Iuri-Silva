let icons = document.getElementsByClassName('iconArticle');

console.log(icons);


for (let i = 0; i < icons.length; i++) {

    icons[i].addEventListener("click", favoritar);

}

function favoritar() {

    icons.src = './icons/favorite_white_24dp.svg';

    for (let i = 0; i < icons.length; i++) {

        icons[i].src = './icons/favorite_white_24dp.svg';
    
    }
}