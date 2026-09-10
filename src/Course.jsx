import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Course(props){

    // let purchased = false
    const [purchased, setpurchased] = useState(false);

    function BuyCourse(discount,e){
        console.log(props.name,"Purchased",discount,"% discount")
        setpurchased(true)
    }


    return(
        props.name && <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={() =>BuyCourse(20)}>Discount</button>
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <p>{purchased ? "Already Purchased" : "Get it Now"}</p>
        </div>
    );
    
}

Course.PropTypes ={
    name : PropTypes.string,
    rating: PropTypes.number,
    show : PropTypes.bool,
}



export default Course;