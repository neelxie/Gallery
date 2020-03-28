import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import './Landing.css';
// import Header from '../Header';
// import InformationBar from '../InformationBar';
// import SideNav from '../SideNav';
// import getJobs from '../../redux/actions/JobsActions';
// import Status from '../Status';
// import { BigSpinner } from '../SpinnerComponent';
// import tellAge from '../../helpers/ageUtility';

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
                  <tr>
                    <th>First Name</th>
                    <td>{}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>{}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{}</td>
                  </tr>
                  <tr>
                    <th>Kids Tickets</th>
                    <td>{}</td>
                  </tr>
                  <tr>
                    <th>Adult Tickets</th>
                    <td>{}</td>
                  </tr>
                  <tr>
                    <th>Number of Tickets</th>
                    <td>{}</td>
                  </tr>
                  <tr>
                    <th>Amount to be paid</th>
                    <td>{}</td>
                  </tr>
                  <tr>
                    <th>Reference Number</th>
                    <td>{}</td>
                  </tr>
                </table>
            </div>
            <p className="lead">Note your <strong>reference number and amount</strong> and proceed to the Zazu page to effect payment.</p>
            <hr/>
            <p>
              Having trouble? <a href="">Contact us</a>
            </p>
            <p className="lead">
              <a className="btn btn-primary btn-sm" href="https://bootstrapcreative.com/" role="button">Continue to Zazu</a>
            </p>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  data: PropTypes.object,
};

export const mapStateToProps = (state) => {
  const { data } = state.TicketReducer;
  return { data };
};

// export const mapDispatchToProps = (dispatch) => bindActionCreators({
//   getJobs
// }, dispatch);

export default connect(
  mapStateToProps,
  null
)(Landing);
