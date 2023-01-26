import React, { useState } from 'react'

const RendomAnecdot = ({anecdotes}) => {
  
    const [currentItem, setCurrentItem] = useState(
      anecdotes[Math.floor(Math.random() * anecdotes.length)]
    );
  
    const [votes, setVotes] = useState(() => {
      let initItem = {};
      anecdotes.forEach((item) => (initItem[item] = 0));
      return initItem;
    });
  
    const handleVote = () => {
      setVotes((prevVote) => {
        return {
          ...prevVote,
          [currentItem]: prevVote[currentItem] + 1,
        };
      });
    };
  
    const handleChange = () => {
      const newItem = anecdotes[Math.floor(Math.random() * anecdotes.length)];
      setCurrentItem(newItem);
    };
    return (
      <div>
        <p>{currentItem}</p>
        <p>Vote: {votes[currentItem]}</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleChange}>change anecdote</button>
      </div>
    );
  };

  export default RendomAnecdot