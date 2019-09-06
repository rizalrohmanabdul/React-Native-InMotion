import axios from "axios";

let URL = 'https://api.github.com';

export const usersALL = (page) => {
	if (page === undefined){
		page = 10
	}
  return {
    type: "USERS_ALL",
    payload: axios.get(URL + `/users?per_page=${page}`)
  };
};

export const searchUsers = (search, sort) =>{
	if (sort === undefined){
		sort = 'desc'
	}
	return{
		type:'SEARCH_USERS',
		payload: axios.get(URL +`/search/users?q=${search}&sort=${sort}`)
	}
}
export const pageUsers = (page) => {

	return{
		type:'PAGE_USERS',
		payload: axios.get( URL+`/users?per_page=${page}`)
	}
}
export const detailUsers = (username) => {

	return{
		type:'DETAIL_USERS',
		payload: axios.get( URL+`/users/${username}`)
	}
}

