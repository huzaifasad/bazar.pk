import React, { useEffect, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Dashhome() {
  const [data, setData] = useState([]); // Set initial state as an empty array

  const fetchData = async () => {
    try {
      let result = await fetch('https://bazar-pk-api-list.vercel.app/laptop/get');
      result = await result.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
const handledelete=async(id)=>{
  // alert(id)
  let result=await fetch(`https://bazar-pk-api-list.vercel.app/laptop/delete/${id}`,{
    method:"delete"
  })
  result = await result.json();
  if (result) {
    fetchData();
  }
}
  return (
<>
<div className=' overflow-scroll hide-scroll-bar shadow-lg'>
  
<div class="grid text-black grid-cols-4 gap-4 p-5 ">
<div className='h-20 border hover:hover:text-white border-3 hover:bg-dark-blue transition-all duration-500   pt-6 pb-3 pl-6 pr-6 rounded-lg text-center text-2xl'>
  <h1 className='inline mr-3 hover:text-white'>Views 100</h1>

  <AiOutlineEye className='inline hover:text-white'/>
    
  </div>
  <div className='h-20 border hover:text-white  border-3 hover:bg-dark-blue transition-all duration-500   pt-6 pb-3 pl-6 pr-6 rounded-lg text-center text-2xl'>
  <h1 className='inline mr-3 hover:text-white '>Views 100</h1>

  <AiOutlineEye className='inline hover:text-white'/>
    
  </div>
  <div className='h-20 border border-3 hover:hover:text-white hover:bg-dark-blue transition-all duration-500   pt-6 pb-3 pl-6 pr-6 rounded-lg text-center text-2xl'>
  <h1 className='inline mr-3 hover:text-white'>Views 100</h1>

  <AiOutlineEye className='inline hover:text-white'/>
    
  </div>
  <div className='h-20 border border-3 hover:hover:text-white hover:bg-dark-blue transition-all duration-500   pt-6 pb-3 pl-6 pr-6 rounded-lg text-center text-2xl'>
  <h1 className='inline mr-3 hover:text-white'>Views 100</h1>

  <AiOutlineEye className='inline hover:text-white'/>
    
  </div>

  <div className="container mx-auto  ">
  <h1 className="text-2xl font-semibold mb-4 flex items-center justify-center">Product Listing</h1>

            <table className="min-w-full bg-white border border-gray-200 ">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Features</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.productQuantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.brand}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex}>{feature.name}</div>
                      ))}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/productdash/removeitem/${item._id}`}>
  <button className="text-indigo-600 hover:text-indigo-900">
    Edit
  </button>
</Link>
                      <button className="text-red-600 hover:text-red-900 ml-4" onClick={()=>handledelete(item._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

    
</div>

</div>
</>

    )
}
