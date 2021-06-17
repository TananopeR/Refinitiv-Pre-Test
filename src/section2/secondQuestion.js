
import * as React from "react";

export default function SecondQuestion(props) {
    const [data,setData] = React.useState();
    const [searchText,setSearchText] = React.useState('');
    const [searhResult,setSearhResult] = React.useState();
    let state={data,setData,searhResult,setSearhResult,searchText,setSearchText};
    return (
        <>
            <ComponentDidMouth {...state}/>
            <div style={{ height:"100%"}}>
                <Search {...state}/>
                <Table {...state}/>
            </div>
            
        </>
    )
}
function ComponentDidMouth(props){
    const {setData} = props;
    React.useEffect(()=>{
        fetch('https://api.publicapis.org/categories').then(res =>res.json()).then((response) => {
            setData(response);
        }); 
    },[])
    return<></>
}

function Search(props){
    const {data,setSearhResult,searchText,setSearchText} = props;
    React.useEffect(()=>{
        let searchResult = (data||[]).filter(v=>v.toLowerCase().includes(searchText.toLowerCase()));
        setSearhResult(searchResult);
    },[data,searchText])
    return(
        <>
            <input onChange={(e)=>setSearchText(e.target.value)}/>
        </>
    )
}

function Table(props){
    const {searhResult} = props;
    return(
        <>
            <table>
                { (searhResult||[]).map((v,i)=>{
                    return <tr key={`${v}${i}`}><td>{v}</td></tr>
                })}
            </table>
        </>
    )
}