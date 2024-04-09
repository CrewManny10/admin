import './FeaturedInfo.css';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,500</span>
                <span className="featureMoneyRate">
                -12.5 <ArrowDownward className="featuredIcon negative" /> 
                </span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$5,000</span>
                <span className="featureMoneyRate">
                -1.5 <ArrowDownward className="featuredIcon negative" /> 
                </span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,500</span>
                <span className="featureMoneyRate">
                +2.5 <ArrowUpward className="featuredIcon" /> 
                </span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
    </div>
  )
}
