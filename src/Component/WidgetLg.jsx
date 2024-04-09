
import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="admin/src/images/frank.jpeg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Frank Ocean</span>
            </td>
            <td className="widgetLgDate">28 Mar 2024</td>
            <td className="widgetLgAmout">$1200.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="admin/src/images/Lebron.jpeg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Lebron James</span>
            </td>
            <td className="widgetLgDate">28 Mar 2024</td>
            <td className="widgetLgAmout">$1200.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="admin/src/images/kevin.jpeg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Kevin Hart</span>
            </td>
            <td className="widgetLgDate">28 Mar 2024</td>
            <td className="widgetLgAmout">$1200.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="admin/src/images/James.jpeg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">James Madison</span>
            </td>
            <td className="widgetLgDate">28 Mar 2024</td>
            <td className="widgetLgAmout">$1200.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="admin/src/images/Ayra.webp"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Ayra Starr</span>
            </td>
            <td className="widgetLgDate">28 Mar 2024</td>
            <td className="widgetLgAmout">$1200.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="admin/src/images/Manny.JPG"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Adam Jefferson</span>
            </td>
            <td className="widgetLgDate">28 Mar 2024</td>
            <td className="widgetLgAmout">$1200.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="admin/src/images/Celine.webp"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Celine Dion</span>
            </td>
            <td className="widgetLgDate">28 Mar 2024</td>
            <td className="widgetLgAmout">$1200.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
