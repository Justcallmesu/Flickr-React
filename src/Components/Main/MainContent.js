import { useState } from "react";

// Base
import MySearchBar from "../Base/MySearchBar";
import MyPagination from "../Base/MyPagination";

// Main
import ImageList from "./ImageList";

function MainContent() {
    const [currentPage, setCurrentPage] = useState(1);
    const [tags, setCurrentTags] = useState("");

    function pageInputChange({ target }) {
        setCurrentPage(parseInt(target.value));
    }

    function handlePageChange(value) {
        if (currentPage + value <= 0) return;
        setCurrentPage(parseInt(currentPage) + value);
    }

    function handleTags(value) {

    }

    return (
        <div className="min-h-screen my-3 mx-10 flex flex-col gap-3">
            <MySearchBar />
            <ImageList page={currentPage} perpage={12} />
            <MyPagination currentPage={currentPage} handlePageChange={handlePageChange} pageInputChange={pageInputChange} />
        </div>
    );
}

export default MainContent;