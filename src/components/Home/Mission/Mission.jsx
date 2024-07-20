import React from 'react';

function App() {
    return (
        <div className='grid grid-cols-3 '>
            <div className="w-2/5 items-center justify-center px-4">
                <h1 className=" font-bold text-green-600 ">OUR MISSION </h1>
                <h2 className="text-4xl font-bold text-gray-900 "><br />Sustainability & Care for the Environment</h2>
            </div>
            <div className="grid grid-cols-2 gap-16  text-balance justify-center items-center mb-6  ">
                <div className="bg-white shadow-lg rounded-md ">
                    <h3 className="text-xl font-bold text-gray-900 ">Self-sufficient house</h3>
                    <p className="text-gray-600"> <br />Only through love as a patch of light incredible is waiting.</p>
                </div>
                <div className="bg-white shadow-md rounded-md ">
                    <h3 className="text-xl font-bold text-gray-900 ">Zero waste policy</h3>
                    <p className="text-gray-600"><br />Distant epochs explorations universe not a sunrise.</p>
                </div>
                <div className="bg-white shadow-md rounded-md ">
                    <h3 className="text-xl font-bold text-gray-900 ">Permaculture garden</h3>
                    <p className="text-gray-600"><br />Distant epochs explorations universe not a sunrise.</p>
                </div>
                <div className="bg-white shadow-md rounded-md ">
                    <h3 className="text-xl font-bold text-gray-900 ">We compost and upcycle</h3>
                    <p className="text-gray-600"><br />Only through love as a patch of light incredible is waiting.</p>
                </div>
            </div>

        </div>
    );
}

export default App;