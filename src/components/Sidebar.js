
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, SubMenu, Menu, MenuItem, } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { IconContext } from 'react-icons';
function Sidebar() {

    const [menuCollapse, setmenuCollapse] = useState(true)

    const menuClick = () => {
        menuCollapse ? setmenuCollapse(false) : setmenuCollapse(true)
    }

    return (
        <div>
            <div>
                <ProSidebar width="100%" style={{ height: "100vh" }} collapsed={menuCollapse}>
                    <SidebarHeader style={{ height: "10vh"}}>

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
                    <Menu iconShape="square" style={{ flexGrow: 1 }} >
                        <MenuItem>Dashboard</MenuItem>
                        <SubMenu title="Components">
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
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
