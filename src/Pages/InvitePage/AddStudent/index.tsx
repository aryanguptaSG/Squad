import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";
import { Input } from "@/components/common/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/common/ui/popover";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/common/ui/command";
import { feesConfig, classRooms } from "@/Context/Signals";
import { Checkbox } from "@/components/common/ui/checkbox";

type AddStudentModalProps = {
  triggerComponent: React.ReactNode;
};

function AddStudentModal(props: AddStudentModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [_selectedClass, setSelectedClass] = useState("");
  const [feesArray, setfeesArray]: any = useState([]);

  return (
    <Modal
      open={showModal}
      setOpen={setShowModal}
      triggerComponent={props.triggerComponent}
      title="New Student"
    >
      <div className="md:w-[600px] w-[300px]">
        <div className="px-3 mt-3 space-y-5">
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
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-[#B7B7B7] dark:border-Black-borderBlack dark:text-Gray-light-gray  dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Input
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="bg-transparent border-[#B7B7B7] dark:border-Black-borderBlack dark:text-Gray-light-gray  dark:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Select onValueChange={(value) => setSelectedClass(value)}>
            <SelectTrigger className="w-[180px] dark:text-Gray-light-gray">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              {classRooms.value.map((item: any, i: any) => {
                return (
                  <>
                    <SelectItem value={item}>{item.group.name}</SelectItem>
                  </>
                );
              })}
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <div className="dark:text-Gray-gray w-fit flex items-center justify-start h-8 border border-gray-400 border-dashed px-3 rounded-md cursor-pointer">
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                <p>Add Fees</p>
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="start">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Fees">
                    {feesConfig.value.map((item: any, i: any) => {
                      return (
                        <CommandItem className="space-x-5">
                          <Checkbox
                            checked={feesArray.includes(item)}
                            onCheckedChange={(isChecked) => {
                              if (isChecked) {
                                setfeesArray([...feesArray, item]);
                              } else {
                                setfeesArray(
                                  feesArray.filter((ele: any) => ele != item)
                                );
                              }
                            }}
                            id={`${i}_${item.name}`}
                          />
                          <label
                            htmlFor={`${i}_${item.name}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item.name}
                          </label>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <div className="space-y-2">
            {feesArray.map((item: any, i: any) => {
              let t = 12 / item.duration;
              return (
                <div
                  key={i}
                  className="flex justify-start items-center gap-2 flex-wrap"
                >
                  <p className="text-Gray-dark-gray dark:text-Gray-gray">
                    {item.name}
                  </p>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Amount"
                      value={item.amount}
                      className="rounded-lg bg-transparent py-1 px-3 border border-[#B7B7B7] dark:border-Black-borderBlack dark:text-Gray-light-gray  dark:bg-transparent outline-none"
                    />
                    <p className="text-sm text-Gray-dark-gray dark:text-Gray-gray">
                      / {t == 12 ? "1 year" : `${t} Month`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Button text="Create" className="py-1 rounded-md" />
        </div>
      </div>
    </Modal>
  );
}

function AddStudent() {
  return (
    <AddStudentModal
      triggerComponent={
        <Button
          className="font-normal text-sm rounded"
          text="Add New Student"
        />
      }
    />
  );
}

export default AddStudent;
