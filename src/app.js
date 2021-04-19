const showDetailHomepage = $.ajax({
    url: 'https://api.themoviedb.org/3/movie/popular',
    type: 'get',
    dataType: 'json',
    data: {
        'api_key': 'b4f060ea3f1cac3b816b0de98671528e',
    },
    success: function(result) {
        if (result.page == 1) {
            $('#first').append(`
                <div class="col-md-10">
                    <p><img src=${url}${result.results[1].poster_path} class="card-img-top" height="215px" data-toggle="modal" data-target="#exampleModal" data-id=${result.results[1].id}></p>
                </div>
            `);
            $('#second').append(`
                <div class="col-md-10">
                    <p><img src=${url}${result.results[2].poster_path} class="card-img-top" height="170px" data-toggle="modal" data-target="#exampleModal"></p>
                </div>
           `);
            $('.main').append(`
                <div class="col-md-16">
                    <p><img src=${url}${result.results[0].poster_path} class="card-img-top" height="400px" data-toggle="modal" data-target="#exampleModal"></p>
                </div>
            `);
            $('#first').on('click', function() {
                $.ajax({
                    url: 'https://api.themoviedb.org/3/movie/popular',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        'api_key': 'b4f060ea3f1cac3b816b0de98671528e',
                    },
                    success: function() {
                        $('#modal-body').html(`
                        <div class="modal-card d-flex align-items-center">
                            <p><img src=${url}${result.results[1].poster_path} class="card-img-top" height="215px" data-toggle="modal" data-target="#exampleModal"></p>
                            <div class="details">
                                <p>Title : ${result.results[1].title}</p>
                                <p>Released : ${result.results[1].release_date}</p>
                                <p>Overview : ${result.results[1].overview}</p>
                            </div>
                        </div>
                        `);
                    }
                });
            });
            $('#second').on('click', function() {
                $.ajax({
                    url: 'https://api.themoviedb.org/3/movie/popular',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        'api_key': 'b4f060ea3f1cac3b816b0de98671528e',
                    },
                    success: function() {
                        $('#modal-body').html(`
                        <div class="modal-card d-flex align-items-center">
                            <p><img src=${url}${result.results[2].poster_path} class="card-img-top" height="215px" data-toggle="modal" data-target="#exampleModal"></p>
                            <div class="details">
                                <p>Title : ${result.results[2].title}</p>
                                <p>Released : ${result.results[2].release_date}</p>
                                <p>Overview : ${result.results[2].overview}</p>
                            </div>
                        </div>
                        `);
                    }
                });
            });
            $('.main').on('click', function() {
                $.ajax({
                    url: 'https://api.themoviedb.org/3/movie/popular',
                    type: 'get',
                    dataType: 'json',
                    data: {
                        'api_key': 'b4f060ea3f1cac3b816b0de98671528e',
                    },
                    success: function() {
                        $('#modal-body').html(`
                        <div class="modal-card d-flex align-items-center">
                            <p><img src=${url}${result.results[0].poster_path} class="card-img-top" height="215px" data-toggle="modal" data-target="#exampleModal"></p>
                            <div class="details">
                                <p>Title : ${result.results[0].title}</p>
                                <p>Released : ${result.results[0].release_date}</p>
                                <p>Overview : ${result.results[0].overview}</p>
                            </div>
                        </div>
                        `);
                    }
                });
            });
        }
    }
});



const showFunctionSearch = $('#search-btn').on('click', function() {
    homePage.classList.remove('active');
    Recommended.classList.remove('active');
    upComing.classList.remove('active');
    recommended.classList.remove('active');
    up_coming.classList.remove('active');

    $('#list_movie').html('');
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'ca214364',
            's': $('#search-input').val()
        },
        success: function(result) {
            if (result.Response == 'True') {
                let movies = result.Search;
                $.each(movies, function(i, data) {
                    $('#list_movie').append(`
                            <div class="col-md-3">
                                <div class="card">
                                    <img src=${data.Poster} class="card-img-top" data-toggle="modal" data-target="#exampleModal" id="image" data-id=${data.imdbID}>
                                    <div class="card-body">
                                        <h5 class="card-title">${data.Title}</h5>
                                        <a href="#" class="card-link see-details" data-toggle="modal" data-target="#exampleModal" data-id=${data.imdbID} >See detail</a>
                                    </div>
                                </div>
                            </div>
                        `);
                });
                $('#search-input').val('');
            } else {
                $('#list_movie').html(`<h1>${result.Error}</h1>`);
            }
        }
    });
});