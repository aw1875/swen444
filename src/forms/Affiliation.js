import React, { useEffect, useState } from 'react';

const Affiliation = (props) => {
    const [status, setStatus] = useState("")

    useEffect(() => {
        if (props.formData.status !== "" && props.formData.statusType !== "") {
            props.allowNext(true)
        } else {
            props.allowNext(false)
        }
    })
    return (
        <div className="relative">
            <h3 className="text-2xl text-center font-bold mb-6">Affilation Information</h3>
            <select
                id="status"
                className="h-12 w-full border border-gray-300 px-2 transition-all rounded-sm mb-2"
                name="status"
                value={status}
                onChange={(e) => {
                    setStatus(e.target.value)

                    if (e.target.value !== props.formData.status) {
                        let status = {
                            target: {
                                name: "status",
                                value: ""
                            }
                        }
                        props.handleChange(status)
                    }
                }}
                >
                <option selected value=''>Status</option>
                <option value='Education'>Education</option>
                <option value='Industry'>Industry</option>
            </select>

            {status === "Industry" &&
                <select
                    id="status"
                    className="h-12 w-full border border-gray-300 px-2 transition-all rounded-sm mb-2"
                    name="status"
                    value={props.formData.status}
                    onChange={(e) => props.handleChange(e)}>
                    <option selected value=''>Industry Status</option>
                    <option value='Industry'>Industry</option>
                    <option value='Employee'>Employee</option>
                </select>

            }
            
            {status === "Education" &&
            <select
                id="status"
                className="h-12 w-full border border-gray-300 px-2 transition-all rounded-sm"
                name="status"
                value={props.formData.status}
                onChange={(e) => props.handleChange(e)}>
                <option selected value=''>Education Status</option>
                <option value='Undergraduate Student'>Undergraduate Student</option>
                <option value='Graduate Student'>Graduate Student</option>
                <option value='Professor'>Professor</option>
            </select>
            }
        </div>
    );
};

export default Affiliation;