import React, {useState}from 'react'

export const ImageSearch = ({searchText}) => {
    const[text,setText] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        searchText(text)

    }
 
    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form  onSubmit={onSubmit} className="w-full max-w-sm">
          <div className="flex items-center  border-b-2 border-teal-500 py-2">
          <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight text-blue  focus:outline-none" type="text" placeholder="Search Image..." />
          <button class=" bg-white hover:bg-red-300 rounded text-black p-2 pl-4 pr-4w-1/2 flex items-center justify-center bg-lime-300 border border-black shadow-offset-black" type="submit">
               Search
              <svg width="20" height="20" fill="green">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
              </button>
        </div>
        </form>
          </div>


        // <div class="p-8">
        //     <div class="bg-white flex items-center rounded-full shadow-xl">
        //         <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search">
    
        //     <div class="p-4">
        //         <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
        //              icon
        //         </button>
        //      </div>
        //     </div>
        // </div>

        

          
    )
}
