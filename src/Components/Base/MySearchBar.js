import { useState } from "react";

// Base
import Button from "../Base/Button.js";

function MySearchBar() {
    const [searchInput, setSearchInput] = useState("");

    function handleSearchInputChange({ target }) {
        setSearchInput(target.value);
    }

    return (
        <div className="w-full flex-col sm:flex-row flex justify-center items-center gap-2">
            <h4 className="text-md m-0">Search</h4>
            <input type="text" value={searchInput} onChange={handleSearchInputChange} className="border-solid border-2 w-full sm:w-1/3 border-gray-500 rounded-sm px-2 focus:outline-none" />
            <Button text="Search" type="search" />
        </div>
    )
}

export default MySearchBar;