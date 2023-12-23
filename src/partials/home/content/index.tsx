import ContentFilter from "./filter";
import ContentPost from "./post";

export default function HomeContent() {
  return (
    <div className="px-32">
      <ContentFilter />
      <ContentPost />
    </div>
  );
}
