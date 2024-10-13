import React, { useEffect, useState } from "react";
import Loader from '../../components/loader'

function Customers() {
  const [success,setSuccess]=useState(false)
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/customers`)
      .then((response) => response.json())
      .then((users) => {setUsers(users)
        setSuccess(true)
      });
  }, []);
  return !success ? <Loader/> : (
    <div className="customerTable">
         <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">Sno</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Street</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
            <th scope="col">Products</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.gender}</td>
              <td>{data.age}</td>
              <td>{data.address.street}</td>
              <td>{data.address.city}</td>
              <td>{data.address.country}</td>
            <td> {data.products.map((pr, index) => (
                <ul key={index}>
                  <li>{pr}</li>
                </ul>
              ))} </td>  
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Customers;
