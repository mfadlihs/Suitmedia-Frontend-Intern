import ContentFilter from "./Filter";
import ContentPost from "./Post";

export default function HomeContent() {
  return (
    <div className="lg:px-32 md:px-24 sm:px-16 px-8">
      <ContentFilter />
      <ContentPost />
    </div>
  );
}
