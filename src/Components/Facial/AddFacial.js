import React, {useState} from 'react'

import SideBar from '../SideBar/SideBar'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const AddFacial = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token")
  let loggedIn = true
  if(token ==  null){
    loggedIn= false
  }
 const [state ] = useState(loggedIn)
  
 if(state === false){
  navigate("/")
}
const initialState = {
    p_name:'',
    price:'',
    picture:'',
}
const [state1, setState1] = useState(initialState);
const {p_name, price, picture} = initialState;
const addProduct = async (data) => {
    const response = await axios.post("http://localhost:5000/api/addfacialProduct", data);
    if(response.status === 200) {
        toast.success(response.data)
    }
}
const handleSubmit = (e) => {
    e.preventDefault();
    if(!p_name || !price || !picture) {
        toast.error("please enter all fields")
    }else{
        addProduct(state1)
        navigate("/FacialAndCleanUp")
    }
  
}

const handleChanged = (e) => {
  const name = e.target.name;
  const value = e.target.value;
    setState1((preVavlue)=>{
      if(name==='p_name'){
        return{
          picture:preVavlue.value,
          p_name:value,
          price:preVavlue.price
        };
      } else if(price==='price'){
        return{
          picture:preVavlue.value,
          p_name:preVavlue.p_name,
          price:value
        };
      } else   if(picture==='picture'){
        return{
          p_name:preVavlue.p_name,
          price:preVavlue.price,
          picture:picture
        };
      } 
    })
    console.log(e.target.name)
    console.log(e.target.value)
}
 
  return (
    <div>

        <SideBar />
        <ToastContainer />
        <div className="container-form">

  <form id="contact" onSubmit={handleSubmit} encType='multipart/form-data'>
    <h3>Add Facial And CleanUp Products</h3>
    <h1>{p_name} {price}</h1>
    <img src='/images/3486catiocn_7.png' alt='hair product' className='text-center ml-5 mb-3' />
    <br></br>
    <fieldset>
      <input placeholder="Product Name" name="p_name" onChange={handleChanged} type="text" tabIndex="1" autoFocus />
    </fieldset>
    <br></br>
    <fieldset>
      <input placeholder="Enter Price " type="number" name="price"  onChange={handleChanged}  tabIndex="3" />
    </fieldset> 
    <br></br>
    <fieldset>
    <section>
                      <label className="upload-btn btn-md">
                          Upload Product Picture &nbsp;&nbsp;
                          <input
                              type="file"
                              hidden
                              className="form-control-file"
                              name="picture"
                              
                              onChange={handleChanged}
                              accept="image/*"
                            
                              />
                          <svg
                              width="1.5em"
                              height="1.5em"
                              viewBox="0 0 16 16"
                              className="bi bi-folder2-open"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              >
                              <path
                                fillRule="evenodd"
                                d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"
                                />
                          </svg>
                        </label>
                      </section>
    </fieldset>
    <br></br>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" >Add Product</button>
    </fieldset>
  </form>
</div>
    </div>
  )
}

export default AddFacial;