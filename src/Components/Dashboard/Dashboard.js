import React,{Component} from 'react'
import Sidebar from '../SideBar/SideBar'
import { Navigate } from 'react-router-dom'
export default class dashboard extends Component {
    constructor(props){
      super(props)
      const token = localStorage.getItem("token")
      
  
    }

  render() 
  {   
      return (
          <div>
              {/* <Sidebar /> */}
              dashboard
          </div>
      )
  }
}