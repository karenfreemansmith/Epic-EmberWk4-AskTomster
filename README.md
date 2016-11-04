# Ember Q&A
### Epicodus JavaScript Week 3: Individual Project
![project screenshot](screenshot.png)

### by [Karen Freeman-Smith](https://karenfreemansmith.github.io)

### Description
Building a Q & A board with Ember.

#### Requirements:
* Questions should have the content of the question itself, an author and additional notes.
* Answers should have the content of the answer and the author.
* Include a header and/or navbar that appears on all pages containing the name of your site and a link to the home page.
* List all questions on the homepage, with only the question and the name of the author showing.
* Users should be able to click on a question to view additional information.
* Allow users to add and edit questions.
* Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.
* Additional (week 4 requirements)
  * Add a computed property - will return a random answer from our mascot(s)
  * Add a helper - will highlight questions with no answers and most popular/answered questions
  * Integrate a service - allow user to login and saves their user information
* Additional (week 4 optional)
  * Add tags/categories to questions
  * Find and integrate a quote API to "answer" questions based on tag/category
  * Filter questions by category
  * Develop some kind of user "karama" ranking
  * Display users on leaderboard based on their "karma"
* Also FIX rich text control to display more consistently (multiple times on a page? page reload)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
