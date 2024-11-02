import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Basic Gym Plan', value: 200 },
  { name: 'Standard Gym Plan', value: 50 },
  { name: 'Premium Gym Plan', value: 20 },
];

const COLORS = ['#D0FD3E', '#FDCF6F', '#75B3FE'];

export default class SubscriptionChart extends PureComponent {
  render() {
    return (
      <div className="text-center mx-auto bg-[#424756] rounded-lg w-[400px] text-white p-4 ">
        <h2 className="text-lg font-semibold mb-4">Today Subscriptions</h2>
        
        <div className="flex  md:flex-row flex-col items-center justify-center">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
             
            </PieChart>
          </ResponsiveContainer>
       
        
        <div className="mt-4 w-full ml-6 space-y-2">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center lg:justify-start justify-center">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  }
}
