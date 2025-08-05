import React from 'react';

const Steps = ({
  h1,
  leftside,
  rightside,
  containerClassName = "",
}) => {
  return (
    <section className={`py-10 m-x-0 px-0 ${containerClassName}`}>
      {h1 && (
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-[#0d1d4c]">{h1}</h1>
        </div>
      )}
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center py-2">
        {/* Left Side (e.g. Image or Illustration) */}
        {leftside && <div className="flex justify-center">{leftside}</div>}

        {/* Right Side (e.g. Text Instructions) */}
        {rightside && <div className="mt-0 pt-0">{rightside}</div>}
      </div>
    </section>
  );
};

export default Steps;
