const homePage = document.querySelector('#homepage');
const Recommended = document.querySelector('#recommended');
const upComing = document.querySelector('#upComing');
const recommended = document.querySelector('#Recommended');
const up_coming = document.querySelector('#up_coming');
const modalBox = document.querySelector('#exampleModal');
const url = 'https://image.tmdb.org/t/p/w500/';

let img = document.querySelector('#card-img-top');

const showDetailSearchMovie = $('#list_movie').on('click', '.card-img-top', function() {
    $.ajax({
        url: 'https://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'ca214364',
            'i': $(this).data('id')
        },
        success: function(movie) {
            if (movie.Response == 'True') {
                $('#modal-body').html(`
                    <div class="detailBox d-flex align-items-center">
                        <img src=${movie.Poster} class="card-img-top col-md-3" data-toggle="modal" data-target="#exampleModal" id="image">
                        <div class="description ">
                            <p>Title : ${movie.Title}</p>
                            <p>Released : ${movie.Released}</p>
                            <p>Overview : ${movie.Plot}</p>
                        </div>
                    </div>
                    `);
            }
        }
    });
});