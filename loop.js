const showDetailRecommended = $.ajax({
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    type: 'get',
    dataType: 'json',
    data: {
        'api_key': 'b4f060ea3f1cac3b816b0de98671528e',
    },
    success: function(result) {
        if (result.page == 1) {


            if (result.page == 1) {
                for (let i = 0; i <= 5; i++) {
                    const image = document.createElement("image");
                    $('#recommended').append(`
                            <div class="col-md-2">
                                <p class="image-recommended"><img src=${url}${result.results[i].poster_path} class="card-img-top" height="300px" width="250px" data-toggle="modal" data-target="#exampleModal" data-id=${result.results[i].id}></p>
                            </div>
                        `);

                    (function(e) {
                        const images = document.querySelectorAll('.image-recommended');
                        images[i].addEventListener('click', function() {
                            $.ajax({
                                url: 'https://api.themoviedb.org/3/movie/top_rated',
                                type: 'get',
                                dataType: 'json',
                                data: {
                                    'api_key': 'b4f060ea3f1cac3b816b0de98671528e',
                                },
                                success: function() {
                                    $('#modal-body').html(`
                                <div class="modal-card d-flex align-items-center">
                                    <p><img src=${url}${result.results[i].poster_path} class="card-img-top" height="215px" data-toggle="modal" data-target="#exampleModal"></p>
                                    <div class="details">
                                        <p>Title : ${result.results[i].title}</p>
                                        <p>Released : ${result.results[i].release_date}</p>
                                        <p>Overview : ${result.results[i].overview}</p>
                                    </div>
                                </div>
                            `);
                                }
                            })
                        });
                    })();
                }
            }
        }
    }
});





const showDetailLatest = $.ajax({
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    type: 'get',
    dataType: 'json',
    data: {
        'api_key': 'b4f060ea3f1cac3b816b0de98671528e',
    },
    success: function(result) {
        if (result.page == 1) {


            if (result.page == 1) {
                for (let i = 0; i <= 5; i++) {
                    const image = document.createElement("image");
                    $('#upComing').append(`
                            <div class="col-md-2">
                                <p class="image-upComing"><img src=${url}${result.results[i].poster_path} class="card-img-top" height="300px" width="250px" data-toggle="modal" data-target="#exampleModal" data-id=${result.results[i].id}></p>
                            </div>
                        `);

                    (function() {
                        const images = document.querySelectorAll('.image-upComing');
                        images[i].addEventListener('click', function() {
                            $.ajax({
                                url: 'https://api.themoviedb.org/3/movie/now_playing',
                                type: 'get',
                                dataType: 'json',
                                data: {
                                    'api_key': 'b4f060ea3f1cac3b816b0de98671528e',
                                },
                                success: function() {
                                    $('#modal-body').html(`
                                <div class="modal-card d-flex align-items-center">
                                    <p><img src=${url}${result.results[i].poster_path} class="card-img-top" height="215px" data-toggle="modal" data-target="#exampleModal"></p>
                                    <div class="details">
                                        <p>Title : ${result.results[i].title}</p>
                                        <p>Released : ${result.results[i].release_date}</p>
                                        <p>Overview : ${result.results[i].overview}</p>
                                    </div>
                                </div>
                            `);
                                }
                            })
                        });
                    })();
                }
            }
        }
    }
});




// export { showDetailRecommended }
// export { showDetailLatest }