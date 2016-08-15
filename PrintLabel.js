(function() {
    // called when the document completly loaded
    function onload()
    {
	var custName = document.getElementById('custName');
	var ticketNum = document.getElementById('ticketNum');
	var address1 = document.getElementById('address1');
	var address2 = document.getElementById('address2');
	var hexVersion = document.getElementById('hexVersion');
	var hexSerial = document.getElementById('hexSerial');
	var hexColor = document.getElementById('hexColor');
	var receiveDate = new Date();
    var printButton = document.getElementById('printButton');
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
        // label.setObjectText("Text", textTextArea.value);
		//var n = receiveDate.format("d/m/yyyy hh:mm:ss");
		label.setObjectText("custName", custName.value);
		label.setObjectText("ticketNum", ticketNum.value);
		//label.setObjectText("receiveDate", dateFormat(receiveDate, "m/d/yyyy hh:mm:ss"));
		label.setObjectText("address1", address1.value);
		label.setObjectText("address2", address2.value);
		label.setObjectText("hexVersion", hexVersion.value);
		label.setObjectText("hexSerial", hexSerial.value);
		label.setObjectText("hexColor", hexColor.value);
        // select printer to print on
        // for simplicity sake just use the first LabelWriter printer
		//var printerName = "DYMO LabelWriter 400 (Copy 1)";
		//label.print(printerName);
        var printers = dymo.label.framework.getPrinters();
		console.log(printers);
        if (printers.length == 0)
            throw "No DYMO printers are installed. Install DYMO printers.";
        var printerName = "";
        for (var i = 0; i < printers.length; ++i)
            {
                var printer = printers[i];
                if (printer.printerType == "LabelWriterPrinter")
                {
                printerName = printer.name;
				console.log(printerName);
                break;
                }
            }

            if (printerName == "")
                throw "No LabelWriter printers found. Install LabelWriter printer";
            // finally print the label
            label.print(printerName);
			label.print(printerName);
            }
            catch(e)
            {
                alert(e.message || e);
            }
		//date calculations for due_date
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
				//console.log(date)
				i++
				} 
			else 
			{
				//console.log(date)
			}
			};

		//console.log(date);
			return date;
		};

		//------------------------------------------------------------------
		//Update the Google Spreadsheet with ticketNum and receiveDate
		//------------------------------------------------------------------
		//Link to active hexohm spreadsheet
		var google_url = "https://docs.google.com/a/cravingvapor.com/forms/d/e/1FAIpQLSeZKqOAet_J-ZoD2Bjn5xFiP9GRI9VJTqNl9P4hg_PRAZzYcg/formResponse";
		//This one is the ajax test form
		//var google_url = "https://docs.google.com/a/cravingvapor.com/forms/d/e/1FAIpQLSfZxuRj7L83pgKOL3n4icbEjan1XhCr0z0UDceL52cTaXMnQw/formResponse";
		$.ajax({
			url: google_url,
			//This is the entry for the live form
			data: {"entry.1003910220":ticketNum.value},
			//This is the entry for the ajax test form
			//data: {"entry.1599668350":ticketNum.value},
			type: 'POST',
			dataType: 'xml'
		});
		
		//------------------------------------------------------------------
		//Update Freshdesk Ticket
		//--------------------------------------------------------------------
		var fresh_url = "https://cravingvapor.freshdesk.com/api/v2/tickets/"+ticketNum.value;
		var due_by = getRelativeDate();
		var API_KEY = "pZzTJpSnZNyEMnPYIbe";
		//var payload = '{ "priority":2,"status":7,"source":2,"due_by":"'+due_by+'" }';
		
		$.ajax
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
		});
		
        }
    };
    // register onload event
    if (window.addEventListener)
        window.addEventListener("load", onload, false);
    else if (window.attachEvent)
        window.attachEvent("onload", onload);
    else
        window.onload = onload;
} ());
