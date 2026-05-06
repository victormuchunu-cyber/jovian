import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from './Loader'
import Footer from './Footer'
import '../css/Makepayment.css'
import { getImageUrl } from '../utils/imageHelper'

const Makepayment = () => {

  const location = useLocation()
  const product = location.state?.product

  const navigate = useNavigate()

  const [number, setNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  if (!product) {
    return <h2 className="text-danger">No product selected</h2>
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formdata = new FormData()
      formdata.append("phone", number)
      formdata.append("amount", product.product_cost)

      const response = await axios.post(
        "https://victor.alwaysdata.net/api/mpesa_payment",
        formdata
      )

      setLoading(false)
      setSuccess(response.data.message)
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  }

  return (
    <div className='payment-page'>
      <h1 className="text-success">Make Payment - Lipa Na Mpesa</h1>

      <div className="col-md-1">
        <input
          type="button"
          className='btn btn-primary'
          value="<- Back"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="col-md-6 card shadow p-4">

        {/* ✅ IMAGE FIXED HERE */}
        <img
          src={getImageUrl(product.product_photo)}
          alt={product.product_name}
          className='product_img'
        />

        <div className="card-body">
          <h2 className="text-info">{product.product_name}</h2>

          <p className="text-dark">{product.product_description}</p>

          <h3 className="text-warning">KES {product.product_cost}</h3>

          <form onSubmit={handlesubmit}>
            {loading && <Loader />}

            <h3 className="text-success">{success}</h3>
            <h4 className="text-danger">{error}</h4>

            <input
              type="number"
              className='form-control'
              placeholder='Enter phone number 254XXXXXXXX'
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />

            <br />

            <input
              type="submit"
              value="Make Payment"
              className='btn btn-success'
            />
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Makepayment;