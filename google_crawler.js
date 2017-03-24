// this file crawls the Google results after passing a query
// >> Author: Bruno Duarte Brito

// importing modules
var osmosis = require('osmosis');
var jsonfile = require('jsonfile');
var dateFormat = require('dateformat');
var cmd_args = require('minimist')(process.argv.slice(2));

// global variables
var query = 'github';
var result_array = [];
var query_url = 'www.google.com/search?q=';

// checking for parameters passed on the command prompt
if(cmd_args.q) query = cmd_args.q;
if(cmd_args.query) query = cmd_args.query;

// the final query to use, replacing spaces with '+' and everything lowercase
var query_plus = query.replace(/ /g,"+").toLowerCase();
var query_underscore = query.replace(/ /g,"_").toLowerCase();

// start osmosis
osmosis
.get(query_url + query_plus)
.find('div.g')
.set({
  'website': 'cite._Rm',
  'title': 'div.rc > h3.r',
  'description': 'span.st',
  'data-ved': 'div.rc@data-ved',
  'data-hveid': 'div.rc@data-hveid'
})
.data(function(each_result) {
  // here we process each result from the 'find' above
  result_array.push(each_result);
})
.done(function() {
  // here we have processed all of the results inside the result_array
  console.log('\n\nSearch for ' + query + ' has found ' + result_array.length + ' results!\n\n');

  // checks if user wants to log to console
  if(cmd_args.l || cmd_args.log) console.log(result_array);

  // checks if user wants to save results to a file
  if(cmd_args.s || cmd_args.save) {
    var current_date_string = dateFormat(new Date(), '__dd_mm__HH_MM_ss');
    var file_name = query_underscore + current_date_string + '.json';

    // writing the resulting array to a file
    jsonfile.writeFile(file_name, result_array, {spaces: 2}, function (err) {
      // callback function
      // checking for errors
      if(!err) console.log('Results saved to ' + file_name);
      if(err) console.log('There was an error saving the file...');
    });
  }
});
