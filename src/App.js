import React, { useState } from 'react';
import WishListformat from "./components/WishListformat";

function App() {
  const [wishlist, setWishList] = useState([]);

  return (
    <>
      <WishListformat wishlist={wishlist} setWishList={setWishList} />
    </>
  );
}

export default App;

