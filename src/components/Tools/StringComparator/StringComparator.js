import React, { useState } from 'react';
import './StringComparator.css';

const StringComparator = () => {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [comparedStr1, setComparedStr1] = useState('');
  const [comparedStr2, setComparedStr2] = useState('');

  const compareStrings = () => {
    const s1 = caseSensitive ? string1 : string1.toLowerCase();
    const s2 = caseSensitive ? string2 : string2.toLowerCase();
    const minLength = Math.min(s1.length, s2.length);

    let result1 = '';
    let result2 = '';
    let mismatchFound = false;

    for (let i = 0; i < minLength; i++) {
      const c1 = s1[i];
      const c2 = s2[i];
      const origC1 = string1[i];
      const origC2 = string2[i];

      if (c1 !== c2) {
        mismatchFound = true;
        result1 += `<span class="highlight">${origC1}</span>`;
        result2 += `<span class="highlight">${origC2}</span>`;
      } else {
        result1 += origC1;
        result2 += origC2;
      }
    }

    result1 += string1.slice(minLength);
    result2 += string2.slice(minLength);

    if (!mismatchFound && string1.length === string2.length) {
      setResultMessage('<span style="color:green;">✅ Strings are equal</span>');
      setComparedStr1('');
      setComparedStr2('');
    } else {
      setResultMessage('<span style="color:red;">❌ Strings are NOT equal</span>');
      setComparedStr1(`String 1: ${result1}`);
      setComparedStr2(`String 2: ${result2}`);
    }
  };

  return (
    <div className="container">
      <h1>String Comparator</h1>
      <input
        type="text"
        placeholder="Enter first string"
        value={string1}
        onChange={(e) => setString1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter second string"
        value={string2}
        onChange={(e) => setString2(e.target.value)}
      />
      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
          />{' '}
          Case Sensitive
        </label>
      </div>
      <button onClick={compareStrings}>Compare</button>

      <div id="resultMessage" dangerouslySetInnerHTML={{ __html: resultMessage }} />
      <div id="comparedString1" dangerouslySetInnerHTML={{ __html: comparedStr1 }} />
      <div id="comparedString2" dangerouslySetInnerHTML={{ __html: comparedStr2 }} />
    </div>
  );
};

export default StringComparator;
