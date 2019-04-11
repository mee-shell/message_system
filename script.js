// --------------message box: input and display underneath in p tag----------------

$('#messagebox').on('keyup', function(e) {
  if (e.which == 13) {
    //fade in: hiding it first, so it doesnt append right away, then fades in
    let newelement = $('<div class="hidden"><p class="newM">' +$('#messagebox').val()+'</p>'+'<button class="delMessage">'+
    'X'+'</button>'+'<button class="like">'+'Like'+'</button>'+'<span class="score">'+0+'</span></div>');
		$('.mdisplay').append(newelement);
    newelement.fadeIn(1000);
		$('#messagebox').val('');
}
});


//using event listener to target the buttons as they didn't exist before:   $(document).on(click...--------------------
// ---------------------deleting a comment by clicking button----------------------------
 $(document).on('click', function(){
   $('.delMessage').on('click', function(e) {
	  $(this.newM).hide();
  });
});

// -----------Like button-----------------------------
$(document).on('click', function(){
$('.like').on('click', function() {
  let score= $(this).next('.score').html() // get
	score ++ // update
	$(this).next('.score').html(score) // set
})
});

//------------------channel -----------------------
// $('#c1').on('click', function() {
//   $('body').css({ // multiple styles
// 	background-color: 'blue',
// });
// };

// dynamic: array and then push a new one
var channel =['channel1','channel2','channel3'];
