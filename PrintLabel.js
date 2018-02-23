(function() {
    // Reads text from file synchronously using "await" keyword
    /*function readFileAsText(inputFile) {
        fileReader = new FileReader();

        return new Promise(async function(resolve, reject) {
            fileReader.onerror = function() {
                fileReader.abort();

                reject(new DOMException("Problem parsing input file."));
            };

            //fileReader.onload = function() {
                //Set variable to result
			//	resolve(fileReader.result);
            //};
			let label = await fileReader.readAsText(inputFile);
            resolve(label);
        });
    }*/

    // Gets the date and adds 10 business days to the date
    function getRelativeDate() {
        //  Get todays date
        var date = new Date();

        // Set up a loop to add 1 for every date that is not a sunday or saturday to find 10 business days does not exclude holidays so needs to be carefull.  
        var i = 0;

        while (i < 10) {
            date.setDate(date.getDate() + 1);
            
            if(date.getDay() > 0 && date.getDay() < 6) {
                i++;
            } 
        }

        return date;
    }

    // Called when Dymo is initialized
    function onDymoInitialized() {    
        var custName = document.getElementById('custName');
        var ticketNum = document.getElementById('ticketNum');
        var address1 = document.getElementById('address1');
        var address2 = document.getElementById('address2');
        var hexVersion = document.getElementById('hexVersion');
        var hexSerial = document.getElementById('hexSerial');
        var hexColor = document.getElementById('hexColor');
        var printButton = document.getElementById('printButton');
        
        // prints the label
        printButton.onclick = function() {
            try {
				//Testing FileReader, doesn't work with specified files, only user-inputted.
                //var labelXml = readFileAsText("label.xml");
				
				//jQuery ajax synchronous call to read the file into a variable
				var labelXml = $.ajax({url: "label.xml",async: false}).responseText;
				//See what data we got
				//alert("Data Loaded: " + labelXml);
                            
                label = dymo.label.framework.openLabelXml(labelXml);

                var receiveDate = new Date();

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
                
                var printers = dymo.label.framework.getPrinters();
                
				//See what getPrinters grabbed
                //console.log(printers);
                
                if (printers.length == 0) {
                    throw "No DYMO printers are installed. Install DYMO printers.";
                }

                var printerName = "";

                for (var i = 0; i < printers.length; ++i) {
                    var printer = printers[i];

                    if (printer.printerType == "LabelWriterPrinter") {
                        // We found our printer, break the loop
                        printerName = printer.name;

                        break;
                    }
                }

                if (printerName == "") {
                    throw "No LabelWriter printers found. Install LabelWriter printer";
                }

                // finally print the label twice
                label.print(printerName);
                label.print(printerName);

				
				

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
                
                var due_by = getRelativeDate();

                //adjust dates for mysql injection
                var receiveDateSQL = receiveDate.getUTCFullYear() + '-' +
                    ('00' + (receiveDate.getUTCMonth()+1)).slice(-2) + '-' +
                    ('00' + receiveDate.getUTCDate()).slice(-2) + ' ' + 
                    ('00' + receiveDate.getUTCHours()).slice(-2) + ':' + 
                    ('00' + receiveDate.getUTCMinutes()).slice(-2) + ':' + 
                    ('00' + receiveDate.getUTCSeconds()).slice(-2);
                var due_bySQL = due_by.getUTCFullYear() + '-' +
                    ('00' + (due_by.getUTCMonth()+1)).slice(-2) + '-' +
                    ('00' + due_by.getUTCDate()).slice(-2) + ' ' + 
                    ('00' + due_by.getUTCHours()).slice(-2) + ':' + 
                    ('00' + due_by.getUTCMinutes()).slice(-2) + ':' + 
                    ('00' + due_by.getUTCSeconds()).slice(-2);
                
                //adjust address to new string for mysql injection
                var address = address1.value + ", " + address2.value;
                
                //send variables to php to update sql database
				
                $.ajax ({
                    url: 'ticketUpdate.php',
                    type: 'POST',
                    data: {
                        custName: custName.value,
                        ticketNum: ticketNum.value,
                        address: address,
                        hexVersion: hexVersion.value,
                        hexSerial: hexSerial.value,
                        hexColor: hexColor.value,
                        receiveDate: receiveDateSQL,
                        dueDate: due_bySQL
                    },
                    error: function(xhRequest, ErrorText, thrownError) {
                        alert("Data not sent to PHP:");
                        console.log('xhRequest: ' + xhRequest + "\n");
                        console.log('ErrorText: ' + ErrorText + "\n");
                        console.log('thrownError: ' + thrownError +"\n");
                    }
                });
				
                        
                //------------------------------------------------------------------
                //Update Freshdesk Ticket
                //--------------------------------------------------------------------
                var update_url = "https://cravingvapor.freshdesk.com/api/v2/tickets/"+ticketNum.value;
                var API_KEY = "aAbsV64z5TQcnZM91mXT";
                //var payload = '{ "priority":2,"status":7,"source":2,"due_by":"'+due_by+'" }';
                
                $.ajax({
                    url: update_url,
                    headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': 'Basic ' + btoa(API_KEY + ':X'), 
                    },
                    type: 'GET',
                    dataType: "json",
                    success: function(data) {
                        jsonData = data;
                        if (jsonData.status != 7) {
                            $.ajax({
                                url: update_url,
                                headers: {
                                    'Content-Type': 'application/json; charset=utf-8',
                                    'Authorization': 'Basic ' + btoa(API_KEY + ':X') 
                                },
                                type: 'PUT',
                                data: JSON.stringify({ 
                                    "priority": 2,
                                    "status": 7,
                                    "source": 2,
                                    "due_by": due_by
                                }),
                                dataType: "json",
                                success: function() { 
                                    alert('Ticket Updated!'); 
                                },
                                error: function(xhRequest, ErrorText, thrownError) {
                                    alert("Ticket number " + ticketNum.value + " doesn't exist!");
                                    console.log('xhRequest: ' + xhRequest + "\n");
                                    console.log('ErrorText: ' + ErrorText + "\n");
                                    console.log('thrownError: ' + thrownError +"\n");
                                }
                            });
                        }
                        else {
                            alert ('Ticket' + ticketNum.value + 'is already marked as received!')
                        }
                    }
                });
 
            }
            catch(e) {
                alert(e.message || e);
            }      
        };
    }

    // Called when the document completely loaded
    function onload() {
        dymo.label.framework.trace = 1;
        dymo.label.framework.init(onDymoInitialized);
    }

    window.onload = onload;
} ());