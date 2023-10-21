import React from "react";

<<<<<<< HEAD
function Select(props) {
    return(
        <select className="select select-info w-full max-w-xs" defaultValue='option'>
            <option disabled value ='option'>{props.disabledOption}</option>
            <option value={props.value1}>{props.labelSelect1}</option>
            <option value={props.value2}>{props.labelSelect2}</option>
            <option value={props.value3}>{props.labelSelect3}</option>
        </select>
=======
function Select() {
    return(
        <select placeholder="Seleccione las accesibilidades que brinda"></select>
>>>>>>> sara
    );
}

export default Select;