import React, { Component } from "react";
// import {Card, Button} from 'react-bootstrap';
import {Container, Col, Row, Button} from 'react-bootstrap';
import './Maincss.css';
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
            <Row>
                <Col >
                    <div>
                       {
                           this.state.post.map( post=>{
                               return <Post key={post.id} kategori={post.kategori} deskripsi={post.deskripsi} harga={post.harga} gambar={post.gambar} />
                           })
                       }
                        <Button variant="primary">Beli</Button>
                    </div>
                </Col>                
            </Row>
        </Container>
            
        );
    }
}

export default Main;