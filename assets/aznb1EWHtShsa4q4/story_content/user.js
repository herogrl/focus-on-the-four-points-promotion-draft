window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var mission = player.GetVar("MissionText");
var initiative = player.GetVar("InitiativeText");
var partners = player.GetVar("PartnersText");
var impact = player.GetVar("ImpactText");
var outcome = player.GetVar("OutcomeText");

var message = "Our Main Street organization is dedicated to " + mission +
". We support our local businesses by " + initiative +
" and work closely with " + partners +
". Your support helps us " + impact +
". With your contribution, we can " + outcome +
". Would you be interested in learning more about how you can help?";

navigator.clipboard.writeText(message).then(function() {
    alert("Message copied to clipboard!");
}, function() {
    alert("Failed to copy. Please try manually.");
});
}

window.Script2 = function()
{
  // Retrieve user input from Storyline variables
var mission = player.GetVar("MissionText");
var initiative = player.GetVar("InitiativeText");
var partners = player.GetVar("PartnersText");
var impact = player.GetVar("ImpactText");
var outcome = player.GetVar("OutcomeText");

// Construct the completed message
var message = "Our Main Street organization is dedicated to " + mission +
". We support our local businesses by " + initiative +
" and work closely with " + partners +
". Your support helps us " + impact +
". With your contribution, we can " + outcome +
". Would you be interested in learning more about how you can help?";

// Create a Blob (file) with the message content
var blob = new Blob([message], { type: "text/plain" });

// Create a temporary anchor element to trigger download
var link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "MainStreet_Message.txt";

// Append link to the document, trigger the download, and remove it after
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

};
