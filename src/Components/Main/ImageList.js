import { useEffect, useRef, useState } from "react";

import ReactLoading from "react-loading"

function ImageList(props) {
    const [photosData, setPhotos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const imageList = useRef(null);
    useEffect(() => {
        try {
            setIsLoading(true);
            fetch(`http://127.0.0.1:3000/images?page=${props.page}&itemsPerPage=12&tags=${props.tags}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setPhotos(data.body);
                    props.setCurrentMax(data.body.pages);
                    setIsLoading(false);
                })
            return () => { }
        } catch (error) {
            console.error(error);
        }
    }, [props.page, props.tags]);

    function generatePhoto() {
        if (!photosData) return;
        const { photos } = photosData;
        const photosList = photos.map((e) => {
            return <img src={e.url} key={e.id} alt={e.title} width="200px" height="200px" className="object-cover cursor-pointer" onClick={() => {
                props.setImageId(e.id);
                props.setModalVisible(true);
            }} />
        });
        return photosList
    }

    return (
        <div className="w-full h-fit min-h-screen shadow-md shadow-gray-300 rounded-md flex flex-wrap gap-2 p-2 justify-center" ref={imageList}>
            {
                isLoading ?
                    <div className="h-screen w-screen flex justify-center items-center flex-col">
                        <p className="font-semibold">Getting Some Miracles...</p>
                        <ReactLoading type="spin" color="#F55145" height={50} width={50} />
                    </div>
                    : generatePhoto()
            }
        </div>
    )
}

export default ImageList;