import React, {useState, useEffect} from 'react'
import SideBar from '../SideBar/SideBar'
import {useParams} from 'react-router-dom';
import axios from 'axios';


const UpdateHairProduct = () => {
  const {id} = useParams();
  const [p_name, setName] = useState([]);
  const [disc, setDisc] = useState([]);
  const [category, SetCategory] = useState([]);
  const [price, setPrice] = useState([]);
  const [picture, SetPicture] = useState([]);
  console.log(picture)
 
  const UpdateHair=()=>{
    
    axios.put(`http://localhost:5000/api/updateHair/${id}`,{p_name:p_name,disc:disc,price:price,category:category}).then(()=>{
      alert("Update successfull")
    })
  }
  
  
  return (
    <div>
    <SideBar />
    <div className="container-form">  
<form encType='multipart/form-data'>
<h3>Update Bridal Products</h3>
<img src='/images/4904catiocn_8.png' alt='hair product' className='text-center ml-5 mb-3' />
<br></br>
<fieldset>
  <input placeholder="Product Name" name="p_name" type="text" tabIndex="1"   onChange={(e)=>setName(e.target.value)} required autoFocus />
</fieldset>
<fieldset>
  <input placeholder="Product Name" name="disc" type="text" tabIndex="1"   onChange={(e)=>setDisc(e.target.value)} required autoFocus />
</fieldset>
<br></br>

<fieldset>
  <input placeholder="Enter Price ₹ " type="number" name='price'   onChange={(e)=>setPrice(e.target.value)} />
</fieldset> 
<fieldset>
  <input placeholder="Enter Price ₹ " type="number" name='category'   onChange={(e)=>SetCategory(e.target.value)} />
</fieldset> 
<br></br>
<fieldset>
<section>
                  <label className="upload-btn btn-md">
                      Upload Product Picture 
                      <input
                          type="file"
                          hidden
                          className="form-control-file"
                          name="picture"
                          accept="image/*"
                          onChange={(e)=>SetPicture(e.target.value)}
                          
                        
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
  <button onClick={UpdateHair} id="contact-submit"  >Update Product</button>
</fieldset>
</form>
</div>
</div>
  )
}

export default UpdateHairProduct