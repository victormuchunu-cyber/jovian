import React from "react";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../utils/imageHelper";

const kidsClothes = [
  {
    id: 1,
    name: "Classic Knit Hoodie",
    price: "1200",
    age: "3-6 years",
    description: "Soft warm hoodie perfect for cold mornings and casual wear.",
    image: "/images/classic knit hoodie for kids.jpg"
  },
  {
    id: 2,
    name: "Mini Denim Overalls",
    price: "1500",
    age: "2-5 years",
    description: "Stylish denim overalls with adjustable straps for comfort.",
    image: "/images/mini denim overalls.jpg"
  },
  {
    id: 3,
    name: "Soft Cotton Dress",
    price: "1300",
    age: "4-8 years",
    description: "Lightweight cotton dress ideal for daily wear and parties.",
    image: "/images/soft cotton dress.jpg"
  },
  {
    id: 4,
    name: "Premium Sport Set",
    price: "1400",
    age: "5-10 years",
    description: "Breathable sports outfit designed for active kids.",
    image: "/images/premium sports set kids.jpg" 
  },
  {
    id: 5,
    name: "Winter Puffer Jacket",
    price: "2200",
    age: "6-12 years",
    description: "Thick insulated jacket to keep kids warm during winter.",
    image: "/images/winter puffer jacket kids.jpg"
  },
  {
    id: 6,
    name: "Casual Summer Set",
    price: "1100",
    age: "3-7 years",
    description: "Light breathable summer outfit perfect for hot days.",
    image: "/images/casual summer set kids.jpg"
  }
];

function Children() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4 text-uppercase">
        Kids Collection
      </h2>

      <div className="row">

        {kidsClothes.map((item) => (
          <div key={item.id} className="col-md-6 mb-4">

            <div className="card shadow-sm h-100 p-3 text-center">

              {/* IMAGE */}
              <div style={{ overflow: "hidden", borderRadius: "10px" }}>
  <img
    src={getImageUrl(item.image)}
    alt={item.name}
    className="img-fluid w-100"
    style={{
      height: "280px",
      objectFit: "cover"
    }}
  />
</div>


              <h5 className="text-uppercase">{item.name}</h5>
              <p className="fw-bold">Ksh {item.price}</p>
              <small className="text-muted">{item.age}</small>

              <p className="text-muted">{item.description}</p>

              <button
                className="btn btn-dark mt-2"
                onClick={() =>
                  navigate("/makepayment", {
                    state: {
                      product: {
                        product_name: item.name,
                        product_description: item.description,
                        product_cost: item.price,
                        product_photo: item.image
                      }
                    }
                  })
                }
              >
                Purchase
              </button>

            </div>
          </div>
        ))}

      </div>
   

   
   
    </div>
  );
}

export default Children;