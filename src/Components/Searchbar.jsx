import React,{useRef} from "react";

const Searchbar = (props) => {
    const inputText = useRef(null)
    const handleKeyDown = (event,param) =>{
        if(param==="KEY" && event.key=="Enter"){
          props.setSend(true)
        }
        else if(param==="CLICK"){
          props.setMessage(inputText.current.value)
        }
      }
  return (
    <div
      className={props.SMALL ? "mx-auto pt-10 w-2/5":"mx-auto pt-10"}
      onClick={() => {
        props.SetISClicked(true);
      }}
      onFocus={()=>{props.SetISClicked(true)}}
      // onKeyDown={handleKeyDown}> without passing parameter and giving event as param
      onKeyDown={(event) => handleKeyDown(event, "KEY")}
      onChange={(event)=>props.setMessage(event.target.value)}
    >
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <input
          className=" ml-2 peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          autoComplete="off"
          id="search"
          ref={inputText}
          placeholder="Search something.."
        />
        <div
          className="grid place-items-center h-full w-12 text-gray-300 cursor-pointer"
          onClick={(event) => handleKeyDown(event, "CLICK")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
