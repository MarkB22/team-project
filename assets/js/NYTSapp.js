var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var APIKEY = "0091c0edc80b46b8aab02776ae068c61";


$('.submit').on('click', function() {
    userQuery = $(".terms").val();
    recordsLimit = $(".records").val();
    console.log(recordsLimit);
    beginYear = $(".startDate").val();
    endYear = $(".endDate").val();

    $("#results").empty();

    url = url + '?' 
	  + 'api-key=' + APIKEY
	  + '&' +'q=' + userQuery;




	if(beginYear != ""){
	   url = url + '&' + 'begin_date=' + beginYear + '0101';
	}
	if(endYear != ""){
	   url = url + '&' + 'end_date=' + endYear + '0101';
	}

	console.log(url);
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
		//By default, NYT API gives 10 results per page
	  for (var i = 0; i < result.response.docs.length; i++) {

	  	//if user-defined limit is reached,
	  	//stop display
	  	if (i == recordsLimit) {
	  		break;
	  	}

	  	//Extract Data from API Response
	  	var article = result.response.docs[i];
	  	var title = article.headline.main;
	  	var author = "";
	  	var section = "";
	  	var publishDate = "";
	  	var articleLink = "";
	  	if (article.byline !== null) {
	  		author = article.byline.original;
	  	}
	  	if (article.section_name !== null) {
	  		section = "Section: " + article.section_name;
	  	}
	  	if (article.pub_date !== null) {
	  		publishDate = article.pub_date;
	  	}
	  	if (article.web_url !== null) {
	  		articleLink = article.web_url;
	  	}

	  	//Build HTML for FrontEnd
	  	var articleDiv = $("<div>").addClass("article");

	  	articleDiv.append($("<p>").text(i+1).addClass("resultNumber"));
	  	articleDiv.append($("<p>").text(title).addClass("title"));
	  	articleDiv.append($("<p>").text(author).addClass("author"));
	  	articleDiv.append($("<p>").text(section).addClass("section"));
	  	articleDiv.append($("<p>").text(publishDate).addClass("publishDate"));
	  	articleDiv.append(
	  		$("<a href='" + articleLink + "'>" + articleLink + "</a>")
	  		.addClass("articleLink")
	  	);


	  	$("#results").append(articleDiv);

	  	
	  	console.log(article);
	  	console.log(title);
	  	console.log(author);
	  	console.log(section);
	  	console.log(publishDate);
	  	console.log(articleLink);
	  }
	  // console.log(result.response);
	}).fail(function(err) {
	  throw err;
	});
    return false;
})




// var userQuery = "Michael";
// var recordsLimit = 5;
// var beginYear = "1990";
// var endYear = "1990";
