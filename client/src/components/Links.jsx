import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const Collapse = styled.div.attrs({
//     className: 'collpase navbar-collapse',
// })``

// const List = styled.div.attrs({
//     className: 'navbar-nav mr-auto',
// })``

// const Item = styled.div.attrs({
//     className: 'collpase navbar-collapse',
// })``

class Links extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" class="navbar-brand">Home</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link to="/recipes/list" class="nav-link">See All Recipes</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/recipes/create" class="nav-link">Create a New Recipe</Link>
                            </li>

                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}

                        </ul>

                        {/* <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}

                    </div>
                </nav>

                {/* <React.Fragment>
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
                </React.Fragment> */}
            </div>
        );
    };
};

export default Links;