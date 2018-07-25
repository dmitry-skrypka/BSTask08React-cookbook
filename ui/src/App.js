import React, {Component} from 'react';
import './App.css';

import Recipes from './components/Recipes';
import { recipeAPI } from './api/';
import { Link } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);


        // this.handleAddSave = this.handleAddSave.bind(this);
        // this.handleAddButton = this.handleAddButton.bind(this);
        this.handleDelete = this.handleDelete.bind(this);



    }

    state = {
        recipes: [],
        showAddForm: false,
        showEditForm: false,
    };





    componentDidMount() {
        // axios.get(`http://localhost:9000/api/recipes/`)
        //     .then((res) => {
        //         const data = res.data;
        //         this.setState({recipes: data});
        //         console.log(data)
        //
        //     });


        recipeAPI.fetchAllRecipes().then((res) => {
                    const data = res.data;
                    this.setState({recipes: data});
                    console.log(data)

                })
    }

    handleDelete(id) {
        recipeAPI.deleteRecipe(id).then((res) => {
            console.log(res);

            recipeAPI.fetchAllRecipes().then((res) => {
                const data = res.data;
                this.setState({recipes: data});
                console.log(data)

            })
        })







    }




    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">CookBook</h1>

                    <button className="buttons">
                        <Link to="/recipes/new">Add Recipe</Link>

                    </button>
                </header>


                <Recipes recipes={this.state.recipes}
                         onDelete={this.handleDelete}
                />
            </div>
        );
    }
}

export default App;