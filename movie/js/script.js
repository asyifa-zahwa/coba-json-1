function searchMovie () {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'aff536eb',
            's' : $('#search-input').val()
        },
        success: function (result){
            if ( result.Response == 'True'){
                let movies = result.Search
                $.each (movies, function (i, data){
                    $('#movie-list').append(`
                    <div class="col-md-4 mb-3">
                    <div class="card" >
                    <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">`+ data.Title +`</h5>
                      <p class="card-text">Type : `+ data.Type +`<br>Year : `+ data.Year +`</p>
                      <a href="#" class="btn btn-primary see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">Detail</a>
                    </div>
                  </div>
                  </div>
                    `)
                })

            } else {
                $('#movie-list').html('<h1 class="text-center">'+ result.Error +'</h1>')
            };
            $('#search-input').val('');
        }
    })
}


$('#search-button').on('click', function (){
    //$.getJSON('http://www.omdbapi.com/?apikey=aff536eb')
    searchMovie();
}) 

$('#search-input').on('keyup', function (e){
    if(e.keyCode === 13){
        searchMovie();
    }
})

$('#movie-list').on('click', '.see-detail', function (){
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'aff536eb',
            'i' : $(this).data('id')
        },
        success: function (movie){
            if ( movie.Response == 'True') {
                $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                         <img src="`+ movie.Poster +`" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <ul class="list-group">
                                <li class="list-group-item text-center"><h3>`+ movie.Title +`<h3></li>
                                <li class="list-group-item">Released   : `+ movie.Released +`</li>
                                <li class="list-group-item">Genre       : `+ movie.Genre +`</li>
                                <li class="list-group-item">Director    : `+ movie.Director +`</li>
                                <li class="list-group-item">Actors      : `+ movie.Actors +`</li>
                            </ul>
                        </div>
                    </div>
                </div>`)
            }
        }
    })
})