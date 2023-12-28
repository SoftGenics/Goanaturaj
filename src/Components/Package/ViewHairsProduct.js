import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, Link, useNavigate} from 'react-router-dom';
import { Card, Container , Button} from 'react-bootstrap'
import './Hairs.css'
import SideBar from '../SideBar/SideBar';

const ViewHairsProduct = () => {
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
    const {id}  = useParams();
    useEffect(() => {
      const fetchPosts = async () =>{
        const res = await axios.get(`http://localhost:5000/api/ViewhairProduct/${id}`);
        SetPost(res.data);
      }
      fetchPosts();
    },[id]);
    const deleteHairProduct = async id => {
        await axios.delete(`http://localhost:5000/api/deletehairProduct/${id}`)
        window.location.reload();
      
      }
  return (
    <div>
        <SideBar />
        <Container className='viewhairproduct'>
        {GetData.map((getdata) =>{
            return(
            <Card>
                <Card.Img src={`http://localhost:5000/uploads/${getdata.picture}`} alt="hair product image" />
                <Card.Body>
                    <h1>{getdata.p_name}</h1>
                    <h3>{getdata.p_subname}</h3>
                    <Card.Text>{getdata.pricetype}- {getdata.price}</Card.Text>
                    <Button className='btn btn-danger' onClick={() => deleteHairProduct(getdata.id)} ><i className="fas fa-trash-alt"></i></Button>
                    <Link  className='mx-3 btn btn-outline-secondary' to={`/updatehair/${getdata.id}`}><i className="fas fa-edit"></i></Link>
                </Card.Body>
            </Card>
                              )
                            }
                        )
                     }
        </Container>
    </div>
  )
}

export default ViewHairsProduct