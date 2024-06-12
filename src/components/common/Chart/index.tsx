import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";

HighchartsExporting(Highcharts);

function index({ options }: any) {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      allowChartUpdate={true}
    />
  );
}

export default index;
