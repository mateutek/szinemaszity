(function(window,$){
    var $_test = $('.test');
    $.get('/api',function(data){
        console.log(data);
        $_test.html(data);
    });
})(window,window.jQuery);
