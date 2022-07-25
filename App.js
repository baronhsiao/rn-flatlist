/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import axios from 'axios';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const App = () => {
  // 使用者資料
  const [users, setUsers] = React.useState([]);
  //頁碼
  const [currentPage, setCurrentPage] = React.useState(1);
  //loading元件狀態
  const [isLoading, serIsLoading] = React.useState(false);
  // 重整圈圈
  const [refreshing, setRefreshing] = React.useState(false);

  // fetch API
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

  React.useEffect(() => {
    fetcher();
  }, [currentPage]);

  // 列表子元件
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemWrapperStyle}>
        <Image
          style={styles.itemImageStyle}
          source={{uri: item.picture.large}}
        />
        <View style={styles.contentWrapperStyle}>
          <Text style={{fontSize: 16}}>
            {`${item.name.title} ${item.name.first} ${item.name.last}`}
          </Text>
          <Text style={{color: '#777'}}>{item.email}</Text>
        </View>
      </View>
    );
  };

  // 畫面到指定位子時觸發fn
  const loadMoreItem = () => {
    // 改變頁碼
    setCurrentPage(prev => prev + 1);
  };

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

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <View style={{flex: 1}}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.email}
          onRefresh={() => {
            setRefreshing(true);
            fetcher('refresh');
          }}
          refreshing={refreshing}
          ListFooterComponent={renderLoader}
          onEndReachedThreshold={0}
          onEndReached={loadMoreItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: 'space-around',
  },
});

export default App;
