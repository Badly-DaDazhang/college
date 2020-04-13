(function($){

    $(function(){

        // alert("hello");
        for (let index = 0; index < 10; index++) {
            // const element = array[index];
            $('#teachers .card').eq(0).clone().appendTo('#teachers .row_');
        }

    });

})(jQuery)