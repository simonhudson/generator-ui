const gulp = require('gulp');
<% for (let task in gulpTasks) { %>
const <%= task %> = require('<%= gulpTasks[task] %>');
<% } %>
