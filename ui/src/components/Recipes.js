import React from 'react';
import Dish from '../assets/img/dish.png';
import {Link} from 'react-router-dom';

const Recipes = props => (
    <div className="container">
        <div className="row">
            {props.recipes.map((recipe) => {
                return (
                    <div key={recipe._id} className="col-md-4">
                        <div className="recipe__box">

                            <div className="recipes__title">
                                {recipe.title}
                                <img
                                    className="dish"
                                    src={Dish}
                                    alt={":("}
                                />


                            </div>
                            <div className="recipe__text">
                                {recipe.title}
                            </div>

                            <button className="buttons">
                                <Link to={{
                                    pathname: `/recipes/${recipe._id}`,
                                    state: {recipe}
                                }}> view recipe </Link>
                            </button>

                            <button
                                className="buttons" >

                                <Link to={{
                                    pathname: `/recipes/edit/${recipe._id}`,
                                    state: {recipe}
                                }}> Edit </Link>
                            </button>
                            <button
                                className="buttons" onClick={() => props.onDelete(recipe._id)}>Delete
                            </button>
                        </div>


                    </div>
                )
            })}


        </div>
    </div>

);

export default Recipes;
