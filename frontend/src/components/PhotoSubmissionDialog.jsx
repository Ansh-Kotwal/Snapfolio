import React from "react";

function PhotoSubmissionDialog({isOpen , onClose}) {
 
  if (!isOpen) return null; // Don't render anything if modal is not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800">Photo Submitted!</h2>
        <p className="mt-2 text-gray-600">
          Your photo has been submitted successfully.
        </p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            // onClick={handleRedirect}
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            OK
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-sm font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoSubmissionDialog;
