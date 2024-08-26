import MainNavigation from './main-navigation'
const { Fragment } = require("react");

function Layout(props){
    return (<Fragment>
        <MainNavigation />
        <main>{props.children}</main>
    </Fragment>
)}

export default Layout;