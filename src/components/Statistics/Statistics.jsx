
import  { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#FF444A", "#00C49F"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Statistics() {
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    
    const storedDonation = localStorage.getItem('donation');
    if(storedDonation){
      setRatio(JSON.parse(storedDonation));
    }
    else{
      toast.error(`You haven't donated yet`, {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    }
    
  }, []);


  const stored = (((ratio.length) / 12) * 100);
  const total = (((12 - ratio.length) / 12) * 100);
  const data = [
    { name: "Group A", value: total },
    { name: "Group B", value: stored },
  ];
  console.log(total, stored);


  return (
    <div className="mx-auto overflow-x-hidden">
      <div className="grid justify-center mt-10">
        <PieChart className="pt-8 pl-8" width={500} height={500}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center gap-8">
        <div className="flex gap-2">
          <h1>Your Donation</h1>
          <svg className="mt-2" width="100" height="12" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="12" rx="2" fill="#00C49F" />
          </svg>

        </div>
        <div className="flex gap-2">
          <h1>Total Donation</h1>
          <svg className="mt-2" width="100" height="12" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="12" rx="2" fill="#FF444A" />
          </svg>

        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
