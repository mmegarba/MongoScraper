





$(document).on("click", "#getArticles", function() {

$("#defaultTxt").html("")



$.ajax({
    method: "GET",
    url: "/scrape/"
  })
    // With that done, add the note information to the page
    .done(function(data) {
      console.log(data);


$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");



    var newButton = $("<button/>")
    newButton.attr("class", "saveArticle")
    newButton.attr("dataId", data[i]._id)
    newButton.text("Save Article")
    $("#articles").append(newButton)



    $("#articles").append(`<form> <input type='text' id = 'postComment' name='comment'><br> <input type='submit' value = 'Post' id ='submitComment' dataId = ${data[i]._id}  </form>`)



    var newViewPost = $("<button/>")
    newViewPost.attr("class", "viewPost")
    newViewPost.attr("dataId", data[i]._id)
    newViewPost.text("View Comments")
    $("#articles").append(newViewPost)


  }
});

});


});


$(document).on("click", ".saveArticle", function() {

 var thisId = $(this).attr("dataId");


$.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done, add the note information to the page
    .done(function(data) {
      console.log(data);


});

})







$(document).on("click", "#submitComment", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("dataId");

  console.log($("#postComment").val())


  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      // title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#postComment").val()
    }
  })
    // With that done
    .done(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#notes").empty();
    });

  // Also, remove the values entered in the input and textarea for note entry
  // $("#titleinput").val("");
  $("#postComment").val("");
});








$(document).on("click", ".viewPost", function() {

 var thisId = $(this).attr("dataId");


$.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done, add the note information to the page
    .done(function(data) {
      // console.log(data);

      console.log(data)
});


})









