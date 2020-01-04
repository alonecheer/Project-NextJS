import '../styles/style.css'
import { Avatar, Icon } from 'antd';
import Button from '@material-ui/core/Button';
import Router from 'next/router'
function MainLayouts() {

    return (
        <div>
            <div className="container">
                <Button onClick={()=>{Router.push('/options')}}>
                    <Icon type="caret-left" />
                    Options
                    </Button>
                <div className="topnav">
                    <Avatar className='avatar2' icon="user" />
                    <a>Username</a>
                </div>
            </div>
        </div>

    )
}
export default MainLayouts;