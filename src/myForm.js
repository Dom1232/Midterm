import React, { useState } from 'react';
import './myForm.css';

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleChangeNum = (e) => {
        const { name, value } = e.target;
      
        // Ensure the value is numeric
        if (!isNaN(value) || value === '') {
          setFormData({
            ...formData,
            [name]: value,
          });
        } else {
          console.error(`Invalid numeric input for ${name}: ${value}`);
        }
      };


    const handleCancel = () => {
        setFormData({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: '',
        });
    };

    return (
    <form className="form">
        <div className="form-group">
            <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            />
        </div>

        <div className="form-group">
            <input
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            />
        </div>

        <div className="form-group">
            <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
            />
        </div>

        <div className="form-group">
            <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChangeNum}
            placeholder="Quantity"
            required
            />
        </div>

        <div className="form-group">
            <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChangeNum}
            placeholder="Price"
            required
            />
        </div>

        <button className="submit" type="submit">Submit</button>
        <button className="cancel" type="button" onClick={handleCancel}>Cancel</button>
        </form>
    );
};

export default MyForm;