import Loading from "@/components/Loading";
import { getIdea } from "@/types/response/Ideas";
import { convertParam } from "@/utils/convertParams";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const HomePage: NextPage = dynamic(() => import("@/partials/home"), {
  loading: () => <Loading />,
});

type Props = { host: string | null };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page, size, sort: querySort } = context.query;

  const pageNumber = convertParam(page);
  const pageSize = convertParam(size);
  const sort: "published_at" | "-published_at" | undefined =
    querySort === "published_at" || querySort === "-published_at"
      ? querySort
      : undefined;

  axios
    .get(
      `http://${context.req.headers.host}/${getIdea({
        pageNumber,
        pageSize,
        sort,
        append: ["small_image", "medium_image"],
      })}`
    )
    .then((e) => {
      // console.log(e.config.params);
    })
    .catch((e) => {
      // console.log(e);
    });

  return {
    props: {
      host: context.req.headers.host || null,
    },
  };
};

export default HomePage;
