import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 200},
];
const COLORS = ['#FFC300 ', '#D0FD3E'];

export default class Example3 extends PureComponent {
  render() {
    return (
      <PieChart width={160} height={160}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={70}
          paddingAngle={5}
          dataKey="value"
        >

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))} 
        </Pie>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="30" fontWeight="bold">
              34
            </text>
            <text x="50%" y="60%" textAnchor="middle" dominantBaseline="central" fontSize="16" fontWeight="normal">
              %
            </text>
      </PieChart>
    );
  }
}
