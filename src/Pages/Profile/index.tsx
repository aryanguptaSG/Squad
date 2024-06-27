import Button from "@/components/common/Button";
import ProfileImage from "@/components/common/ProfileImage";
import Text from "@/components/common/Text";
import { Input } from "@/components/common/ui/input";
import cameraicon from "@/assets/icons/camera_icon.png";
import { useAuth } from "@/Context/AuthProvider";
import { useState } from "react";
import apiCall from "@/api/apiCall";
import { UPDATE_PROFILE } from "@/api/Endpoints";

function ProfilePage() {
  const { auth, setAuth } = useAuth();
  console.log(auth);

  const [name, setName] = useState(auth.user ? auth.user.name : "");
  const [email, _setEmail] = useState(auth.user ? auth.user.email : "");
  const [phone, setPhone] = useState(auth.user ? auth.user.mobileNumber : "");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const updatedUser = await apiCall(UPDATE_PROFILE, "PUT", {
      email,
      phone,
      name,
    });
    setAuth({ ...auth, user: updatedUser });
  };
  return (
    <div className="bg-white dark:bg-Gray-dark-gray dark:text-white p-5 pl-10 min-h-full">
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="text-lg font-Montserrat font-bold ">Profile </h1>
        </div>
        <div className="mt-10 space-y-5">
          <div className="relative w-fit">
            <ProfileImage
              className="w-36 h-36"
              src={auth.user ? auth.user.profilePic : ""}
              fallback={auth.user ? auth.user.email[0] : "AG"}
              fallBackClassName="text-[50px]"
            />
            <img
              className="absolute bottom-1 right-5"
              width={24}
              src={cameraicon}
            />
          </div>
          <div>
            <Text as="p">Name </Text>
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="md:w-[500px]"
            />
          </div>
          <div>
            <Text as="p">Email </Text>
            <Input
              value={email}
              contentEditable="false"
              className="md:w-[500px]"
            />
          </div>
          <div>
            <Text as="p">Phone </Text>
            <Input
              type="number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="md:w-[500px]"
            />
          </div>
          <Button type="submit" text="Update" />
        </div>
      </form>
    </div>
  );
}

export default ProfilePage;
