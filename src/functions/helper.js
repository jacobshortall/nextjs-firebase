export const showError = (message) => {
    const errorMsgElement = document.querySelector(".error");

    if (errorMsgElement) {
        errorMsgElement.classList.toggle("visible");
        errorMsgElement.innerHTML = message;

        setTimeout(() => {
            errorMsgElement.classList.toggle("visible");
        }, 3000);
    }
};
