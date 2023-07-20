/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";

export const App = (props) => {
  return (
    <>
      <div style={{ background: "#f0f4f4" }}>
        <div style={{ paddingLeft: "16px" }}>
          <form action="#" method="POST">
            <div class="form-row">
              <label for="UserName">Name</label>
              <input
                type="text"
                id="UserName"
                name="UserName"
                placeholder="Enter Name"
              />
            </div>
            <div class="form-row">
              <label for="Phone">Phone</label>
              <input type="tel" id="Phone" name="Phone" />
            </div>
            <div class="form-row">
              <label for="eMail">Email</label>
              <input type="email" id="eMail" name="eMail" />
            </div>
            <div class="form-row">
              <label for="textArea">Message</label>
              <textarea name="textArea" id="textArea" cols="3"></textarea>
            </div>

            <div class="form-row">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default App;
