import React, { useEffect, useState } from 'react';
import valid from 'card-validator';

const Payment = (props) => {
    const [cardNumberError, setcardNumberError] = useState("")
    const [cardExpError, setcardExpError] = useState("")
    const [cardCVVError, setCardCVVError] = useState("")
    const [eventListener, seteventListener] = useState(false)

    useEffect(() => {
        if (props.formData.cardNumber !== "") {
            if (!valid.number(props.formData.cardNumber).isValid) {
                setcardNumberError("Card Number is invalid")
            } else {
                setcardNumberError("")
            }
        }

        if (props.formData.expMonth.length === 2 && document.activeElement === document.querySelector("#expMonth")) {
            document.querySelector('#expYear').focus()
        }

        if (props.formData.expYear.length === 2 && document.activeElement === document.querySelector("#expYear")) {
            if (!valid.expirationDate({ month: props.formData.expMonth, year: props.formData.expYear }).isValid) {
                setcardExpError("Expiration Date is invalid")
            } else {
                setcardExpError("")
                document.querySelector('#cvv').focus()
            }
        }

        if (props.formData.cvv !== "") {
            if (!valid.cvv(props.formData.cvv).isValid) {
                setCardCVVError("CVV Number is invalid")
            } else {
                setCardCVVError("")
            }
        }

        if (document.activeElement === document.querySelector('#expYear')) {
            if (!eventListener) {
                document.querySelector("#expYear").addEventListener('keydown', (e) => {
                    if (e.key === "Backspace" || e.key === "Delete") {
                        if (document.querySelector("#expYear").value.length == 0) {
                            document.querySelector("#expMonth").focus()
                        }
                    }
                })

                seteventListener(true)
            }
        }
        if (props.formData.cardNumberError !== "" && props.formData.expMonth !== "" && props.formData.expYear !== "" && props.formData.cvv !== "" && cardNumberError === "" && cardExpError === "" && cardCVVError === "") {
            props.allowNext(true)
        } else {
            props.allowNext(false)
        }
    })
    return (
        <div className="relative">
            <h3 className="text-2xl text-center font-bold mb-6">Payment Information</h3>

            <div className="w-full flex mb-2 space-x-2">
                <span className="w-full">
                    <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        maxLength={19}
                        className={cardNumberError === "" ? "h-12 w-full border border-gray-300 px-2 transition-all rounded-sm mb-2" : "h-12 w-full border border-red-500 px-2 transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500 mb-2"}
                        value={props.formData.cardNumber}
                        onChange={(e) => {
                            props.handleChange(e)
                        }}
                    />
                    {cardNumberError !== "" &&
                        <p className="text-red-500 text-sm">{cardNumberError}</p>
                    }
                </span>
                <span className="w-1/4">
                    <div className="exp-wrapper relative bg-white border border-gray-300 flex w-full justify-around">
                        <input
                            id="expMonth"
                            type="text"
                            name="expMonth"
                            placeholder="MM"
                            inputMode='numeric'
                            maxLength={2}
                            className={"h-12 w-1/2 px-2 transition-all rounded-sm text-center focus:outline-none"}
                            value={props.formData.expMonth}
                            onChange={(e) => {
                                if (!isNaN(e.target.value)) {
                                    props.handleChange(e)
                                }
                            }}
                        />
                        <input
                            id="expYear"
                            type="text"
                            name="expYear"
                            placeholder="YY"
                            inputMode='numeric'
                            maxLength={2}
                            className={"h-12 w-1/2 px-2 transition-all rounded-sm text-center focus:outline-none"}
                            value={props.formData.expYear}
                            onChange={(e) => {
                                if (!isNaN(e.target.value)) {
                                    props.handleChange(e)
                                }
                            }}
                        />
                    </div>
                    {cardExpError !== "" &&
                        <p className="text-red-500 text-sm">{cardExpError}</p>
                    }
                </span>


                <span className="w-1/4">
                    <input
                        id="cvv"
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        inputMode='numeric'
                        maxLength={4}
                        className={cardCVVError === "" ? "h-12 w-full border border-gray-300 px-2 transition-all rounded-sm text-center" : "h-12 w-full border border-red-500 px-2 transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-center"}
                        value={props.formData.cvv}
                        onChange={(e) => {
                            if (!isNaN(e.target.value)) {
                                props.handleChange(e)
                            }
                        }}
                    />
                    {cardCVVError !== "" &&
                        <p className="text-red-500 text-sm">{cardCVVError}</p>
                    }
                </span>
            </div>
        </div >
    );
};

export default Payment;