import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input, Select, Space, Cascader } from "antd";
import { Checkbox, Col, Row } from 'antd';

const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

export default function Update() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState(''); // Added state for type

  const [ramSize, setRamSize] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(false);
  const [sdata,setsdate]=useState()
  const [checkedValues, setCheckedValues] = useState([]);
  const params = useParams();

  const { Option } = Select;

  const collectdata = async () => {
    console.log('Title:', title);
    console.log('Brand:', brand);
    console.log('Type:', type);
    console.log('Ram Size:', ramSize);
    console.log('Price:', price);
    console.log('Features:', checkedValues);
  
    const formData = {
      name: title,
      brand: brand,
      type: type,
      ramSize: parseInt(ramSize), // Convert ramSize to a number
      price: parseFloat(price),   // Assuming price is a number
      features: checkedValues.map((value) => ({ name: value })),
    };
    
  
    console.log('Form Data:', formData);
  
    try {
      const result = await fetch(`https://bazar-pk-api-list.vercel.app/laptop/update/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (result.ok) {
        console.log('Data Updated successfully!');
        // Additional logic after successful data submission
      } else {
        console.error('Failed to Updated data:', result.status);
        // Additional error handling logic
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Additional error handling logic
    }
  
    // Clear form fields
   
  };
  
  useEffect(() => {
    const setProducts = async () => {
      try {
        let result = await fetch(`https://bazar-pk-api-list.vercel.app/laptop/update/${params.id}`, {
          method: 'GET',
        });
        result = await result.json();
  
        console.log('Result:', result);
        // Access properties directly on the object
        setTitle(result.name); // Assuming name is equivalent to title
        setBrand(result.brand);
        setRamSize(result.ramSize);
        setPrice(result.price);
        setType(result.type); // Corrected the function name
        setCheckedValues(result.features.map(feature => feature.name));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    setProducts(); // Call setProducts when the component mounts
  }, [params.id]);
  
  

  return (
    <div className="bg-white p-4">
      <h1 className="text-2xl font-semibold">We are in the product form</h1>

      <label className="block mt-4 font-semibold">Your Title Here</label>
      <input
        type="text"
        placeholder="Your Name Here"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className={`mt-2 p-2 border ${
          error && !title ? 'border-red-500' : 'border-gray-300'
        } rounded-md`}
      />
      {error && !title && (
        <span className="text-red-500">This field is required</span>
      )}

      <Form.Item
        label="Brand"
      >
        <Select placeholder="Select Type of Laptop"
          value={brand}
          onChange={(value) => setBrand(value)}
        >
          <Option value="Google">Google</Option>
          <Option value="Microsoft">Microsoft</Option>
          <Option value="MacBook">MacBook</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Type"
      >
        <Select placeholder="Select Type of Laptop"
          value={type}
          onChange={(value) => setType(value)}
        >
          <Option value="Ultrabooks">Ultrabooks</Option>
          <Option value="GamingLaptops">Gaming Laptops</Option>
          <Option value="BusinessLaptops">Business Laptops</Option>
          <Option value="Workstations">Workstations</Option>
          <Option value="Chromebooks">Chromebooks</Option>
        </Select>
      </Form.Item>

      <label>Features</label>
      <Checkbox.Group
        style={{
          width: '100%',
        }}
        value={checkedValues}
        onChange={(values) => setCheckedValues(values)}
      >
        <Row>
          <Col span={8}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>

      <Form.Item
        label='Ram Size'
      >
        <Select placeholder="Select RAM Size"
          value={ramSize}
          onChange={(value) => setRamSize(value)}
        >
          <Option value="4">4GB</Option>
          <Option value="8">8GB</Option>
          <Option value="16">16GB</Option>
          <Option value="32">32GB</Option>
          <Option value="64">64GB+</Option>
        </Select>
      </Form.Item>

      <label className="block mt-4 font-semibold">Your Price Here</label>
      <input
        type="text"
        placeholder="Your Price Here"
        required
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        className="mt-2 p-2 border border-gray-300 rounded-md"
      />

      <button
        type="submit"
        onClick={collectdata}
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}
