import { useState } from "react";

// Base
import MySearchBar from "../Base/MySearchBar";
import MyPagination from "../Base/MyPagination";

// Main
import ImageList from "./ImageList";

function MainContent() {
    const [currentPage, setCurrentPage] = useState(1);
    const [tags, setCurrentTags] = useState("");

    const [maxPage, setCurrentMax] = useState(1)
    function pageInputChange({ target }) {
        setCurrentPage(parseInt(target.value));
    }

    function setNewSearchInput(value) {
        setCurrentTags(value);
    }

    function setNewMax(value) {
        setCurrentMax(value);
    }

    function handlePageChange(value) {
        if (currentPage + value <= 0) return;
        setCurrentPage(parseInt(currentPage) + value);
    }

    function handleTagsChange(value) {
        setCurrentPage(1);
        setCurrentTags(value);
    }

    return (
        <div className="min-h-screen my-3 mx-10 flex flex-col gap-3">
            <MySearchBar search={handleTagsChange} searchInput={tags} setNewSearch={setNewSearchInput} />
            <ImageList page={currentPage} tags={tags} setCurrentMax={setNewMax} />
            <MyPagination currentPage={currentPage} handlePageChange={handlePageChange} pageInputChange={pageInputChange} maxPage={maxPage} />
        </div>
    );
}

export default MainContent;