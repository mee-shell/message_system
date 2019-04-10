// message box: input and display underneath in p tag

$('#messagebox').on('keyup', function(e) {
  if (e.which == 13) {
    //fade in: hiding it first, so it doesnt append right away, then fades in
    // problem: makes everything fade in, how can i nest messagebox in there ?
		$('.mdisplay').append( '<p>' +$('#messagebox').val()+'</p>').hide().fadeIn(1000);
		$('#messagebox').val('');
}
})

// delete a message with a click:
