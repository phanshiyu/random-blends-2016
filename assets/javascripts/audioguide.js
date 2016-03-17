
var audioGuideData = {
	"07": "The Looking Glass",
	"08": "Project Kintsugi",
	"09": "Broken is Beautiful",
	"11": "My Neighbourhood Moments",
	"15": "Vices",
	"58": "Dark Side of Singapore",
	"74": "Assisted Suicide Kit",
	"80": "1200",
	"81": "Dance, Sleep Repeat",
};

var enterButtonOnClick = function() {
	// We retrieve the input value
	var inputValue = $('#audio-guide-id-input').val();
	$('#audio-guide-id-input').val('');
	// Using the input Value to as a key to retrieve the relevant data from the hash map
	var audioData = audioGuideData[inputValue];
	// Check if anything is retrived
	if (audioData) {
		var feedback = $('.feedback');
		feedback.empty();
		// If yes something is retrived, input is valid
		var audioModal = $('#audio-modal');
		var audioClipWrapper = audioModal.find('.audio-clip-wrapper');
		var audioModalHeader = audioModal.find('.audio-title');

		audioModalHeader.text(audioData);
		audioClipWrapper.empty();

		// Attach audio clip
		var pathToAudioClip = "assets/audio-tour-clips/" + inputValue + ".mp3";
		var audioClipElement = $('<audio controls></audio>');
		var audioClipSource = $('<source></source>')
								.attr('src', pathToAudioClip);
		audioClipElement.append(audioClipSource);
		audioClipWrapper.append(audioClipElement);

		$('#audio-modal').modal('show');
	} else {
		var feedback = $('.feedback');
		feedback.text('Invalid ID, please try again');
		// Nothing is retrieved, we have to feedback to the user.
	}
};