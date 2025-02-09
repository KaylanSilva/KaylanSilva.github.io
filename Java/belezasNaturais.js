function informação() {
    const button = event.target;
    const targetId = button.getAttribute('data-target');
    const infoDiv = document.getElementById(targetId);

    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
        button.innerText = 'Mostrar menos';
    } else {
        infoDiv.style.display = 'none';
        button.innerText = 'Mostrar mais';
    }
}

document.getElementById('feedbackForm').addEventListener('submit', function (event) {

    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    let isValid = true;


    if (name.value.trim() === '') {
        nameError.textContent = 'O nome é obrigatório.';
        nameError.style.display = 'block';
        isValid = false;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'O e-mail é obrigatório.';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        emailError.style.display = 'block';
        isValid = false;
    }

    if (message.value.trim() === '') {
        messageError.textContent = 'A mensagem é obrigatória.';
        messageError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Feedback enviado com sucesso!');

        document.getElementById('feedbackForm').reset();
    }
});

function openModal(image) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = image.src
}
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}