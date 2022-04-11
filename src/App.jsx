import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [wicket,setWicket] = useState(0);
  const [score,setScore]  = useState(0);
  const [balls,overs,setOvers] = useState(0,0);
  const scorehandler = (value)=>{
    
    if(value===1){
      setScore(score+value);
    }
    else if(value===4){
      setScore(score+value);
    }
    else{
      setScore(score+value);
    }
  }
  const wickethandler = (value)=>{
    
    if(wicket<10){
      setWicket(value+wicket);
    } 
  }

  const overhandler = (ball,over)=>{
    if(overs<=0.5){
      setOvers(ball(over+overs));

    }
  
  }

  return (
    <div >
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            { score
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            { wicket
              
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">{balls}
              {// Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{scorehandler(1)}}>Add 1</button>
        <button className="addScore4" onClick={()=>{scorehandler(4)}}>Add 4</button>
        <button className="addScore6" onClick={()=>{scorehandler(6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{wickethandler(1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button  onClick={()=>{overhandler(1,1)}}>Add 1</button>
      </div>
      {/* <div className='status'>
        <h1>{win}</h1>
      </div> */}

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;