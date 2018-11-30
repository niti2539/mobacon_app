import React, { Component } from 'react'
import { Router, Scene, Actions, Drawer, ActionConst } from 'react-native-router-flux'
import DrawerMenu from './Scene/Components/DrawerMenu'
import Home from './Scene/Home'
import LoginCarrier from "./Scene/LoginCarrier"
import Chat from "./Scene/Chat"
import Login from "./Scene/Login"
import SignUp from "./Scene/SignUp"
import ConfirmCode from "./Scene/ConfirmCode"
import ShowPromotion from './Scene/ShowPromotion'
import UpgradeToPro from './Scene/UpgradeToPro'
import AnalyzeDetail from './Scene/AnalyzeDetail'
import ReportHistory from './Scene/ReportHistory'
import ReportHistoryDetail from './Scene/ReportHistoryDetail'

  
export class Route extends Component {
    componentDidMount() {
        
    }
  render() {
    return (
        <Router navigationBarStyle={{backgroundColor:'#79BFBC'}}>
            <Scene key="root" titleStyle={style.titleStyle} leftButtonIconStyle={style.leftButtonStyle} >
                <Scene key="drawerMenu" 
                    contentComponent={DrawerMenu}
                    
                    drawer
                    drawerWidth={300}
                    hideNavBar> 
                    <Scene key="login" component={Login} title="LOGIN" hideNavBar initial  type={ActionConst.RESET}/>
                    <Scene key="signUp" component={SignUp} title="SIGNUP" hideNavBar/>
                    <Scene key="confirmCode" component={ConfirmCode} title="CONFIRM CODE" hideNavBar/>
                    <Scene key="home" component={Home} title="ANALYZE BILL"  hideNavBar/>
                    <Scene key="LoginCarrier" component={LoginCarrier} title="LOGIN INTO YOUR ACCOUNT" hideNavBar />
                    <Scene key="Analyze" component={AnalyzeDetail} title="AnalyzeDetail"  hideNavBar/>
                    <Scene key="promotion" component={ShowPromotion} title="Live Chat" hideNavBar/>
                    <Scene key="Upgrade" component={UpgradeToPro} title="Live Chat" hideNavBar />
                    <Scene key="chat" component={Chat} title="Live Chat" hideNavBar/>
                    <Scene key="ReportHistory" component={ReportHistory} title="ReportHistory"  hideNavBar/>
                    <Scene key="ReportHistoryDetail" component={ReportHistoryDetail} title="ReportHistoryDetail" hideNavBar />
                </Scene>
            </Scene>
        </Router>
    )
  }
}

const style = {
    titleStyle: {
        color: '#fff',
    },
    leftButtonStyle:{
        tintColor:'white'
        
    }
}


export default Route;