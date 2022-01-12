
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, SubMenu, Menu, MenuItem, } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillChrome, AiOutlineDashboard } from 'react-icons/ai'
import { IconContext } from 'react-icons';
import mainLogo from '../assets/logo.png'

function Sidebar() {

    const [menuCollapse, setmenuCollapse] = useState(true)

    const menuClick = () => {
        menuCollapse ? setmenuCollapse(false) : setmenuCollapse(true)
    }

    return (
        <div>
            <div>
                <ProSidebar style= {{height: '100vh', position: 'absolute'}} collapsed={menuCollapse}>
                    <SidebarHeader style={{ height: "10vh"}}>
                     {/* <img  src={mainLogo} style={{height: '100%', width: '100%', backgroundColor: '#FFFF'}}/> */}
                    </SidebarHeader>
                    <SidebarContent style={{flexGrow: 0, position: 'relative', height: 50}}>
                        
                        <div className="closemenu" onClick={menuClick}>
                            
                            <IconContext.Provider
                                value={{color: 'white', size: '40px', style: { position: 'absolute', bottom: '0', right: '0', width: '25px' }}}
                            >
                                <div>
                                {menuCollapse ? <AiOutlineArrowRight/> : <AiOutlineArrowLeft/>}  
                                </div>
                            </IconContext.Provider>
                            
                        </div>
                    </SidebarContent>
                    <Menu iconShape="square" style={{ flexGrow: 1, backgroundColor: '#FFF0' }} >
                        <MenuItem  icon={<AiOutlineDashboard style={{width : '100%', height: '100%', backgroundColor: '#FFF0'}}/>}>Dashboard</MenuItem>
                        <SubMenu icon={<AiFillChrome/>} title="Components">
                            <MenuItem icon={<AiFillChrome/>}>Component 1</MenuItem>
                            <MenuItem icon={<AiFillChrome/>}>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                    <SidebarFooter>
                        <p>The Footer</p>
                    </SidebarFooter>
                </ProSidebar>;
            </div>
        </div>
    )
}

export default Sidebar
