import React from 'react'
import './TicTacToe.css'
import circle from '../assets/circle.png'
import cross from '../assets/cross.png'

let data = ["","","","","","","","",""];



const TicTacToe = () => {

    let [count,setCount] = React.useState(0);
    let [lock,setLock] = React.useState(false);
    let titleRef = React.useRef(null);
    let box1 = React.useRef(null);
    let box2 = React.useRef(null);
    let box3 = React.useRef(null);
    let box4 = React.useRef(null);
    let box5 = React.useRef(null);
    let box6 = React.useRef(null);
    let box7 = React.useRef(null);
    let box8 = React.useRef(null);
    let box9 = React.useRef(null);

    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toggle = (e,num) => {
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML= `<img src='${cross}'>`;
            data[num] = 'X';
            setCount(++count);
        }
        else{
            e.target.innerHTML= `<img src='${circle}'>`;
            data[num] = 'O';
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = ()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
           won(data[0]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[3]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[6]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[0]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[1]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[2]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[0]);
        }
        else if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[0]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[2]);
        }
        

    }

    const won = (winner)=>{
        setLock(true);
        if(winner==='X'){
            titleRef.current.innerHTML = `Congratulations: <img src='${cross}'> Wins`;
        }
        else{
            titleRef.current.innerHTML = `Congratulations: <img src='${circle}'> Wins`;
        }
    }


    const reset = ()=>{
        setLock(false);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML = `Tic Tac Toe Game In <span>React</span>`;
        box_array.map((e)=>{
            e.current.innerHTML = "";
        
        })
    }


    return (
        <div className='container'>
            <h1 className='title' ref = {titleRef}>Tic Tac Toe Game In <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>
            <button className='reset' onClick={()=>{reset()}}>Reset</button>
        </div>
    )
}

export default TicTacToe