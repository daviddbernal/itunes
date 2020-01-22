import React from 'react'

const List = (props) => {
    return (
        <li style={props.style}>{props.value}</li>
    );
}

export default List