import React from "react";

const VisitorInformation = ({ entryFee, rules, contact }) => {
    return (
        <div>
            <h5>Visitor Information:</h5>
            <ul>
                <li>Entry Fee: {entryFee ? entryFee : "Free"}</li>
                <li>Rules and Regulations: {rules ? rules : "None"}</li>
                <li>Contact: {contact ? contact : "N/A"}</li>
            </ul>
        </div>
    );
};

export default VisitorInformation;
