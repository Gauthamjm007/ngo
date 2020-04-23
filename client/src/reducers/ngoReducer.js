const initState = [];
export default function ngoReducer(state = initState, action) {
  switch (action.type) {
    case "GET_NGO":
      return action.payload;
    case "CLEAR_NGO":
      return [];
    case "EDIT_NGO":
      return state.map((ele) =>
        String(ele._id) === String(action.payload.id)
          ? Object.assign(ele, {}, action.payload.data)
          : Object.assign(ele, {})
      );
    default:
      return [...state];
  }
}
