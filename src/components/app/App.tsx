import React, { FC, Suspense} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//packages
import ReduxToastr from "react-redux-toastr";


// components
import ReposContainer from "../containers/Repos";
// import RepoContainer from "../containers/Repo";
// import UserContainer from "../containers/User";
import NotFoundContainer from "../containers/NotFound";

// style
import "./style.scss";

const App: FC = () => {
    return (
        <Suspense fallback={null}>
            <Router>
                <Switch>
                    <Route path="/" component={ReposContainer}/>
                    <Route path="/repos" component={ReposContainer}/>
                    {/*<Route path="/repos/*" component={RepoContainer}/>*/}
                    {/*<Route path="/user" component={UserContainer}/>*/}
                    <Route path="*" component={NotFoundContainer}/>
                </Switch>
            </Router>
            <ReduxToastr
                timeOut={5000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
                className="toastr-custom"
            />
        </Suspense>
    );
};


export default App;
