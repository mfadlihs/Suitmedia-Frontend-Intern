import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    axios
      .get(
        "api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at"
      )
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <div></div>;
}
