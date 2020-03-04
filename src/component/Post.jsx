import React from 'react';
import { Row, Col, Button} from 'react-bootstrap' ;
import './Post.css'


const Post = (props)=> {
    return (
        <container>
        <div className="container">            
            <Row sm="3" className="row">              
                <Col sm="4" className="col">  
                    <div>
                        <div>
                        <div className="image"> 
                            <img src={"images/" + props.gambar} alt=""></img>
                         </div>              
                        <h2 className="kategori"> {props.kategori} </h2>   
                            <h5 className="deskripsi"> {props.deskripsi} </h5>
                            <h3 className="harga"> {props.harga} </h3>
                            <Button variant="primary">Beli</Button>
                        </div> 
                    </div>                  
                </Col>                                                       
            </Row>
        </div>
        </container>
    )
}

export default Post;