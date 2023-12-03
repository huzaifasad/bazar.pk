// UpdateAccount component
import React, { useState } from 'react';

const UpdateAccount = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:1000/user/delete-account`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: inputValue }), // Use 'email' instead of 'username'
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Account deleted successfully
        setMessage('Account deleted successfully');
        setInputValue(''); // Reset the input value
        alert('Account deleted successfully'); // You can also use alert
      } else if (result.message === 'User not found') {
        // User not found
        setMessage('User not found');
      } else {
        // Other error
        setMessage(`Error: ${result.message}`);
        console.error('Failed to delete account. Server response:', result.message);
      }
    } catch (error) {
      console.error('Error during account deletion:', error);
    }
  };
  

  return (
    <div className='flex justify-center items-center ml-3'>
      <label>
        Enter Your Name or Email Here:
        <input
          type='text'
          className='flex p-3 m-3 border'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button
        className='px-2 py-3 border mt-2 bg-blue-gray-900 text-white'
        onClick={handleDelete}
      >
        Delete Your Account
      </button>
      <div>{message && <p>{message}</p>}</div>
    </div>
  );
};

export default UpdateAccount;
