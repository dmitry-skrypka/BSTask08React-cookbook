import React, { Component } from "react";
import "./../App.css";

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDescr = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value

        });
    }
    handleChangeDescr(e) {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value

        });
    }



    handleSubmit(e) {
        e.preventDefault();

        this.props.onSave({ ...this.state });
        this.setState({
            name: "",
            description: "",

        });
    }

    render() {

        return (
            <div className="recipe-form-container">
                <form className="recipe-form" onSubmit={this.handleSubmit}>
                    <button
                        type="button"
                        onClick={this.props.onClose}
                        className="close-button"
                    >
                        Close
                    </button>
                    <div className="recipe-form-line">
                        <label htmlFor="recipe-title-input">Title: </label>
                        <input
                            id="recipe-title-input"
                            key="name"
                            name="name1"
                            type="text"
                            value={this.state.name}
                            size={42}
                            autoComplete="off"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="recipe-title-input">Description: </label>
                        <input
                            id="recipe-description-input"
                            // key="descr"
                            name="description"
                            type="text"
                            value={this.state.description}
                            size={42}
                            autoComplete="off"
                            onChange={this.handleChangeDescr}
                        />
                    </div>


                    <div className="recipe-form-line" />
                    <button
                        type="submit"
                        className="buttons"
                        style={{ alignSelf: "flex-end", marginRight: 0 }}
                    >
                        SAVE
                    </button>
                </form>
            </div>
        );
    }
}

export default AddForm;
