import React from "react";

const Modal = ({ id = 'modal', onclose = () => { }, children }) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onclose
    }
};

return (
    <div id = { id } className = "modal" onclick = { handleOutsideClick }></div>
) 