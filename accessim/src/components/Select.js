import React from "react";

function Select(props) {
    return(
        <select className="select select-info w-full max-w-xs" defaultValue='option'>
            <option disabled value ='option'>{props.disabledOption}</option>
            <option value={props.value1}>{props.labelSelect1}</option>
            <option value={props.value2}>{props.labelSelect2}</option>
            <option value={props.value3}>{props.labelSelect3}</option>
        </select>
    );
}

export default Select;