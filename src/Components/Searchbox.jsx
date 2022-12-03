import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import SuggestionBox from "./SuggestionBox";
const Searchbox = () => {

    const [isClicked,SetISClicked] = useState(false)
    const [message,setMessage] = useState('')
    const [data,setData] = useState([])
    const [send,setSend] = useState(false)
    const [searchedItems,setSearchedItems] = useState([]);

    useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(item=>setData(item.products))
    },[])

    useEffect(()=>{
      if(message!="" && message.length>=3){
        fetch(`https://dummyjson.com/products/search?q=${message}`)
        .then(res => res.json())
        .then(data=>setSearchedItems(data.products))
      }
    },[message])

  const HomeSearch = () =>{
    return(
      <div className="w-2/3">
        
        <Searchbar setSend={setSend} SetISClicked={SetISClicked} setMessage={setMessage} />
        {isClicked ?<SuggestionBox data={data} clicked={isClicked} searchedItems={searchedItems} setValue={SetISClicked}/>:null} 
      </div>
    )
  }

  return (
    // search na onchange prni items searchedItems ma 6
    <div className=" flex justify-center">
      {send?<Navigate to="/search-results" state={searchedItems} />:HomeSearch()}
    </div>
  );
};

export default Searchbox;
