button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    let disciplina = document.querySelector('#disciplina').value;
    let nota1 = parseInt(document.querySelector('#nota1').value) || 0;
    let nota2 = parseInt(document.querySelector('#nota2').value) || 0;
    let nota3 = parseInt(document.querySelector('#nota3').value) || 0;
    let nota4 = parseInt(document.querySelector('#nota4').value) || 0;


    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(media);

    Swal.fire({
        title: `Resultado - ${disciplina}`,
        text: `A sua média é ${media.toFixed(2)}`,
        confirmButtonText: 'Ok'
    });


});



