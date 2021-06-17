import * as React from 'react';
export default function ThirdQuestion(){
    return (
        <>
            <ComponentDidMouth/>
        </>
    )
}

function ComponentDidMouth(){
    React.useEffect(()=>{
        let data = fetch('https://codequiz.azurewebsites.net/',{
            mode:'cors',
            credentials: 'include',
            headers:{
                "Set-Cookie": "hasCookie=true;SameSite=None;Secure",
            }
        }).then(res =>
            {
            res.json();
            let hsts = res.headers.get("strict-transport-security");
            let csp = res.headers.get("content-security-policy")
            console.log(hsts, csp,res.headers)
            }
        ).then((response) => {
            console.info('fetch()', response);
            return response
        }).catch((e)=>{
            console.log(e);
        }); 
        console.log(data);
    },[])
    return<></>
}
