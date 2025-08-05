import React from 'react'
import cloud from '../assets/cloud.png'; 
import swift from '../assets/swift 1.png';
import cloud2 from '../assets/cloud2.png';
const Card = () => {
  const cards = [
    {
      image: cloud,
      title: "Cloud Computing Course",
      h1: "Mastering core cloud computing fu..",
      name: "Kinsi Ali",
      status: "Free",
      button: "Development",
      rating: '5.0',
      stars: <svg width="91" height="15" viewBox="0 0 91 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.23421L7.5 0L5.3925 5.23421L0 5.71579L4.095 9.45L2.865 15L7.5 12.0553Z" fill="#FF9100"/>
        <path d="M26.5 12.0553L31.135 15L29.905 9.45L34 5.71579L28.6075 5.23421L26.5 0L24.3925 5.23421L19 5.71579L23.095 9.45L21.865 15L26.5 12.0553Z" fill="#FF9100"/>
        <path d="M45.5 12.0553L50.135 15L48.905 9.45L53 5.71579L47.6075 5.23421L45.5 0L43.3925 5.23421L38 5.71579L42.095 9.45L40.865 15L45.5 12.0553Z" fill="#FF9100"/>
        <path d="M64.5 12.0553L69.135 15L67.905 9.45L72 5.71579L66.6075 5.23421L64.5 0L62.3925 5.23421L57 5.71579L61.095 9.45L59.865 15L64.5 12.0553Z" fill="#FF9100"/>
        <path d="M83.5 12.0553L88.135 15L86.905 9.45L91 5.71579L85.6075 5.23421L83.5 0L81.3925 5.23421L76 5.71579L80.095 9.45L78.865 15L83.5 12.0553Z" fill="#FF9100"/>
        </svg>

    },
     {
      image: swift,
      title: "Cloud Computing Course",
      h1: "Mastering core cloud computing fu..",
      name: "Kinsi Ali",
      status: "Free",
      button: "Development",
      rating: '5.0',
      stars: <svg width="91" height="15" viewBox="0 0 91 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.23421L7.5 0L5.3925 5.23421L0 5.71579L4.095 9.45L2.865 15L7.5 12.0553Z" fill="#FF9100"/>
        <path d="M26.5 12.0553L31.135 15L29.905 9.45L34 5.71579L28.6075 5.23421L26.5 0L24.3925 5.23421L19 5.71579L23.095 9.45L21.865 15L26.5 12.0553Z" fill="#FF9100"/>
        <path d="M45.5 12.0553L50.135 15L48.905 9.45L53 5.71579L47.6075 5.23421L45.5 0L43.3925 5.23421L38 5.71579L42.095 9.45L40.865 15L45.5 12.0553Z" fill="#FF9100"/>
        <path d="M64.5 12.0553L69.135 15L67.905 9.45L72 5.71579L66.6075 5.23421L64.5 0L62.3925 5.23421L57 5.71579L61.095 9.45L59.865 15L64.5 12.0553Z" fill="#FF9100"/>
        <path d="M83.5 12.0553L88.135 15L86.905 9.45L91 5.71579L85.6075 5.23421L83.5 0L81.3925 5.23421L76 5.71579L80.095 9.45L78.865 15L83.5 12.0553Z" fill="#FF9100"/>
        </svg>

    },
     {
      image: cloud2,
      title: "Cloud Computing Course",
      h1: "Mastering core cloud computing fu..",
      name: "Kinsi Ali",
      status: "Free",
      button: "Development",
      rating: '5.0',
      stars: <svg width="91" height="15" viewBox="0 0 91 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.23421L7.5 0L5.3925 5.23421L0 5.71579L4.095 9.45L2.865 15L7.5 12.0553Z" fill="#FF9100"/>
        <path d="M26.5 12.0553L31.135 15L29.905 9.45L34 5.71579L28.6075 5.23421L26.5 0L24.3925 5.23421L19 5.71579L23.095 9.45L21.865 15L26.5 12.0553Z" fill="#FF9100"/>
        <path d="M45.5 12.0553L50.135 15L48.905 9.45L53 5.71579L47.6075 5.23421L45.5 0L43.3925 5.23421L38 5.71579L42.095 9.45L40.865 15L45.5 12.0553Z" fill="#FF9100"/>
        <path d="M64.5 12.0553L69.135 15L67.905 9.45L72 5.71579L66.6075 5.23421L64.5 0L62.3925 5.23421L57 5.71579L61.095 9.45L59.865 15L64.5 12.0553Z" fill="#FF9100"/>
        <path d="M83.5 12.0553L88.135 15L86.905 9.45L91 5.71579L85.6075 5.23421L83.5 0L81.3925 5.23421L76 5.71579L80.095 9.45L78.865 15L83.5 12.0553Z" fill="#FF9100"/>
        </svg>

    },
  ]
  return (
    <div>
      <div className="flex items-center gap-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-white w-[400px] h-[488] shadow-lg overflow-hidden rounded-3xl border-[1px] border-[#0000001C] shadow-[#00000040]">
            <img src={card.image} alt="" className='overflow-hidden w-full'/>
            <div className='px-3 py-5'>
                <h2 className="text-xl font-semibold">{card.title}</h2>
            <h1 className="text-2xl font-bold">{card.h1}</h1>
            <div className='flex items-center ml-auto mt-4'>
              <p className="text-lg">{card.name}</p>
              <p className="text-lg ml-auto">{card.status}</p>
            </div>
            <div className="flex  mt-4">
               <button className="bg-blue-500 text-white px-4 py-2 rounded">{card.button}</button>
               <p className='flex items-center gap-2 ml-auto'>{card.rating}<span className="ml-">{card.stars}</span></p>
              
            
            </div>
            </div>
           
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Card