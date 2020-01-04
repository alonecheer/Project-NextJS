import '../styles/style.css'
import { Avatar, Icon } from 'antd';
import Button from '@material-ui/core/Button';
function MainLayouts() {

    return (
        <div>
            <div className="container">
                <Button href='/options'>
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