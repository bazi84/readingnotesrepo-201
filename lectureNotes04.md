# Lectures Notes 05
 ## const. 
 ### what?
  -  a constant variable. to be used when we have a variable se3r to a value that we never plan on changing. Use whenever possible.

  ### Why?
  - because it can never be changed this prevents errors and tells a better story with our code.

  ` const newVariable = unchanging`

  Arrays and Objects can always be declared with const... we can alter the interior of the structure, we can not reasign.

  `const myArray = []`
  `myArray [0]` = 'banana'
   myArray = 'banana'
   myArray = 3;

   Objects

   what?

    JavaScript objects are convenient and powerful ways to group data and functions.
    -  They store data as properties which are repsented as key: value pairs and can have methods, which are functions associated with the object.
    - Similar to array, but with sematic element names

       JavaScript
          Const myArray = ['a', 'b', 'c']
          myArray[0]

          const myObj = {0: }