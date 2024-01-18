import { useEffect, useState } from "react";
import ReactLoading from "react-loading"

function Modal(props) {
    if (!props.id) props.setVisible(false)
    const [isLoading, setIsLoading] = useState(true);
    const [Imagedata, setImageData] = useState("");

    useEffect(() => {
        try {
            setIsLoading(true);
            fetch(`http://127.0.0.1:3000/images/${props.id}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setImageData(data.body);
                    setIsLoading(false);
                })
            return () => { }
        } catch (error) {
            console.error(error);
        }
    }, [props.id]);

    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="w-full h-full bg-gray-600 opacity-55 absolute -z-10" onClick={() => { props.setVisible(false) }}>
            </div>
            <div className="w-4/5 h-5/6 bg-white z-10 rounded-md overflow-hidden">
                {
                    isLoading ?
                        <div className="h-full w-full flex justify-center items-center flex-col">
                            <p className="font-semibold">Getting a Single Miracle...</p>
                            <ReactLoading type="spin" color="#F55145" height={50} width={50} />
                        </div>
                        :
                        <div className="w-full h-full flex flex-row">
                            <img src={Imagedata.url} alt="test" className="w-1/3 object-cover" />
                            <div className="w-full h-full px-5 py-5 flex flex-col gap-2">
                                <h1 className="text-5xl m-0">{Imagedata.title._content}</h1>
                                <div>
                                    <h4>Description</h4>
                                    <p>{!Imagedata.description._content ? "No Description" : Imagedata.description._content}</p>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Modal;