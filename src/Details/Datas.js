import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Container} from 'react-bootstrap';
import './datas.css';

const Datas = () => {
    const [formData,setFormData]=useState([])

    const getDatas= async () =>{
      const res = await axios.get("https://65138daa8e505cebc2e9f26a.mockapi.io/user")
        setFormData(res.data)
      }
      useEffect(()=>{
        getDatas()
         
      },[])
  return (
    <>
    <br></br>
    <Container fluid className='mt-5' >
       <div className='Tables_bots'>
    <Table>
      <thead  >
              <th className='bg-warning'>S.NO</th>
              <th className='bg-warning'>UserName</th>
              <th className='bg-warning'>Email</th>
              <th className='bg-warning'>Password</th>
              <th className='bg-warning'>MobileNo</th>
              <th className='bg-warning'>DOB</th>
              <th className='bg-warning'>Nationality</th>
              <th className='bg-warning'> Distric</th>
              <th className='bg-warning'>Address</th>
              <th className='bg-warning'>Degree</th>
              <th className='bg-warning'>College</th>
              <th className='bg-warning'>Major</th>
              <th className='bg-warning'>CGPA</th>
              {/* <th className='bg-warning'>Others</th> */}
              <th className='bg-warning'>DOJ</th>
       
      </thead>
      <tbody>
      {
        formData.map(u=>(
        <tr>
            <td>{u.id}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.password}</td>
            <td>{u.mobile}</td>
            <td>{u.dateofbirth}</td>
            <td>{u.nationality}</td>
            <td>{u.dist}</td>
            <td>{u.address}</td>
            <td>{u.deg}</td>
            <td>{u.college}</td>
            <td>{u.major}</td>
            <td>{u.cgpa}</td>
            {/* <td>{u.description}</td> */}
            <td>{u.join}</td>
        </tr>
    ))
    }    
        
      </tbody>
    </Table>
      
    </div>

    </Container>
   </>
  )
}

export default Datas


//username: "",
  //   email: "",
  //  : "",
  //   confirmPassword: "",
  //   firstName: "",
  //   lastName: "",
  //   mobile:"",
  //   dateofbirth:"",
  //   country:"",
  //   address:"",
  //   dist:"",
  //   deg:"",
  //   college:"",
  //   major:"",
  //   cgpa:"",
  //   nationality: "",
  //   other: "",