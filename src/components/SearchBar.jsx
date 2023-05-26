import React, {useRef} from "react";

import { fetchHeroes } from "../utils/utils";

const SearchBar = ({setHeroes}) => {
    let input = useRef("");
    const handleClick = async (e) => {
        e.preventDefault();
        let value = input.current.value;
        if(value === "") return;

        try {
            let heroes = await fetchHeroes(value);
            setHeroes(heroes);
        } catch (err) {
            return console.error(err);
        }
    };
  return (
    <form className="flex gap-3 max-w-full my-4">
        <input className="p-2 text-black text-base border-2 border-gray-300 rounded-sm" type="text" placeholder="search hero..." ref={input} />
        <button className="px-4 py-2 bg-red-800 hover:bg-red-700 text-white rounded-md" onClick={handleClick}>Search</button>
    </form>
  
    );
}
export default SearchBar
