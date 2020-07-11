import React from 'react'
import './ListItem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ListItem(props){
    const listItems = props.items.map(item => {        
        return (
            <div className = 'ListItem' key = {item.key}>
                <p>
                    <input 
                        type = 'text' 
                        key = {item.key}
                        value = {item.text}
                        className = {item.onEdit ? 'input2' : 'input1'}
                        onChange = { (e) => props.updateItem(e.target.value, item.key) }
                    />
                    <span>
                        <FontAwesomeIcon  
                            className = 'faicon2'
                            icon = 'pencil-alt'
                            onClick = { () => props.changeCss(item.key) }
                        />
                        <FontAwesomeIcon 
                            className = 'faicon' 
                            icon = 'trash' 
                            onClick = { () => props.deleteItem(item.key) }
                        />
                    </span>
                </p>
            </div>
        );
    })
    return(
        <div>{listItems}</div>
    );
}

export default ListItem;