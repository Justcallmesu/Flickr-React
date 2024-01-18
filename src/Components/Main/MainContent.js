// Base
import MySearchBar from "../Base/MySearchBar";

// Main
import ImageList from "./ImageList";

function MainContent() {
    return (
        <div className="h-full my-3 mx-10 flex flex-col gap-3">
            <MySearchBar />
            <ImageList />
        </div>
    );
}

export default MainContent;