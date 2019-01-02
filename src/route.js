import React from "react"

import DashboardPage from "./pages/dashboard"
// import LoginPage from "./login/login"
// import RegisterPage from "./register/register"
import NotFoundPage from "./pages/notFound"
import ProfilePage from "./pages/profile/profile"
// import EventListPage from "./eventList/eventList"
// import EventDetailPage from "./eventDetail/eventDetail"

import {Route, Switch} from "react-router-dom"

function route(){
    return(
        <Switch>
            <Route exact path="/" component={DashboardPage} />
            {/* <Route path="/login" component={LoginPage} /> */}
            {/* <Route path="/register" component={RegisterPage} /> */}
            <Route path="/profile" component={ProfilePage} />
            {/* <Route path="/event_list" component={EventListPage} /> */}
            {/* <Route path="/event_detail" component={EventDetailPage} /> */}
            <Route path="*/:param" component={NotFoundPage} />
        </Switch>
    );
}

export default route