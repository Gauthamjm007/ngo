import axios from "axios";

export const startGetNgo = () => {
  return (dispatch) => {
    axios
      .get(`/ngo`)
      .then((ngo) => {
        if (ngo) {
          dispatch(getNgo(ngo.data));
        } else {
          alert("data not found");
        }
      })
      .catch((err) => {
        alert("error" + err);
      });
  };
};

export const getNgo = (data) => {
  return { type: "GET_NGO", payload: data };
};

export const clearNgo = () => {
  return { type: "CLEAR_NGO" };
};

export const startNgoEdit = (formData, id, redirect) => {
  return (dispatch) => {
    axios.put(`/ngo/${id}`, formData).then((response) => {
      console.log(response.data);
      dispatch(editNgo(formData, id));
      redirect();
    });
  };
};

export const editNgo = (data, id) => {
  return {
    type: "EDIT_NGO",
    payload: {
      id,
      data,
    },
  };
};
