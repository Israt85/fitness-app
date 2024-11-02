import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Aug', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Sep', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Oct', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Nov', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Dec', uv: 3490, pv: 4300, amt: 2100 },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/tiny-bar-chart-xzyy8g';

  render() {
    return (
      <ResponsiveContainer className='mx-auto' width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <XAxis dataKey="name" padding={{ left: 10, right: 10 }} tick={{ fill: 'white' }} />
          <YAxis tick={false} axisLine={false} />
          <Tooltip />
          <Legend />
          {/* Add radius to create rounded corners */}
          <Bar dataKey="pv" fill="#FEDB8A" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
