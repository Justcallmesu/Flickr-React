import { useState } from "react";

// Base
import MySearchBar from "../Base/MySearchBar";

// Main
import ImageList from "./ImageList";

function MainContent() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="min-h-screen my-3 mx-10 flex flex-col gap-3">
            <MySearchBar />
            <ImageList page={currentPage} perpage={12} />
        </div>
    );
}

export default MainContent;