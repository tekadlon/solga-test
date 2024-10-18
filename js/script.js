var form = document.getElementById('recipeForm');
var emailInput = document.getElementById('email');
var submitButton = document.getElementById('submit-button');
var thankYouMessage = document.getElementById('thankYouMessage');
var loadingGif = document.getElementById('loading-gif');
var sendingText = document.getElementById('sending-text');
var initialText = document.getElementById('initialText');

// Регулярное выражение для валидации email
emailInput.addEventListener('input', function() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(emailInput.value)) {
        submitButton.disabled = false;
        submitButton.style.cursor = 'pointer';
        submitButton.style.opacity = 1;
    } else {
        submitButton.disabled = true;
        submitButton.style.cursor = 'not-allowed';
        submitButton.style.opacity = 0.5;
    }
});

// Обработка формы и анимация
form.onsubmit = function() {
    initialText.style.display = 'none';  
    form.style.display = 'none';  
    loadingGif.style.display = 'block';  
    sendingText.style.display = 'block';  

    setTimeout(function() {
        loadingGif.style.display = 'none';  
        sendingText.style.display = 'none';  
        thankYouMessage.style.display = 'block';  // Сообщение появляется с анимацией
    }, 3000);  // Письмо будет отправлено, и через 3 секунды появится сообщение
};
