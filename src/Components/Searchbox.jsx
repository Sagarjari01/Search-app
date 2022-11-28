import React, { useRef, useState, useTransition } from "react";
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults";
import SuggestionBox from "./SuggestionBox";
const Searchbox = () => {
    const [isClicked,SetISClicked] = useState(false)
    const [message,setMessage] = useState('')
  const HomeSearch = () =>{
    return(
      <div className="w-2/3">
        <Searchbar SetISClicked={SetISClicked} setMessage={setMessage}  />
        {isClicked ?<SuggestionBox clicked={isClicked} setValue={SetISClicked}/>:null}
      </div>
    )
  }
  return (
    <div className=" flex justify-center">
      {message?<SearchResults />:HomeSearch()}
    </div>
  );
};

export default Searchbox;
