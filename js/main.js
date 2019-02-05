// for marking as done
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});
// for deleting todo
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    e.stopPropagation();
})
// toggling input section
$("#plus").click(function(){
    $("input").fadeToggle();
});
// for adding new todo
$("input").keypress(function(e){
    if(e.which === 13){
        const todoText = $(this).val();
        $(this).val("");
        if(todoText != ""){
            $("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span> " + todoText + "</li>")
        }
        
    }
});
