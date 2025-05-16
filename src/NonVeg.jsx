import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Veg.css'; // Reuse styles
import { AddToCart } from './store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NonVeg() {
  const NonVegproducts = useSelector(globalState => globalState.products.NonVeg);
  const dispatch = useDispatch();

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = NonVegproducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(NonVegproducts.length / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nonVegListItems = currentItems.map((product, index) => (
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
      <h2>&#128997; NonVegetable Items</h2>
      <ul className="veg-list">{nonVegListItems}</ul>

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

export default NonVeg;
