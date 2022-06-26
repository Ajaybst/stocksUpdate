import React, { useState } from "react";
let LiveData = () => {
  // Gainers data
  let [gainers] = useState([
    {
      name: "SBIN",
      open: 458.1,
      high: 463.45,
      low: 456.15,
      close: 460.2,
    },
    {
      name: "TCS",
      open: 3340.0,
      high: 3360.45,
      low: 3315.15,
      close: 3355.2,
    },
    {
      name: "Wipro",
      open: 580.65,
      high: 586.5,
      low: 579.15,
      close: 586.2,
    },
  ]);
  // Losers data
  let [losers] = useState([
    {
      name: "SAIL",
      open: 76.3,
      high: 76.45,
      low: 68.75,
      close: 71.5,
    },
    {
      name: "Hindalco",
      open: 365.2,
      high: 366.45,
      low: 355.15,
      close: 360.2,
    },
    {
      name: "Vedl",
      open: 265.65,
      high: 265.75,
      low: 260.15,
      close: 264.2,
    },
  ]);

  let gainersTable = gainers.map((data, i) => {
    return (
      <tr key={i}>
        <td>{data.name}</td>
        <td>{data.open}</td>
        <td>{data.high}</td>
        <td>{data.low}</td>
        <td>{data.close}</td>
      </tr>
      // console.log(data.name)
    );
  });
  let loserTable = losers.map((data, i) => {
    return (
      <tr key={i}>
        <td>{data.name}</td>
        <td>{data.open}</td>
        <td>{data.high}</td>
        <td>{data.low}</td>
        <td>{data.close}</td>
      </tr>
      // console.log(data.name)
    );
  });
  return (
    <>
      <h1 className="gainersLosersHeading">
        Top <span className="gainersText">Gainers</span> and
        <span className="losersText"> Losers</span>
      </h1>
      <div className="liveDataParentDiv">
        <div className="gainersDiv">
          <table className="table greenBackground">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">open</th>
                <th scope="col">High</th>
                <th scope="col">Low</th>
                <th scope="col">Close</th>
              </tr>
            </thead>
            <tbody>{gainersTable}</tbody>
          </table>
        </div>
        <div className="losersDiv">
          <table className="table redbackground">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">open</th>
                <th scope="col">High</th>
                <th scope="col">Low</th>
                <th scope="col">Close</th>
              </tr>
            </thead>
            <tbody>{loserTable}</tbody>
          </table>
        </div>
      </div>
      <h1 className="newsheading">Top News Headlines</h1>
      <div className="newsDiv">
        <h4>
          Market snaps 2-weeks losing streak to gain 2%; IT stocks outshine
        </h4>
        <br />
        <h4>
          inflation may stay beyond RBI tolerance band for three quarters:
          Michael Patra
        </h4>
        <br />

        <h4>Fiscal, defence realities push goverment to work out agnipath</h4>
        <br />
      </div>
    </>
  );
};
export default LiveData;
