import Loading from "@/components/Loading";
import { BaseResponse } from "@/types/Response";
import { IdeaResponse } from "@/types/response/IdeaResponse";
import { getIdea } from "@/types/response/Ideas";
import axios from "axios";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const HomePage: NextPage = dynamic(() => import("@/partials/home"), {
  loading: () => <Loading />,
});

export async function getServerSideProps() {
  // const res = await axios.get<BaseResponse<IdeaResponse>>(getIdea({}));
  // const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

  return {
    props: {},
  };
}

export default HomePage;
