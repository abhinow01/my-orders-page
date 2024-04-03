import React from 'react';

const OrderStepper = ({ currentStage, stages }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      {stages.map((stage, index) => (
        <div
          key={stage}
          className={`flex flex-col items-center  ${
            index < stages.indexOf(currentStage)
              ? 'text-green-600'
              : index === stages.indexOf(currentStage)
              ? 'text-blue-600'
              : 'text-gray-400'
          }`}
        > 
        <div className='flex flex-row items-center justify-center'>
          <div
            className={`h-6 w-6 rounded-full flex items-center justify-center border ${
              index < stages.indexOf(currentStage)
                ? 'bg-green-600 border-green-500 text-white'
                : index === stages.indexOf(currentStage)
                ? 'bg-blue-600 border-blue-500 text-white'
                : 'bg-white border-gray-400 text-gray-400'
            }`}
          >
            {index + 1}
          </div>
          </div>
          <span className="mt-1 mx-2 ">{stage}</span>
          {index < stages.length && (
            <div
              className={`w-full h-0.5 mt-1 ${
                index < stages.indexOf(currentStage)
                  ? 'bg-green-600'
                  : index === stages.indexOf(currentStage)
                  ? 'bg-blue-600'
                  : 'bg-gray-400'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderStepper;