$(document).ready(() => {	
	loadControls();	
	
	
	
});

async function loadControls() {
	await $.getJSON('/controls.json', (res) => {
		$.each(res.controls, (i, data) => {
			let html = '';
			
			html += '<div class="card">';
			html += '<div class="card-body">';
			html += '<h5 class="card-title">' + data.name + '</h5>';
			html += '</div>';
			html += '<div class="card-footer">';
			html += '<div class="btn-group" role="group">'
			
			$.each(data.buttons, (i, button) => {
				html += '<button type="button" class="btn btn-primary control-button" code="' + button.code + '">' + button.name + '</button>'
			})
			
			html += '</div>';
			html += '</div>';
			html += '</div>';
			
			$('#controls').append(html);
		});
	});
	
	
	$('.control-button').on('click', function() {
		$.get('/api/sendcode/' + $(this).attr('code'), (res) => {
			console.log(res);
		});
	});
}

	