$(document).ready(function() {

$(function(){
    $(".gallery").hover(function(){
      $(this).find("#plus").fadeIn();
      $(this).find("#site").animate({"font-size":"26px", "font-weight":"600"}, 600);
    }
                    ,function(){
                        $(this).find("#plus").fadeOut();
                        $(this).find("#site").animate({"font-size":"16px", "font-weight":"500"});

                    }
                   );
});

});
