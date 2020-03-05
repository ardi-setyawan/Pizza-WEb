import React from 'react';
import { Button} from 'react-bootstrap' ;
import './Post.css'


const Post = (props)=> {
    return (       
   
        <div className="main-content">
            <h2 className="nama"> {props.nama} </h2>               
                    <img src={"images/" + props.gambar} alt=""></img>   
            <h5 className="deskripsi"> {props.deskripsi} </h5>
            <h3 className="harga"> {props.harga} </h3>
            <Button className="beli" variant="primary">Beli</Button>
        </div>     
    )
}

export default Post;