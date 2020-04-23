import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField, CheckboxWithLabel } from "formik-material-ui";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import DomainOutlinedIcon from "@material-ui/icons/DomainOutlined";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "formik-material-ui-pickers";
import TodayIcon from "@material-ui/icons/Today";
import MailIcon from "@material-ui/icons/Mail";
import { connect } from "react-redux";
import moment from "moment";
import { startNgoEdit } from "../../actions/ngo";

const ChoiceTitle = styled.h3`
  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 95px;

  letter-spacing: -1.5px;
  color: #05386b;
  mix-blend-mode: normal;
`;

function EditNgo(props) {
  console.log(props.ngo, "ngo");
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            <ChoiceTitle>Claim Ngo</ChoiceTitle>
          </Grid>
        </Grid>
      </Grid>
      {props.ngo !== undefined ? (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Formik
            initialValues={{
              name: props.ngo.name,
              reg_date: new Date(
                props.ngo.reg_date.split("-").reverse().join("-")
              ).getTime(),
              f_funding: props.ngo.f_funding,
              email: props.ngo.email,
              line1: props.ngo.address.line1,
              line2: props.ngo.address.line2,
              city: props.ngo.address.city,
              district: props.ngo.address.district,
              state: props.ngo.address.state,
              pincode: props.ngo.address.pincode,
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                const id = props.match.params.id;
                const data = {
                  name: values.name,
                  reg_date: moment(values.reg_date).format("DD-MM-YYYY"),
                  f_funding: values.f_funding,
                  email: values.email,
                  address: {
                    line1: values.line1,
                    line2: values.line2,
                    city: values.city,
                    district: values.district,
                    state: values.state,
                    pincode: values.pincode,
                  },
                  claimed: true,
                };
                const redirect = () => {
                  return props.history.push("/");
                };
                props.dispatch(startNgoEdit(data, id, redirect));
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Grid container spacing={3} justify="center">
                  <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                      <Field
                        component={TextField}
                        name="name"
                        type="text"
                        label="Name"
                        style={{ width: "260px" }}
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <DomainOutlinedIcon color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                      <Field
                        component={TextField}
                        name="email"
                        type="text"
                        label="Email"
                        style={{ width: "260px" }}
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <MailIcon color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                      <Field
                        component={DatePicker}
                        name="reg_date"
                        label="Registered Date"
                        style={{ width: "260px" }}
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <TodayIcon color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>

                  {isSubmitting && <LinearProgress />}

                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="column"
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Field
                        component={TextField}
                        type="text"
                        label="Line 1 Address"
                        name="line1"
                        variant="outlined"
                        style={{ width: "260px" }}
                      />
                      <Field
                        component={TextField}
                        type="text"
                        label="Line 2 Address"
                        name="line2"
                        variant="outlined"
                        style={{ width: "260px" }}
                      />
                      <Field
                        component={TextField}
                        type="text"
                        label="City"
                        name="city"
                        variant="outlined"
                        style={{ width: "260px" }}
                      />
                      <Field
                        component={TextField}
                        type="text"
                        label="District"
                        name="district"
                        variant="outlined"
                        style={{ width: "260px" }}
                      />
                      <Field
                        component={TextField}
                        type="text"
                        label="State"
                        name="state"
                        variant="outlined"
                        style={{ width: "260px" }}
                      />
                      <Field
                        component={TextField}
                        type="text"
                        label="Pincode"
                        name="pincode"
                        variant="outlined"
                        style={{ width: "260px" }}
                      />
                    </Grid>
                  </Grid>

                  {isSubmitting && <LinearProgress />}

                  <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                      <Field
                        component={CheckboxWithLabel}
                        name="f_funding"
                        type="checkbox"
                        Label={{ label: "Foreign Funding" }}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={submitForm}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </MuiPickersUtilsProvider>
      ) : (
        "Loading"
      )}
    </>
  );
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  console.log(id, "id");
  return {
    ngo: state.ngo.find((data) => String(data._id) === String(id)),
  };
};
export default connect(mapStateToProps)(EditNgo);
