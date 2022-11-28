import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import { HiStar, HiHeart, HiOutlineHeart } from "react-icons/hi2";
import Searchbar from "./Searchbar";
const SearchResults = () => {
  const [isClick, setIsClick] = useState(false);
  const [isMessage, setIsMessage] = useState("");
  const [data, setData] = useState();
  const [red, SetRed] = useState([]);
  const styleStar = { color: "#FED049" };
  const styleEmptyStar = { color: "#D6E4E5" };
  const styleHeart = { cursor: "pointer", color: "#D23369" };
  const styleEmptyHeart = { cursor: "pointer", color: "white" };
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      let img = faker.image.food(800, 480, true);
      let imgName = faker.commerce.productName();
      let price = getRndInteger(100, 1000);
      let ratings = getRndInteger(1, 6);
      arr.push({ img, imgName, price, ratings });
    }
    setData(arr);
  }, []);
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const changeHeart = (i) => {
    if (red.length > 0 && red.includes(i)) {
      SetRed(red.filter((ite) => ite !== i));
    } else {
      SetRed((current) => [...current, i]);
    }
  };

  const ratings = () => {
    const arr = [];
    for (let j = 0; j < 5; j++) {
      arr.push(<HiStar key={j} style={styleStar} />);
    }
    return arr;
  };

  const List_products = () => {
    return data.map((item, i) => (
      <div className=" group py-2 px-2 h-fit w-64" key={i}>
        <div className="relative">
          {red.length > 0 && red.includes(i) ? (
            <HiHeart
              onClick={() => changeHeart(i)}
              className=" text-xl z-10 absolute top-1 right-6"
              style={styleHeart}
            />
          ) : (
            <HiOutlineHeart
              onClick={() => changeHeart(i)}
              className=" text-xl z-10 absolute top-1 right-6"
              style={styleEmptyHeart}
            />
          )}
          <img
            className="relative h-60 w-11/12"
            src={item.img}
            alt={item.imgName}
          />
          <div className="hidden group-hover:block cursor-pointer w-11/12 z-10 text-center text-white bg-indigo-400 opacity-80 bottom-0 absolute">View Product</div>
        </div>
        <h3 className=" text-sm">{item.imgName}</h3>
        <p className=" text-violet-500 font-medium text-sm">Rs. {item.price}</p>
        <p className="flex flex-row">{ratings()}</p>
      </div>
    ));
  };
  return (
    <div className="bg-[#F9F7F7] h-full w-screen ">
      <div className=" w-full flex flex-auto">
        <Searchbar SMALL SetISClicked={setIsClick} setMessage={setIsMessage} />
      </div>
      <div className={`h-[calc((100%-5.5rem))] flex flex-auto pt-4`}>
        <div className="flex flex-col w-80 shadow-md bg-[#F9F7F7] px-6">
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
            <div>
              <div className=" flex flex-row py-1 text-sm">
                <input
                  className=" align-middle"
                  type="checkbox"
                  name="brand1"
                />{" "}
                <span className=" pl-2 flex flex-row align-middle">
                  <HiStar style={styleStar} />
                  <HiStar style={styleStar} />
                  <HiStar style={styleStar} />
                  <HiStar style={styleStar} />
                  <HiStar style={styleStar} />
                </span>
              </div>
            </div>
            <div>
              <div className=" flex flex-row py-1 text-sm">
                <input
                  className=" align-middle"
                  type="checkbox"
                  name="brand1"
                />{" "}
                <span className=" pl-2 flex flex-row align-middle">
                  <HiStar style={styleStar} />
                  <HiStar style={styleStar} />
                  <HiStar style={styleStar} />
                  <HiStar style={styleStar} />
                  <HiStar style={styleEmptyStar} />
                </span>
              </div>
            </div>
            <div>
              <div className=" flex flex-row py-1 text-sm">
                <input
                  className=" align-middle"
                  type="checkbox"
                  name="brand1"
                />{" "}
                <span className=" pl-2 flex flex-row align-middle">
                  <HiStar style={styleStar} />
                  <HiStar style={styleStar} />
                  <HiStar style={styleStar} />
                  <HiStar style={styleEmptyStar} />
                  <HiStar style={styleEmptyStar} />
                </span>
              </div>
            </div>
            <div>
              <div className=" flex flex-row py-1 text-sm">
                <input
                  className=" align-middle"
                  type="checkbox"
                  name="brand1"
                />{" "}
                <span className=" pl-2 flex flex-row align-middle">
                  <HiStar style={styleStar} />
                  <HiStar style={styleStar} />
                  <HiStar style={styleEmptyStar} />
                  <HiStar style={styleEmptyStar} />
                  <HiStar style={styleEmptyStar} />
                </span>
              </div>
            </div>
            <div>
              <div className=" flex flex-row py-1 text-sm">
                <input
                  className=" align-middle"
                  type="checkbox"
                  name="brand1"
                />{" "}
                <span className=" pl-2 flex flex-row align-middle">
                  <HiStar style={styleStar} />
                  <HiStar style={styleEmptyStar} />
                  <HiStar style={styleEmptyStar} />
                  <HiStar style={styleEmptyStar} />
                  <HiStar style={styleEmptyStar} />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* gallary section */}
        <div className="  h-fit w-screen px-4 py-5 sm:px-6 flex flex-wrap bg-[#F9F7F7]">
          {data ? List_products() : null}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
