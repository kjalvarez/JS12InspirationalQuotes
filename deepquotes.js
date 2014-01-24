$(document).ready(function() {
	var removedBox = null;
	var undoButton = $('<button class= "undo">Undo</button>')

	var getText = function(e){
		e.preventDefault();
		var quotes = $('.quotebox');
		var quoteNumber = quotes.length;
		var newQuote = $('#quoteText').val();
		var newAuthor = $('#authorText').val();
		var newQuotebox = $('.quotebox:first').clone();
		newQuotebox.attr('data-index',quoteNumber);
		newQuotebox.find('.quote').text(newQuote);
		newQuotebox.find('.author').text(newAuthor);
		newQuotebox.hide();
		$('.input-quote').after(newQuotebox);
		newQuotebox.fadeIn();
	}


	$('#addQuote').click(function(e){
		e.preventDefault();
		$('#quoteForm').slideDown().css('display','inline-block');
	})

	$('#cancel').click(function(e) {
		e.preventDefault();
		$('#quoteForm').slideUp();
	})

	$('#submit').click(getText);
	
	$(document).on('click', '.delete', function() {
		removedBox = $(this).closest('.quotebox');
		removedBox.fadeOut();
		removedBox.before(undoButton);
		undoButton.fadeIn();
		setTimeout(removedBox.remove.bind(removedBox), 1000); 
		$('.undo').click(function() {
			$(this).fadeOut();
			$(this).before(removedBox);
			removedBox.fadeIn();
			var that = this;
			setTimeout(
				$(that).remove, 3000);
		})
	})

	$(document).on('click', '.author', function() {
		var authors = $('.author');
		var that=this;
		authors.each(function(ind,elem) {
			var element = $(elem);
			if ($(that).text()!==element.text()) {
				element.closest('.quotebox').hide();
			}
		})
	})

	$('.showall').click(function() {
		$('.quotebox').show();
		$('.undo').hide();
	})

	$('.randombutton').click(function() {
		var index = Math.floor($('.quotebox').length*Math.random());
		var quoteToShow = $('.quotebox')[index];
		$('.quotebox').hide();
		$(quoteToShow).show();
	})

	$(document).on("click", ".star-image", function() {

		var starImages = $(this).closest(".starwrapper").find(".star-image");
		$(this).closest('.quotebox').attr('data-rating',$(this).index()+1);
		var that = this;
		starImages.each(function(i,elem) {
			if (i <= $(that).index()) {
				$(elem).attr("src", "star.png");
			}
			else {
				$(elem).attr("src", "largesilverstar.jpg");
			}
		})

		var sortOrder = Array.prototype.sort.call($('.quotebox'), function(a,b){
			console.log($(a).attr('data-rating'));
			if($(a).attr('data-rating')<$(b).attr('data-rating')){
				return -1
			} else if ($(a).attr('data-rating')>$(b).attr('data-rating')){
				return 1
			} else {
				return 0;
			}
			})
		sortOrder.each(function(i,elem){
			$('#quoteForm').after(elem);
		})
	})








})























