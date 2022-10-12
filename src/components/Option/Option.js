import React, { useState } from "react";
import "./Option.css";

const Question = ({ option, id }) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="option-item">
            <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
            >
                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id={id}
                    autoComplete="off"
                    checked={checked}
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                />
                <label
                    className="option-btn btn btn-outline-primary"
                    htmlFor={id}
                >
                    {option}
                </label>
            </div>
        </div>
    );
};

export default Question;
