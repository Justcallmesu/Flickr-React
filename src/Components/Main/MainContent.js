import { useState } from "react";

// Logo
import Logo from "../../Assets/Logo.png"

// Base
import MySearchBar from "../Base/MySearchBar";
import MyPagination from "../Base/MyPagination";

// Main
import ImageList from "./ImageList";
import Modal from "./Modal.js";

function MainContent() {
    const [currentPage, setCurrentPage] = useState(1);
    const [tags, setCurrentTags] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [imageId, setImageId] = useState(null);

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

    function handleSetID(value) {
        setImageId(value);
    }

    function setModalVisible(value) {
        if (!value) setImageId(null);
        setIsModalVisible(value);
    }

    return (
        <div className="min-h-screen my-3 mx-10 flex flex-col gap-3">
            {isModalVisible ? <Modal setVisible={setModalVisible} id={imageId} /> : ""}
            <div className="w-full flex flex-col items-center justify-center">
                <img src={Logo} width="100px" alt="Logo" />
                <h3 className="m-0 text-center">Find Your Favourite Images</h3>
                <p className="m-0 text-center">Free, High Quality Images</p>
            </div>
            <MySearchBar search={handleTagsChange} searchInput={tags} setNewSearch={setNewSearchInput} />
            <ImageList page={currentPage} tags={tags} setCurrentMax={setNewMax} setImageId={handleSetID} setModalVisible={setModalVisible} />
            <MyPagination currentPage={currentPage} handlePageChange={handlePageChange} pageInputChange={pageInputChange} maxPage={maxPage} />
        </div>
    );
}

export default MainContent;