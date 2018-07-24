import React, {Component} from 'react';
import './App.css';
import AddForm from './components/AddForm';
import Recipes from './components/Recipes';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);


        this.handleAddSave = this.handleAddSave.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    state = {
        recipes: [],
        showAddForm: false,
        showEditForm: false,
    };

    componentDidMount() {
        axios.get(`http://localhost:9000/api/recipes/`)
            .then((res) => {
                const data = res.data;
                this.setState({recipes: data});
                console.log(data)

            });
    }

    handleDelete(id) {
        console.log(id);
        axios.delete(`http://localhost:9000/api/recipes/${id}`)
            .then((res) => {

                console.log(res)

            });
    }

    handleAddButton(id) {

        console.log('add open');
        this.setState({
            showAddForm: true
        });
    }

    handleAddSave(recipe) {
        this.setState((prevState, props) => {
            const newRecipe = {...recipe, id: this.state.nextRecipeId};
            return {
                nextRecipeId: prevState.nextRecipeId + 1,
                recipes: [...this.state.recipes, newRecipe],
                showAddForm: false
            };
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Recipe Search</h1>

                    <button className="buttons" onClick={this.handleAddButton}>
                        Add Recipe
                    </button>
                </header>

                {this.state.showAddForm ? (
                    <AddForm
                        onSave={this.handleAddSave}
                        onClose={() => this.setState({showAddForm: false})}
                    />
                ) : null}
                <Recipes recipes={this.state.recipes}
                         onDelete={this.handleDelete}
                />
            </div>
        );
    }
}

export default App;