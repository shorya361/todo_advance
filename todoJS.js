$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})

$("ul").on("click","span",function(eve){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();	
	})
	eve.stopPropagation();
})

$("input[type='text']").keypress(function(eve){
	if(eve.which==13)
	{
		var value=$(this).val();
		$("ul").append("<li><span><i class='la fas fa-trash-alt'></i> </span>" + value + "</li>");
		$(this).val("");
	}
})
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})