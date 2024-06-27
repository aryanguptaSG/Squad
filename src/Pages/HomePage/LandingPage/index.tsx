import poster from "@/assets/images/landing_page_poster_1.svg";
import Text from "@/components/common/Text";
import Button from "@/components/common/Button";
import { workSpace } from "@/Context/Signals";

function LandingPage() {
  return (
    <div className="bg-white dark:bg-black w-full h-screen">
      <div
        data-info="header"
        className="bg-blue-100 px-5 h-full flex justify-center items-center flex-wrap"
      >
        <div className="md:w-1/3 space-y-[30px]">
          <Text
            className="text-fs-15 text-blue-primaryBlue dark:text-blue-primaryBlue font-bold font-Montserrat"
            as="p"
          >
            Best School in Kanpur
          </Text>
          <Text
            className="text-black dark:text-black text-fs-60 font-bold font-Montserrat"
            as="h1"
          >
            {workSpace.value}
          </Text>
          <Text
            className=" dark:text-[#737373] text-fs-22 text-[#737373] font-Montserrat font-light"
            as="p"
          >
            Our goal is to make online education work for everyone
          </Text>
          <div className="flex items-center gap-5 flex-wrap">
            <Button
              text="Apply For Admission"
              className="rounded font-Montserrat text-fs-13 text-white px-10 py-3 border-blue-primaryBlue border-1.5"
            />
            <Button
              text="Learn More"
              variant="outline"
              className="rounded font-Montserrat text-fs-13 px-10 py-3 text-blue-primaryBlue dark:text-blue-primaryBlue"
            />
          </div>
        </div>
        <img height={682} src={poster} alt="" />
      </div>
    </div>
  );
}

export default LandingPage;
