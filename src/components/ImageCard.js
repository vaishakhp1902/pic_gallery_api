import React from 'react';

export const ImageCard = ({image}) => {
    const tags = image.tags.split(',')
    return (
        <div className="max-w-sm rounded flex-wrap overflow-hidden shadow-lg" >
      <img src={image.webformatURL} alt=""
      className="w-full" />

      <div className="px-6 py-4">
        <div className="font-bold text-white text-xl mb-2">
          Photo by {image.user}
       

      </div>
      <ul>
        <li>
          <strong>Views:</strong>
          {image.views}
        </li>
        <li>
          <strong>Downloads:</strong>
          {image.downloads}
        </li>
        <li>
          <strong>Likes:</strong>
          {image.likes}
        </li>
      </ul>
        
         
    </div>
    <div className="px-6 py-4">
    {tags.map((tag,index) => (
        <span key={index}className="inline-block bg-gray-200 rounded-full px-3 py-1 text-smfont-semibold text-gray-700mr-2">
        #{tag}

      </span>
    ))}

     

    </div>
    </div>


    )
}
