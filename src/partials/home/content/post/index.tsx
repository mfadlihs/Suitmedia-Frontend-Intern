import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";
import CardPost from "./CardPost";

export default function ContentPost() {
  const [state] = useAppContext();

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8">
      {state?.data.map((e) => (
        <CardPost data={e} key={e.id} />
      ))}
    </div>
  );
}
