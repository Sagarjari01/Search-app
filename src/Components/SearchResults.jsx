import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import {IoStar} from 'react-icons/io5'
import { useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";
const SearchResults = () => {
  const {state} = useLocation()
  const [isClick, setIsClick] = useState(false);
  const [isMessage, setIsMessage] = useState("");
  const [red, SetRed] = useState([]);

  const styleStar = { color: "#FED049" };
  const styleEmptyStar = { color: "#D6E4E5" };
  const styleHeart = { cursor: "pointer", color: "#D23369" };
  const styleEmptyHeart = { cursor: "pointer", color: "#52616B" };

  useEffect(() => {
    if(localStorage.getItem('Hearts')){
      let existing = localStorage.getItem('Hearts');
      existing = existing ? existing.split(',').map(Number) : [];
      SetRed(existing)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Hearts', red.toString());
  }, [red]);

  const loadStarsOfProducts = (rateData) =>{
    rateData = Math.round(rateData)
    return FillStar(rateData)
  }

  const FillStar = (NumOfFull) =>{
    const newArr = []
    let k=NumOfFull;
    let j=5-NumOfFull;
    while(k>0){
      newArr.push(<IoStar  aria-hidden="true"  style={styleStar} />)
      k=k-1;
    }
    while(j>0){
      newArr.push(<IoStar aria-hidden="true" style={styleEmptyStar} />)
      j=j-1;
    }
    return newArr
  }

  const changeHeart = (i) => {
    if (red.length > 0 && red.includes(i)) {
      SetRed(red.filter((ite) => ite !== i))
    } else {
      SetRed((current) => [...current, i]);
    }
    localStorage.setItem('Hearts', red.toString()); 
  };

  // const ratings = () => {
    
  //   const arr = [];
  //   for (let j = 0; j < 5; j++) {
  //     arr.push(<IoStar aria-hidden="true" style={styleStar} />);
  //   }
  //   return arr;
  // };

  const returnStarJSX = () =>{
    const Element = []
    for(let i=0;i<5;i++){
      const newArr = []
      let k=5;
      let j=0;
      while(k>i){
        newArr.push(<IoStar key={k} aria-hidden="true"  style={styleStar} />)
        k=k-1;
      }
      while(j<i){
        newArr.push(<IoStar key={j} aria-hidden="true" style={styleEmptyStar} />)
        j=j+1;
      }
      // console.log(newArr)
      let ele = 
      <div key={i}>
        <div className=" flex flex-row py-1 text-sm">
          <input
            className=" align-middle"
            type="checkbox"
            name="brand1"
          />{" "}
          <span  className=" pl-2 flex flex-row align-middle">
            {newArr}
          </span>
        </div>
      </div>
      Element.push(ele)
    }
    return Element
  }

  const List_products = () => {
    return state.map(item => (
      <div className=" group py-2 px-2 h-fit w-64" key={item.id}>
        <div className="relative">
          {red.length > 0 && red.includes(item.id) ? (
            <HiHeart
              aria-hidden="true"
              onClick={() => changeHeart(item.id)}
              className=" text-xl z-10 absolute top-1 right-6"
              style={styleHeart}
            />
          ) : (
            <HiOutlineHeart
              aria-hidden="true"
              onClick={() => changeHeart(item.id)}
              className=" text-xl z-10 absolute top-1 right-6"
              style={styleEmptyHeart}
            />
          )}
          <img
            className="relative h-60 w-11/12"
            src={item.images[0]}
            alt={item.title}
          />
          <div className="hidden group-hover:block cursor-pointer w-11/12 z-10 text-center text-white bg-indigo-400 opacity-80 bottom-0 absolute">View Product</div>
        </div>
        <h3 className=" text-sm">{item.title}</h3>
        <p className=" text-violet-500 font-medium text-sm">Rs. {item.price}</p>
        <p className="flex flex-row">{loadStarsOfProducts(item.rating)}</p>
      </div>
    ));
  };
  // aria-hidden="true" in react icons
  return (
    <div className="bg-[#F9F7F7] h-screen w-screen ">
      
      <div className=" w-full flex flex-auto">
        <Searchbar SMALL SetISClicked={setIsClick} setMessage={setIsMessage} />
      </div>
      <div className={`h-[calc((100%-5.5rem))] flex flex-auto pt-4`}>
        <div className="flex flex-col w-80  bg-[#F9F7F7] px-6">
          <div className=" flex flex-col">
            <h3 className=" py-2 text-lg">BRAND</h3>
            <div className=" inline-block py-1 text-sm">
              <input className=" align-middle" type="checkbox" name="brand1" />{" "}
              <span className=" align-middle">Mango</span>
            </div>
            <div className=" inline-block py-1 text-sm">
              <input className=" align-middle" type="checkbox" name="brand2" />{" "}
              <span className=" align-middle">H&M</span>
            </div>
          </div>
          <div className=" flex flex-col">
            <h3 className=" py-2 text-lg">PRICE RANGE</h3>
            <div className=" inline-block py-1 text-sm">
              <input className=" align-middle" type="checkbox" name="brand1" />{" "}
              <span className=" align-middle">Under 500</span>
            </div>
            <div className=" inline-block py-1 text-sm">
              <input className=" align-middle" type="checkbox" name="brand2" />{" "}
              <span className=" align-middle">1000 to 3000</span>
            </div>
          </div>
          <div className=" flex flex-col">
            <h3 className=" py-2 text-lg">RATINGS</h3>
            {/* <div>
              {rating?rating.map((item,i)=>{
                return(
                  <div key={i} className=" flex flex-row py-1 text-sm">
                    <input
                      className=" align-middle"
                      type="checkbox"
                      name="brand1"
                    />{" "}
                    <span  className=" pl-2 flex flex-row align-middle">
                      {item}
                    </span>
                  </div>
                )
              }):null}
            </div> */}
            <div>
              {returnStarJSX()}
            </div>
          </div>
        </div>
        {/* gallary section */}
        <div className="  h-fit w-screen px-4 py-5 sm:px-6 flex flex-wrap bg-[#F9F7F7]">
          {state ? List_products() : null}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
