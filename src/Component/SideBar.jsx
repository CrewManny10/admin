import './SideBar.css';
import { LineStyle, Timeline, TrendingUp, GroupTwoTone, InventoryTwoTone, MonetizationOnTwoTone, EqualizerTwoTone,
  EmailTwoTone, AssistantTwoTone, MessageTwoTone, BusinessCenterTwoTone, ReportProblemTwoTone} from '@mui/icons-material';

export default function SideBar() {
  return (
    <div className='sideBar'>
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
            <h3 className="sideBarTitle">DashBoard</h3>
            <ul className="sideBarList">

                <li className="sideBarListItem active">
                <LineStyle className='sideBarIcon'/>
                Home
                </li>
                <li className="sideBarListItem">
                <Timeline className='sideBarIcon' />
                Analytics
                </li>
                <li className="sideBarListItem">
              <TrendingUp className='sideBarIcon' />
                Sales
                </li>
            </ul>
        </div>

        <div className="sideBarMenu">
            <h3 className="sideBarTitle">Quick Menu</h3>
            <ul className="sideBarList">
                <li className="sideBarListItem">
                <GroupTwoTone className='sideBarIcon' />
                Users
                </li>
                <li className="sideBarListItem">
                <InventoryTwoTone  className='sideBarIcon'/>
                Products
                </li>
                <li className="sideBarListItem">
              <MonetizationOnTwoTone className='sideBarIcon' />
                Transactions
                </li>
                <li className="sideBarListItem">
              <EqualizerTwoTone className='sideBarIcon' />
                Reports
                </li>
            </ul>
        </div>

        <div className="sideBarMenu">
            <h3 className="sideBarTitle">Notifications</h3>
            <ul className="sideBarList">
                <li className="sideBarListItem">
                <EmailTwoTone className='sideBarIcon' />
                Mail
                </li>
                <li className="sideBarListItem">
                <AssistantTwoTone className='sideBarIcon' />
                FeedBacks
                </li>
                <li className="sideBarListItem">
              <MessageTwoTone className='sideBarIcon' />
                Messages
                </li>
            </ul>
        </div>

        <div className="sideBarMenu">
            <h3 className="sideBarTitle">Staff</h3>
            <ul className="sideBarList">
                <li className="sideBarListItem">
                <BusinessCenterTwoTone className='sideBarIcon' />
                Manage
                </li>
                <li className="sideBarListItem">
                <Timeline className='sideBarIcon' />
                Analytics
                </li>
                <li className="sideBarListItem">
              <ReportProblemTwoTone className='sideBarIcon' />
              Reports
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

