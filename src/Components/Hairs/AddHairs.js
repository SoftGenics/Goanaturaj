import React, {useState} from 'react'
import './Hairs.css'
import SideBar from '../SideBar/SideBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AddHairs = () => {
  let navigate = useNavigate();

 const [p_name, setp_name]=useState('')
 const [price,setprice]=useState('')
 const  [image,setimage]=useState('')
 const [category, setcategory]=useState('')
 const  [rating, setrating]=useState('')
 const  [discount, setdiscount]=useState('')
 const [waight, setwaight]=useState('')

 const handler=(e)=>{
  console.log(e.target.files)
  setimage(e.target.files[0])
}
const submitform=()=>{

  axios.post('http://localhost:4000/api/addProduct',{
  p_name:p_name,
  price:price,
  image:image,
  category:category,
  
  discount:discount,
 waight:waight,
},{ headers: {
  "Content-Type": "multipart/form-data"}
}).then((res)=>{
  if(res && res.status===200){
    alert("Product add successfully");
    navigate("/Hair")
  }
  navigate("/AddHairsProducts")
})
}
 




  const token = localStorage.getItem("token")
  let loggedIn = true
  if(token ==  null){
    loggedIn= false
  }
 const [state ] = useState(loggedIn)
  
 if(state === false){
  navigate("/")
}
 
  return (
    <div>
        <SideBar />
        <div className="container-form">  
  <form id="contact" onSubmit={submitform}>
    <h3>Add Products</h3>
    <img src='images/4904catiocn_8.png' alt='hair product' className='text-center ml-5 mb-3' />
    <br></br>
    <fieldset>
      <input placeholder="Product Name"  type="text" tabindex="1" required autofocus  onChange={(e)=>setp_name(e.target.value)}/>
    </fieldset>
    <br></br>
    <fieldset>
      <input placeholder="Price" name="price" type="text" tabindex="2" onChange={(e)=>setprice(e.target.value)} />
    </fieldset>
    <fieldset>
      <select name="price" type="text"  required onChange={(e)=>setcategory(e.target.value)}>
      <option value="Sunflower Oil">Sunflower Oil</option>
      <option value="Turmeric Power">Turmeric Power</option>
      <option value="Ground Nut Oil">Ground Nut Oil</option>
      <option value="Coconut Oil">Coconut Oil</option>
    </select>
    </fieldset>
    <br></br>
    <fieldset>
      <input placeholder="discount" name="discount" type="text" tabindex="2" onChange={(e)=>setdiscount(e.target.value)} />
    </fieldset>
    <fieldset>
      <input placeholder="Enter weight" type="number" name='price' tabindex="3" onChange={(e)=>setwaight(e.target.value)} />
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
                              accept="image/*"
                              onChange={handler}
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
                                fill-rule="evenodd"
                                d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"
                                />
                          </svg>
                        </label>
                      </section>
    </fieldset>
    <br></br>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Add Product</button>
    </fieldset>
  </form>
</div>
    </div>
  )
}

export default AddHairs