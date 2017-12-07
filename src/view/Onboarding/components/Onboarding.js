import React, { Component } from 'react';

class Onboarding extends Component {
  render() {
    return (
      <div className="form">
        <div className="questions">
          <div className="question-section">
            <div className="question-number">1</div>
            <div className="question-components">
              <div className="question-head">
                <span className="pull-left">
                  <div className="question-text-ctr">
                    <p>What kind of product do you want to build?</p>
                  </div>
                </span>
              </div>
              <div className="question-control">
                <checkbox>
                  <div className="checkbox-outer-base">
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                  </div>
                </checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Onboarding;
