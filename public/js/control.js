$(document).ready(() => {	
	loadControls();	
	
	
	
});

async function loadControls() {
	const template = await $.get('/templates/control.html');
	
	const res = await $.getJSON('/controls.json');
	
	$.each(res.controls, (i, data) => {		
		$('#controls').append(Mustache.render(template, data));
	});
	
	
	$('.control-button').on('click', function() {
		$.get('/api/sendcode/' + $(this).attr('code'), (res) => {
			console.log(res);
		});
	});
}

	