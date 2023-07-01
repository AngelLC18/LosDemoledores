import React from "react";

function Checklist(props) {
    return(
        <label className="cursor-pointer label">
            <span className="label-text">{props.span}</span>
            <div className= 'flex flex-col flex-wrap gap-1 ml-2'>
            <input type="checkbox"  className="checkbox checkbox-info" />
            <input type="checkbox"  className="checkbox checkbox-info" />
            <input type="checkbox"  className="checkbox checkbox-info" />
            </div>
        </label>
    )
}
export default Checklist;