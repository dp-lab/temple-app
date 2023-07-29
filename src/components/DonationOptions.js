import React from "react";

const DonationOptions = ({ donationOptions }) => {
    return (
        <div>
            <h5>Donation Options:</h5>
            <ul>
                {donationOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    );
};

export default DonationOptions;
