四.下拉後重整資料;

// 重整圈圈
const [refreshing, setRefreshing] = React.useState(false);

const fetcher = async type => {
  serIsLoading(type !== 'refresh');

  let arr = type === 'refresh' ? [] : users;
  let page = type === 'refresh' ? 1 : currentPage;

  const res = await axios.get(
    `https://randomuser.me/api/?page=${page}&results=10`,
  );

  serIsLoading(false);
  setRefreshing(false);
  setUsers([...arr, ...res?.data?.results]);
};

<FlatList
  // data={users}
  // renderItem={renderItem}
  onRefresh={() => {
    setRefreshing(true);
    fetcher('refresh');
  }}
  refreshing={refreshing}
  // keyExtractor={item => item.email}
  // ListFooterComponent={renderLoader}
  // onEndReached={loadMoreItem}
  // onEndReachedThreshold={0}
/>;
