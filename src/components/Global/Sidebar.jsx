import './Sidebar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/imgs/logo.jpg'
import AppsIcon from '@material-ui/icons/Apps'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined'
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import MiniCard from "../../components/miniCard/MiniCard"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img src={Logo} className='logo' />
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <li>
            <AppsIcon className='icon' />
            <span>Home</span>
          </li>
          <li>
            <SmsOutlinedIcon className='icon' />
            <span>Messages</span>
          </li>
          <li>
            <AssignmentOutlinedIcon className='icon' />
            <span>Task</span>
          </li>
          <li>
            <PeopleAltOutlinedIcon className='icon' />
            <span>Members</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon' />
            <span>Setting</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <li>
            <span className='hoo'>My Projects</span>
            <ControlPointIcon className='icon1' />
          </li>

          <li className='bottomLi'>
            <div className='icon3'>
              <FiberManualRecordIcon className='icon3' />
            </div>
            <div className='bottomtext'>Sara’s Kitchen</div>
            <div className='icon'>
              <MoreHorizIcon />
            </div>
          </li>
          <li className='bottomLiTwo'>
            <div className='icon3'>
              <FiberManualRecordIcon className='icon5' />
            </div>
            <div className='bottomtextTwo'>Bathroon Design</div>
          </li>
          <li className='bottomLiTwo'>
            <div className='icon3'>
              <FiberManualRecordIcon className='icon4' />
            </div>
            <div className='bottomtextTwo'>U Shaped Kitchen</div>
          </li>
          <li className='bottomLiTwo'>
            <div className='icon3'>
              <FiberManualRecordIcon className='icon3' />
            </div>
            <div className='bottomtextTwo'>Wireframes</div>
          </li>
        </ul>
        <MiniCard/>
      </div>
    </div>
  )
}

export default Sidebar
