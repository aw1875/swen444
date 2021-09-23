import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';


const Address = (props) => {    
    const [cityError, setcityError] = useState("");
    const [zipError, setzipError] = useState("");

    const firstNameSchema = yup.object().shape({
        firstName: yup
            .string()
            .matches(/^([^0-9]*)$/, "First Name should not contain any numbers")
            .required("First Name is a required field")
    })

    const lastNameSchema = yup.object().shape({
        lastName: yup
            .string()
            .matches(/^([^0-9]*)$/, "Last Name should not contain any numbers")
            .required("Last Name is a required field")
    })

    const citySchema = yup.object().shape({
        city: yup
            .string()
            .matches(/^([^0-9]*)$/, "Invalid City")
            .required("Email address is a required field")
    })

    useEffect(() => {
        if (props.formData.city !== "") {
            let data = {
                city: props.formData.city
            }

            citySchema.validate(data)
            .then(() => setcityError(""))
            .catch((error) => setcityError(error.message))
        }
        if (props.formData.country !== "") {
            if (!postcodeValidator(props.formData.zipCode, props.formData.country)) {
                setzipError("Zip Code is invalid")
            } else {
                setzipError("")
            }
        }

        if (props.formData.streetAddress !== "" && props.formData.city !== "" && props.formData.country !== "" && props.formData.state !== "" && props.formData.zipCode !== "" && cityError === "" && zipError === "") {
            props.allowNext(true)
        } else {
            props.allowNext(false)
        }
    })

    return (
        <div className="relative">
            <h3 className="text-2xl text-center font-bold mb-6">Address Information</h3>
            <input
                id="streetAddress"
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                className={"h-12 w-full border border-gray-300 px-2 transition-all rounded-sm mb-2"}
                value={props.formData.streetAddress}
                onChange={(e) => {
                    props.handleChange(e)
                }}
            />
            <div className="w-full flex mb-2 space-x-2">


                <span className="w-full">
                    <input
                        id="city"
                        type="text"
                        name="city"
                        placeholder="City"
                        className={cityError === "" ? "h-12 w-full border border-gray-300 px-2 transition-all rounded-sm" : "h-12 w-full border border-red-500 px-2 transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"}
                        value={props.formData.city}
                        onChange={(e) => {
                            props.handleChange(e)
                        }}
                    />
                    {cityError !== "" &&
                        <p className="text-red-500 text-sm">{cityError}</p>
                    }
                </span>
                <span className="w-full">
                    <CountryDropdown
                        id="country"
                        name="country"
                        value={props.formData.country}
                        valueType="short"
                        className="h-12 w-full border border-gray-300 px-2 transition-all rounded-sm"
                        onChange={(e) => {
                            const data = {
                                target: {
                                    name: "country",
                                    value: e
                                }
                            }
                            
                            props.handleChange(data)
                        }}
                        priorityOptions={["CA", "US", "GB"]}
                    />
                </span>
                <span className="w-full">
                    <RegionDropdown 
                        id="state"
                        name="state"
                        value={props.formData.state} 
                        className="h-12 w-full border border-gray-300 px-2 transition-all rounded-sm"
                        country={new Intl.DisplayNames(['en'], {type: 'region'}).of(props.formData.country)}
                        blankOptionLabel="Region" 
                        onChange={(e) => {
                            const data = {
                                target: {
                                    name: "state",
                                    value: e
                                }
                            }

                            props.handleChange(data)
                        }}
                    />
                </span>
                <span className="w-full">
                    <input
                        id="zipCode"
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        className={zipError === "" ? "h-12 w-full border border-gray-300 px-2 transition-all rounded-sm" : "h-12 w-full border border-red-500 px-2 transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"}
                        value={props.formData.zipCode}
                        onChange={(e) => {
                            props.handleChange(e)
                        }}
                    />
                    {zipError !== "" &&
                        <p className="text-red-500 text-sm">{zipError}</p>
                    }
                </span>
            </div>
        </div>
    );
};

export default Address;