import * as React from "react";
import './firstQuestion.css'

export default function FirstQuestion(props) {
    const [number,setNumber] = React.useState();
    const [type,setType] = React.useState("isPrime");
    const [result,setResult] = React.useState();
    const state = {number,setNumber,type,setType,result};
    React.useEffect(()=>{
        switch (type) {
            case "isPrime":
                setResult(isPrime(number));
                break;
            case "IsFibanacci":
                setResult(isFibanacci(number));
                break;
            default:
                setResult(null);
        }
    },[number,type])
    return (
        <>
            <div className="main-content">
                <FirstColumn {...state}/>
                <SecondColumn {...state}/>
                <ThirdColumn {...state}/>
            </div>
            
        </>
    )
}

function FirstColumn(props){
    const {setNumber} = props;
    return(
        <div className="first-column column">
            <input 
                className="column-content"
                onChange={(e)=>setNumber(e.target.value)}
            />
        </div>
    )
}

function SecondColumn(props){
    const {type,setType} = props;
    return(
        <div className="second-column column">
            <select 
                name="type" 
                onChange={(e)=>setType(e.target.value)} 
                value={type}
                className="column-content"
            >
                <option value="isPrime">isPrime</option>
                <option value="IsFibanacci">IsFibanacci</option>
            </select>
        </div>
    )
}

function ThirdColumn(props){
    const {result} = props;
    return(
        <div className="third-column column">
            <div className="column-content">{`${result}`}</div>
        </div>
    )
}

function isPrime(number){
    if(number===null||number===undefined||number==='')return false;
    let divider =0;
    let parseNum = parseInt(number);
    while(Math.sqrt(parseNum)>=divider){
        if(parseNum===divider) return true;
        else if(parseNum%divider===0&&divider>1){
            return false;
        }
        divider++;
    }
    return true;
}

function isFibanacci(number){
    if(number===null||number===undefined||number==='')return false;
    let parseNum = parseInt(number)
    if(parseNum<0) return false;
    let number1 =0;
    let number2 =1;
    let isInLoop = false;
    while(parseNum>=number2||isInLoop===false){
        isInLoop = true;
        if(parseNum===number1||parseNum===number2)return true;

        let nextNumber = number1+number2;
        console.log(nextNumber);
        number1 = number2;
        number2 = nextNumber;
    }
    return false;
}