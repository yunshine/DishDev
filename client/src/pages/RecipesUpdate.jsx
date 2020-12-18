import React, { Component } from 'react';
import api from '../api';

import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
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

    handleChangeInputIngredients = async event => {
        const ingredients = event.target.value;
        this.setState({ ingredients });
    };

    handleChangeInputDirections = async event => {
        const directions = event.target.value;
        this.setState({ directions });
    };

    handleUpdateRecipe = async () => {
        const { id, name, images, ingredients, directions } = this.state
        const payload = { name, images, ingredients, directions };

        await api.updateRecipeById(id, payload).then(res => {
            window.alert(`Recipe successfuly updated`);
            this.setState({
                name: '',
                rating: '',
                time: '',
            });
        });
    }

    componentDidMount = async () => {
        const { id } = this.state
        const recipe = await api.getRecipeById(id)

        this.setState({
            name: recipe.data.data.name,
            images: recipe.data.data.images,
            ingredients: recipe.data.data.ingredients,
            directions: recipe.data.data.directions,
        })
    }

    render() {
        const { name, images, ingredients, directions } = this.state;
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
                <Label>Ingredients: </Label>
                <InputText
                    type="text"
                    value={ingredients}
                    onChange={this.handleChangeInputIngredients}
                />
                <Label>Directions: </Label>
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