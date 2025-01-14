import { LoadingStatus, Pagination } from "@/api/base";
import { getTrendingGifs } from "@/api/gifs";
import { GifDetail } from "@/api/type";
import { useAppNavigation } from "@/navigations/hooks";
import { useEffect, useState } from "react";

export const useHomeScreen = () => {
  const navigation = useAppNavigation();
  const [gifs, setGifs] = useState<GifDetail[]>([]);
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>("loading");
  const [pagination, setPagination] = useState<Pagination>({
    offset: 0,
    total_count: 15,
    count: 15,
  });
  const hasMore =
    (pagination.offset + 1) * pagination.count < pagination.total_count;

  useEffect(() => {
    onGetData();
  }, []);

  const onGetData = (loadingStatus: LoadingStatus = "loading") => {
    setLoadingStatus(loadingStatus);
    const isLoadMore = loadingStatus === "loadmore";
    const offset = isLoadMore ? pagination.offset + 1 : 0;
    getTrendingGifs({ offset, limit: pagination.count })
      .then((res) => {
        const newGifs = isLoadMore ? [...gifs, ...res.data] : res.data;
        setGifs(newGifs);
        setPagination(res.pagination);
        setLoadingStatus("loaded");
      })
      .catch(() => {
        setLoadingStatus("loaded");
      });
  };

  const onLoadMore = () => {
    if (loadingStatus !== "loaded") return;
    if (!hasMore) return;
    onGetData("loadmore");
  };

  const onRefresh = () => {
    if (loadingStatus !== "loaded") return;
    onGetData("refreshing");
  };

  const gotoFeedback = (gifDetail: GifDetail) => {
    navigation.navigate("Feedback", { gifDetail });
  };

  return {
    gifs,
    pagination,
    loadingStatus,
    onLoadMore,
    onRefresh,
    gotoFeedback,
  };
};
