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
import { detailUsers } from "../Public/redux/actions/users";
import Icons from "react-native-vector-icons/FontAwesome";
import { thisExpression } from "@babel/types";
class DetailUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersdetail: [],
      isLoading: true,
      user: this.props.navigation.state.params.username
    };
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      await this.props.dispatch(detailUsers(this.state.user));
      this.setState({
        usersdetail: this.props.user.usersList,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    console.log("user", this.state.usersdetail);
    return (
      <React.Fragment>
        <View style={component.header}>
          <View style={component.itemsHeader}>
            <TouchableOpacity
              style={component.menu}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Icons name="long-arrow-left" size={21} color="#fff" />
            </TouchableOpacity>
            <Text style={component.items}>Detail Users</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            style={{ height: 100, width: 100, borderRadius: 100 }}
            source={{
              uri: this.state.usersdetail.avatar_url
            }}
          />
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            {this.state.usersdetail.name}
          </Text>
          <Text>
            {this.state.usersdetail.bio
              ? this.state.usersdetail.bio
              : "User Github"}
          </Text>
          <Text>{this.state.usersdetail.location}</Text>
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
export default connect(mapStateToProps)(DetailUser);
const component = StyleSheet.create({
  header: {
    position: "relative",
    paddingTop: 20,
    width: "100%",
    elevation: 5,
    backgroundColor: "#4893EC"
  },
  itemsHeader: {
    height: 45,
    justifyContent: "center",
    flexDirection: "row"
  },
  items: {
    fontSize: 24,
    fontWeight: "200",
    fontFamily: "sans-serif-condensed",
    paddingLeft: 10,
    flex: 1,
    color: "#fff"
  },
  menu: {
    alignSelf: "center",
    alignItems: "flex-start",
    marginLeft: 10
  }
});
