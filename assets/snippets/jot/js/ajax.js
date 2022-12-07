(function($) {
	setData = function(data,id) {
		var array = data.split("|!|~|!|");
		$('#form-'+id).html(array[0]);
		$('#comments-'+id).html(array[1]);
		$('#moderate-'+id).html(array[2]);
		$('.navigation-'+id).html(array[3]);
		$('#subscribe-'+id).html(array[4]);
	}
	jotAjax = function(id) {
		var hist;
		$(document).delegate('.navigation-'+id+' .jot-nav a','click',function(event) {
			hist = $(this).attr('href');
			$.get($(this).attr('href'),'aj'+id, function(data) {setData(data,id);});
			return false;
		});
		$(document).delegate('#moderate-'+id+' .jot-list a,#comments-'+id+' .jot-mod a','click',function(event) {
			$.get($(this).attr('href'),'aj'+id, function(data) {setData(data,id);});
			return false;
		});
		$(document).delegate('#respond-'+id+' .jot-form','submit',function(event) {
			event.preventDefault();
			//var parent = $('#comment-parent-'+id).val();
			$.post($(this).attr('action'), $(this).serialize(), function(data) {
				setData(data,id);
				//if (parent && addComment) {addComment.moveForm(id,parent);}
			});
		});
		$(document).delegate('#form-'+id+' .jot-form .jot-btn-cancel','click',function(event) {
			event.preventDefault();
			$.get(hist,'aj'+id, function(data) {setData(data,id);});
		});
	}
})(jQuery);