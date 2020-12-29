import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Home
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/recipes/list" className="nav-link">
                                See All Recipes
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/recipes/create" className="nav-link">
                                Create a New Recipe
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        );
    };
};

export default Links;