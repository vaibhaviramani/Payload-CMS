import React, { useState, useEffect } from 'react';
import { useField } from 'payload/components/forms';
import { fetchAutoSuggestions } from '../utils/common';

const AutoSuggestField: React.FC<{ path: string; label: string }> = ({ path, label }) => {
  const { value, setValue } = useField({ path });
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery((value as { mainText?: string })?.mainText || '');
  }, [value]);
  
  const getSuggestionsV3 = async (query) => {
    const suggestions = await fetchAutoSuggestions(query);
    setSuggestions(suggestions);
  } 

  return (
    <div style={styles.container}>
      <label className='field-label'>{label}</label>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (e.target.value.length > 2) {
            getSuggestionsV3(e.target.value);
          } else {
            setSuggestions([]);
          }
        }}
        placeholder="Enter Location..."
        style={styles.input}
      />
      {suggestions.length > 0 && (
        <ul style={styles.suggestionsList}>
          {suggestions.map((suggestion: any, index: number) => (
            <li
              key={index}
              onClick={() => {
                setQuery(suggestion.mainText);
                setValue(suggestion);
                setSuggestions([]);
              }}
              style={styles.suggestionItem}
            >
              {suggestion.address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative' as const,
  },
  input: {
    width: '100%',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border 0.2s ease-in-out',
  },
  suggestionsList: {
    position: 'absolute' as const,
    top: '100%',
    left: '0',
    width: '100%',
    background: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    marginTop: '5px',
    listStyle: 'none',
    padding: '5px 0',
    zIndex: 1000,
    marginLeft:'15px'
  },
  suggestionItem: {
    padding: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background 0.2s ease-in-out',
    color: '#333',
  },
  suggestionItemHover: {
    background: '#f5f5f5',
  },
};

export default AutoSuggestField;
