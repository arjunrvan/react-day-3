import React from 'react'
import { Link } from 'react-router-dom';
import classes from './details.module.css';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.location.state
        };
    }
    
    render() {
        return (
            <div className = {classes.detail_holder}>
                <img src = {this.state.data.image} alt=''/>
                <h1>{this.state.data.name}</h1>
                <h4>{this.state.data.short_description}</h4>
                <ul>
                    {this.state.data.bullet_description.map((bullet)=>
                        <><li>{bullet}</li><br/></>
                    )}
                </ul>
                <h5>Price: RM {this.state.data.cost}</h5>
                <button>Buy Now</button>
                <button style = {{backgroundColor : 'salmon'}}><Link to='/dashboard'>Return</Link></button>
            </div>
        )
    }
}

export default Details
