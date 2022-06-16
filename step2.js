二.底部加入loading元件;

// loading元件
const renderLoader = () => {
  return (
    <View style={{width: '100%', alignItems: 'center', padding: 10}}>
      <ActivityIndicator animating={true} color="#808080" />
    </View>
  );
};

// 畫面到指定位子時觸發fn
const loadMoreItem = () => {
  console.log('loading more');
};

<FlatList
  // data={users}
  // renderItem={renderItem}
  // keyExtractor={item => item.email}
  ListFooterComponent={renderLoader}
  onEndReached={loadMoreItem}
  onEndReachedThreshold={0}
/>;
