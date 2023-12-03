import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Add from '../Listing/Add';
import Remove from '../Listing/Remove';
import Dashhome from '../MainPages/Dashhome';
import { AudioOutlined } from '@ant-design/icons';

import { Input, Space } from 'antd';
import Update from '../Listing/Update';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
export default function HomeDash() {
  return (
    <>
      <div className='flexrow '>
        <div className='h-screen'>
         <Sidebar/>
        </div>
           
           <div className='h-screen'>
            <div className='flex mt-7 ml-10 h-[5%]'>
            <div className='ml-10'><h2>kharedo</h2></div>

            <div className='w-80 '>
    <Search className='w-full ml-40'
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    </div>

    </div>
        <div className='p-5 pt-20  h-[60%] '> 
        
       
          <Routes>
          <Route index element={<Dashhome/>} />
      
           <Route exact path='/additem' element={<Add/>}/>
           <Route path="removeitem/:id" element={<Update />} />

          </Routes>
        </div>
        </div>
      </div>

    
       
      
    </>
  );
}
