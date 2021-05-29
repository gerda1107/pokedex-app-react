import React from "react";

const StatsTable = ({getDetails}) => {

    return <table className="table">
          <thead>
            <tr>
              <th scope="col">NAME</th>
              <th scope="col" colspan="4">BASE STATS</th>
              <th scope="col">EFFORT</th>
            </tr>
          </thead>
          <tbody>
            {getDetails.stats.map((stat, index) => {
              return <tr key={index}>
              <td>{ stat.stat.name}</td>
                <td colspan="4">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{ width: `${stat.base_stat}%`}} aria-valuenow={stat.base_stat} aria-valuemin="0" aria-valuemax="100">{stat.base_stat}</div>
                  </div>
                </td>
              <td>{stat.effort}</td>
            </tr>})}
          </tbody>
        </table>   
}

export default StatsTable;