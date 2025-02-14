import { Link } from "react-router-dom"

export default function App() {
  return (
    <div>
     <div className="flex flex-col">
     <Link to={"/formvalidate"}>formvalidate</Link>
      <Link to={"/theme"}>theme</Link>
      <Link to={"/CRUD"}>CRUD</Link>
     </div>
    </div>
  )
}
