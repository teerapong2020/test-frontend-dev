import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("")) || [];
    setProduct(storedProducts);

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.title === item.title
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
        <button className="bg-black">
            <Link to={"/"} className="text-white text-3xl rounded-lg p-4">กลับหน้าหลัก</Link>
        </button>
      <div className="flex justify-around mt-10">
        {/* Store */}
        <div className="w-1/2 bg-gray-100 p-4">
          <h2 className="text-2xl font-bold">Store</h2>
          <div className="grid grid-cols-2 gap-4">
            {product.map((item, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                <p className="text-lg font-bold">{item.title}</p>
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-40 object-contain"
                />
                <p className="text-sm text-gray-600">{item.detail}</p>
                <p className="text-lg font-semibold text-green-600">
                  {item.price} THB
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div className="w-1/3 bg-gray-300 p-4">
          <h2 className="text-2xl font-bold flex justify-between">
            Cart <span className="text-red-600">{cart.length} list</span>
          </h2>
          <div className="space-y-4 mt-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-md shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm">PRICE: {item.price} THB</p>
                  <p className="text-sm font-semibold text-green-600">
                    Total: {item.price * item.quantity} THB
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-lg"
                  >
                    -
                  </button>
                  <p className="mx-3">{item.quantity}</p>
                  <button
                    onClick={() => increaseQuantity(index)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* แสดงราคารวมทั้งหมด */}
          <div className="text-right text-xl font-bold mt-4">
            Total Price: <span className="text-red-600">{totalPrice} THB</span>
          </div>
        </div>
      </div>
    </div>
  );
}
