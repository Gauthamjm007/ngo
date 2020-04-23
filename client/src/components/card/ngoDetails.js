import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { connect } from "react-redux";
import NgoCard from "./ngoCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import Swal from "sweetalert2";

const filterFunc = (arr, key) => {
  return [...new Set(arr.map((ngo) => ngo.address[key]))].map((state) => {
    return (
      <option value={state} key={state}>
        {state}
      </option>
    );
  });
};

class NgoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ngo: [],
      f_funded: false,
      search: "",
      city: "",
      states: "",
      district: "",
      f_funding: "",
    };
  }

  handleClick = (id) => {
    const obj = this.props.ngo.find((ele) => ele._id === id);
    Swal.fire({
      title: `Details:
                Name:${obj.name}
                Email:${obj.email}
                Foreign Funding:${obj.f_funding ? "Yes" : "No"}
                address:${obj.address.line1} ,${obj.address.line2}
                ${obj.address.city}, ${obj.address.district},
                ${obj.address.state} -  ${obj.address.pincode}
                Claimed:${obj.claimed ? "Yes" : "No"}
                `,
    });
  };
  handleChange = (e) => {
    console.log(e.target.name, e.target.value, "values");
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ngo: this.props.ngo });
    }, 700);
  }

  render() {
    const { ngo, search, states, city, district, f_funding } = this.state;

    return (
      <div
        style={{
          paddingTop: 100,
          width: "100%",
          height: "100%",
          backgroundColor: this.props.color,
        }}
      >
        {ngo.length !== 0 ? (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container justify="center">
                <TextField
                  id="input-with-icon-textfield"
                  variant="outlined"
                  name="search"
                  disabled={false}
                  label="Search"
                  value={search}
                  style={{ color: "black" }}
                  color="primary"
                  onChange={this.handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <br />

              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="baseline"
                >
                  <h5>Filter By: </h5>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-ngo-native-simple">
                      State
                    </InputLabel>
                    <Select
                      native
                      name="states"
                      value={this.states}
                      onClick={this.handleChange}
                      label="State"
                      inputProps={{
                        name: "states",
                        id: "outlined-ngo-native-simple",
                      }}
                    >
                      <option aria-label="None" value="" />
                      {filterFunc(this.props.ngo, "state")}
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-ngo-native-simple">
                      City
                    </InputLabel>
                    <Select
                      native
                      label="City"
                      name="city"
                      value={this.city}
                      onClick={this.handleChange}
                      inputProps={{
                        name: "city",
                        id: "outlined-ngo-native-simple",
                      }}
                    >
                      <option aria-label="None" value="" />
                      {filterFunc(this.props.ngo, "city")}
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-ngo-native-simple">
                      District
                    </InputLabel>
                    <Select
                      native
                      name="district"
                      value={this.district}
                      onClick={this.handleChange}
                      label="district"
                      inputProps={{
                        name: "district",
                        id: "outlined-ngo-native-simple",
                      }}
                    >
                      <option aria-label="None" value="" />
                      {filterFunc(this.props.ngo, "district")}
                    </Select>
                  </FormControl>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-ngo-native-simple">
                      F Funding
                    </InputLabel>
                    <Select
                      native
                      name="f_funding"
                      value={this.f_funding}
                      onClick={this.handleChange}
                      label="Foreign Funding"
                      inputProps={{
                        name: "f_funding",
                        id: "outlined-ngo-native-simple",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={"true"}>Yes, Needed</option>
                      <option value={"false"}>No, Not Need</option>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            {ngo
              .filter(
                (data) =>
                  !data.name
                    .toLowerCase()
                    .indexOf(this.state.search.toLowerCase())
              )
              .filter((data) => data.address.state.includes(states))
              .filter((data) => data.address.city.includes(city))
              .filter((data) => data.address.district.includes(district))
              .filter((data) => String(data.f_funding).includes(f_funding))
              .map((ngo) => {
                return (
                  <Grid item lg={4} sm={6} xl={3} xs={12} key={ngo._id}>
                    <NgoCard
                      _id={ngo._id}
                      logo={ngo.logo}
                      name={ngo.name}
                      email={ngo.email}
                      address={ngo.address}
                      f_funding={ngo.f_funding}
                      claimed={ngo.claimed}
                      handleClick={() => this.handleClick(ngo._id)}
                    ></NgoCard>{" "}
                  </Grid>
                );
              })}
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ngo: state.ngo,
  };
};

export default connect(mapStateToProps)(NgoDetails);
