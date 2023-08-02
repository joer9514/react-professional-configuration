import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const onCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className='h-screen bg-gray-900 text-white flex flex-col justify-center items-center gap-y-12'>
        <h1 className='text-2xl font-bold animate-pulse'>
          REACT PROFESSIONAL CONFIGURATION!
        </h1>
        <button
          className='px-4 py-2 rounded-[8px] bg-black hover:bg-sky-950 active:border'
          type='button'
          onClick={onCounter}
        >
          counter {count}
        </button>
      </div>
    </>
  );
}
