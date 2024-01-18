function MyButton(props) {
    const { text, callback = () => { }, disabled = false } = props;

    function getStyle() {
        if (disabled) return "bg-gray-500"
    }

    return (
        <button className={"rounded-md px-3 py-1 bg-[#F55145] text-white font-semibold " + getStyle()} onClick={callback} disabled={disabled}>{text}</button>
    )
}

export default MyButton;