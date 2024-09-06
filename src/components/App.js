import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from 'react';
import "./App.css";
import { getList } from "../services/api";

export const App = () => {
  let data =[];
  const [list, setList] = useState([]);


  useEffect(() => {
    getList()
      .then(items => {
          items.data.forEach((element) => {
            element[0].line.forEach((csv)=>{
              data.push(csv)
            })
          });
          setList(data);
        
      })
  }, [])



  return (
    <div>
      <h2 className="headertable">React App</h2>

      <Table striped bordered hover size="sm" className="tablecustomer">
        <thead>
          <tr>
            <th>Filename</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((element,index) =>
              <>
                <tr key={element.id}>
                  <td >{element.file}</td>
                  <td >{element.text}</td>
                  <td >{element.number}</td>
                  <td >{element.hex}</td>
                </tr>
              </>
            )
          }
        </tbody>
      </Table>
    </div>


  );
};
