import React from 'react';

function App() {
  return (
    <div className="min-h-screen px-4 py-8">
      {/* Mission Section */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-green-600 text-2xl md:text-4xl">
          OUR MISSION
        </h1>
        <h2 className="text-xl md:text-4xl font-bold text-gray-900 mt-2">
          Sustainability & Care for the Environment
        </h2>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg rounded-md p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Self-sufficient house</h3>
          <p className="text-gray-600">Only through love as a patch of light incredible is waiting.</p>
        </div>
        <div className="bg-white shadow-lg rounded-md p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Zero waste policy</h3>
          <p className="text-gray-600">Distant epochs explorations universe not a sunrise.</p>
        </div>
        <div className="bg-white shadow-lg rounded-md p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Permaculture garden</h3>
          <p className="text-gray-600">Distant epochs explorations universe not a sunrise.</p>
        </div>
        <div className="bg-white shadow-lg rounded-md p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">We compost and upcycle</h3>
          <p className="text-gray-600">Only through love as a patch of light incredible is waiting.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
