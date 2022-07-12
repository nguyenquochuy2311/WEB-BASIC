$(function() {
    // Tạo fancybox popup
    $("#content .cloud-zoom").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'none',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': true,
        'overlayColor': '#000',
        'cyclic': true,
        'easingIn': 'easeInOutExpo'
    });

    /*
     Bởi vì plugin zoom tạo thẻ bên trên hình nên
     muốn gán sự kiến click vào thẻ a thì ta phải 
     gọi nó thông qua sự kiện click lên thẻ mà zoom tạo ra
     */
    $("#content .mousetrap").live('click', function() {
        $(this).prev().trigger('click');
    });

    // Div Wrapper
    var $content = $('#content');

    // Div list thumb
    var $thumb_list = $content.find('.thumb > ul');

    // Lặp qua từng thumb và xử lý
    $thumb_list.each(function() {
        // Các biến sử dụng
        var $this_list = $(this),
            total_w = 0,
            loaded = 0,
            $images = $this_list.find('img'),
            total_images = $images.length;

        // Lặp qua từng hình
        $images.each(function() {
            var $img = $(this);
            // Khi load hình sẽ xử lý thêm các plugin vào từng hình
            $('<img/>').load(function() {
                ++loaded;
                if (loaded == total_images) {
                    $this_list.data('current', 0).children().each(function() {
                        total_w += $(this).width();
                    });
                    $this_list.css('width', total_w + 'px');

                    //next / prev events
                    $this_list.parent().siblings('.next').bind('click', function(e) {
                        var current = $this_list.data('current');
                        if (current == $this_list.children().length - 1)
                            return false;
                        var next = ++current,
                            ml = -next * $this_list.children(':first').width();

                        $this_list.data('current', next)
                            .stop()
                            .animate({
                                'marginLeft': ml + 'px'
                            }, 400);
                        e.preventDefault();
                    }).end().siblings('.prev').bind('click', function(e) {
                        var current = $this_list.data('current');
                        if (current == 0)
                            return false;
                        var prev = --current,
                            ml = -prev * $this_list.children(':first').width();

                        $this_list.data('current', prev)
                            .stop()
                            .animate({
                                'marginLeft': ml + 'px'
                            }, 400);
                        e.preventDefault();
                    });
                }
            }).attr('src', $img.attr('src'));
        });
    });
});