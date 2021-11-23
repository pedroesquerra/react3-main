import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Productos (props) {

        return (
            <div className="Products">
                <h4>Productos</h4>
                <Table striped bordered hover style={{verticalAlign: 'middle'}}>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th></th> 
              </tr>
            </thead>
              <tbody>
            {
              props.ProductosLista.map((p,index)=>
                <tr key={index}>
                    <td>{p.codigo}</td>
                    <td>{p.descripcion}</td>
                    <td><img src={p.url} className="App-descripcion" alt="logo" /></td>
                    <td>${(p.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td><Button onClick={()=>props.agregar(p)}variant="success">Agregar</Button></td>
   
                </tr>
              )
            }
              </tbody>
            </Table>

              
            </div>
        )

}
