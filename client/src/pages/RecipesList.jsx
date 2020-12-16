import React, { Component } from 'react';
// import ReactTable from 'react-table';
import api from '../api';

import styled from 'styled-components';

// import 'react-table/react-table.css';

// const Wrapper = styled.div`
//     padding: 0 40px 40px 40px;
// `

class RecipesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllRecipes().then(recipes => {
            this.setState({
                recipes: recipes.data.data,
                isLoading: false,
            })
        })
    };

    render() {
        const { recipes, isLoading } = this.state
        console.log('TCL: RecipesList -> render -> recipes', recipes)
        console.log("Loading? ", this.state.isLoading)

        // const columns = [
        //     {
        //         Header: 'ID',
        //         accessor: '_id',
        //         filterable: true,
        //     },
        //     {
        //         Header: 'Name',
        //         accessor: 'name',
        //         filterable: true,
        //     },
        //     {
        //         Header: 'Rating',
        //         accessor: 'rating',
        //         filterable: true,
        //     },
        //     {
        //         Header: 'Time',
        //         accessor: 'time',
        //         Cell: props => <span>{props.value.join(' / ')}</span>,
        //     },
        // ];

        // let showTable = true;
        // if (!recipes.length) {
        //     showTable = false;
        // };




        let testText = <p>testText...</p>;
        if (recipes.length) {
            testText = <p>There are some recipes here...</p>;
        } else {
            testText = <p>There are no recipes</p>;
        };

        return (
            // <Wrapper>
            //     {showTable && (
            //         <ReactTable
            //             data={recipes}
            //             columns={columns}
            //             loading={isLoading}
            //             defaultPageSize={10}
            //             showPageSizeOptions={true}
            //             minRows={0}
            //         />
            //     )}
            // </Wrapper>

            <div>
                <p>In this page you'll see the list of recipes</p>
                {testText}
            </div>
        );
    };
};

export default RecipesList;
