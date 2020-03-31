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
      phoneNumber: "",
      error:"",
      kidsTickets: 0,
      adultTickets: 0,
      data:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.validateEmail = this.validateEmail.bind(this);
  }

  componentDidMount() {
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    localStorage.removeItem('email');
    localStorage.removeItem('kidsTickets');
    localStorage.removeItem('adultTickets');
    localStorage.removeItem('numOfTickets');
    localStorage.removeItem('amount');
    localStorage.removeItem('basket');
    localStorage.removeItem('timeSigned');
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

  handleSubmit(e) {
    e.preventDefault();
    const { firstname, lastname, email, phoneNumber, kidsTickets, adultTickets } = this.state;
    const { saveTicket } = this.props;

    const ticketDetails = {
      "firstname": firstname,
      "lastname": lastname,
      "phone": phoneNumber,
      "email": email,
      "kids_tickets": kidsTickets,
      "adult_tickets": adultTickets
    };

    axios
      .post(`${API_BASE_URL}/ticket`, ticketDetails)
      .then((res) => {
        console.log(res.data.user_details);
        localStorage.setItem('firstname', res.data.user_details.firstname);
        localStorage.setItem('lastname', res.data.user_details.lastname);
        localStorage.setItem('email', res.data.user_details.email);
        localStorage.setItem('phone', res.data.user_details.phone);
        localStorage.setItem('kidsTickets', res.data.user_details.kids_tickets);
        localStorage.setItem('adultTickets', res.data.user_details.adult_tickets);
        localStorage.setItem('timeSigned', res.data.user_details.created_on);
        localStorage.setItem('numOfTickets', res.data.user_details.total_tickets);
        localStorage.setItem('amount', res.data.user_details.amount);
        localStorage.setItem('basket', res.data.user_details.basket_reference);
        this.setState({
            data: res.data.user_details
        });
        if (res.data.success === 'true') {
          this.setState({
            loading: false
          });
            // redirect to dashboard
            // save ticket data to store
        saveTicket(res.data.user_details);
        //   this.props.history.push('/payment');
        }
        this.props.history.push('/payment');
        })
      .catch(err => {
          this.setState({
            error: "Details"
        });
        console.log("An error occured")
        });
  }

  render() {
    const { firstname, lastname, email, kidsTickets, adultTickets } = this.state;

    return (
      <div className="TicketFormContainer">
        <div className="ChenaImage"></div>
        <div className="FormContain">
            <form className="form-detail" id="myform" onSubmit={this.handleSubmit}>
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
                <input
                    type="number"
                    className="InputText"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={phoneNumber}
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
                    min="0"
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
                    min="0"
                    max="10"
                    name="adultTickets"
                    value={adultTickets}
                    onChange={e => {
                    this.handleChange(e);
                    }}
                />
                <button
                    className="MyButton"

                >
                GET TICKET
                </button>
            </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { data } = state.ticket;
  return { data };
};

const mapDispatchToProps = {
  saveTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TicketForm));
