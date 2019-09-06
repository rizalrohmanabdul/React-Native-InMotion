import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import {
  usersALL,
  searchUsers,
  pageUsers
} from "../Public/redux/actions/users";
import Header from "../Component/Header/Header";
import Spinner from "react-native-loading-spinner-overlay";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      search: '',
      page: 10,
      loadingfooter: true
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      await this.props.dispatch(usersALL());
      this.setState({
        users: this.props.user.usersList,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  search = () => {
    if (this.state.search === '') {
      console.log('null p', this.state.search)
      this.props.dispatch(usersALL()).then(res => {
        console.log("res p", res.value.data);
        this.setState({
          users: res.value.data,
          isLoading: false,
          loadingfooter: true,
          page: 10,
        });
      })
    }else {
      this.props
      .dispatch(searchUsers(this.state.search))
      .then(res => {
        console.log("res", res.value.data.items);
        let result = res.value.data.items
        if (result.length > 1) {
          this.setState({
            users: res.value.data.items,
            isLoading: false,
            page: 10,
            loadingfooter: true
          });
        }else{
          this.setState({
            users: res.value.data.items,
            isLoading: false,
            page: 1
          });
        }
        
      })
      .catch(() => {
        this.setState({
          isLoading: false
        });
      });
    }
    this.setState({ isLoading: true,  });
    
  };
  _keyExtractor = (item, index) => item.id + "";
  renderFooter = () => {
    return this.state.loadingfooter == true ? (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          marginVertical: 15
        }}
      >
        <>
          <ActivityIndicator animating size="large" />
          <Text style={{ fontSize: 12 }}>Loading data..</Text>
        </>
      </View>
    ) : (
      <View />
    );
  };
  pageUsers = () => {
    if (this.state.page === 1) {
      this.setState({
        loadingfooter: false
      });
    } else {
      let page = this.state.page + 5;
      this.setState({
        page: page
      });
      this.props.dispatch(pageUsers(page)).then(res => {
        this.setState({
          users: res.value.data,
          isLoading: false
        });
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={component.search}>
          <TextInput
            style={items.textSearch}
            placeholder="Search Username"
            onChangeText={text =>
              this.setState({
                search: text
              })
            }
            onEndEditing={() => {
              this.search();
            }}
          />
        </View>
        <Spinner
          visible={this.state.isLoading}
          textContent={"Loading..."}
          textStyle={{ color: "#fff" }}
        />
        <View style={{ flex: 1, width: "100%" }}>
          <FlatList
            style={{ paddingLeft: 15, paddingRight: 15 }}
            data={this.state.users}
            keyExtractor={this._keyExtractor}
            ListFooterComponent={this.renderFooter}
            onEndReachedThreshold={0.1}
            onEndReached={this.pageUsers.bind(this)}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.8} style={{ flex: 1 }} onPress={() => { this.props.navigation.navigate('Detail', {username: item.login}) }}>
                <View style={component.card}>
                  <Image
                    style={{ height: 50, width: 50, borderRadius: 100 }}
                    source={{
                      uri: item.avatar_url
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      marginLeft: "5%"
                    }}
                  >
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                      {item.login}
                    </Text>
                    <Text style={{ fontSize: 12 }}>{item.type}</Text>
                  </View>
                  <View
                    style={{
                      alignItems: "flex-end",
                      justifyContent: "center",
                      marginLeft: "auto"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "#e8e8e8"
                      }}
                    >
                      >
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(Home);
const component = StyleSheet.create({
  search: {
    padding: 10,
    elevation: 10
  },
  card: {
    borderColor: "#f2f2f2",
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    padding: 5,
    flexDirection: "row"
  }
});

const items = StyleSheet.create({
  textSearch: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 24,
    marginTop: 30,
    elevation: 4,
    padding: 10
  }
});
