import React from "react";
import axios from "axios";

const AddProducts = () => {
    const titleRef = React.createRef();
    const desRef = React.createRef();
    const priceRef = React.createRef();
    const [file, setFile] = React.useState();

    const SendData = (e) => {
        e.preventDefault();

        const dataValue = {
            title: titleRef.current.value,
            des: desRef.current.value,
            price: priceRef.current.value
        }

        const formData = new FormData();
        formData.append("data",JSON.stringify(dataValue));
        formData.append("file",file);

        axios({
            url: "http://127.0.0.1:8000/product",
            method: "post",
            data: formData
        }).then(function(response) {
            console.log(response);
        });
    }

    return (
        <div className="container bg-dark p-3">
            <h2 className="ml-0"><i className="fa-solid fa-plus"></i> Add New Product</h2>

            <form>
                <div className="form-group">
                    <label htmlFor="productTitle">Title</label>
                    <input type="text" className="form-control" ref={titleRef} id="productTitle" aria-describedby="productTitleHelp" />
                </div>

                <div className="form-group">
                    <label htmlFor="productDescription">Description</label>
                    <textarea className="form-control" ref={desRef}></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="Price">Price</label>
                    <input type="number" className="form-control" ref={priceRef} id="Price" aria-describedby="productPriceHelp" />
                </div>
                
                <label htmlFor="ChooseFile">Choose File</label>
                <div className="custom-file">
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control custom-file-input" id="customFile" />
                    <label className="custom-file-label cursor-pointer" htmlFor="customFile">Choose file</label>
                </div>
                <br/>
                <br/>
                <button type="submit" className="btn btn-primary" onClick={SendData}>Submit</button>
            </form>
        </div>
    );
};

export default AddProducts;