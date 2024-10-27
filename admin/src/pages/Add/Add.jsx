import React, { useEffect, useState } from 'react'
import './Add.css'
import upload from '../../assets/upload.png'
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const url="http://localhost:4000"
  const[image, setImage] = useState(false);
  const[data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })
  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({
        ...data,
        [name]:value
    }))
  }
  
  const submitHandler = async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price",Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image)
    try {
        const response = await axios.post(`${url}/api/food/add`, formData)
        if(response.data.success){
          setData({
            name:"",
            description:"",
            price:"",
            category:"Salad"
          })
          setImage(false)
          toast.success(response.data.message)
        }else{
            console.log("ERror saving data")
        }
    } catch (error) {
        toast.error(response.data.message)
    }
  }

  return (
    <div className="add">
        <form className='flex=col' onSubmit={submitHandler}>
            <div className="addimageUpload flex-col">
            <p>Upload Image</p>
            <label htmlFor='image'>
                <img src={image?URL.createObjectURL(image):upload} alt='upload_area'/>
            </label>
            <input onChange={(e)=>{setImage(e.target.files[0])}} type='file' id='image' required/>
            </div>
            <div className="addproductName flex-col">
                <p>Product Name</p>
                <input type="text" onChange={onChangeHandler} value={data.name} name='name' placeholder='Enter Name'/>
            </div>
            <div className="addproductDescription flex-col">
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} name='description' row="6" placeholder='Write description' required></textarea>
            </div>
            <div className="addCategoryPrice">
                <div className="add-category flex-col">
                    <p>Product Category</p>
                    <select onChange={onChangeHandler}  name='category'>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Desert">Desert</option>
                        <option value="Sandwhich">Sandwhich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="addprice flex-col">
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
)
}

export default Add