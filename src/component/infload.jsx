import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Infload() {
    const [poke, setPoke] = useState([]); 
    const [page, setPage] = useState(0);  
    const [loading, setLoading] = useState(false);  
    const amount = 10;  

    const fetchPokemon = async () => {
        setLoading(true);  
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * amount}&limit=${amount}`);
            const data = await res.json();
            setPoke(prev => [...prev, ...data.results]);  
        } catch (error) {
            console.error("fetch error", error);
        }
        setLoading(false); 
    };

    useEffect(() => {
        fetchPokemon();
    }, [page]);  


    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if (scrollTop + clientHeight >= scrollHeight * 0.9 && !loading) {
            setPage(prev => prev + 1); 
        }
    };

    return (
        <div>
                  <button className="bg-black">
        <Link to={"/"} className="text-white text-5xl">
          หน้าหลัก
        </Link>
      </button>
        <div 
            className="h-[400px] overflow-y-auto border border-gray-300 p-2" 
            onScroll={handleScroll}
        >
            <div>
                {poke.map((poke, index) => (
                    <div key={index} className="p-2 bg-gray-200 m-2 rounded text-center">
                        <p>{poke.name}</p>
                    </div>
                ))}
            </div>
            {loading && <p className="text-center text-gray-500">Loading...</p>} 
        </div>
        </div>
    );
}
