import React from 'react';
const AddButton = ({ onClick }) => {
    return (
        <div className='addbutton'>
            <button onClick={onClick}>Add</button>
        </div>
    );
}

export default AddButton;