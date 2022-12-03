
import { useEffect, useState } from "react";
import ListProducts from "./ListProducts";
const SuggestionBox = ({data,searchedItems}) => {
  const [rnd,SetRnd] = useState([])

  useEffect(()=>{
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    SetRnd(shuffled)
  },[])

  const returnJSx = () =>{
    const rndDataForJsx = rnd.slice(0,5)
    return rndDataForJsx.map(item=>(
      <div key={item.id} className="px-2 cursor-pointer">
        <div className=" h-48 w-36">
          <img src={item.images[0]} alt={item.title} className='h-full w-full' />
        </div>
        <div className="text-center text-sm "><p>{item.title}</p></div>
      </div>
    ))
  }

  // <div className=" h-4/6 w-11/12">
  //         <img src={item.images[0]} alt={item.title} className='px-2 h-full w-full cursor-pointer' />
  //       </div>
  //       <div className=" relative text-center text-sm "><p className="cursor-pointer">{item.title}</p></div>

  const popularSuggestion = () =>{
    const rndDataForSuggest = rnd.slice(6,12)
    return rndDataForSuggest.map((item)=>(
      <div key={item.id} className='mt-1'>
        <p className=" cursor-pointer w-fit text-sm">{item.title}</p>
      </div>
    ))
  }

  return (
    <div>
    {searchedItems.length>0?
    <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-4">
    <ListProducts searchedItems={searchedItems} />
    </div> :
    <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-4">
      <h4 className=" font-medium px-4 py-5 sm:px-6">Latest trends</h4>
      <div className="px-4 py-4 sm:px-6 flex justify-between ">
          {
            rnd? returnJSx():null
          }     
      </div>
      <div className=" py-3 px-4 sm:px-6 flex flex-col">
        <h4 className="font-medium">Popular Suggestions</h4>
        {popularSuggestion()}
      </div>
    </div>
    }
    </div>
  );
};

export default SuggestionBox;
