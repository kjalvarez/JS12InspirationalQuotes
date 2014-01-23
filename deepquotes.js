$(document).ready(function() {
	var numQuotes = Array.prototype.slice.call($('.quotebox')).length
	
	var getText = function(e){
		e.preventDefault();
		var quoteId = 'mainquote'+(numQuotes + 1);
		console.log(quoteId);
		var newQuote = $('#quoteText').val();
		var newAuthor = $('#authorText').val();
		var quoteSentence = $('<p class= "quote">"'+newQuote+'"</p>');
		var authorSentence = $('<h3 class="author">'+newAuthor+'</h3>');
		var quoteElement = $('<div class= "quotebox">'+
			'<div class="mainquote" id="'+quoteId+'">'+
			'</div>'+
			'<div class="stars">'+
				'<div class = "starwrapper"></div>'+
				'<button>Delete Quote</button>'+
			'</div>');
		$('.container').append(quoteElement);
		$('#'+quoteId).append(quoteSentence);
		$('#'+quoteId).append(authorSentence);
		numQuotes++;
	}


	$('#addQuote').click(function(){
		$('#quoteForm').css('display','block');
	})

	$('#cancel').click(function() {
		$('#quoteForm').css('display','none');
	})

	$('#submit').click(getText);


})