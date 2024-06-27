import Chart from "@/components/common/Chart";
import { useEffect, useState } from "react";
import Brochure from "./Brochure";
import Text from "@/components/common/Text";

function index() {
  const [totalStudents, setTotalStudents] = useState(5000);
  const [feesPaid, setFeesPaid] = useState(3000);
  const [selectedClass, setSelectedClass] = useState("School");
  const schoolData = [
    {
      className: "11a",
      totalStudents: 500,
      feesPaid: 200,
    },
    {
      className: "11b",
      totalStudents: 300,
      feesPaid: 100,
    },
    {
      className: "11c",
      totalStudents: 700,
      feesPaid: 500,
    },
    {
      className: "10a",
      totalStudents: 400,
      feesPaid: 350,
    },
  ];
  useEffect(() => {
    if (selectedClass == "School") {
      const totalStudents = schoolData.reduce((acc: any, curr: any) => {
        console.log(curr);

        return acc + curr.totalStudents;
      }, 0);
      const feesPaid = schoolData.reduce(
        (acc: any, curr: any) => acc + curr.feesPaid,
        0
      );
      setTotalStudents(totalStudents);
      setFeesPaid(feesPaid);
    } else {
      const classData = schoolData.filter(
        (item) => item.className == selectedClass
      );
      setTotalStudents(classData[0].totalStudents);
      setFeesPaid(classData[0].feesPaid);
    }
  }, [selectedClass]);

  const options = {
    navigation: {
      buttonOptions: {
        enabled: true,
      },
    },
    chart: {
      type: "column",
    },
    title: {
      text: selectedClass,
      align: "center",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ["Total", "Fees Paid", "Fees left"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of students",
      },
    },
    tooltip: {
      valueSuffix: " Students",
    },
    colors: ["#4572A7", "#89A54E", "#AA4643"],
    plotOptions: {
      column: {
        colorByPoint: true,
        dataLabels: {
          enabled: true,
          format: "{y} Students",
        },
      },
    },
    series: [
      {
        name: "Fees",
        data: [totalStudents, feesPaid, totalStudents - feesPaid],
      },
    ],
  };
  return (
    <div className="h-screen bg-white text-black dark:bg-Gray-dark-gray dark:text-white p-5">
      <div className="flex justify-between">
        <div>
          <h1 className="body-1 font-Montserrat">Hey , Aryan Gupta </h1>
          <Text as="p" className="text-fs-15 mt-1">
            Welcome Back 🎉
          </Text>
        </div>
        <div>
          <Brochure />
        </div>
      </div>

      <div className="flex space-x-5 my-10">
        <select
          className="px-3 py-2 rounded-md border border-gray-200"
          id="dropdown"
          value={selectedClass}
          onChange={(e) => {
            setSelectedClass(e.target.value);
          }}
        >
          {["School"]
            .concat(schoolData.map((item) => item.className))
            .map((ele, i) => (
              <option key={i} value={ele}>
                {ele}
              </option>
            ))}
        </select>
      </div>
      <Chart options={options} />
    </div>
  );
}

export default index;
