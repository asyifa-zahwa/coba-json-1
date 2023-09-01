function semuaSantri (){
    $.getJSON('coba2.json', function (data){
        let santri = data.santri;
        $.each(santri, function (i, data){
            $('#santri').append('<div class="col-md-4"><div class="card mb-3"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.alamat+'<br>'+ data.umur +'</p><a href="#" class="btn btn-primary">Detail</a></div></div></div>')
        });
    });
    
}
semuaSantri();
$('.nav-link').on('click', function (){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'Semua Santri'){
        semuaSantri();
        return;
    }


    $.getJSON('coba2.json', function (data){
        let santri = data.santri;
        let content = '';
        $.each(santri, function (i, data){
            if (data.alamat == kategori){
                content += '<div class="col-md-4"><div class="card mb-3"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.alamat+'<br>'+ data.umur +'</p><a href="#" class="btn btn-primary">Detail</a></div></div></div>'
            }
        });
        $('#santri').html(content);
    });

    
});