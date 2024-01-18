import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons"

// Base
import Button from "./Button.js"
import { useEffect } from "react";

function MyPagination(props) {
    function getCurrentPage() {
        console.log(props.currentPage)
        return props.currentPage;
    }

    useEffect(() => {
    }, [props.currentPage])

    return (
        <div className="flex justify-end gap-3">
            <input type="number" className="border-solid border-2 w-full sm:w-20 border-gray-500 rounded-sm px-2 focus:outline-none" min="1" max="200" value={props.currentPage} onChange={props.pageInputChange} />
            <div className="flex gap-2">
                <Button text={<CaretLeftFill />} callback={() => props.handlePageChange(-1)} disabled={props.currentPage <= 1} />
                <Button text={<CaretRightFill />} callback={() => props.handlePageChange(1)} />
            </div>
        </div>
    )
}

export default MyPagination;