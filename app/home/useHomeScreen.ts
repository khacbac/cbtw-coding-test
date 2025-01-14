import { getTrendingGifs } from "@/api/gifs";
import { GifDetail } from "@/api/type";
import { useEffect, useState } from "react";

export const useHomeScreen = () => {
  const [gifs, setGifs] = useState<GifDetail[]>([]);

  useEffect(() => {
    console.log("HomeScreen");
    getTrendingGifs()
      .then((res) => {
        setGifs(res.data);
        console.log("data", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return { gifs };
};
