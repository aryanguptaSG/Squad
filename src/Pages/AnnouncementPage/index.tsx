import { Button } from "@/components/common/ui/button";
import axios from "axios";

function AnnouncementPage() {
  const data = {
    name: "Vikas",
    amount: 1,
    number: "9998877687",
    MUID: "MUID" + Date.now(),
    transactionId: "T" + Date.now(),
  };

  const handlePayment = async (e: any) => {
    e.preventDefault();

    let res = await axios
      .post("http://localhost:3000/order", { ...data })
      .then((res) => {
        console.log(res);
        if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
          window.location.href =
            res.data.data.instrumentResponse.redirectInfo.url;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center space-x-4 bg-Gray-bgLight dark:bg-Gray-dark-gray dark:text-white">
      <div>AnnouncementPage</div>
      <Button onClick={handlePayment}>Pay Now</Button>
    </div>
  );
}

export default AnnouncementPage;
