import { useState } from 'react'
import Product from './Product.jsx'

function Content({allData}) {
  const [str, setStr]=useState("");
  const [sort, setSort]=useState("default")
  function controlSearch(event){
    let newStr=event.target.value;
    setStr(newStr);
  }
  let data=allData.filter(
    function(product){
      return product.name.toLowerCase().indexOf(str.toLowerCase()) != -1
    }
  );
  function controlSorting(event){
    let newSort=event.target.value;
    setSort(newSort);
  }
  if(sort=="pricehigh"){
    data.sort(function(a,b){
      return (+b.price - +a.price);
    });
  }
  else if(sort=="pricelow"){
    data.sort(function(a,b){
      return (+a.price - +b.price);
    });
  }
  else if(sort=="title"){
    data.sort(function(a,b){
      if(a.name < b.name){
        return -1;
      }
      else{
        return 1;
      }
    });
  }
  else{
    data.sort(function(a,b){
      return 0;
    });
    }
  
  return(
    <>
      <input class="absolute top-3 left-3 sm:top-10 sm:left-10 w-[25%] p-1 border border-gray-300 bg-gray-200 text-xs " placeholder="Search" onInput={controlSearch} ></input>
      <select class="absolute top-3 right-3 sm:top-10 sm:right-10 ml-auto w-[25%] p-1 border border-gray-300 bg-gray-200 text-xs" onChange={controlSorting} value={sort}>
        <option value="default" >Default sorting</option>
        <option value="title">Sort by title</option>
        <option value="pricelow">Sort by price:low to high</option>
        <option value="pricehigh">Sort by price:high to low</option>
      </select>
      <div class="flex mx-10 my-20  items-start gap-5 content-start justify-evenly flex-wrap grow overflow-auto">
        {data.map(
        function(product){
          return(
          <Product pic={product.pic}
          name={product.name}
          price={product.price}
          catagory={product.catagory}
          />
          );
        })}
      </div>
      
      <div class="flex gap-1 absolute bottom-3 left-3 sm:bottom-10 sm:left-10">
        <div class="text-white flex items-center justify-center text-xs border border-red-700 h-4 w-4 bg-red-700">1</div>
        <div class="flex items-center justify-center text-xs text-red-700 border border-red-700 h-4 w-4">2</div>
        <div class="flex items-center justify-center text-xs text-red-700 border border-red-700 h-4 w-4">→</div>
      </div>
    </>
)};
export default Content;