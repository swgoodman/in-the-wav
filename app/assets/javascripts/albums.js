

$(function() {
  $('#search_form').on("submit", function(e){
    e.preventDefault();

    accessToken = $("input[name='credentials']").val()

    term = $("input[name='search']").val()
    url = "https://api.spotify.com/v1/search?q=" + term + "&type=album"

    $.ajax({
      url: url,
      beforeSend: function(request) {
        request.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      }
    }).done(function(data) {
      debugger
    })
  });
});
