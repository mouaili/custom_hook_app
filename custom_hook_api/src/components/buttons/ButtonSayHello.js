import React, { useEffect, useState } from 'react';
import useUpdateDocTitle from '../hooks/useUpdateDocTitle';

function ButtonSayHello() {
  const [text, setText] = useState('');
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    if (isTrue) {
      setText('Bonjour');
    } else {
      setText('Bonsoir');
    }
  }, [isTrue]);

  //Custom Hook
  useUpdateDocTitle(text);

  return (
    <div>
      <button className="btn btn-info m-3" onClick={() => setIsTrue(!isTrue)}>
        Cliquez ici
      </button>
    </div>
  );
}

export default ButtonSayHello;
