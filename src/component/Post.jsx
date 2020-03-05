import React from 'react';
import { Button} from 'react-bootstrap' ;
import './Post.css'


const Post = (props)=> {
<<<<<<< HEAD
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
=======
    return (       
   
        <div className="main-content">
            <h2 className="nama"> {props.nama} </h2>               
                    <img src={"images/" + props.gambar} alt=""></img>   
            <h5 className="deskripsi"> {props.deskripsi} </h5>
            <h3 className="harga"> {props.harga} </h3>
            <Button className="beli" variant="primary">Beli</Button>
        </div>     
>>>>>>> newbranch
    )
}

export default Post;