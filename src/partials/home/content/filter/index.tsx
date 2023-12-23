import Select from "@/components/Select";
import { ChangeEventHandler, useState } from "react";

export default function ContentFilter() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange: ChangeEventHandler = (event) => {
    // setSelectedCountry(event.target.);
  };

  return (
    <>
      <div>
        <Select
          value={1}
          options={[
            { label: "Kucing", value: 1 },
            { label: "Kucasing", value: 2 },
          ]}
        />
      </div>
    </>
  );
}
