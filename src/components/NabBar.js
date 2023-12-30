import React from 'react'

export default function NavBar() {
    return (
        <div>
            <div className="flex justify-center py-5">
                <div className="">
                    {/* Image  */}
                    <div className="flex justify-center mb-5">
                        {/* Image Tag  */}
                        <img
                            className='w-20'
                            src="https://designer.microsoft.com/static/media/background-removal.aa4978484e2e20490b04.png"
                            alt="img"
                        />
                    </div>

                    {/* Heading Tag  */}
                    <h1 className='text-white text-xl md:text-3xl lg:text-6xl font-medium text-center mb-3'>
                        Remove Background Easily
                    </h1>

                    {/* Paragraph Tag  */}
                    {/* <p className='text-white text-2xl font-light text-center mb-3'>
                        Fast, simple and great performance.
                    </p> */}


                </div>
            </div>
        </div>
    )
}