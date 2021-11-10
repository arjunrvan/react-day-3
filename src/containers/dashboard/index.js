
import React from 'react';
import { Link } from 'react-router-dom';
import CarList from '../../components/carList';
import products from '../../productData';
import classes from './dashboard.module.css';

// import carList from '../../components/carList';

class Dashboard extends React.Component {

    constructor (props) {
        super(props);
        this.state= {
            list : products,
        }
    }


    filterList (query) {
        if (query.length == 0) {
            this.setState({list:products});
        } else {
            
            let mainRegex = new RegExp(query, "i");
            let newList = products.filter(car => mainRegex.test(car.name));
            this.setState({list:newList});
        }
    }

    render() {
        return (
            <>
            <div>
                <div className = {classes.header_holder}>
                    <h1>Dashboard</h1>
                    <div className = {classes.search_holder}>
                        <input type="text" placeholder="Search" onChange={(val) => this.filterList(val.target.value)}/>
                    </div>
                </div>

                <div className = {classes.button_holder}>
                    <button><Link to='/create'>Add Car</Link></button>
                    <button style = {{backgroundColor : 'salmon'}}><Link to='/'>Log Out</Link></button>
                </div>

                

                <div>

                    {this.state.list.map( (car) => 
                        <CarList 
                        id = {car.id} 
                        name = {car.name} 
                        desc = {car.short_description} 
                        cost = {car.cost} 
                        image = {car.image}
                        carData = {car}
                        />
                        
                    )}
                </div>

                

            </div>
            </>
        );
    }
}

export default Dashboard;
