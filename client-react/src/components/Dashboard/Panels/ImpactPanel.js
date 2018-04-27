import React, { Component } from 'react';
import {PieChart, Pie, Tooltip, Cell} from 'recharts';
import PanelTitle from './PanelTitle';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

const COLORS = ['#DC6F70', '#88C0AE', '#F9CF7A', '#A27CBF', '#7590C1'];

class ImpactPanel extends Component {
  render() {
    return (
      <div>
        <PanelTitle>Impact</PanelTitle>
        <PieChart width={300} height={300}>
          <Pie isAnimationActive={false} data={data} cx={150} cy={150} outerRadius={100} fill="#8884d8" label>
          	{
            	data.map((entry, index) => (<Cell fill={COLORS[index % COLORS.length]}/>))
            }
          </Pie>
          <Tooltip/>
         </PieChart>
      </div>
    );
  }
}

export default ImpactPanel;
