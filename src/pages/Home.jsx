
import Charts from '../Component/Charts';
import FeaturedInfo from '../Component/FeaturedInfo';
import './Home.css';
import { userData } from '../Data';
import WidgetSm from '../Component/WidgetSm';
import WidgetLg  from '../Component/WidgetLg';

export default function Home() {
  return (
    <div className='home'>
    <FeaturedInfo />
    <Charts  data={userData} title="User Analytics" grid dataKey="Active User" />
    <div className='homeWidgets' >
      <WidgetSm />
      <WidgetLg />
    </div>
    </div>
  )
}
