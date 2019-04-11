// message box: input and display underneath in p tag

$('#messagebox').on('keyup', function(e) {
  if (e.which == 13) {
    //fade in: hiding it first, so it doesnt append right away, then fades in
    // problem: makes everything fade in, how can i nest messagebox in there ?
		$('.mdisplay').append( '<p>' +$('#messagebox').val()+'</p>'+'<button class="delMessage">'+
    'X'+'</button>'+'<button class="like">'+'Like'+'</button>'+'<span class="score">'+0+'</span>').hide().fadeIn(1000);
		$('#messagebox').val('');
}
});

// delete a message with a click on the message or on the delete button
// $('.mdisplay').on('click', function() {
// 	$('.mdisplay').fadeOut();
// });
// $('.mdisplay').on('click', function() {
// 	let deleteM= $(this).next('p').hide();
// });


// delete with delete button : add button with p and then function is button gets pushed
$('.delMessage').on('click', function() {
	$('.mdisplay').fadeOut();
});

// Like
$('.like').on('click', function() {
	let score =  $(this).next('.score').html() // get
	score ++ // update
	$(this).next('.score').html(score) // set
})
