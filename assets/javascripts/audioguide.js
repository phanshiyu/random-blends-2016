$(document).ready(function(){
	//Here we store the data for the audio guide into a hashmap, with the key as the exhibit id
	var audioGuideData = {};

});
var enterButtonOnClick = function() {
	// We retrieve the input value
	var inputValue = $('#audio-guide-id-input').val();
	alert(inputValue);
	
	// Using the input Value to as a key to retrieve the relevant data from the hash map
	var audioData = audioGuideData[inputValue];
	// Check if anything is retrived
	if (audioData) {
		// If yes something is retrived, input is valid
	} else {
		// Nothing is retrieved, we have to feedback to the user.
	}
};