import React from 'react';
import styled from 'styled-components';
import './layout.css';

const setDate = (date) => {
    let newDate = new Date(date);
    let formattedDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()).toLocaleDateString("en-GB", { // you can skip the first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    return formattedDate;
}

const Title = styled.a`
    font-weight : 700;
    font-size : 32px;
    text-decoration: none;
    color: #38598b;
    @media (max-width: 600px) {
        font-size: 28px;
    }
    &:hover {
        color: #878caf;
    }
`

const Div = styled.div`
    margin-bottom:15px;
`

const BlogItem = (node) => (
    <Div key={node.id}>
        <Title href={node.link} target="_blank" rel="noopener noreferrer">
            {node.title}
        </Title> 
        <div>{setDate(node.date)}</div> 
    </Div>
)

export default BlogItem;