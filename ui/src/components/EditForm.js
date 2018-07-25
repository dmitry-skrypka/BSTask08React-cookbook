import React from "react";
import "./../App.css";
import {Link} from 'react-router-dom';

import {recipeAPI} from '../api/';


export default class AddForm extends React.Component {
    constructor(props) {
        super(props);


        this.state = {

            _id: props.location.state.recipe._id,
            title: props.location.state.recipe.title,
            description: props.location.state.recipe.description

        }
    }


    handleFieldChange = ({target}) => {
        this.setState(state => ({
                ...state,
                [target.name]: target.value


            })
        );
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = this.state;


        recipeAPI.updateRecipe(newRecipe)


    };



    render() {
        // const {disabled} = this.props;
        const {title, description} = this.state;
        return (
            <div className="recipe-form-container">
                <form className="recipe-form">
                    <button
                        type="button"

                        className="close-button"
                    >
                        <Link to="/">Close</Link>
                    </button>
                    <div className="recipe-form-line">
                        <label htmlFor="recipe-title-input">Title: </label>
                        <input

                            name="title"
                            value={title}
                            autoComplete="off"
                            placeholder="Some fancy title"
                            onChange={this.handleFieldChange}
                            // disabled={disabled}
                        />
                        <label htmlFor="recipe-title-input">Description: </label>
                        <textarea


                            name="description"
                            value={description}
                            placeholder="description here"
                            onChange={this.handleFieldChange}
                            // disabled={disabled}
                        />
                    </div>


                    <div className="recipe-form-line"/>
                    <button
                        onClick={this.handleSubmit}
                        // disabled={!this.isSubmitAllowed()}
                        content="SAVE"
                        type="submit"
                        className="buttons"
                        style={{alignSelf: "flex-end", marginRight: 0, cursor: 'pointer'}}
                    >SAVE
                    </button>


                </form>
            </div>
        );
    }
}


