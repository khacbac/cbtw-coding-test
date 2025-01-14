import { LoadingStatus } from "@/api/base";
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  RefreshControl,
  View,
} from "react-native";

type AppListProps<T> = FlatListProps<T> & {
  isLoading?: boolean;
  isRefreshing?: boolean;
  isLoadMore?: boolean;
  onRefresh?: () => void;
  onLoadMore?: () => void;
};
export const AppList = <T,>({
  isLoading,
  isRefreshing,
  isLoadMore,
  onRefresh,
  onLoadMore,
  ...props
}: AppListProps<T>) => {
  if (isLoading) {
    return (
      <View style={{ padding: 16 }}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  const renderFooter = () => {
    if (isLoadMore) {
      return <ActivityIndicator size="small" style={{ margin: 16 }} />;
    }
    return null;
  };

  return (
    <FlatList
      ListFooterComponent={renderFooter}
      {...(onLoadMore && {
        onEndReached: onLoadMore,
        onEndReachedThreshold: 0.1,
      })}
      {...(onRefresh && {
        refreshControl: (
          <RefreshControl
            refreshing={isRefreshing || false}
            onRefresh={onRefresh}
          />
        ),
      })}
      {...props}
    />
  );
};
