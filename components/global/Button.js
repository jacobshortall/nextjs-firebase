"use client";

const Button = () => {
    const handleClick = (event) => {
        console.log("clicked");
        const txt = document.querySelector("#first");
        txt.innerText = "changed";
    };

    return (
        <button className="clicker" onClick={handleClick}>
            click me
        </button>
    );
};

export default Button;
