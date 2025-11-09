"use client";
import React, { useState } from "react";
import { createPhoto } from "../redux/action.js";
import { useDispatch,  } from "react-redux";

import FormImages from "./FormImages.jsx";

function PhotoCreater() {
    const dispatch = useDispatch();
//   const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    description: "",
    year: "",
    images: [],
    
  });
  const [images, setImages] = useState([]);
  const [imageFile, setImageFile] = useState({});
  function handleSubmit(e) {
    if (!input.name) {
 alert("Por favor, rellene todos los campos");
    } else {
      const mainImage = [];
      if (imageFile[0]) {
       
        mainImage.push(imageFile[0]);
      }
      const productCreate = {
        name: input.name,
        description: input.description,
      
        images: images,
    
      };
      if (mainImage.length > 0) {
        productCreate.images.push(...mainImage);
      }
      dispatch(postProduct(productCreate));
    
    }
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
         <>

  <section className="ml-0 sm:ml-64 max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 className="text-xl font-bold text-white capitalize dark:text-white">
      Create your photo
    </h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label className="text-white dark:text-gray-200" htmlFor="name">
            Wine
          </label>
          <input
            name="name"
            type="text"
            value={input.name.toLowerCase()}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

      

      

       

        <div>
          <FormImages 
           imageFile={imageFile}
           setImageFile={setImageFile}
           images={images}
           setImages={setImages}
           
          />
        
        </div>

      

       

      

        <div className="sm:col-span-2">
          <label className="text-white dark:text-gray-200" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={input.description}
            onChange={handleChange}
            className="block w-full h-24 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
          ></textarea>
        </div>
      </div>

      <div className="flex justify-end mt-6">
      { !input.name  ? null : (
       <button
          type="submit"
          className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
        >
          Save
        </button>)}
      </div>
    </form
    >
  </section>
  
</>

    </div>
  )
}

export default PhotoCreater