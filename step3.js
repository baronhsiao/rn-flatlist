Step3 加入page切換

//頁碼
const [currentPage, setCurrentPage] = React.useState(1);
//loading元件狀態
const [isLoading, serIsLoading] = React.useState(false);


const fetcher = async () => {
  // 新增取得資料loading元件的前後變化 
  serIsLoading(true); 

  const res = await axios.get(
    `https://randomuser.me/api/?page=${currentPage}&results=10`,
  );
  // 新增取得資料loading元件的前後變化 
  serIsLoading(false); 
  // 將新的一頁資料加入
  setUsers([...users, ...res?.data?.results]); 
};

// 當頁數改變時 取下一頁的資料
React.useEffect(() => {
  fetcher();
}, [currentPage]); 

// loading元件 新增狀態判別
const renderLoader = () => {
  return (
    !!isLoading && (
      <View style={{width: '100%', alignItems: 'center', padding: 10}}>
        <ActivityIndicator animating={true} color="#808080" />
      </View>
    )
  );
};


const loadMoreItem = () => {
  // 改變頁碼
  setCurrentPage(prev => prev + 1);
};