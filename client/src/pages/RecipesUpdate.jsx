import React, { Component } from 'react';
import api from '../api';

import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
margin: 0 32px;
min-Height: calc(100vh - 112px);
`

const Title = styled.h1.attrs({
    className: 'h1',
})`
    margin-Top: 16px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class RecipesUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            name: '',
            images: '',
            description: '',
            ingredients: '',
            directions: '',
        };
    };

    handleChangeInputName = async event => {
        const name = event.target.value;
        this.setState({ name });
    };

    handleChangeInputImages = async event => {
        const images = event.target.value;
        this.setState({ images });
    };

    handleChangeInputDescription = async event => {
        const description = event.target.value;
        this.setState({ description });
    };

    handleChangeInputIngredients = async event => {
        const ingredients = event.target.value;
        this.setState({ ingredients });
    };

    handleChangeInputDirections = async event => {
        const directions = event.target.value;
        this.setState({ directions });
    };

    handleUpdateRecipe = async () => {
        const { id, name, images, description, ingredients, directions } = this.state
        const payload = { name, images, description, ingredients, directions };

        await api.updateRecipeById(id, payload).then(res => {
            window.alert(`Recipe successfuly updated`);
            this.props.history.push('/recipes/list')
        });
    }

    componentDidMount = async () => {
        const { id } = this.state
        const recipe = await api.getRecipeById(id)

        this.setState({
            name: recipe.data.data.name,
            images: recipe.data.data.images,
            description: recipe.data.data.description,
            ingredients: recipe.data.data.ingredients,
            directions: recipe.data.data.directions,
        })
    }

    render() {
        const { name, images, description, ingredients, directions } = this.state;
        return (
            <Wrapper>
                <Title>Create Recipe</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                <Label>Images: </Label>
                <InputText
                    type="text"
                    value={images}
                    onChange={this.handleChangeInputImages}
                />
                <Label>Description: </Label>
                <InputText
                    type="text"
                    value={description}
                    onChange={this.handleChangeInputDescription}
                />
                <Label>Ingredients (please include a comma and a space between ingredients): </Label>
                <InputText
                    type="text"
                    value={ingredients}
                    onChange={this.handleChangeInputIngredients}
                />
                <Label>Directions (please include a comma and a space between each step): </Label>
                <InputText
                    type="text"
                    value={directions}
                    onChange={this.handleChangeInputDirections}
                />

                <Button onClick={this.handleUpdateRecipe}>Update Recipe</Button>
                <CancelButton href={'/recipes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default RecipesUpdate;