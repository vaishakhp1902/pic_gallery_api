import React , {useState, useEffect} from  'react'
import { ImageCard } from './components/ImageCard'
import {ImageSearch} from './components/ImageSearch'


function App() {
const [images, setimages] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [term,setTerm] = useState('')

useEffect(()=>{
  fetch(`https://pixabay.com/api/?key=22572694-3987f62ac87b7e4935eca8cc9&q=${term}&image_type=photo&pretty=true`)
  .then(res=> res.json())
  .then(data => {
     setimages(data.hits)
     setIsLoading(false)
  })
  .catch(err=> console.log(console.error()))
}, [term ])


  return (
    <div className="container mx-auto bg-red-200">

      <ImageSearch  searchText={(text)=> setTerm(text)}/>
      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images found</h1>  }
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :<div className="grid grid-cols-3 gap-4">
        {images.map(image =>(
          <ImageCard key={image.id} image={image}/>

          
        ))}

      </div>}
      
    </div>
  );
}

export default App;
