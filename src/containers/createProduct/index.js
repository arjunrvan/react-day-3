import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../productData';
import classes from './create.module.css';

export class CreateProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id : products.length+1,
            name : '',
            cost : 0,
            desc : '',
        }
    }

    submitForm () {

        if (this.state.name == ''|| this.state.cost == 0 || this.state.desc =='') {
            alert('Please fill in all the inputs');
        } else {
            products.push(this.state);
        }
        
        console.log(products);
    }

    render() {
        return (
            <div className = {classes.create_holder}>
                <form action = '#' style = {style.form}>

                    <label htmlFor = 'name' style = {style.label}>Name:</label>
                    <input type="text" id = 'name' onChange = {(nameVal => {
                        this.setState ({name : nameVal.target.value})
                    })}/>

                    <label htmlFor = 'cost' style = {style.label}>Cost:</label>
                    <input type="text" id = 'cost' onChange = {(costVal => {
                        this.setState ({cost : costVal.target.value})
                    })}/>

                    <label htmlFor = 'desc' style = {style.label}>Description:</label>
                    <input  type="text" id = 'desc' onChange = {(descVal => {
                        this.setState ({desc : descVal.target.value})
                    })}/>

                    <button onClick = {() => {this.submitForm()}} style = {style.label}>Submit</button>
                    <button style = {style.label, {backgroundColor : 'salmon'}}><Link to='/dashboard'>Return to dashboard</Link></button>
                </form>

                
            </div>
        )
    }
}

const style = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px'
    },

    label: {
        marginTop: '20px',
    }
};

export default CreateProduct;
