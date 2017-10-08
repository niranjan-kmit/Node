const fs = require("fs");

var fetchNotes = ()=>{
	try{
		var noteBuffer = fs.readFileSync("data-json.json");
		return JSON.parse(noteBuffer);	
	}catch (e) {
		return [];
	}	
};

var saveNotes = (notes)=>fs.writeFileSync("data-json.json",JSON.stringify(notes));	

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note={
			title,
			body
	};
	
	var duplicateArray=notes.filter((note)=>{
		return note.title==title;
	});
	if(duplicateArray.length == 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}

};

var getAll = () => {
	return fetchNotes();
  };

var getNote = (title) => {
 var allNotes=fetchNotes();
 var filterNote = allNotes.filter((note)=>{
	 return note.title==title;
 })
 return filterNote[0];
 
};

var removeNote = (title) => {
 var notes=fetchNotes();
 var newBuffer = notes.filter((note) => note.title != title);
 saveNotes(newBuffer);
 return notes.length!=newBuffer.length
};

var logNote = (note)=>{
	  console.log("-------");
	  console.log(`Title : ${note.title}`);
	  console.log(`Body : ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
