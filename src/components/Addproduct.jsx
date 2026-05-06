import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';
import Footer from './Footer';
import '../css/Addproducts.css'

const Addproducts = () => {

const [product_name, setProductName] = useState("");
const [product_description, setProductDescription] = useState("");
const [product_cost, setProductCost] = useState("");
const [product_photo, setProductPhoto] = useState("");

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const handleSubmit = async (e) =>{
  e.preventDefault()
  setLoading(true)

  try{
    const formdata = new FormData()

    formdata.append("product_name", product_name);
    formdata.append("product_description", product_description);
    formdata.append("product_cost", product_cost);
    formdata.append("product_photo", product_photo)

    const response = await axios.post(
      "https://victor.alwaysdata.net/api/add_product",
      formdata
    )

    setLoading(false)
    setSuccess(response.data.message)

    setProductName("");
    setProductDescription("");
    setProductCost("");
    setProductPhoto("");

  }
  catch(error){
    setLoading(false)
    setError(error.message)
  }
}

  return (

    <div className="addproducts-bg">

      <div className='container add-product-container'>
        <div className='row justify-content-center'>

          <div className="col-md-6 add-card">

            <h2 className="text-center mb-4">Add New Outfit</h2>

            {loading && <Loader />}

            <p className="text-success text-center">{success}</p>
            <p className="text-danger text-center">{error}</p>

            <form onSubmit={handleSubmit}>

              <input
              type="text"
              placeholder='Outfit Name'
              className='form-control input-style'
              required
              value={product_name}
              onChange={(e) => setProductName(e.target.value)}
              />

              <input
              type="text"
              placeholder='Outfit Description'
              className='form-control input-style'
              required
              value={product_description}
              onChange={(e) => setProductDescription(e.target.value)}
              />

              <input
              type="number"
              placeholder='Price'
              className='form-control input-style'
              required
              value={product_cost}
              onChange={(e) => setProductCost(e.target.value)}
              />

              <label className='photo-label'>Upload Outfit Photo</label>

              <input
              type="file"
              className='form-control input-style'
              required
              accept='image/*'
              onChange={(e) => setProductPhoto(e.target.files[0])}
              />

              <button className="btn submit-btn w-100">
                Add Outfit
              </button>

            </form>
          </div>

        </div>

        <Footer/>

      </div>

    </div>
  )
}

export default Addproducts;