import { useEffect, useState } from "react";

function ImageList(props) {
    const [photosData, setPhotos] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        try {
            setIsLoading(true);
            fetch(`http://127.0.0.1:3000/images?page${props.page}&itemsPerPage=12`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setPhotos(data.body);
                })
            setIsLoading(false);
            return () => { }
        } catch (error) {
            console.error(error);
        }
    }, [props.page]);

    function generatePhoto() {
        if (!photosData) return;
        const { photos } = photosData;
        const photosList = photos.map((e) => {
            return <img src={e.url} key={e.id} alt={e.title} width="200px" height="200px" className="object-cover" />
        });
        return photosList
    }

    return (
        <div className="w-full h-fit min-h-screen shadow-md shadow-gray-300 rounded-md flex flex-wrap gap-2 p-2 justify-center">
            {
                isLoading ? <h1>Loading...</h1> : generatePhoto()
            }
        </div>
    )
}

export default ImageList;