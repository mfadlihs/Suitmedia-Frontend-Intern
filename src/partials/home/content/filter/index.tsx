import Select from "@/components/Select";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/AppContext";

export default function ContentFilter() {
  const [data] = useAppContext();
  const searchParams = useSearchParams();
  const router = useRouter();
  const size = searchParams.get("size") ?? 10;
  const sort = searchParams.get("sort") ?? "newest";

  return (
    <div className="flex justify-between items-center mb-6">
      {!data?.data ? (
        <div>No Data Showed</div>
      ) : (
        <div>
          Showing {data?.meta.from} - {data?.meta.to} of {data?.meta.total}
        </div>
      )}
      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <div>Show per page:</div>
          <Select
            width="150px"
            value={Number(size)}
            onChange={(e) => {
              router.push({
                pathname: router.pathname,
                query: { ...router.query, size: e.toString() },
              });
            }}
            options={[
              { label: "10", value: 10 },
              { label: "20", value: 20 },
              { label: "50", value: 50 },
            ]}
          />
        </div>
        <div className="flex items-center gap-1">
          <div>Sort by:</div>
          <Select
            width="150px"
            value={sort}
            onChange={(e) => {
              router.push({
                pathname: router.pathname,
                query: { ...router.query, sort: e.toString() },
              });
            }}
            options={[
              { label: "Newest", value: "newest" },
              { label: "Oldest", value: "oldest" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
