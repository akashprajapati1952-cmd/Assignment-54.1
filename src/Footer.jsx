import { useState } from 'react'

function Footer(data) {
  return(
    <div class="absolute bottom-0 left-0 right-0 flex bg-gray-500 h-[5vh] w-full items-center justify-between px-20 py-5">
      <p class="text-xs">Copyright © Codeyogi</p>
      <p class="text-xs">Powered by Codeyogi</p>
    </div>
  );
}

export default Footer