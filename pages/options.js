import '../styles/style.css'
import MainLayout from '../layouts/MainLayout'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import Router from 'next/router'
function Options() {
    return (
        <div className='bg'>
            <MainLayout />
            <div className='box'>
                <div id='box1'>
                    Select options
                </div>
                <div id='box2'>
                    <div>
                        <Button  onClick={()=>{Router.push('/insert')}} block>Options 1 </Button>
                        <Button  href="/insert" block>Options 2</Button>
                        <Button  href="/" block>Options 3</Button>
                        <Button  href="/" block>Options 4</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Options;