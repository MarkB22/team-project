
$('.submit').on('click', function() {
    userQuery = $(".terms").val();
    recordsLimit = $(".records").val();
    beginYear = $(".startDate").val();
    endYear = $(".endDate").val();
    url = url + '?' 
	  + 'api-key=' + '0091c0edc80b46b8aab02776ae068c61'
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
	  for (var i = 0; i < result.response.docs.length; i++) {
	  	if (i == recordsLimit) {
	  		break;
	  	}
	  	console.log(result.response.docs[i]);
	  }
	  // console.log(result.response);
	}).fail(function(err) {
	  throw err;
	});
    return false;
})




var userQuery = "Florida";
var recordsLimit = 5;
var beginYear = "1990";
var endYear = "1990";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
