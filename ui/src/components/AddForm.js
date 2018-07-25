import React from "react";
import "./../App.css";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {recipeAPI} from '../api/';



export default class AddForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.initialValues.title,
            description: props.initialValues.description
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

        const recipe = this.state;
        recipeAPI.addRecipe(recipe).then((res) => {

            }
        );
        console.log(recipe);

        this.setState({
            title: '',
            description: ''
        })


    };

    isSubmitAllowed() {
        return this.state.title && this.state.description;
    }

    render() {
        const {disabled} = this.props;
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
                            disabled={disabled}
                        />
                        <label htmlFor="recipe-title-input">Description: </label>
                        <textarea


                            name="description"
                            value={description}
                            placeholder="description here"
                            onChange={this.handleFieldChange}
                            disabled={disabled}
                        />
                    </div>


                    <div className="recipe-form-line"/>
                    <button
                        onClick={this.handleSubmit}
                        disabled={!this.isSubmitAllowed()}
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

AddForm.defaultProps = {
    initialValues: {
        title: '',
        description: ''
    }
};
AddForm.propTypes = {
    disabled: PropTypes.bool,
    initialValues: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
    })
};