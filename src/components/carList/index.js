import React from 'react';
import classes from './carList.module.css';
import {Link} from 'react-router-dom';

class CarList extends React.Component {
    render() {
        return (
            <>
            <div className = {classes.car_list_holder}>
                <img className = {classes.car_img} src = {this.props.image}  alt=''/>
                <div className = {classes.car_details}>
                    <h4>{this.props.name}</h4>
                    <p style = {{color:'blue'}}>RM {this.props.cost}</p>
                    <p style = {{fontStyle:'italic'}}>{this.props.desc}</p>
                    <button><Link to ={{pathname: `/dashboard/${this.props.id}`, state: this.props.carData}}>View More</Link></button>
                </div>
            </div>
            <br/>
            <br/>
            </>
            
        );
    }
}

export default CarList;

