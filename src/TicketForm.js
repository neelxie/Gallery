import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import saveTicket from "./redux/actions/TicketAction";
import { API_BASE_URL } from "./config";
import "./TicketForm.css";

class TicketForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname:"",
      lastname:"",
      email: "",
      error:"",
      kidsTickets: 0,
      adultTickets: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

//   validateEmail(email) {
//     // eslint-disable-next-line no-useless-escape
//     const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegEx.test(String(email).toLowerCase());
//   }

  handleSubmit() {
    // preventDefault();
    const { firstname, lastname, email, kidsTickets, adultTickets } = this.state;
    const { saveTicket } = this.props;

    const ticketDetails = {
      "firstname": firstname,
      "lastname": lastname,  
      "email": email,
      "kids_tickets": kidsTickets,
      "adult_tickets": adultTickets
    };
    console.log("......")
    console.log(ticketDetails)
    axios
      .post(`${API_BASE_URL}/ticket`, ticketDetails)
      .then((res) => {
        if (res.data.success === 'true') {
          this.setState({
            loading: false
          });

            // redirect to dashboard
            // save ticket data to store
          saveTicket(res.data.data);
        //   this.setState(
        //     {
        //         feedbackMessage: "Ticket Successful"
        //     },
        //     () => {
        //         window.location.href = `/payment`;
        //     }
        //     );
          }
        })
      .catch(err => {
          this.setState({
            error: "Details"
        });
        console.log("An error occured")
        });
  }

  render() {
    const { error, firstname, lastname, email, kidsTickets, adultTickets } = this.state;

    return (
      <div className="TicketFormContainer">
        <div className="ChenaImage"></div>
        <div className="FormContain">
            <form className="form-detail" id="myform">
                <legend><h1>Get Early Bird Tickets.</h1></legend>

                <input
                    className="InputText"
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    required="required"
                    onChange={e => {
                        this.handleChange(e);
                    }}
                />
                <input
                    className="InputText"
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={lastname}
                    required="required"
                    onChange={e => {
                        this.handleChange(e);
                    }}
                />
                <input
                    type="email"
                    className="InputText"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    required="required"
                    onChange={e => {
                        this.handleChange(e);
                    }}
                />
                <label>Kids Tickets: </label>
                <input
                    className="InputText"
                    type="number"
                    placeholder="Kids Ticket"
                    min="1"
                    max="10"
                    name="kidsTickets"
                    value={kidsTickets}
                    onChange={e => {
                    this.handleChange(e);
                    }}
                />
                <label>Adult Tickets: </label>
                <input
                    className="InputText"
                    type="number"
                    placeholder="Adult Tickets"
                    min="1"
                    max="10"
                    name="adultTickets"
                    value={adultTickets}
                    onChange={e => {
                    this.handleChange(e);
                    }}
                />
                <button
                    className="MyButton"
                    onClick={this.handleSubmit}
                >
                GET TICKET
                </button>
            </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticket: state.TicketReducer
});

const mapDispatchToProps = {
  saveTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TicketForm));
