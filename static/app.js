function displaySongs(results) {
  console.log(results)
  for(var i=0; i < results['tracks']['items'].length; i++) {
    $('#songs').append("<li><a href=" + results['tracks']['items'][i]['external_urls']['spotify'] + ">" + results['tracks']['items'][i]['name'] + '</a></li>');
  }
}

function bandSearch(evt) {
  evt.preventDefault();

  $('#songs').empty();

  data = {
      'band': $('#search').val()
  };

  $.get('/search', data, displaySongs);
}


$('#submit-search').on('click', bandSearch);