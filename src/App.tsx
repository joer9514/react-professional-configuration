import { useRef, useEffect } from 'react';

export default function App() {
  const [ref, _ref] = useGrane();

  return (
    <div className='App'>
      <div className='App-Container'>
        <h1 ref={_ref}>PROFESSIONAL CONFIGURATION REACT!</h1>

        <p ref={ref}>
          In the&nbsp;
          <a href='../README.md' target='_blank'>
            README.md
          </a>
          &nbsp;file you will find all the necessary information, if you have
          any questions, you are free to contact me.
          <br />
          <br />
          -&nbsp;
          <a
            href='https://linkedin.com/in/joseespinosaramirez'
            target='_blank'
            rel='noopenner noreferrer'
          >
            Linkedin
          </a>
          <br />
          -&nbsp;<a href='mailto:joer9514@gmail.com'>Gmail</a>
        </p>

        <div id='bg' />
        <div id='bg_' />
      </div>
    </div>
  );
}

const useGrane = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const _ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setTimeout(function () {
      if (ref.current != null && _ref.current !== null) {
        ref.current.style.opacity = '1';
        ref.current.style.filter = 'blur(0px)';
        _ref.current.style.opacity = '1';
        _ref.current.style.filter = 'blur(0px)';
      }
    }, 1000);
  }, []);

  return [ref, _ref] as const;
};
