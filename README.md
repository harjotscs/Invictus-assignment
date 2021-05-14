<p align="center">
  <a href="https://github.com/harjotscs/Invictus-assignment">
    <img src="public\logo512.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Invictus Assignment</h3>

  <p align="center">
    The project is implemented using React js library without using any add-on dependency.
    <br />
    <a href="#about-the-project"><strong>Read More »</strong></a>
    <br />
    <br />
    <a href="https://harjot-invictus.netlify.app/">View App Demo</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#testcases">Test Cases</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

- The Styling in the frontend is done with CSS from scratch, no external CSS library/framework is used.
- The Web App is split into two main components SearchBox and Table

- After entering the the value of N in the Input Box, If N is negative number it will be automatically converted to positive number using Math.abs() function.

  ```sh
   onChange={(event) => {
          const num = Math.abs(event.target.value);
          setNumber(num);
        }}

  ```

- On clicking submit if no number or 0 is entered, It will send an alert "Please Enter A Valid Number First" else a spinner will be shown on the button and handleClick function will be called.

  ```sh
   onClick={() => {
          number === "" || number === 0
            ? alert("Please Enter A Valid Number First")
            : handleClick(number);
        }}

  ```

- After this handleClick function in app.js will be called, which calls fetchData function (defined in src/helpers/index.js) which return text found on the url then sanitizeString function is called which converts the whole string to lower case and then replaces '-' '.' ',' with a space and replaces any double space with single space. So that the words can be seperated from , or . or - and these characters doesn't count as words. Then split the whole text into words based on spaces and Remove any space after spliting, if any. and return the array of words.

  ```sh
  const sanitizeString = (data) => {
    const regex = /[-.,]/g;
    data = data
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(regex, "")
      .split(" ")
      .filter((word) => word.trim().length > 0);

    return data;
  };

  ```

- Then control comes back to handleClick function where it proceeds with calculateFrequencies function to calculate the frequency of all the words and return the array of frequencies of all words in descending order back to handleClick where it splices the array to the entered number(N) and update the initial state of table data with the help of useState hook.

  ```sh
  const calculateFrequencies = (words) => {
    var freq = {};
    words.forEach((word) => {
      if (!freq[word]) {
        freq[word] = 0;
      }
      freq[word] += 1;
    });
    const computed = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    return computed;
  };

  //inside app.js
  setTableData(calculateFrequencies(data).splice(0, number));

  ```

- This data is passed as props to the Table.

  ```sh
  <Table tableData={tableData}/>
  ```

### Built With

- [React.Js](https://reactjs.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Make sure you have node js installed on your system.

### Installation

1. Clone the repo

   ```sh
   git clone git@github.com:harjotscs/Invictus-assignment.git
   ```

2. Install NPM packages enter below command on the terminal

   ```sh
   npm install
   ```

3. To run thd app enter below command on the terminals

   ```sh
   npm start
   ```

<!-- Testcases -->

## Testcases

1. Testcase 1:

- Data: 4
- Output:

[![Invictus Frontend ScreenShot][1]](https://harjot-invictus.netlify.app/)

2. Testcase 2:

- Data: 6
- Output:

[![Invictus Frontend ScreenShot][2]](https://harjot-invictus.netlify.app/)

3. Testcase 3:

- Data: 12
- Output:

[![Invictus Frontend ScreenShot][3]](https://harjot-invictus.netlify.app/)

_Screenshots of all testcases are in [testcases folder](testcases)_

<!-- CONTACT -->

## Contact

Harjot Singh - harjotscs@gmail.com

Project Link: [https://github.com/harjotscs/Invictus-assignment](https://github.com/harjotscs/Invictus-assignment)

<!-- MARKDOWN LINKS & IMAGES -->

[1]: testcases/1.png
[2]: testcases/2.png
[3]: testcases/3.png
[4]: testcases/4.png
