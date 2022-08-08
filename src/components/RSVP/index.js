import React from 'react';
import 'bulma/css/bulma.min.css';
//import GoogleSpreadsheet from 'google-spreadsheet';


class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.Name = {value: ''};
    this.Attending = {value: ''};
    this.BringingOthers = {value: ''};
    this.FoodRestrictions = {value: ''};
    this.SongRequests = {value: ''};
    this.SpecialMessages = {value: ''};

    this.handleAttending = this.handleAttending.bind(this);
    this.handleNotAttending = this.handleNotAttending.bind(this);

    this.handleBringingOthers = this.handleBringingOthers.bind(this);
    this.handleNotBringingOthers = this.handleNotBringingOthers.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.Attending.value = false;
    this.BringingOthers.value = false;

    //this.initGoogleSheets();

  }

  //async initGoogleSheets() {
    //const creds = require('../../noaharley-045281873e3b.json');
    //const doc = new GoogleSpreadsheet('1d2MvhJqqM2zjVU3OndFwwdrDSRqJTO6nL8nZHVrrIfo');
    //await doc.useServiceAccountAuth(creds);
    //await doc.loadInfo();
    //console.log(doc.title);
  //}

  handleAttending(event) {
    console.log("attending");
    event.preventDefault();
    //this.Attending.value = true;
    //this.remaining.style = '';
  }

  handleNotAttending(event) {
    console.log("not attending");
    event.preventDefault();
  }

  handleBringingOthers(event) {
    console.log("bringing others");
    event.preventDefault();
  }

  handleNotBringingOthers(event) {
    console.log("not bringing others");
    event.preventDefault();
  }

  handleSubmit(event) {
    console.log("submit clicked");
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <section class="section">
          <div class="field">
            <label class="label">What is your name?</label>
            <div class="control">
              <input class="input" type="text" placeholder="Name" value={this.Name.value} />
            </div>
          </div>
          <div class="field">
            <label class="label">Will you be attending?</label>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-success" onClick={this.handleAttending}>Yes</button>
            </div>
            <div class="control">
              <button class="button is-danger" onClick={this.handleNotAttending}>No</button>
            </div>
          </div>
          <div id="remaining">
          <div class="field" id="bringingOthers">
            <label class="label">Are you bringing anyone with you?</label>
          </div>
          <div class="field is-grouped" id="bringingOthers">
            <div class="control">
              <button class="button is-success" onClick={this.handleBringingOthers}>Yes</button>
            </div>
            <div class="control">
              <button class="button is-danger" onClick={this.handleNotBringingOthers}>No</button>
            </div>
          </div>
          <div class="field" id="whoBringing">
            <label class="label">Who are you bringing?</label>
            <div class="control">
              <input class="input" type="text" placeholder="What are their names?" value={this.BringingOthers.value} />
            </div>
          </div>
          <div class="field" id="foodRestrictions">
            <label class="label">Does anyone have any food restrictions?</label>
            <div class="control">
              <input class="input" type="text" placeholder="List any food restrictions here" value={this.FoodRestrictions.value} />
            </div>
          </div>
          <div class="field" id="songRequests">
            <label class="label">Do you have any song requests for the reception?</label>
            <div class="control">
              <input class="input" type="text" placeholder="List any song requests here" value={this.SongRequests.value} />
            </div>
          </div>
          <div class="field" id="specialMessages">
            <label class="label">Do you have any message for us?</label>
            <div class="control">
              <textarea class="textarea" placeholder="Special message" value={this.SpecialMessages.value}></textarea>
            </div>
          </div>
          <div class="field is-grouped" id="submit">
            <div class="control">
              <button class="button is-success" onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
          </div>
        </section>
      </form>
    );
  }
}
export default RSVP;