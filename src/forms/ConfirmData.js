import React, { useState } from 'react';

const ConfirmData = (props) => {

    return (
        <div className="relative">
            <h3 className="text-2xl text-center font-bold mb-6">Confirm Data</h3>

            <div className="flex flex-col items-center justify-center w-1/2 m-auto">

                {/* Personal Information */}
                <span className="w-full">
                    <p className="text-xl mb-2 font-bold text-center">Personal Information</p>
                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">First Name</p>
                        <p className="w-full">{props.formData.firstName}</p>
                    </div>

                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">Last Name</p>
                        <p className="w-full">{props.formData.lastName}</p>
                    </div>

                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">Email</p>
                        <p className="w-full">{props.formData.emailAddress}</p>
                    </div>
                </span>

                {/* Address Information */}
                <span className="w-full">
                    <p className="text-xl mb-2 mt-6 font-bold text-center">Address Information</p>
                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">Street Address</p>
                        <p className="w-full">{props.formData.streetAddress}</p>
                    </div>

                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">City</p>
                        <p className="w-full">{props.formData.city}</p>
                    </div>

                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">State</p>
                        <p className="w-full">{props.formData.state}</p>
                    </div>

                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">Country</p>
                        <p className="w-full">{props.formData.country}</p>
                    </div>

                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">Zip Code</p>
                        <p className="w-full">{props.formData.zipCode}</p>
                    </div>
                </span>

                {/* Affiliation Information */}
                <span className="w-full">
                    <p className="text-xl mb-2 mt-6 font-bold text-center">Affiliation Information</p>
                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">Status</p>
                        <p className="w-full">{props.formData.status}</p>
                    </div>
                </span>

                {/* Payment Information */}
                <span className="w-full">
                    <p className="text-xl mb-2 mt-6 font-bold text-center">Payment Information</p>
                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">Card Number</p>
                        <p className="w-full">{`${props.formData.cardNumber.slice(0, 4)}${props.formData.cardNumber.slice(4, -1).replace(/./g, '*')}`}</p>
                    </div>

                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">Expiration Date</p>
                        <p className="w-full">{props.formData.expMonth}/{props.formData.expYear}</p>
                    </div>

                    <div className="flex w-full mb-2">
                        <p className="w-full font-bold">CVV</p>
                        <p className="w-full">{props.formData.cvv}</p>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default ConfirmData;