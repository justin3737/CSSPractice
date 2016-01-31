(function() {
    
    var $cover = $('.dialog-cover');
    var $frame = $('.dialog-wrap');
	
    // 顯示對話框
    $('.showDialog').on('click', function() {
        $cover.addClass('show');
        $frame.addClass('show');
        $frame.css('margin-top', '-' + $frame.height() / 2 + 'px');
        console.log('高度的一半： ' + $frame.height() / 2);
    });
    
    $frame.on('click', function(e) {
        /* 停止預設事件*/
        e.preventDefault(); 
    });
    
    // delete the dialog
    $('.dialog-actions .button').on('click', function() {
        $cover.removeClass('show');
        $frame.removeClass('show');
    });

})();
