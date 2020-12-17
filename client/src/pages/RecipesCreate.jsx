import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

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

class RecipesCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            images: '',
            ingredients: '',
            directions: '',
        }
    };

    handleChangeInputName = async event => {
        const name = event.target.value;
        this.setState({ name });
    }

    handleChangeInputImages = async event => {
        const images = event.target.value;
        this.setState({ images });
    }

    handleChangeInputIngredients = async event => {
        const ingredients = event.target.value;
        this.setState({ ingredients });
    }

    handleChangeInputDirections = async event => {
        const directions = event.target.value;
        this.setState({ directions });
    }

    handleIncludeRecipe = async () => {
        const { name, images, ingredients, directions } = this.state;
        const payload = { name, images, ingredients, directions };

        await api.createRecipe(payload).then(res => {
            window.alert(`Recipe successfully created!`);
            this.setState({
                name: '',
                images: '',
                ingredients: '',
                directions: '',
            });
        });
    }

    render() {
        const { name, images, ingredients, directions } = this.state;
        return (
            <Wrapper>
                <Title>Create A New Recipe</Title>

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

                <Button onClick={this.handleIncludeRecipe}>Add Recipe</Button>
                <CancelButton href={'/recipes/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default RecipesCreate;