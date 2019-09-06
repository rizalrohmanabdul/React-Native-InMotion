const initialState = {
    usersList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
  };
  
  const users = (state = initialState, action) => {
    switch (action.type) {
      case "USERS_ALL_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "USERS_ALL_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "USERS_ALL_FULFILLED":
        
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          usersList: action.payload.data
        };
        case "SEARCH_USERS_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "SEARCH_USERS_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "SEARCH_USERS_FULFILLED":
        
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          usersList: action.payload.data
        };
        case "PAGE_USERS_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "PAGE_USERS_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "PAGE_USERS_FULFILLED":
        
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          usersList: action.payload.data
        };
        case "DETAIL_USERS_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "DETAIL_USERS_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "DETAIL_USERS_FULFILLED":
        
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          usersList: action.payload.data
        };
      default:
        return state;
    }
  };
  
  export default users;
  