import React from 'react'

const Utils = (props) => {
    return (
        <div>
            <button className={props.classButton} onClick={(e) => props.Event(e.target)}>
                {props.valueButton}
            </button>
            <input 
                className={props.classInput} 
                type={props.type} 
                value={props.valueInput}
            />
        </div>
    );
}

export default Utils