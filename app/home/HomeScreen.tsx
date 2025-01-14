import { Container } from "@/components/Container";
import React, { StyleSheet, TextInput, View } from "react-native";
import { useHomeScreen } from "./useHomeScreen";
import { GifDetail } from "@/api/type";
import { GifItem } from "@/components/GifItem";
import { AppList } from "@/components/AppList";

export default function HomeScreen() {
  const {
    gifs,
    gotoFeedback,
    loadingStatus,
    onLoadMore,
    onRefresh,
    search,
    onSearch,
  } = useHomeScreen();

  const renderItem = ({ item }: { item: GifDetail }) => {
    return <GifItem item={item} onPress={() => gotoFeedback(item)} />;
  };

  return (
    <Container safer="all">
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        value={search}
        onChangeText={onSearch}
      />
      <AppList
        data={gifs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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

const styles = StyleSheet.create({
  searchInput: {
    height: 48,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    padding: 8,
    margin: 16,
  },
});
