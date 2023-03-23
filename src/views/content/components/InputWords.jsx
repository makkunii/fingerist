import React, { useRef, useEffect } from 'react';
import { Input } from '../../../components';
import useGame from '../../../hooks/useGame';

const InputWords = ({ word, HintIndex, setInputRef, ...props }) => {
  const { gameLetterNumbers, setGameUserInputs } = useGame();

  const formatValues = () => {
    let snapshot = '';

    const inputs = document?.querySelectorAll(`.data-hint-field-${HintIndex}`);

    inputs?.forEach((e) => (snapshot += `${e.value}`));

    setGameUserInputs({
      type: 'WORDLIST',
      index: HintIndex,
      userInputs: snapshot,
    });
  };

  const inputRefs = useRef([]);

  const handleKeyUp = (event, currentIndex) => {
    const maxLength = event.target.maxLength;
    const currentLength = event.target.value.length;
    console.log(`handleKeyUp called for input ${currentIndex}`);
    if (currentLength === maxLength) {
      const nextIndex = currentIndex + 1;
      console.log(`nextIndex = ${nextIndex}`);
      console.log(inputRefs.current);
      if (inputRefs.current[nextIndex]) {
        console.log(`Setting focus to input ${nextIndex}`);
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const setInputRefs = (rowIndex, inputRef) => {
    inputRefs.current[rowIndex] = inputRef;
  };

  return word?.split('').map((el, i) => {
    const propValue = gameLetterNumbers[el]?.isFilled ? { value: el } : {};

    return (
      <Input
        placeholder="?"
        number={gameLetterNumbers[el].index}
        height="40px"
        fontSize="10px"
        numberSize="10px"
        key={`hint-field-${i}`}
        className={`data-hint-field-${HintIndex}`}
        onChange={() => formatValues()}
        disabled={gameLetterNumbers[el].isFilled}
        isSuccess={gameLetterNumbers[el].isFilled}
        maxLength="1"
        ref={(element) => setInputRefs(i, element)}
          onKeyUp={(event) => handleKeyUp(event, i)}
          {...propValue}
          {...props}
        />
      );
    });
  };
  
  export default InputWords;
