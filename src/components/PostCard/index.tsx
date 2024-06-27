import ProfileImage from "../common/ProfileImage";
import Text from "../common/Text";
import globe from "@/assets/images/Globe.svg";
import ThreeDots from "@/assets/icons/threedots.tsx";
import likeIcon from "@/assets/images/like-blue.svg";
import thumbsUp from "@/assets/icons/thumb_up.svg";
import commentIcon from "@/assets/icons/comment.svg";

type Props = {
  auther: {
    name: string;
    profileUrl: string;
    fallBack: string;
  };
  post: {
    content?: any;
    media?: any;
    likesCount: string;
    commentCount: string;
  };
};

function PostCard(props: Props) {
  const urlify = (text: any) => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url: any) {
      return (
        '<a style="color:#4285F4;font-weight:500;;text-decoration: underline;" href="' +
        url +
        '" target="_blank">' +
        url +
        "</a>"
      );
    });
  };
  return (
    <div className="max-w-[600px] bg-white dark:bg-black pt-4 pb-4 border border-Gray-gray2 dark:border-Black-borderBlack rounded-md shadow-box dark:shadow-dark-box">
      <div className="px-2 pr-5">
        <div className="flex justify-between items-start">
          <div className="flex space-x-2 items-start">
            <ProfileImage
              className="w-[40px] h-[40px]"
              src={props.auther.profileUrl}
              fallback={props.auther.fallBack}
            />
            <div className="mt-1">
              <Text className="subtitle-1 font-Montserrat" as="p">
                {props.auther.name}
              </Text>
              <Text className="flex text-xs space-x-1 items-center text-Gray-dark-gray">
                <span>1d</span>{" "}
                <span>
                  <img src={globe} alt="" />
                </span>
              </Text>
            </div>
          </div>
          <ThreeDots />
        </div>
        <div
          className="px-4 py-3 text-Gray-dark-gray text-sm font-Montserrat dark:text-Gray-gray"
          dangerouslySetInnerHTML={{ __html: urlify(props.post.content) }}
        ></div>
      </div>
      <div data-info="media" className="mt-3">
        <img className="w-full" src={props.post.media} alt="" />
      </div>
      <div className="px-4 my-2">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <img
              className="border-white border rounded-full"
              src={likeIcon}
              alt=""
            />
            <Text className="text-xs text-Gray-dark-gray dark:text-Gray-gray">
              {props.post.likesCount}
            </Text>
          </div>
          <Text
            as="p"
            className="text-xs text-Gray-dark-gray dark:text-Gray-gray"
          >
            {props.post.commentCount} comments
          </Text>
        </div>
        <hr className="h-[0.1px] text-Gray-darkGr/30 my-2" />
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 items-center">
            <img src={thumbsUp} alt="" />
            <Text className="text-xs text-Gray-dark-gray dark:text-Gray-gray">
              Like
            </Text>
          </div>
          <div className="flex space-x-2 items-center">
            <img src={commentIcon} alt="" />
            <Text className="text-xs text-Gray-dark-gray dark:text-Gray-gray">
              Comment
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
