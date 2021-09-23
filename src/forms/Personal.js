import React, { useEffect, useState } from 'react';
import * as yup from 'yup';

const Personal = (props) => {

    const [fnError, setfnError] = useState("");
    const [lnError, setlnError] = useState("");
    const [emError, setemError] = useState("");

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

    const emailSchema = yup.object().shape({
        emailAddress: yup
            .string()
            .email("Not a valid email address")
            .required("Email address is a required field")
    })

    useEffect(() => {
        if (props.formData.firstName !== "") {
            let data = {
                firstName: props.formData.firstName
            }

            firstNameSchema.validate(data)
            .then(() => setfnError(""))
            .catch((error) => setfnError(error.message))
        }
        if (props.formData.lastName !== "") {
            let data = {
                lastName: props.formData.lastName
            }

            lastNameSchema.validate(data)
            .then(() => setlnError(""))
            .catch((error) => setlnError(error.message))
        }

        if (props.formData.emailAddress !== "") {
            let data = {
                emailAddress: props.formData.emailAddress
            }

            emailSchema.validate(data)
            .then(() => setemError(""))
            .catch((error) => setemError(error.message))    
        }

        if (props.formData.firstName !== "" && props.formData.lastName !== "" && props.formData.emailAddress !== "" && fnError === "" && lnError === "" && emError === "") {
            props.allowNext(true)
        } else {
            props.allowNext(false)
        }
    })

    return (
        <div className="relative">
            <h3 className="text-2xl text-center font-bold mb-6">Personal Information</h3>
            <div className="w-full flex mb-2 space-x-2">
                <span className="w-full">
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className={fnError === "" ? "h-12 w-full border border-gray-300 px-2 transition-all rounded-sm" : "h-12 w-full border border-red-500 px-2 transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"}
                        value={props.formData.firstName}
                        onChange={(e) => {
                            props.handleChange(e)
                        }}
                    />
                    {fnError !== "" &&
                        <p className="text-red-500 text-sm">{fnError}</p>
                    }
                </span>

                <span className="w-full">
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className={lnError === "" ? "h-12 w-full border border-gray-300 px-2 transition-all rounded-sm" : "h-12 w-full border border-red-500 px-2 transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"}
                        value={props.formData.lastName}
                        onChange={(e) => {
                            props.handleChange(e)
                        }}
                    />
                    {lnError !== "" &&
                        <p className="text-red-500 text-sm">{lnError}</p>
                    }
                </span>
            </div>

            <input
                id="emailAddress"
                type="text"
                name="emailAddress"
                placeholder="Email Address"
                className={emError === "" ? "h-12 w-full border border-gray-300 px-2 transition-all rounded-sm" : "h-12 w-full border border-red-500 px-2 transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"}
                value={props.formData.emailAddress}
                onChange={(e) => {
                    props.handleChange(e)
                }}
            />
            <span className="w-full">
                {emError !== "" &&
                    <p className="text-red-500 text-sm">{emError}</p>
                }
            </span>
        </div>
    );
};

export default Personal;