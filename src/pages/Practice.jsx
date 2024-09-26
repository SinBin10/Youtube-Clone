import { useState } from "react";

const Practice = () => {
  const [count, useCount] = useState(0);
  return (
    <div className="h-full bg-slate-900 text-white flex flex-col justify-center items-center">
      <h1>You have clicked this button for {count} times.</h1>
      <button
        className="bg-blue-600 px-3 py-2 rounded-xl mt-8"
        onClick={() => useCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
};

export default Practice;
