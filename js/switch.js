const images = [
    {
      selector: '#menuIco',
      dark: 'img/menu-dark.png',
      light: 'img/menu.png'
    },
    {
        selector: '#menuIco2',
        dark: 'img/menu-dark.png',
        light: 'img/menu.png'
    },
    {
      selector: '#plus-1',
      dark: 'img/add-dark.png',
      light: 'img/add.png'
    },
    {
      selector: '#plus-2',
      dark: 'img/add-dark.png',
      light: 'img/add.png'
    },
    {
      selector: '#plus-3',
      dark: 'img/add-dark.png',
      light: 'img/add.png'
    },
    {
      selector: '#close',
      dark: 'img/close-dark.png',
      light: 'img/close.png'
    },
    {
      selector: '#close2',
      dark: 'img/close-dark.png',
      light: 'img/close.png'
    }
];

function swapImages() {
    const isDark = $('.light').hasClass('dark');
    for (let image of images) {
      $(image.selector).attr('src', isDark ? image.dark : image.light);
    }
}

$(document).ready(function () {
    $(".checkbox").click(function(){
        $(".light").toggleClass("dark");
        swapImages();
    });
    swapImages();
});