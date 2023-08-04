import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const onCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center gap-y-12 bg-gray-900 text-white'>
        <h1 className='animate-pulse text-2xl font-bold'>
          REACT PROFESSIONAL CONFIGURATION!
        </h1>
        <button
          className='rounded-[8px] bg-black px-4 py-2 hover:bg-sky-950 active:border'
          type='button'
          onClick={onCounter}
        >
          counter {count}
        </button>
      </div>
    </>
  );
}
