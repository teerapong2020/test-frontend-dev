import { useEffect, useState } from "react";

export default function CRUD() {
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);
  const [product,setProduct] =useState([])

  useEffect(()=>{
    const storedProducts = JSON.parse(localStorage.getItem("product")) || [];
    setProduct(storedProducts);
  },[])

  const handleAdd=(e)=>{
    e.preventDefault()
    setDetail("")
    setPhoto("")
    setPrice(0)
    setTitle("")
    const newProduct = {title,detail,photo,price}
    setProduct([...product,newProduct])
    localStorage.setItem("",JSON.stringify([...product,newProduct]))
  }

  const upload=(e)=>{
    const images = e.target.files[0]
    const checkflie = ["image/jpg","image/png","image/jpeg"]
    if(!checkflie.includes(images.type) || !images){
        return
    }
    setPhoto(URL.createObjectURL(images))
  }

  return (
    <div>
      <div className="flex flex-col">
        <label>title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label>Product Picture</label>
        <input
          type="file"
          onChange={upload}
          required
        />
        <label>description</label>
        <input type="text" value={detail} onChange={(e)=>setDetail(e.target.value)}></input>
        <label>price</label>
        <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
      </div>
      <button onClick={handleAdd}>Add product</button>
      {/* After Add */}
      
      <div >
        {product.map((product,index)=>(
            <>
            <div key={index}>
                <p>  {product.title}</p>
                <img src={product.photo}></img>
                <p>  {product.detail}</p>
                <p> {product.price}</p>
            </div><button>edit</button>
            <button>delete</button>
            </>
        ))}
      </div>
    </div>
  );
}
