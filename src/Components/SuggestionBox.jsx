import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
const SuggestionBox = () => {
  const [image, setImage] = useState([]);
  const [name, setName] = useState([]);
  
  useEffect(() => {
    const arr = []
    for (let i = 0; i < 5; i++) {
      let img = faker.image.food(800, 480, true);
      let imgName = faker.commerce.product()
      arr.push({img,imgName})
    }
    setImage(arr);
    const names = []
    for(let i=0;i<6;i++){
      names.push(faker.commerce.productName())
    }
    setName(names);
  }, []);

  const returnImage = () => {
    return image.map((item,i) => (
      <div key={i}>
        <img src={item.img} alt={"Image"+i} className='h-52 w-30 px-2' />
        <div className="text-center text-sm"><p>{item.imgName}</p></div>
      </div>
    ));
  };

  const popularSuggestion = () =>{
    return name.map((item,i)=>(
      <div key={i} className='mt-1'>
        <p className=" text-sm">{item}</p>
      </div>
    ))
  }

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-4">
      <h4 className=" font-medium px-4 py-5 sm:px-6">Latest trends</h4>
      <div className="px-4 py-5 sm:px-6 flex justify-between ">
          {
            image? returnImage():null
          }
          
      </div>
      <div className=" py-5 px-4 flex flex-col">
        <h4 className="font-medium">Popular Suggestions</h4>
        {popularSuggestion()}
      </div>
      {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          onClick={() => props.setValue(false)}
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Close
        </button>
      </div> */}
    </div>
  );
};

export default SuggestionBox;
