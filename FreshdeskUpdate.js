(function() {
	function onload()
	{
		//@ this is a function to get the date and add 10 business days to date
		function getRelativeDate() {
  
		//  get todays date
		var date = new Date();

		//  Set up a loop to add 1 for every date that is not a sunday or saturday to find 10 business days does not exclude holidays so needs to be carefull.  
		var i = 0
  
		while (i < 10) 
		{
			date.setDate(date.getDate()+1)
			if (date.getDay() > 0 && date.getDay() < 6) 
			{
				console.log(date)
				i++
				} 
			else 
			{
				console.log(date)
			}
		};

		console.log(date);
		return date;
		};
		printButton.onclick = function()
		{
// Get Data from event form submit 
		var timeStamp = document.getElementById('receiveDate');
		var ticketNumber = document.getElementById('ticketNum');
		var printButton = document.getElementById('printButton');
		var message = ticketNumber + " was received at " + timeStamp;
  
// Send email to Joe (temp to insure working as intended) 
// MailApp.sendEmail("joe@cravingvapor.com", "Test", message); 
		console.log(message);
  
// Set API key and header for UrlFetchApp 
		var API_KEY = "pZzTJpSnZNyEMnPYIbe"; 
 
		var headers = {
				'Content-type': 'application/json',
				'Authorization': 'Basic ' + Utilities.base64Encode(API_KEY + ':X')
				};
 
// Run a function to determine duedate as day it was received + 10 days
		var duedate = getRelativeDate();
		console.log(duedate);
		var duedateT = duedate.toISOString();
  
//Set Payload to be passed to freshdesk  *** Had to set source to 2 to negate some system limitations of not being able to update tickets with facebook as a source
		var payload = '{ "priority":2,"status":7,"source":2, "due_by": "' + duedateT + '"}';

//Adds the extensions that are needed to post update to the end of the url
		var url = "https://cravingvapor.freshdesk.com/api/v2/tickets/" + ticketNumber;  //ENDPOINT + '/helpdesk/tickets.json';

//Set options for PUT freshdesk update
		var options = {
				'method': 'PUT',
				'headers': headers,
				'payload': payload,
				muteHttpExceptions: true
				};

//run the put to update priority, status and due_by date
		
		try {
			var response = UrlFetchApp.fetch(url, options);  
			} catch (e) {
				//MailApp.sendEmail("joe@cravingvapor.com", "Error report " + message, e.message);
				console.log(response.getResponseCode())
			}  
  
 
//Get date data so it can be formatted differently  
//duedate = getRelativeDate()
		var duedateR = Utilities.formatDate(duedate, "GMT -6", "MM/dd/yyyy")

//Update payload to POST as opposed to PUT so to add a reply
		payload = '{ "body":"Your HexOhm was processed in today by our Receiving team and is now on its way to our Repair team. \
		Please stay tuned, our commitment to you is to have your HexOhm shipped back out to you on or before ' + duedateR + '!"}' 
  
//Set options for the POST freshdesk update
		options = {
			'method': 'Post',
			'headers': headers,
			'payload': payload,
			'due_by': duedate,
			muteHttpExceptions: true
			};
  
//Run the POST to add Reply to the ticket  
		UrlFetchApp.fetch(url +"/reply", options)  

		};
	};
});