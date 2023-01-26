import React, { useState } from 'react'

const RendomAnecdot = ({anecdotes}) => {
  
    const [currentItem, setCurrentItem] = useState(
      anecdotes[Math.floor(Math.random() * anecdotes.length)]
    );

  
    const [topVote, setTopVote]= useState(null)
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
    const entries = Object.entries(votes);
    const [highestValueItemName, highestValue] = entries.sort((b,a) => a[1]-b[1])[0];
    // console.log(highestValueItemName, highestValue);
  
    const handleChange = () => {
      const newItem = anecdotes[Math.floor(Math.random() * anecdotes.length)];
      setCurrentItem(newItem);
    };
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <p>{currentItem}</p>
        <p>Vote: {votes[currentItem]}</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleChange}>change anecdote</button>
        <h1>Anecdote with most votes</h1>
        {highestValueItemName}
        <p>{highestValue}</p>
        
        
    </div>
     
    )
  };

  export default RendomAnecdot