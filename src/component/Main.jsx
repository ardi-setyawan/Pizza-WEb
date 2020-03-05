import React, { Component } from "react";
// import {Card, Button} from 'react-bootstrap';
<<<<<<< HEAD
import {Container, Col, Row} from 'react-bootstrap';
import './Maincss.css';
=======
import {Container} from 'react-bootstrap';
import './Main.css';
>>>>>>> newbranch
import axios from 'axios';
import Post from './Post';


class Main extends Component{
    
        state = {
            post:[]
        }
        componentDidMount(){
            
            axios.get('http://localhost:3004/menu')
            .then( (result)=>{
                this.setState({
                    post:result.data                    
                })
            })            
        }
    render() {

         
        return(
        <Container>            
                    <div>
                       {
                           this.state.post.map( post=>{
                               return <Post id={post.id} nama={post.nama} kategori={post.kategori} deskripsi={post.deskripsi} harga={post.harga} gambar={post.gambar} />
                           })
                       }
<<<<<<< HEAD
                      
=======
>>>>>>> newbranch
                    </div>
        </Container>
            
        );
    }
}

export default Main;