import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import postDummy from "@/assets/images/dummy-post.svg";

function MainPage() {
  const postData = [
    {
      auther: {
        name: "Aryan Gupta",
        profileUrl: "",
        fallBack: "AG",
      },
      post: {
        content: `Excited to share my latest project - a complex UI design created using HTML 
                and CSS. Check out the hosted website link to see the animations, transitions, 
                and use of Google fonts and Font Awesome icons. This project has been a great 
                learning experience in creating dynamic and engaging user interfaces.
                hosted Github link- https://www.google.com/
                Thanks`,
        media: postDummy,
        likesCount: "Shantanu and 1,333 others",
        commentCount: "84",
      },
    },
    {
      auther: {
        name: "Shantanu Mukharji",
        profileUrl: "",
        fallBack: "SM",
      },
      post: {
        content: `Excited to share my latest project - a complex UI design created using HTML 
                and CSS. Check out the hosted website link to see the animations, transitions, 
                and use of Google fonts and Font Awesome icons. This project has been a great 
                learning experience in creating dynamic and engaging user interfaces.
                hosted Github link- https://lnkd.in/gAJd23rW
                Thanks`,
        media: postDummy,
        likesCount: "Shantanu and 1,333 others",
        commentCount: "84",
      },
    },
    {
      auther: {
        name: "Shivendra Yadav",
        profileUrl: "",
        fallBack: "SY",
      },
      post: {
        content: `Excited to share my latest project - a complex UI design created using HTML 
                and CSS. Check out the hosted website link to see the animations, transitions, 
                and use of Google fonts and Font Awesome icons. This project has been a great 
                learning experience in creating dynamic and engaging user interfaces.
                hosted Github link- https://lnkd.in/gAJd23rW
                Thanks`,
        media: postDummy,
        likesCount: "Shantanu and 1,333 others",
        commentCount: "84",
      },
    },
    {
      auther: {
        name: "Suraj Kumar",
        profileUrl: "",
        fallBack: "SK",
      },
      post: {
        content: `Excited to share my latest project - a complex UI design created using HTML 
                and CSS. Check out the hosted website link to see the animations, transitions, 
                and use of Google fonts and Font Awesome icons. This project has been a great 
                learning experience in creating dynamic and engaging user interfaces.
                hosted Github link- https://www.google.com/
                Thanks`,
        media: postDummy,
        likesCount: "Shantanu and 1,333 others",
        commentCount: "84",
      },
    },
  ];
  return (
    <div className="bg-white dark:bg-Gray-dark-gray w-full h-full flex justify-center items-start flex-wrap pb-10">
      <div className="md:w-[79%] flex items-center justify-center flex-col pt-6">
        <CreatePost />
        <div className="mt-7 space-y-4 h-screen overflow-scroll hide-scrollbar pt-5">
          {postData.map((item, i) => {
            return <PostCard key={i} auther={item.auther} post={item.post} />;
          })}
        </div>
      </div>
      {/* <div className="md:w-[20%] pt-10">
        <Text as="p">Visit our store for special discounts 🎉</Text>
      </div> */}
    </div>
  );
}

export default MainPage;
