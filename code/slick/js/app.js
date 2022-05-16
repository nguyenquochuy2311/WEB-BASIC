$(document).ready(function() {
    $(".image-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1, //số lượng hính ảnh mới xuất hiện khi scroll mặc định là 1
        infinity: true,
        arrows: true, // tắt mở nút next prev
        draggable: false, //tắt mở kéo bằng tay
        autoplay: true,
        autoplaySpeed: 500,

        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,

        dots: true, //tắt mở nút đếm ở dưới

        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
    });
});