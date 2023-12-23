import Select from "@/components/Select";
import { ChangeEventHandler, useState } from "react";

export default function ContentFilter() {
  return (
    <div className="flex justify-between">
      <div>Showing 1 - 10 of 100</div>
      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <div>Show per page:</div>
          <Select
            width="150px"
            value={10}
            options={[
              { label: "10", value: 10 },
              { label: "20", value: 20 },
              { label: "30", value: 20 },
              { label: "40", value: 40 },
            ]}
          />
        </div>
        <div className="flex items-center gap-1">
          <div>Sort by:</div>
          <Select
            width="150px"
            value={"newest"}
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
