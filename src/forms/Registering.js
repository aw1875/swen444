import React, { useEffect, useState } from 'react';

const Registering = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])

    return (
        <div className="relative">
            {loading ?
                <div className="h-32">
                    <span className="preloader" className="w-16 h-16 rounded-full absolute top-10 bottom-0 left-0 right-0 m-auto animate-spin" style={{ "border": "2px solid transparent", "borderRight": "3px solid rgb(16, 185, 129)" }}></span>
                </div>
                :
                <>
                    <div className="h-32 text-main">
                        <span className="w-16 h-16 rounded-full absolute top-10 bottom-0 left-0 right-0 m-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    <span className="w-full absolute text-center">
                        <h3 className="text-2xl text-center font-bold">Registered Successfully! You may now close this form.</h3>
                    </span>
                </>
            }
        </div>

    );
};

export default Registering;