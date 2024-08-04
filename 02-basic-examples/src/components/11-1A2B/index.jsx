/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react';

const generateRandomNumber = () => {
  const digits = [];
  while (digits.length < 4) {
    const randomDigit = Math.floor(Math.random() * 10);
    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }
  return digits.join('');
};
const calculateAB = (input, secret) => {
  let A = 0;
  let B = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === secret[i]) {
      A++;
    } else if (secret.includes(input[i])) {
      B++;
    }
  }
  return `${A}A${B}B`;
};

const Question1A2B = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [secret] = useState(generateRandomNumber());

  useEffect(() => {
    if (input.length === 4) {
      const resultObj = calculateAB(input, secret);
      setResult(resultObj);
    }
  }, [input, secret]);

  return (
    <section data-name="1A2B">
      <input
        type="number"
        className="my-input"
        value={input}
        maxLength={4}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div>{result}</div>
    </section>
  );
};

export default Question1A2B;
