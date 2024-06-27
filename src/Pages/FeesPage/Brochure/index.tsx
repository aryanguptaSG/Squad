import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";
import { Input } from "@/components/common/ui/input";
import { useState } from "react";
import { feesConfig } from "@/Context/Signals";

type BrochureModalProps = {
  triggerComponent: React.ReactNode;
};

function BrochureModal(props: BrochureModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const addNewFees = () => {
    console.log(name, duration, name.trim, duration.trim);
    if (name.trim().length <= 0 || duration.trim().length <= 0) {
      alert("Fill the details !");
      return;
    }
    feesConfig.value = [
      ...feesConfig.value,
      { name, duration: Number(duration) },
    ];
    setName("");
    setDuration("");
  };
  return (
    <Modal
      open={showModal}
      setOpen={setShowModal}
      triggerComponent={props.triggerComponent}
      title="Brochure"
    >
      <div className="md:p-5 md:w-[500px] w-[300px]">
        <div>
          {feesConfig.value.map((item: any, i: any) => {
            let t = 12 / item.duration;
            return (
              <div key={i} className="flex justify-between space-x-5">
                <p>{item.name}</p>
                <p>/ {t == 12 ? "1 year" : `${t} Month`}</p>
              </div>
            );
          })}
        </div>
        <div className="space-y-5 mt-5">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="bg-transparent border-[#B7B7B7] dark:border-Black-borderBlack dark:text-Gray-light-gray  dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Input
            type="number"
            placeholder="Duration"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
            className="bg-transparent border-[#B7B7B7] dark:border-Black-borderBlack dark:text-Gray-light-gray  dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="flex justify-end mt-5">
            <Button
              onClick={addNewFees}
              text="Create"
              className="py-1 rounded-md"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

function Brochure() {
  return (
    <BrochureModal
      triggerComponent={
        <Button className="font-normal text-sm rounded" text="Brochure" />
      }
    />
  );
}

export default Brochure;
