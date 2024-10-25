import React from 'react'

const ProductsData = [
    {
        id: 1,
        img: "/gallery/Products/geneStream.jpg",
        title: "geneStream"
    },
    {
        id: 2,
        img: "/gallery/assets/Products/Chromosome.png",
        title: "Chromosomal Mating"
    },
    {
        id: 3,
        img: "/gallery/assets/Products/Strategy.png",
        title: "STrategy"
    },

]

function Products() {
    return (
<div className="container">
  {/* Header Section */}
  <div className="text-center mb-10 max-w-[1200px] mx-auto mt-5">
    <h1 data-aos="fade-up" className="text-5xl font-bold text-secondary">Genetic Services</h1>

    {/* Body Section */}
    <div className="grid grid-cols-1 md:grid-cols-[repeat(3,1fr)] gap-5">
      {ProductsData.map((data, index) => (
        <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            key={data.id}
            className="space-y-3"
        > 
          <img
            src={data.img}
            alt=""
            className="w-full object-cover h-[300px] rounded-lg mt-5 shadow-lg"
          />
          <h3 className="font-semibold mt-2 text-center"> 
            {data.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</div>



    )
}

export default Products