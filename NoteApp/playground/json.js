/**
 * http://usejsdoc.org/
 */
const fs = require("fs");
var orginalString = {
	title : "some title",
	body : "some body"
};

var orginalNoteString = JSON.stringify(orginalString);
fs.writeFileSync("jsonNote.txt",orginalNoteString);
var noteString = fs.readFileSync("jsonNote.txt");
var fobj=JSON.parse(noteString);
console.log(typeof noteString);
console.log(fobj.body);