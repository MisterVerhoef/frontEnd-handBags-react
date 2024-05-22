function Button({title, isDisabled}) {
return (
    <button type={"button"} disabled={isDisabled} onClick={
        () => {
            console.log(title);
        }
    }>{title}
    </button>
);
}

export default Button;