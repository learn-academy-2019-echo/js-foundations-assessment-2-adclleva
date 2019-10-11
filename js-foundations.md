# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

  The console will show "outside".

1b. Test the function. Explain why the function returned what it did.

  Your answer:

    It returned an undefined and console logged an undefined because the text variable inside the logIt function was declared after the console.log even though it
    was also declared outside the function

  Researched answer:

    If the variable is declared outside of any functions, the variable is available in the global scope.
    If the variable is declared within a function, the variable is available from its point of declaration until the end of the function definition.

    Source: https://dev.to/simplymichael/variable-declaration-and-scoping-rules-c0k

2. What is JSON?

  Your answer:

    Javascript Object Notation????

  Researched answer:

    JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.

    Source: http://www.json.org/

3. What does CRUD stand for?

  Your answer:

    Create
    Read
    Update
    Delete

  Researched answer:

    When we are building APIs, we want our models to provide four basic types of functionality. The model must be able to Create, Read, Update, and Delete resources. Computer scientists often refer to these functions by the acronym CRUD. A model should have the ability to perform at most these four functions in order to be complete. If an action cannot be described by one of these four operations, then it should potentially be a model of its own.

    Source: https://www.codecademy.com/articles/what-is-crud

4. What does are the 5 HTTP verbs?

  Your answer:

    All I could recall is that it all relates to the CRUD acronym. haha

  Researched answer:

    The HTTP verbs comprise a major portion of our “uniform interface” constraint and provide us the action counterpart to the noun-based resource. The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently. Of those less-frequent methods, OPTIONS and HEAD are used more often than others.

    source: https://www.restapitutorial.com/lessons/httpmethods.html

5. What is a higher-order function?

  Your answer:

    I believe that it's a function calling or utilizing another function

  Researched answer:

    A higher order function is a function that takes a function as an argument, or returns a function. Higher order function is in contrast to first order functions, which don’t take a function as an argument or return a function as output.

    source: https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99

6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer:

    I believe that it's using curly brackets to denote that a function is "closed" and it's good in determining the scope(s).

  Researched answer:

  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
  To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.
  The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

  Source: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

7. STRETCH: What is an API?

  Your answer:

    All I know that it is an Application Programming Interface

  Researched answer:

    API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.

    Source: https://www.mulesoft.com/resources/api/what-is-an-api

### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?

  What did you have for breakfast this morning?

2. What was your favorite topic this week?

   All things React and Git

3. What was your "A-ha!" moment this week?

  How components, props, and states work together in React.
