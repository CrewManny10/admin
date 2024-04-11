import { Visibility } from '@mui/icons-material'
import './WidgetSm.css'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle"> New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmItem">
          <img 
            className="widgetSmImg" 
            src="admin/src/images/Jon.jpeg" 
            alt="" 
            />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Jon Snow</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img 
            className="widgetSmImg" 
            src="admin/src/images/Cersei.jpeg" 
            alt="" 
            />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Cersei Lannister</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img 
            className="widgetSmImg" 
            src="admin/src/images/Tyrion.jpeg" 
            alt=""
            />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Tyrion Lannister</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img 
            className="widgetSmImg"   
            src="admin/src/images/sansa.jpeg"
             alt=""
             />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Sansa Stark</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img 
              className="widgetSmImg" 
              src="admin/src/images/Dani.jpeg" 
              alt="" 
              />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Daenerys Targaryen </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img 
              className="widgetSmImg" 
              src="admin/src/images/Dani.jpeg" 
              alt="" 
              />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Theon Greyjoy </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img 
              className="widgetSmImg" 
              src="admin/src/images/Dani.jpeg" 
              alt="" 
              />
          <div className="widgetSmUser">
            <span className="widgetSmUserName"> Davos Seaworth </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img 
              className="widgetSmImg" 
              src="admin/src/images/Dani.jpeg" 
              alt="" 
              />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Oberyn Martell </span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
