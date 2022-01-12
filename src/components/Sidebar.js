
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, SubMenu, Menu, MenuItem, } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useState } from 'react';



function Sidebar() {

    const [menuCollapse, setmenuCollapse] = useState(false)

    const menuClick = () => {
        menuCollapse ? setmenuCollapse(false) : setmenuCollapse(true)
    }
    
    return (
        <div>
            <div>
                <ProSidebar width="100%" style={{ height: "100vh" }} collapsed={menuCollapse}>
                    <SidebarHeader>
                        <p>The Header</p>
                    </SidebarHeader>
                    <SidebarContent style={{ flexGrow: 0 }}>
                        <p>My Content</p>
                        <button onClick={menuClick}>Click</button>
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
