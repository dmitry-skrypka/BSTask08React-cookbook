import React from 'react';
import Dish from '../assets/img/dish.png'
import '../App.css';
import { Link } from 'react-router-dom';

class Recipe extends React.Component {



    render() {
        console.log(this.props);
        const recipe = this.props.location.state.recipe;
        return (

 <div className="container2">
                <div className="active-recipe">

                    <div className="active-recipe__title">
                        {recipe.title}
                        <img
                            className="dish"
                            src={Dish}
                            alt={":("}
                        />


                    </div>
                    <div className="recipe__text">
                        {recipe.description}
                    </div>

                </div>


                <button className="active-recipe__button">
                    <Link to="/">Home</Link>
                </button>
            </div>
        )
    }
}


export default Recipe