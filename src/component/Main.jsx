import React, { Component } from "react";
// import {Card, Button} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import './Main.css';
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
                               return <Post key={post.id} nama={post.nama} kategori={post.kategori} deskripsi={post.deskripsi} harga={post.harga} gambar={post.gambar} />
                           })
                       }
                    </div>
           
        </Container>
            
        );
    }
}

export default Main;