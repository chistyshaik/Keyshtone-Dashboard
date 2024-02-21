import { FC } from 'react';

import './style.css';

const menuItems = [
  { itemName: 'Users', items: '3 items' },
  { itemName: 'Categories', items: '2 items' },
  { itemName: 'Products', items: '4 items' },
  { itemName: 'Product Images', items: '6 items' },
  { itemName: 'Pages', items: '3 items' },
  { itemName: 'Banner', items: '3 items' },
  { itemName: 'Banner Images', items: '4 items' },
];

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <div className="headerSection">
        <div className="logoSection">
          <img
            className="logoImg"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUPEhAWFRUWGRUVFRUSFxUVFRUdFRUWFxUWFRUYHSggGholHhsVITEhJSsrLi4uFx8zODMtNyotLisBCgoKDg0OGhAQGy4lICUtLSszLS8tLS8tNzUuMi8tLzctLS0tLy0tLS0rLSsrLS0tLS0tKy0tLS0tLS0tLS8tLf/AABEIAHQBsgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUCAwj/xABIEAABAwICBgYFCAgFBAMAAAABAAIDBBESIQUGMUFRcQcTImGBkRQyobGyNEJSYnJzgtEXIzNTVJLB8BWDk8PSFqLC4SREY//EABsBAQACAwEBAAAAAAAAAAAAAAACBgMEBQEH/8QANhEAAQMCAwQIBQQCAwAAAAAAAQACAwQRITFBBRJRcRMUYYGRobHwMjTB0eEiUrLxFTMjQoL/2gAMAwEAAhEDEQA/ALmr62OCMySOs0eZ4ADeVXemNcqiUkRkxM3Bpu495dtHs8U150qZagxA9iIloHEkdonxy8O9Rtdqjo2hoe8XJ8lVdqbTkdIYojZowJGZIzx0Aywz9PpNO55u52I8bkn2r5IsrogWXDc4k3KwixdYJRLLN15JWCVlSsvbLF0WLop2UrIsXWLopWUrLfo9M1MJBjnc227ES3xByPkp5qvrg2ocIZgGSHJrhkHnhb5rvYfYqyul1rz0cUzbEWPEZ/lb1NXTQOuDccCcPxz8bq/UXB1P0saulbI43e04X95AFneIIPO67yrEjHRvLHZhXCORsjQ9uRF0REUFNERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERUjUSl7nPO11yfE3XxWV5urWBZfOSS43KysXWCV5JUgEsskpdT6k1EifGx5mcMQa61hlcAr6/o9h/fP8gtP/ACEA1PgV1hsaqOg8VXSwvUzbOLeBI8ivF10AFzbJdYupLqrqu6sDpHuLIxkCBm477X3Djx8VIf0dw/v3+QWrJWwxuLHHEdi6EOzaiVge0YHtVcpdSfWvV+mo2C0znSu9VpAsADm51t24cTyKipK2YZGyt3mZLDNA6F+4+1+w3WbrzdCVhZrLGrA6Knn/AOQ3d+qPj2wfcPJWCq76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29xVvrk6R0BTVGckQLj85twTztt8Vv09WGs6OQXb799i5FZs175engduv8j3jzwsfMxCt17mcwtjibGTlixF5H2RYAHndcHQ+i5auXq2c3POYaDtc48e7erAj1MogbmNx7i91vZZdumpo4m4I2BrRuAsFk65FE0iFuJ19krX/wAZU1Dw6rkBA0H9NAvqc15go42NawNyaA0XJ2AWCwttFz+kdxK7nRM/aPBfn+6wSiXV1AVHssLDisXQlTAxXtlfOi/2EX3cfwhbaohumakCwqZQBkAHusLeKf43V/xMv+o/81wTsR7iTvjwKsbdsRj/AKnyWtV+u/mfeV8LoSsXViAXBzVxak6eFZT9s/rY7Nk7/ov8c/EHuUmX57p6mSM4o5HMNrXY4tNuFwdmxbX+O1f8VL/qP/NcObYgfIXMdYHS2S7cO1LMAeCTx4qd9JOr/WM9NjHaaAJQN7dgfzGw93JVot12mqsgg1MpByIMj7G+0EXWiutRQSQRCN7r2y5cPstGqkZK/fYLXz9+qyvN0uvN1uALBZWJ0QetU8offIrKVadD/rVPKH3yKy1TdsfOP5N/iFY6D5dvf6lERFzFuIiIiIiIiIiIiIiIiKH6b1IFTM+f0gsLyCRgDgLNDcjfuX10VqRSwkPdeUjMYrBt+OEbfEkKVotnrs+4Gb2GWi1RQ04eZNwXJvqceRNh3IiItZbSIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiozWGk6iqmitbC51vsk4mnyIXOurT181ZNU0TxC8rBYt/eN22H1hnbjcjgqrcCCQRYjIg5EEbQQrhQ1DaiIEZjAj3x08NFUqymdBKQcjcj32LK8rF0ut6y1giXXklYupWUl6usXWEUrKVkWLpdebqQCks3WLrF1i6nZSsl1hLrsas6vzV8uFoswEdZJbJg/q47h/RRe9kbS55sAptYXHdGJKnfRPQllPLOR+0eGt7xHcX/mc4fhU9WrQ0bIY2RRizWANaO4ceJ71tKhVc/TzOl4ny08lZoI+jjDOHs+aIiLXWVERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERFxdM6r0lX2pI7O+mw4XeO53iCiLNTvcyVpabY6KEjWuaQ4XFlU2smjWU0mBhcR9axO3uAXKRFdoSSwEqpygBxAWCsIizqKwsIi9Xq8rCIpqQWFhEUgpKxdUdSqSeMSy9Y76mINaeeEB3tVh0VLHEwRxsaxo2NaLAIipe2JXmdrSTawNr4Kw0TGiMkDFbKIi5S20RERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF/9k="
            alt="#"
            style={{ borderRadius: '10px' }}
          />
        </div>
        <div className="pageHeader">Dashboard</div>
      </div>
      <div className="mainSection">
        <div className="sidenav">
          <div className="userSection">
            <div>
              <p>
                Signed in as <br />
                <span className="userName"> Syed Zakeer Hussain</span>
              </p>
            </div>
            <button className="userNamebtn">&#x2026;</button>
          </div>
          <div className="sideDashboard">
            <div className="sideDashboardHeading">
              <p>Dashboard</p>
            </div>
            <div className="sideDashboardMenu">
              {menuItems.map((item, idx) => (
                <div className="menuItem">{item.itemName}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="cardView">
          {menuItems.map((item, idx) => (
            <div className="singleCard">
              <div>
                <div className="cardName">{item.itemName}</div>
                <div className="cardCount">{item.items}</div>
              </div>
              <div className="btnSection">
                <button className="cardbtn">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
