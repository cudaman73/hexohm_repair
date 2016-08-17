(function() {
    // called when the document completly loaded
    function onload()
    {
    //get values from form
    function getValues(){
	var custName = document.getElementById('custName').value;
	var ticketNum = document.getElementById('ticketNum').value;
	var address1 = document.getElementById('address1').value;
	var address2 = document.getElementById('address2').value;
	var hexVersion = document.getElementById('hexVersion').value;
	var hexSerial = document.getElementById('hexSerial').value;
	var hexColor = document.getElementById('hexColor').value
    var printButton = document.getElementById('printButton').value;
    };
    
    //set receive date
    	var receiveDate = new Date();
    // prints the label
    printButton.onclick = function()
        {
            try
            {
                // default open label
		var labelXml = '<?xml version="1.0" encoding="utf-8"?>\
<DieCutLabel Version="8.0" Units="twips">\
	<PaperOrientation>Landscape</PaperOrientation>\
	<Id>Address</Id>\
	<PaperName>30252 Address</PaperName>\
	<DrawCommands>\
		<RoundRectangle X="0" Y="0" Width="1581" Height="5040" Rx="270" Ry="270" />\
	</DrawCommands>\
	<ObjectInfo>\
		<TextObject>\
			<Name>custName</Name>\
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
			<LinkedObjectName></LinkedObjectName>\
			<Rotation>Rotation0</Rotation>\
			<IsMirrored>False</IsMirrored>\
			<IsVariable>False</IsVariable>\
			<HorizontalAlignment>Left</HorizontalAlignment>\
			<VerticalAlignment>Top</VerticalAlignment>\
			<TextFitMode>None</TextFitMode>\
			<UseFullFontHeight>True</UseFullFontHeight>\
			<Verticalized>False</Verticalized>\
			<StyledText>\
				<Element>\
					<String />\
						<Attributes>\
						<Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
					</Attributes>\
				</Element>\
			</StyledText>\
		</TextObject>\
		<Bounds X="346" Y="180" Width="2130" Height="285" />\
	</ObjectInfo>\
	<ObjectInfo>\
		<TextObject>\
			<Name>address1</Name>\
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
			<LinkedObjectName></LinkedObjectName>\
			<Rotation>Rotation0</Rotation>\
			<IsMirrored>False</IsMirrored>\
			<IsVariable>False</IsVariable>\
			<HorizontalAlignment>Left</HorizontalAlignment>\
			<VerticalAlignment>Top</VerticalAlignment>\
			<TextFitMode>None</TextFitMode>\
			<UseFullFontHeight>True</UseFullFontHeight>\
			<Verticalized>False</Verticalized>\
			<StyledText>\
				<Element>\
					<String />\
					<Attributes>\
						<Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
					</Attributes>\
				</Element>\
			</StyledText>\
		</TextObject>\
		<Bounds X="331" Y="510" Width="2925" Height="240" />\
	</ObjectInfo>\
	<ObjectInfo>\
		<TextObject>\
			<Name>address2</Name>\
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
			<LinkedObjectName></LinkedObjectName>\
			<Rotation>Rotation0</Rotation>\
			<IsMirrored>False</IsMirrored>\
			<IsVariable>False</IsVariable>\
			<HorizontalAlignment>Left</HorizontalAlignment>\
			<VerticalAlignment>Top</VerticalAlignment>\
			<TextFitMode>None</TextFitMode>\
			<UseFullFontHeight>True</UseFullFontHeight>\
			<Verticalized>False</Verticalized>\
			<StyledText>\
				<Element>\
					<String />\
					<Attributes>\
						<Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
					</Attributes>\
				</Element>\
			</StyledText>\
		</TextObject>\
		<Bounds X="331" Y="818" Width="2895" Height="255" />\
	</ObjectInfo>\
	<ObjectInfo>\
		<TextObject>\
			<Name>TEXT_3</Name>\
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
			<LinkedObjectName></LinkedObjectName>\
			<Rotation>Rotation0</Rotation>\
			<IsMirrored>False</IsMirrored>\
			<IsVariable>False</IsVariable>\
			<HorizontalAlignment>Left</HorizontalAlignment>\
			<VerticalAlignment>Top</VerticalAlignment>\
			<TextFitMode>None</TextFitMode>\
			<UseFullFontHeight>True</UseFullFontHeight>\
			<Verticalized>False</Verticalized>\
			<StyledText>\
				<Element>\
					<String>Q/C by _______</String>\
					<Attributes>\
						<Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
					</Attributes>\
				</Element>\
			</StyledText>\
		</TextObject>\
		<Bounds X="391" Y="1178" Width="1665" Height="270" />\
	</ObjectInfo>\
	<ObjectInfo>\
		<TextObject>\
			<Name>hexVersion</Name>\
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
			<LinkedObjectName></LinkedObjectName>\
			<Rotation>Rotation0</Rotation>\
			<IsMirrored>False</IsMirrored>\
			<IsVariable>False</IsVariable>\
			<HorizontalAlignment>Right</HorizontalAlignment>\
			<VerticalAlignment>Top</VerticalAlignment>\
			<TextFitMode>ShrinkToFit</TextFitMode>\
			<UseFullFontHeight>True</UseFullFontHeight>\
			<Verticalized>False</Verticalized>\
			<StyledText>\
				<Element>\
					<String />\
					<Attributes>\
						<Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
					</Attributes>\
				</Element>\
			</StyledText>\
		</TextObject>\
		<Bounds X="3618" Y="240" Width="1125" Height="240" />\
	</ObjectInfo>\
	<ObjectInfo>\
		<TextObject>\
			<Name>hexSerial</Name>\
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
			<LinkedObjectName></LinkedObjectName>\
			<Rotation>Rotation0</Rotation>\
			<IsMirrored>False</IsMirrored>\
			<IsVariable>False</IsVariable>\
			<HorizontalAlignment>Right</HorizontalAlignment>\
			<VerticalAlignment>Top</VerticalAlignment>\
			<TextFitMode>None</TextFitMode>\
			<UseFullFontHeight>True</UseFullFontHeight>\
			<Verticalized>False</Verticalized>\
			<StyledText>\
				<Element>\
					<String />\
					<Attributes>\
						<Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
					</Attributes>\
				</Element>\
			</StyledText>\
		</TextObject>\
		<Bounds X="3438" Y="570" Width="1305" Height="225" />\
	</ObjectInfo>\
	<ObjectInfo>\
		<TextObject>\
			<Name>hexColor</Name>\
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
			<LinkedObjectName></LinkedObjectName>\
			<Rotation>Rotation0</Rotation>\
			<IsMirrored>False</IsMirrored>\
			<IsVariable>False</IsVariable>\
			<HorizontalAlignment>Right</HorizontalAlignment>\
			<VerticalAlignment>Top</VerticalAlignment>\
			<TextFitMode>None</TextFitMode>\
			<UseFullFontHeight>True</UseFullFontHeight>\
			<Verticalized>False</Verticalized>\
			<StyledText>\
				<Element>\
					<String />\
					<Attributes>\
						<Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
					</Attributes>\
				</Element>\
			</StyledText>\
		</TextObject>\
		<Bounds X="3408" Y="885" Width="1290" Height="225" />\
	</ObjectInfo>\
	<ObjectInfo>\
		<TextObject>\
			<Name>TEXT_7</Name>\
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
			<LinkedObjectName></LinkedObjectName>\
			<Rotation>Rotation0</Rotation>\
			<IsMirrored>False</IsMirrored>\
			<IsVariable>False</IsVariable>\
			<HorizontalAlignment>Left</HorizontalAlignment>\
			<VerticalAlignment>Top</VerticalAlignment>\
			<TextFitMode>ShrinkToFit</TextFitMode>\
			<UseFullFontHeight>True</UseFullFontHeight>\
			<Verticalized>False</Verticalized>\
			<StyledText>\
				<Element>\
					<String>Repaired by _______</String>\
					<Attributes>\
						<Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
					</Attributes>\
				</Element>\
			</StyledText>\
		</TextObject>\
		<Bounds X="2508" Y="1163" Width="2130" Height="315" />\
	</ObjectInfo>\
	<ObjectInfo>\
		<TextObject>\
			<Name>ticketNum</Name>\
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
			<LinkedObjectName></LinkedObjectName>\
			<Rotation>Rotation0</Rotation>\
			<IsMirrored>False</IsMirrored>\
			<IsVariable>False</IsVariable>\
			<HorizontalAlignment>Center</HorizontalAlignment>\
			<VerticalAlignment>Top</VerticalAlignment>\
			<TextFitMode>None</TextFitMode>\
			<UseFullFontHeight>True</UseFullFontHeight>\
			<Verticalized>False</Verticalized>\
			<StyledText>\
				<Element>\
					<String />\
					<Attributes>\
						<Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />\
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
					</Attributes>\
				</Element>\
			</StyledText>\
		</TextObject>\
		<Bounds X="2553" Y="120" Width="1035" Height="210" />\
	</ObjectInfo>\
	</DieCutLabel>';

		
        label = dymo.label.framework.openLabelXml(labelXml);
        // set label text
		label.setObjectText("custName", custName.value);
		label.setObjectText("ticketNum", ticketNum.value);
		label.setObjectText("address1", address1.value);
		label.setObjectText("address2", address2.value);
		label.setObjectText("hexVersion", hexVersion.value);
		label.setObjectText("hexSerial", hexSerial.value);
		label.setObjectText("hexColor", hexColor.value);
        // select printer to print on
        // for simplicity sake just use the first LabelWriter printer
        var printers = dymo.label.framework.getPrinters();
        if (printers.length == 0)
            throw "No DYMO printers are installed. Install DYMO printers.";
        var printerName = "";
        for (var i = 0; i < printers.length; ++i)
            {
                var printer = printers[i];
                if (printer.printerType == "LabelWriterPrinter")
                {
                printerName = printer.name;
                break;
                }
            }

            if (printerName == "")
                throw "No LabelWriter printers found. Install LabelWriter printer";
            // finally print the label
            //label.print(printerName);
			//label.print(printerName);
            }
            catch(e)
            {
                alert(e.message || e);
            }
		//date calculations for due_date
		//@ this is a function to get the date and add 10 business days to date
		function getRelativeDate() {
			var date = new Date();
			var i = 0
  			while (i < 10) 
			{
				date.setDate(date.getDate()+1)
				if (date.getDay() > 0 && date.getDay() < 6) 
				{
				i++
				} 
			else{}
			};

		//console.log(date);
			return date;
		};

		//------------------------------------------------------------------
		//Update the Google Spreadsheet with ticketNum and receiveDate
		//------------------------------------------------------------------
		//Link to active hexohm spreadsheet
		var google_url = "https://docs.google.com/a/cravingvapor.com/forms/d/e/1FAIpQLSeZKqOAet_J-ZoD2Bjn5xFiP9GRI9VJTqNl9P4hg_PRAZzYcg/formResponse";
		/*$.ajax({
			url: google_url,
			data: {"entry.1003910220":ticketNum.value},
			type: 'POST',
			dataType: 'xml'
		});*/
		
		//------------------------------------------------------------------
		//Update Freshdesk Ticket
		//--------------------------------------------------------------------
		var fresh_url = "https://cravingvapor.freshdesk.com/api/v2/tickets/"+ticketNum.value;
		var due_by = getRelativeDate();
		var API_KEY = "pZzTJpSnZNyEMnPYIbe";
		
		/*$.ajax
		({
			url: fresh_url,
			headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Authorization': 'Basic ' + btoa(API_KEY + ':X'), 
			},
			type: 'PUT',
			data: JSON.stringify({ 
			"priority":2,
			"status":7,
			"source":2,
			"due_by":due_by
			}),
			dataType: "json",
			success: function() { alert('PUT completed'); },
			error: function (xhRequest, ErrorText, thrownError){
				alert("Failed to PUT properly, please try again");
				console.log('xhRequest: ' + xhRequest + "\n");
				console.log('ErrorText: ' + ErrorText + "\n");
				console.log('thrownError: ' + thrownError +"\n");
			}
		});*/
        
        //adjust dates for mysql injection
        receiveDate = receiveDate.getUTCFullYear() + '-' +
                      ('00' + (receiveDate.getUTCMonth()+1)).slice(-2) + '-' +
                      ('00' + receiveDate.getUTCDate()).slice(-2) + ' ' + 
                      ('00' + receiveDate.getUTCHours()).slice(-2) + ':' + 
                      ('00' + receiveDate.getUTCMinutes()).slice(-2) + ':' + 
                      ('00' + receiveDate.getUTCSeconds()).slice(-2);
        due_by = due_by.getUTCFullYear() + '-' +
                 ('00' + (due_by.getUTCMonth()+1)).slice(-2) + '-' +
                 ('00' + due_by.getUTCDate()).slice(-2) + ' ' + 
                 ('00' + due_by.getUTCHours()).slice(-2) + ':' + 
                 ('00' + due_by.getUTCMinutes()).slice(-2) + ':' + 
                 ('00' + due_by.getUTCSeconds()).slice(-2);
        
        //adjust address to new string for mysql injection
        var address = address1.value + ", " + address2.value;
        
        //send variables to php
        $.ajax ({
           url: 'ticketUpdate.php',
           type: 'POST',
           data:{
               custName: custName.value,
               ticketNum: ticketNum.value,
               address: address,
               hexVersion: hexVersion.value,
               hexSerial: hexSerial.value,
               hexColor: hexColor.value,
               receiveDate: receiveDate,
               dueDate: due_by
           },
           success: function(){alert('Sent to PHP!');},
           error: function (xhRequest, ErrorText, thrownError){
            alert("Failed to POST");
			console.log('xhRequest: ' + xhRequest + "\n");
			console.log('ErrorText: ' + ErrorText + "\n");
			console.log('thrownError: ' + thrownError +"\n");
           }
        });
		
        };
    };
    // register onload event
    if (window.addEventListener)
        window.addEventListener("load", onload, false);
    else if (window.attachEvent)
        window.attachEvent("onload", onload);
    else
        window.onload = onload;
} ());
