import Loading from "@/components/Loading";
import axios from "axios";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const HomePage: NextPage = dynamic(() => import("@/partials/home"), {
  loading: () => <Loading />,
});

export const getServerSideProps = async () => {
  // TODO: ADD SSR FETCH DATA HERE

  return {
    props: {},
  };
};

export default HomePage;
