import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Form</h1>
      <form>
          <div class="form-group col-md-4">
            <label for="Name">Name</label>
            <input type="text" class="form-control" id="nameInput"  placeholder="Enter name" required></input>
          </div>
          <div class="form-group col-md-4">
            <label for="Email">Email address</label>
            <input type="email" class="form-control" id="emailInput"  placeholder="Enter email" required></input>
          </div>
          <div class="form-group col-md-6">
            <label for="Message">Example textarea</label>
            <textarea class="form-control" id="messageInput" rows="3" required></textarea>
         </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
