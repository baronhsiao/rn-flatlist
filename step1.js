一.取資料;

// 使用者資料
const [users, setUsers] = React.useState([]);

// fetch API
const fetcher = async () => {
  const res = await axios.get(`https://randomuser.me/api/?page=1&results=10`);

  setUsers(res?.data?.results);
};

React.useEffect(() => {
  fetcher();
}, []);

// 列表子元件
const renderItem = ({item}) => {
  return (
    <View style={styles.itemWrapperStyle}>
      <Image style={styles.itemImageStyle} source={{uri: item.picture.large}} />
      <View style={styles.contentWrapperStyle}>
        <Text style={{fontSize: 16}}>
          {`${item.name.title} ${item.name.first} ${item.name.last}`}
        </Text>
        <Text style={{color: '#777'}}>{item.email}</Text>
      </View>
    </View>
  );
};

// 列表元件
<FlatList
  data={users}
  renderItem={renderItem}
  keyExtractor={item => item.email}
/>;
