import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Header';
import Pedidos from './Componentes/Pedidos';
import Productos from './Componentes/Productos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      carrito:[],
      total:0,
      productosLista:[
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899, url:'https://m.media-amazon.com/images/I/61zKGsIdoPL._AC_SY355_.jpg'},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999, url:'https://cdn-files.kimovil.com/phone_front/0002/92/thumb_191056_phone_front_big.jpeg'},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850, url:'https://http2.mlstatic.com/D_NQ_NP_926246-MLA44282592285_122020-O.jpg'},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949, url:'https://m.media-amazon.com/images/I/61ShPQu-u0L._AC_SX522_.jpg'},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699, url:'https://m.media-amazon.com/images/I/51wu2dpWapL._AC_SX569_.jpg'},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999, url:'https://www.primusgaming.com/media/PKS-301_620.jpg'},
      ],
    };
  }
  
  
  agregar=(producto)=>{

      let identificador= this.state.carrito.find(e=>e.codigo===producto.codigo);
      let lista= this.state.carrito;
      let producto_temp;

      if(identificador!==undefined){

        producto_temp={
          cantidad:identificador.cantidad+1,
          codigo:producto.codigo,
          descripcion:producto.descripcion,
          precio:producto.precio
        }
        
        lista= this.state.carrito.filter(e=>e.codigo!==producto.codigo)
      }else{

        producto_temp={
          cantidad:1,
          codigo:producto.codigo,
          descripcion:producto.descripcion,
          precio:producto.precio
        }
      }
//${(Number(a.precio)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      this.setState({
        carrito:[...lista,producto_temp],
        total:this.state.total+producto.precio
      })
    
  }
 
  eliminar=(p,index)=>{
     
    let temporal;

      if(p.cantidad===1){
        temporal = this.state.carrito.filter((p,i)=>i!==index)
      }
      else{
        const producto_temp={
          cantidad:p.cantidad-1,
          codigo:p.codigo,
          descripcion:p.descripcion,
          precio:p.precio
        }

        temporal = this.state.carrito.filter((p,i)=>i!==index)
        temporal=[...temporal,producto_temp]

      }


     this.setState({
      carrito:temporal,
      total:this.state.total-p.precio
    })

  }

  eliminarCarrito=()=>{
    this.setState({
      carrito:[],
      total:0
    })

  }
  render() {
    var arreglo= this.state.carrito.sort((a,b) => a.codigo-b.codigo);
    return (
      <div className="App">
        <Header/>
        <div className="Containers">
          
          <Productos
            ProductosLista={this.state.productosLista}
            agregar={this.agregar}

          />

          <Pedidos
            lista={arreglo}
            eliminar={this.eliminar}
            total={this.state.total}
            eliminarCarrito={this.eliminarCarrito}
          />
          
        </div>
      </div>
    )
  }
}

export default App;