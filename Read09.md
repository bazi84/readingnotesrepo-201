# Forms and JS Events
  ## Form is used Whenever you want to collect information from those who visit your webpage.

  ## Form live inside a <form> element.
  ## structure of html form
  <form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>

## The <form> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

## Each form control is given:
  -  name
  - input type text where user can type their information
  - submit button

## JS Events
  ### events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.

### Example
  ## <button onclick="displayDate()">The time is?</button>
  ## The Most commonly used events are W3C DOM events. 