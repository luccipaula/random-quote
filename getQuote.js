$(document).ready(function() {
  
  getQuote();
  
  var randomQuote;
  var author;
  
  function getQuote() {
  
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  
    $.getJSON(url, function(data) {
      randomQuote = data.quoteText;
      
      if (data.quoteAuthor) {
        author = "— " + data.quoteAuthor;
      } else {
        author = "— Unknown";
      }
      
      $("#quote").html(randomQuote);
      $("#author").html(author);
      
    });  
  
  };
  
  $("#new-quote").on("click", function () {
      getQuote();
  });
  
  $("#tweet").on("click", function() {
      window.open("https://twitter.com/intent/tweet?text=" + randomQuote + author);
  });
    
});
