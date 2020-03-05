import React from 'react'
// import Header from './Header.jsx';


    const Beli = (props)=> {
        return (       
       
            <div className="main-content">
                <h2 className="nama"> {props.nama} </h2>               
                        <img src={"images/" + props.gambar} alt=""></img>   
                <h5 className="deskripsi"> {props.deskripsi} </h5>
                <h3 className="harga"> {props.harga} </h3>
            </div>     
        )


    // constructor(props) {
    //     super(props);
    //     this.state = {isBeliOn: true};

    //     this.handleClick = this.handleClick.bid(this);
    // }

    // handleClick() {
    //     this.setstate( state =>({
    //         isBeliOn: !state.isBeliOn
    //     }));
    // }


//     render (){
//         return (
//             <div className="main-content">
//             <h2 className="nama"> {props.nama} </h2>               
//                     <img src={"images/" + props.gambar} alt=""></img>   
//             <h5 className="deskripsi"> {props.deskripsi} </h5>
//             <h3 className="harga"> {props.harga} </h3>
//             <a href>
//                 beli
//             </a>
//         </div>  
//         );
//     }
// }
}
export default Beli;