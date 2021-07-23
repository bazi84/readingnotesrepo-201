# Error Handeling and Debugging
## Code Debugging
  There is no doubt about that syntax error or logical errors will happen every time we write some large computer codes.
  The way to fix these errors is called *debugging*
  
  Debugging is not easy. But fortunately, all modern browsers have a built-in JavaScript debugger.
  Built-in debuggers can be turned on and off, forcing errors to be reported to the user.

  ## How to activate Debugging tool?
  Normally, you activate debugging in your browser with F12, and select "Console" in the debugger menu.

  ## Example 
  let x = 15 * 5;
  debugger;
  document.getElementById("demo").innerHTML = x;


  One of the best way to debug is to consol.log
  <!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>

<script>
a = 5;
b = 6;
c = a + b;
console.log(c);
</script>

</body>
</html>


