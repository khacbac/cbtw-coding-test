import { LoadingStatus, Pagination } from "@/api/base";
import { getTrendingGifs, searchGifs } from "@/api/gifs";
import { GifDetail } from "@/api/type";
import useDebounce from "@/hooks/useDebounce";
import { useAppNavigation } from "@/navigations/hooks";
import { useEffect, useRef, useState } from "react";

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
  const actionRef = useRef<{ search: string }>({ search: "" });
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search, 450);

  useEffect(() => {
    if (debounceSearch) {
      setGifs([]);
      onGetData();
    } else {
      onGetData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch]);

  const onGetData = (loadingStatus: LoadingStatus = "loading") => {
    setLoadingStatus(loadingStatus);
    const isLoadMore = loadingStatus === "loadmore";
    const offset = isLoadMore ? pagination.offset + 1 : 0;
    const api = actionRef.current.search ? searchGifs : getTrendingGifs;
    api({ offset, limit: pagination.count, query: search })
      .then((res) => {
        const dataWithUniqueId = res.data.map((item, index) => ({
          ...item,
          id: `${item.id}-${Date.now()}`,
        }));
        const newGifs = isLoadMore
          ? [...gifs, ...dataWithUniqueId]
          : dataWithUniqueId;
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

  const onSearch = (search: string) => {
    actionRef.current.search = search;
    setSearch(search);
  };

  return {
    gifs,
    pagination,
    loadingStatus,
    onLoadMore,
    onRefresh,
    gotoFeedback,
    search,
    onSearch,
  };
};
