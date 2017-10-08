
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note=notes.addNote(argv.title, argv.body);
  if(note){
	  console.log("Note Created");
	  notes.logNote(note);
  }else{
	  console.log("Title Alredy Taken");
  }
} else if (command === 'list') {
  var allNotes=notes.getAll();
  if(allNotes){
	  console.log("Listing The Notes");
	  allNotes.forEach((note)=>{
		  notes.logNote(note);
 
	  })
  }else{
	  console.log("There is no Notes Found");
  }

} else if (command === 'read') {
 var filterNote = notes.getNote(argv.title);
 if(filterNote){
	  console.log("Reading Note");
	  notes.logNote(filterNote);
 }else{
	  console.log("Note was not found");
 }} else if (command === 'remove') {
  var isNoteremoved=notes.removeNote(argv.title);
  var message=isNoteremoved?"Note was removed":"Note was note found";
  console.log(message);
} else {
  console.log('Command not recognized');
}
