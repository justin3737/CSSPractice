$(function(){
	resizeMe();
	//註冊resize 事件
	window.onresize = function(){
		resizeMe();
	}

	$('#header .edit').on('click',function(){
		$(this).hide();
		$('#header .cancel').show();
		$('#header .addGroup').hide();
		$('#header .delete').show();
		$('#content .checkbox').show();
		$('#content .timebox').hide();
	});

	$('#header .cancel').on('click',function(){
		$(this).hide();
		$('#header .edit').show();
		$('#header .addGroup').show();
		$('#header .delete').hide();
		$('#content .checkbox').hide();
		$('#content .timebox').show();
	});

	//刪除
	$('#header .delete').on('click' , function(){
		 $.each( $('input:checked') , function(i,v){
		 	$(v).parent().parent().remove();
		 });
		$('#header .delete').html('刪除');
	});

	//勾選
	$('input').on('click' ,function(){
		var delLength = $('input:checked').length;
		$('#header .delete').html('刪除(' + delLength +')');
	});
});
var resizeMe = function(){
	// resizeHeight();
	resizeListWidth();
};
var resizeHeight = function(){
	var listHeight = parseInt($(window).height()) - parseInt($('#header').height()) - parseInt($('#nav').height()); 
	$('#content').css('height', listHeight);
};
var resizeListWidth = function(){
	var windowW  = $(window).width(),
		chkboxW  = $('#content .checkbox').outerWidth(true),
		faceboxW = $('#content .facebox').outerWidth(true),
		timeboxW = $('#content .timebox').outerWidth(true),
		msgW     = windowW - faceboxW - ((chkboxW + timeboxW/2)) - parseInt($('#content .msgWrap').css('marginLeft'));

	$.each($('#content .msgWrap'), function(i,v){
		$(this).css('width', msgW);
	});
};