 $(document).ready(function(){
	// body...
	
	var $garden = $('#garden-body')			
	 $garden.html('')

		for (var i = 0; i < books.length; i++) {
			var $book = books[i]
			var $bookDiv = $('<div class="book"></div>');
			$bookDiv.html('<img class="book-img" id="'+ i +'"  src="' +$book.img +'"><a class="book-tital" id="'+i+'"  href="#">'+ $book.title +'</a><p id="'+i+'" class="book-dis">'+ $book.description +'</p> <p class="genre" id="'+i+'">'+$book.genre+'</p><button id="'+i+'" class="toRead-btn">To Read</button>');
			$bookDiv.appendTo($garden)
		}
})

 

 $("#search-input").on('keyup', function (e) {
 	var $search = $('#search-input').val()
 	console.log($search)
 	
 	if ($search !== '') {
	    if (e.keyCode === 13) {
	    	console.log($search)
	        // Do something
	        var $garden = $('#garden-body')			
			$garden.html('')

	        for (var i = 0; i < books.length; i++) {

	        	if (books[i].genre.includes($search)) {

					var $book = books[i]
					var $bookDiv = $('<div class="book"></div>');
					$bookDiv.html('<img class="book-img" id="'+ i +'"  src="' +$book.img +'"><a class="book-tital" id="'+i+'"  href="#">'+ $book.title +'</a><p id="'+i+'" class="book-dis">'+ $book.description +'</p> <p class="genre" id="'+i+'">'+$book.genre+'</p><button id="'+i+'" class="toRead-btn">To Read</button>');
					$bookDiv.appendTo($garden)
				}
			}
	    }
	} else {
		$(document).ready(function(){
	// body...
	
	var $garden = $('#garden-body')			
	 $garden.html('')

			for (var i = 0; i < books.length; i++) {
				var $book = books[i]
				var $bookDiv = $('<div class="book"></div>');
				$bookDiv.html('<img class="book-img" id="'+ i +'"  src="' +$book.img +'"><a class="book-tital" id="'+i+'"  href="#">'+ $book.title +'</a><p id="'+i+'" class="book-dis">'+ $book.description +'</p> <p class="genre" id="'+i+'">'+$book.genre+'</p><button id="'+i+'" class="toRead-btn">To Read</button>');
				$bookDiv.appendTo($garden)
			}
		})
	}

});