const showError = (message) => {
    const errorMsgElement = document.querySelector('.error');

    if (errorMsgElement) {
        errorMsgElement.classList.toggle('visible');
        errorMsgElement.innerHTML = message;

        setTimeout(() => {
            errorMsgElement.classList.toggle('visible');
        }, 3000);
    }
};

const showSuccess = (message) => {
    const successMsgElement = document.querySelector('.success');

    if (successMsgElement) {
        successMsgElement.classList.toggle('visible');
        successMsgElement.innerHTML = message;

        setTimeout(() => {
            successMsgElement.classList.toggle('visible');
        }, 3000);
    }
};

export { showError, showSuccess };
