import react, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import Productdetail from './Productdetail.jsx'

function App() {
  const allData=[
    {
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_mpTTBwxXQbF5lfDTktp1yHq86V-VKGxC2iQpiSz3w&s=10",
      name:"Gray coffee mug",
      catagory:"mugs",
      price:"75"
    },
    {
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSeGNwpqK3OgrkZ6ByJqtQ9ylrXfh6McbgqC9N8r6sg&s=10",
      name:"Blue half soldier t-shirt",
      catagory:"T-shirts",
      price:"200"
    },
    {
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAdI8uxJ1PdPcqZQsL_sB8WruFFB2WWk97w9UdjEJSWw&s=10",
      name:"Black xl t-shirt",
      catagory:"T-shirts",
      price:"175"
    },
    {
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenQtlF5UFyWw9VJmgfhWrMX_d8erm6Cldv3CbwJKyQg&s=10",
      name:"Vivo y28e",
      catagory:"Mobiles",
      price:"12999"
    },
    {
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYh-z77h7C3OzvXCHqhd1aJOqf5ISPM5GBNc-dc8s4iw&s=10",
      name:"One plus",
      catagory:"Mobiles",
      price:"75000"
    },
    {
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFPUxggdDZT9ZxjwNlzh_13tpZWnGKSWOXRrMYTYI5w&s=10",
      name:"Lightgreen gift mug",
      catagory:"Mugs",
      price:"100"
    },
    
    ]
  const [count, setCount] = useState(0)
  const path=window.location.pathname;

  return (
    <div class="flex flex-col relative bg-gray-200">
      <Header src="../public/Amazon.png"/>
      <div class="relative flex flex-col box-border mx-5 my-2 sm:mx-20 sm:my-7 grow bg-white min-h-[calc(90vh-16px)] sm:min-h-[calc(90vh-56px)]">
        <Routes>
          <Route index element={<Content allData={allData}/>}/>
          <Route path="/product/1" element={<Productdetail pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_mpTTBwxXQbF5lfDTktp1yHq86V-VKGxC2iQpiSz3w&s=10" name="Gray coffee mug" catagory="mugs" price="75" detail="Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame."></Productdetail>}/>
        </Routes>
      </div>
      <Footer/>
     
    </div>
  )
}

export default App
