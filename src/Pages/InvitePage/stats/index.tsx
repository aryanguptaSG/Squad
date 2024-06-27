import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/common/ui/card";

function Stats({ title = "Title", body = "body" }: any) {
  let color =
    title == "Admin"
      ? "text-red-500"
      : title == "Sub Admin"
      ? "text-orange-500"
      : title == "Teacher"
      ? "text-green-500"
      : "text-Gray-darkGr";
  return (
    <Card className="w-fit min-w-[200px]  flex flex-col justify-center items-center px-5">
      <CardHeader>
        <CardTitle className="text-Gray-gray">{body}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`font-bold text-lg ${color}`}>{title}</p>
      </CardContent>
    </Card>
  );
}

export default Stats;
