import React from 'react'
import Image1 from "/src/News/Image1.jpg";
import Image2 from "/src/assets/News/Image2.jpg";
import Image3 from "/src/assets/News/Image3.jpg";
const NewsData = [

    {
        id: 1,
        img: Image1,
        title: "Stand-Alone Genomic Test for Holstein Recessive BLIRD",
        description: "Livestock genomic testing leader and innovator, Genetic Visions-ST™, has developed a commercially available genomic test for a newly identified Holstein recessive Bovine Lymphocyte Intestinal Retention Defect (BLIRD). ",
    },
    {
        id: 2,
        img: Image2,
        title: "Genetic Visions-ST™ Offers Exclusive Test for Slick Gene",
        description: "Genetic Visions-ST™ is excited to announce they will offer an exclusive test for the Slick gene to their three genetic testing packages, Vision+75™, Vision+50™ and Vision+20™",
    },
    {
        id: 3,
        img: Image3,
        title: "Colored Breeds Specialist Catalog - August 2024",
        description: "The strength and diversity of the STgenetics Colored Breeds lineup continues in the August 2024 Colored Breeds Specialist Catalog!",
    }


]

function News() {
    return (
        <div className='bg-primary/80 '>
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px]mx-auto mt-5">
                    <h1 data-aos="fade-up" className="text-5xl font-bold text-white">News</h1>
                </div>
                {/* Body Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 place-items-center">
                    {NewsData.map((data, index) => (
                        <div
                            data-aos="zoom-in"
                            className="max-w-[400px] rounded-2xl bg-white hover:bg-pink-400 hover:text-white relative shadow-xl duration-300 group"
                        >
                            <div className="mt-20">
                                <img
                                    src={data.img}
                                    alt=""
                                    className="max-w-[300px] block mx-auto transform -translate-y-24 group-hover:scale-105 duration-300 drop-shadow-md rounded-lg"
                                />
                            </div>
                            {/* Details Section */}
                            <div className="p-4 text-center -mt-20">
                                <h1 className="text-xl font-bold">
                                    {data.title}
                                </h1>
                                <div className='mt-5'>
                                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                    <div className='space-x-4'>
                                        <button className='bg-secondary hover;scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary font-semibold'>
                                            Read More
                                        </button>
                                        <button className='bg-secondary hover;scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary font-semibold'>
                                            Open File
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News