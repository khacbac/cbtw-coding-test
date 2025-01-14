import { AppButton } from "@/components/AppButton";
import { Container } from "@/components/Container";
import { useAppNavigation } from "@/navigations/hooks";
import React, { FlatList, Text, View } from "react-native";
import { useHomeScreen } from "./useHomeScreen";
import { GifDetail } from "@/api/type";
import { GifItem } from "@/components/GifItem";
import { AppList } from "@/components/AppList";

export default function HomeScreen() {
  const navigation = useAppNavigation();
  const { gifs, gotoFeedback, loadingStatus, onLoadMore, onRefresh } =
    useHomeScreen();

  const renderItem = ({ item }: { item: GifDetail }) => {
    return <GifItem item={item} onPress={gotoFeedback} />;
  };

  return (
    <Container safer="all">
      <AppList
        data={gifs}
        renderItem={renderItem}
        // somehow api return duplicate data when inreasing offset
        // so we need to use index to make it unique
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        isLoading={loadingStatus === "loading"}
        isRefreshing={loadingStatus === "refreshing"}
        isLoadMore={loadingStatus === "loadmore"}
        onLoadMore={onLoadMore}
        onRefresh={onRefresh}
      />
    </Container>
  );
}
