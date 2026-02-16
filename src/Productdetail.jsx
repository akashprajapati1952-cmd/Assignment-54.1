import react, {useState} from 'react'
function Productdetail({name, pic, price, detail}) {
  let [quant, setquant]=useState(1)
  function quantChange(event){
    let newquant=event.target.value;
    setquant(newquant)
  }
  return(
    <div class=" flex p-4 w-full h-[300px] bg-white gap-4">
      <img class="w-[45%]" src={pic}></img>
      <div class="flex flex-col p-2 gap-1">
        <h1 class="text-2xl font-bold">{name}</h1>
        <h2 class=" text-lg font-bold">₹{price}</h2>
        <p class="text-md">{detail}</p>
        <div class="flex gap-2">
          <input onChange={quantChange} class="w-10 border border-indigo-700" type="number" value={quant}></input>
          <button class="bg-red-700 text-white px-5 py-1">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
export default Productdetail;