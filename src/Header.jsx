import { useState } from 'react'

function Header(data) {
  return(
    <div class="flex w-[100vw] h-[5vh] items-center justify-start px-20 py-5 bg-white">
      <img class="w-20" src={data.path} alt="_logo"></img>
    </div>
  );
}
export default Header