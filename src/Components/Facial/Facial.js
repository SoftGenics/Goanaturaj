import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './Facial.css';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';

const Facial = () => {
    const [GetData, SetPost] = useState([]);
    useEffect(() => {
    
      const fetchPosts = async () =>{
        const res = await axios.get("http://localhost:5000/api/allfacialProduct");
        SetPost(res.data)
      }
      fetchPosts();
    },[]);
    
    const deleteFacialProduct = async id => {
      await axios.delete(`http://localhost:5000/api/deletefacialCProduct/${id}`)
      window.location.reload();
    
    }
  return (
    <div>
        <SideBar />
        <Container className='facial'>
        <h1 className='text-center mt-3'>Facial And CleanUp</h1>
            <Row>
                          
            { GetData.map((getdata) =>{
                return(
                    <>
                    <Col md={4} xs={6}>
                    <Card>
                <Card.Img src={`http://localhost:5000/uploads/${getdata.picture}`} alt="hair product image" />
                <Card.Body>
                    <h1>{getdata.p_name}</h1>
                    <Card.Text>Price ₹ - {getdata.price}</Card.Text>
                    <Button className='btn btn-danger' onClick={() => deleteFacialProduct(getdata.id)} ><i className="fas fa-trash-alt"></i></Button>
                    <Link  className='mx-3 btn btn-outline-secondary' to={`/updateFacial/${getdata.id}`}><i className="fas fa-edit"></i></Link>
                </Card.Body>
            </Card>
                    </Col>
                   </>
              )}
      )}
            </Row>

        </Container>
        <Link to="/AddFacialAndCleanUp" className="float">
            <i className="fas fa-plus my-float"></i>
            </Link>
    </div>
  )
}

export default Facial