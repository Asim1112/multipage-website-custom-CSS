import React from 'react'
import Image from "next/image";

const Watches = () => {

  const watchData = [
    {id: 1, name: "Rolex", price: 1350, description: "Rolex Submariner", image: "/rolex.jpg"},
    {id: 2, name: "Citizen", price: 1130, description: "Breitling Navitimer", image: "/citizen.jpg"},
    {id: 3, name: "Omega", price: 1023, description: "Festina Chrono Bike", image: "/omega.jpg"},
    {id: 4, name: "Fortis", price: 1247, description: "Fortis Flieger", image: "/rolex.jpg"},
    {id: 5, name: "MVMTH", price: 1049, description: "MVMT Chrono", image: "/mvmth.jpg"},
    {id: 7, name: "Zeppelin", price: 1195, description: "Zeppelin LZ 129 Hindenburg", image: "/zeppelin.jpg"},
  ]
  return (
    <div>
          <div className="watches">
            {watchData.map((watch) => (
                <div key={watch.id} className="watch-card">  
                  <Image 
                  src={watch.image} 
                  alt={watch.name} 
                  width={500}
                  height={500}
                  priority
                />
                  <h3>{watch.name}</h3>
                  <p>{watch.description}</p>
                  <div className="price">${watch.price}</div>
                  <button>Add to Cart</button>
                  
                  </div>
            ))}
          </div>
    </div>
  )
}

export default Watches
