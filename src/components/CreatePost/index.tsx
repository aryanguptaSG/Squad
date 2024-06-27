import ProfileImage from "../common/ProfileImage";
import photoIcon from "@/assets/icons/photos.svg";
import calendarIcon from "@/assets/icons/calendar_filled.svg";
import pencilIcon from "@/assets/icons/pencil_filled.svg";
import Text from "../common/Text";
import Modal from "../common/Modal";
import DropDown from "../common/DropDown";
import { useState } from "react";
import Button from "../common/Button";

type CreatePostModalProps = {
  triggerComponent: React.ReactNode;
};

function CreatePostModal(props: CreatePostModalProps) {
  const [workSpace, setworkSpace] = useState("public");
  const [showModal, setShowModal] = useState(false);
  return (
    <Modal
      open={showModal}
      setOpen={setShowModal}
      triggerComponent={props.triggerComponent}
      title="Create New Post"
    >
      <div className="w-[600px]">
        <div className="flex space-x-3 dark:hover:bg-Gray-dark-gray hover:bg-light-gray rounded-lg w-fit p-3">
          <ProfileImage src="" fallback="AG" />
          <div className="flex flex-col items-start">
            <Text>Aryan Gupta</Text>
            <DropDown
              showdownIcon={true}
              className="rounded-md "
              titleClassName="dark:text-Gray-gray text-Gray-dark-gray cursor-pointer text-xs bg-transparent w-fit hover:bg-none"
              value={workSpace}
              setValue={(newVal: string) => {
                setworkSpace(newVal);
              }}
              optionList={[
                "Public 🌍",
                "Golu School",
                "Shiva Ji Inter Collage",
              ]}
              iconH="15"
              iconW="15"
            />
          </div>
        </div>
        <div className="px-3 mt-3">
          <textarea
            className="w-full outline-none min-h-[300px] bg-transparent text-Gray-dark-gray dark:text-Gray-gray "
            placeholder="What do you want to talk about?"
          ></textarea>
        </div>
        <div>
          <hr className="h-[0.1px] text-Gray-darkGr/30 my-2" />
          <div className="flex justify-end mt-5">
            <Button text="Post" className="py-1 rounded-full" />
          </div>
        </div>
      </div>
    </Modal>
  );
}

function CreatePost() {
  const dataList = [
    { icon: photoIcon, text: "Media" },
    { icon: calendarIcon, text: "Event" },
    { icon: pencilIcon, text: "Write Article" },
  ];
  return (
    <div className="md:w-[600px] w-full bg-white dark:bg-black pt-3 pb-4 px-2 pr-5 border border-Gray-gray2 dark:border-Black-borderBlack rounded-2.5 shadow-box dark:shadow-dark-box">
      <div className="flex space-x-2 items-center">
        <ProfileImage className="w-[40px] h-[40px]" src="" fallback="AG" />
        <CreatePostModal
          triggerComponent={
            <div className="px-3 py-1.5 bg-transparent border border-[#B7B7B7] dark:border-Black-borderBlack dark:bg-transparent w-full rounded-full">
              Start a post
            </div>
          }
        />
      </div>
      <div className="flex justify-between items-center px-5 mt-6">
        {dataList.map((item, i) => {
          return (
            <div key={i} className="flex space-x-2">
              <img src={item.icon} alt="" />
              <Text className="text-fs-15 font-Montserrat text-Gray-dark-gray dark:text-Gray-light-gray">
                {item.text}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CreatePost;
