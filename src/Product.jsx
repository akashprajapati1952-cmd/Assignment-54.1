import { useState } from 'react'

function Product(data) {
  return(
    <div class="w-25 ">
      <img class="w-full h-25" src={data.pic}></img>
      <h2 class="text-xs tetx-gray-700">{data.catagory}</h2>
      <h1 class="text-xs font-bold">{data.name}</h1>
      <div class="flex h-3 ">
        <img src="/Star.png"></img>
        <img src="/Star.png"></img>
        <img src="/Star.png"></img>
        <img src="/Star.png"></img>
        <img src="/Star.png"></img>
      </div>
      
      <p class="text-xs font-bold">{data.rate}</p>
    </div>
  );
}

export default Product