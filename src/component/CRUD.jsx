import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CRUD() {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("")) || [];
    setProduct(storedProducts);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title || !photo || price <= 0 || !detail) {
      window.alert("request all field");
      return;
    }
    const priceWithoutZero = parseInt(price, 10);
    const newProduct = {
      title,
      detail,
      photo,
      price: priceWithoutZero,
      isDeleted: false,
    };
    if (edit != null) {
      const updateProduct = [...product];
      updateProduct[edit] = newProduct;
      setProduct(updateProduct);
      localStorage.setItem("", JSON.stringify(updateProduct));
      setEdit(null);
    } else {
      setProduct([...product, newProduct]);
      localStorage.setItem("", JSON.stringify([...product, newProduct]));
    }
    setDetail("");
    setPhoto("");
    setPrice(0);
    setTitle("");
  };

  const upload = (e) => {
    const images = e.target.files[0];
    const checkflie = ["image/jpg", "image/png", "image/jpeg"];
    if (!checkflie.includes(images.type) || !images) {
      window.alert("type only jpg png jpeg");
      return;
    }
    setPhoto(URL.createObjectURL(images));

    const imageURL = URL.createObjectURL(images);
    setPhoto(imageURL);
  };

  const handleDelete = (index) => {
    const updatedProducts = product.filter((_, i) => i !== index);
    setProduct(updatedProducts);
    localStorage.setItem("", JSON.stringify(updatedProducts));
  };

  const handleEdit = (index) => {
    const productEdit = product[index];
    setTitle(productEdit.title);
    setDetail(productEdit.detail);
    setPhoto(productEdit.photo);
    setPrice(productEdit.price);
    setEdit(index);
  };

  return (
    <div>
      <button className="bg-black">
        <Link to={"/"} className="text-white text-5xl">
          หน้าหลัก
        </Link>
      </button>
      <div className="flex justify-around">
        <div className="flex flex-col gap-4">
          <label>title</label>
          <input
            className="border-2 border-black"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Product Picture</label>
          <input type="file" onChange={upload} required />
          <img src={photo} width={"150px"}></img>
          <label>description</label>
          <input
            className="border-2 border-black"
            type="text"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          ></input>
          <label>price</label>
          <input
            className="border-2 border-black"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 text-2xl mx-4 rounded-lg"
          >
            {edit != null ? "Update" : "Add"}
          </button>
        </div>
        {/* After Add */}

        <div className="bg-gray-500 w-1/2">
          <label className="text-white text-3xl flex justify-center">
            show product
          </label>
          <div className="flex justify-center overflow-x-auto space-x-4">
            {product.map((product, index) => (
              <div
                key={index}
                className="flex flex-col bg-white w-1/4 p-4 shadow-md rounded-lg"
              >
                <p className="text-lg font-bold">{product.title}</p>
                <div className="w-[150px] h-[150px]  flex items-center justify-center">
                  <img
                    src={product.photo}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600">{product.detail}</p>
                <p className="text-lg font-semibold text-green-600">
                  {product.price} THB
                </p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md text-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
