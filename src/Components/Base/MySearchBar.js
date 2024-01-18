
// Base
import { useState } from "react";
import Button from "../Base/Button.js";

function MySearchBar(props) {
    const [input, setInput] = useState("");

    return (
        <div className="w-full flex-col sm:flex-row flex justify-center items-center gap-2">
            <h4 className="text-md m-0">Search</h4>
            <input type="text" value={input} onChange={({ target }) => setInput(target.value)} className="border-solid border-2 w-full sm:w-1/3 border-gray-500 rounded-sm px-2 focus:outline-none" />
            <Button text="Search" type="search" callback={() => props.search(input)} />
        </div>
    )
}

export default MySearchBar;