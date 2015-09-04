var React = require('react');
var QuestionApp = require('./components/questionApp.js');

var mainCom = React.render(
    <QuestionApp />,
    document.getElementById('app')
)
