
import FirstQuestion from './section2/firstQuestion';
import SecondQuestion from './section2/secondQuestion';
import ThirdQuestion from './section2/thirdQuestion';
import Section2 from './section2/index';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";

export default function routePage(props){
    
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/section2/firstQuestion">
                        <FirstQuestion {...props}/>
                    </Route>
                    <Route path="/section2/secondQuestion">
                        <SecondQuestion {...props}/>
                    </Route>
                    <Route path="/section2/thirdQuestion">
                        <ThirdQuestion {...props}/>
                    </Route>
                    <Route>
                        <Section2 {...props}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}
