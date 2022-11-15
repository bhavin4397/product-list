import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";



const Data = () => {

    const [productData, setProductData] = useState({})
    const [images, setImages] = useState([]);

    const { pathname } = useLocation()
    const { id } = useParams();


    useEffect(() => {
        initialFun()
        console.log(id)
        console.log(pathname)
        setImages(productData.gallery)

    }, [])

    async function initialFun() {
        let ans = await axios.get(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=`)
        let data = await ans.data.result

        setProductData(data.products[id])
    }

    console.log(images)


    // return (
    //     <div>
    //         <div className="mt-3 mb-3 ml-auto mr-auto"  >
    //             <div className="row g-0">
    //             <div className="col-md-1"></div>
    //             <div className="col-md-5">
    //                     <img src={images[0].image} className="img-fluid rounded-start" alt="..."/>
    //                 </div>
    //                 <div className="col-md-5">
    //                     <div className="card-body">
    //                         <h5 className="card-title">Card title</h5>
    //                         <hr/>
    //                         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //                         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
        <div>
            <div className="mt-3 mb-3 ml-auto mr-auto"  >
                <div className="row g-0">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                       
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <hr />
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data;