import React from 'react';
import "./wish.css";

function WishListformat({ wishlist, setWishList }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Push the new wish to the wishlist array
    setWishList([...wishlist, e.target.elements.wish.value]);
    // Clear the input field after submitting
    e.target.elements.wish.value = '';
  };

  const handleDelete = (index) => {
    const updatedList = wishlist.filter((_, i) => i !== index);
    setWishList(updatedList);
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}> 
            <label htmlFor="wish">Wish: </label>
            <input type="text" id="wish" className='inp' />
            <button type="submit" className="btn btn-light">Update</button>
            <button type="button" className="btn btn-light" onClick={() => setWishList([])}>Clear All</button>
          </form>
        </div>
      </div>
      <div className="list">
        <h1>WishList:</h1>
        <ul>
          {wishlist.map((wish, index) => (
            <li key={index}>
              {wish}
              
              <button onClick={() => handleDelete(index)} type="button" class="btn btn-danger">Delete</button>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WishListformat;



