function MyButton(props) {
    const { text, callback = () => { } } = props;
    return (
        <button className="rounded-md px-3 py-1 bg-[#F55145] text-white font-semibold" onClick={callback()}>{text}</button>
    )
}

export default MyButton;