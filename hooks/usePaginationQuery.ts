import { LoadingStatus, Pagination } from "@/api/base";
import { GifDetail } from "@/api/type";
import { useState } from "react";

export const usePaginationQuery = () => {
  const [items, setItems] = useState<GifDetail[]>([]);
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>("loading");
  const [pagination, setPagination] = useState<Pagination>({
    offset: 0,
    total_count: 15,
    count: 15,
  });
  const hasMore =
    (pagination.offset + 1) * pagination.count < pagination.total_count;

  return {
    items,
    loadingStatus,
    pagination,
    hasMore,
    setItems,
    setLoadingStatus,
    setPagination,
  };
};
