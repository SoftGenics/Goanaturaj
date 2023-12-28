import React,{useState, useEffect} from 'react'
import {Card, Container,  Button, Row, Col} from 'react-bootstrap'
import SideBar from '../SideBar/SideBar'
import axios from 'axios';
import './Hairs.css'
import { Link, useNavigate } from 'react-router-dom';

const Hairs = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("token")
  let loggedIn = true
  if(token ==  null){
    loggedIn= false
  }
 const [login ] = useState(loggedIn)
  
 if(login === false){
  navigate('/')
}
 
    const [GetData, SetPost] = useState([]);
useEffect(() => {

  const fetchPosts = async () =>{
    const res = await axios.get("http://localhost:4000/api/allProduct");
    SetPost(res.data)
  }
  fetchPosts();
},[]);

const deleteProduct = async id => {
  await axios.delete(`http://localhost:4000/api/deleteProduct/${id}`)
  window.location.reload();

}
  return (
    <div>
        {/* <SideBar /> */}
            <Container className='hairs'>
                <h1 className='text-center mt-3'>Products</h1>
 
          <Row>
            { GetData.map((getdata) =>{
      

      
      return(
          <>
 <Col md={4} xs={6}>
                    <Card>
                <Card.Img src={`http://localhost:4000/uploads/${getdata.image}`} alt="hair product image" />
                <Card.Body>
                    <h1>{getdata.p_name}</h1>
                    <Card.Text>Discount Rs{getdata.discount} <br/> Price RS{getdata.price}</Card.Text>
                    <Card.Text>{getdata.waight}</Card.Text>
                    <Button className='btn btn-danger' onClick={() => deleteProduct(getdata.id)} ><i className="fas fa-trash-alt"></i></Button>
                    <Link  className='mx-3 btn btn-outline-secondary' to={`/updateProducts/${getdata.id}`}><i className="fas fa-edit"></i></Link>
                </Card.Body>
            </Card>
                    </Col>
           
          </>
              )

        }
      )}
 </Row>
    </Container>
            <Link to="/AddProducts" className="float">
            <i className="fas fa-plus my-float"></i>
            </Link>
    </div>
  )
}

export default Hairs