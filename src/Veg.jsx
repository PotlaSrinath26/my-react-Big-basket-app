import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Veg.css';
import { AddToCart } from './store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Veg() {
  const Vegproducts = useSelector(globalState => globalState.products.Veg);
  const dispatch = useDispatch();

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRanges, setSelectedRanges] = useState([]);

  // Generate price ranges
  const prices = Vegproducts.map(product => product.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const step = 50;

  const priceRanges = [];
  for (let i = Math.floor(minPrice / step) * step; i <= maxPrice; i += step) {
    priceRanges.push({
      label: `₹${i} - ₹${i + step - 1}`,
      min: i,
      max: i + step - 1
    });
  }

  // Handle checkbox change
  const handleRangeChange = (range) => {
    const isSelected = selectedRanges.some(
      r => r.min === range.min && r.max === range.max
    );
    if (isSelected) {
      setSelectedRanges(selectedRanges.filter(r => r.min !== range.min || r.max !== range.max));
    } else {
      setSelectedRanges([...selectedRanges, range]);
    }
    setCurrentPage(1); // reset to page 1 on filter change
  };

  // Filter products based on selected ranges
  const filteredProducts =
    selectedRanges.length === 0
      ? Vegproducts
      : Vegproducts.filter(product =>
          selectedRanges.some(range => product.price >= range.min && product.price <= range.max)
        );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const VeglistItems = currentItems.map((product, index) => (
    <li key={index} className="veg-card">
      <img src={product.image} alt={product.name} className="veg-image" />
      <div className="veg-details">
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => {
            dispatch(AddToCart(product));
            toast.success(`${product.name} added to cart!`);
          }}
        >
          Add to Cart
        </button>
      </div>
    </li>
  ));

  return (
    <div className="veg-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <h2>&#129001; Veg Items</h2>

      {/* Price Range Checkboxes */}
      <div className="price-ranges">
        <h4>Filter by Price</h4>
        {priceRanges.map((range, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedRanges.some(r => r.min === range.min && r.max === range.max)}
              onChange={() => handleRangeChange(range)}
            />
            {range.label}
          </label>
        ))}
      </div>

      {/* Product List */}
      <ul className="veg-list">{VeglistItems}</ul>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Veg;
