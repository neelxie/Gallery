import React from 'react';
import { connect } from 'react-redux';
import './Landing.css';

class Landing extends React.Component {

  render() {
    const { data } = this.props;
    
    return (
      <div>
        <div className="ChenaImage"></div>
        <div className="jumbotron">
            <h1 className="display-3">Thank You!</h1>
            <div className="Table">
                <table>
                  <tbody>
                    <tr>
                        <th>First Name:</th>
                        <td>{localStorage.getItem('firstname')}</td>
                    </tr>
                    <tr>
                        <th>Last Name:</th>
                        <td>{localStorage.getItem('lastname')}</td>
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <td>{localStorage.getItem('email')}</td>
                    </tr>
                    <tr>
                        <th>Phone Number:</th>
                        <td>{localStorage.getItem('phone')}</td>
                    </tr>
                    <tr>
                        <th>Kids Tickets:</th>
                        <td>{localStorage.getItem('kidsTickets')}</td>
                    </tr>
                    <tr>
                        <th>Adult Tickets:</th>
                        <td>{localStorage.getItem('adultTickets')}</td>
                    </tr>
                    <tr>
                        <th>Number of Tickets:</th>
                        <td>{localStorage.getItem('numOfTickets')}</td>
                    </tr>
                    <tr>
                        <th>Amount to be paid:</th>
                        <td>K{localStorage.getItem('amount')}</td>
                    </tr>
                    <tr>
                        <th>Reference Number:</th>
                        <td>{localStorage.getItem('basket')}</td>
                    </tr>
                    <tr>
                        <th>Time signed up:</th>
                        <td>{localStorage.getItem('timeSigned')}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <p className="lead">Note your <strong>reference number and amount</strong> and proceed to the Zazu page to effect payment.</p>
            <hr/>
            <p>
              Having trouble? <a href="">Contact us</a>
            </p>
            <p className="lead">
              <a className="btn btn-primary btn-sm" href="https://zazu.com/" role="button">Continue to Zazu</a>
            </p>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const { data } = state.ticket;
  return { data };
};

export default connect(
  mapStateToProps,
  null
)(Landing);
