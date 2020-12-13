// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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

// class Links extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <Link to="/" className="navbar-brand">
//                     My first MERN Application
//                 </Link>
//                 <Collapse>
//                     <List>
//                         <Item>
//                             <Link to="/recipes" className="nav-link">
//                                 List Recipes
//                             </Link>
//                         </Item>
//                         <Item>
//                             <Link to="/recipe" className="nav-link">
//                                 Create Recipe
//                             </Link>
//                         </Item>
//                     </List>
//                 </Collapse>
//             </React.Fragment>
//         );
//     };
// };

// export default Links;


import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Links from './Links';

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        );
    };
};

export default NavBar;