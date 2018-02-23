<?php
//include external configuration
include '/etc/hexohm_repair.php';

$ticketNum = $_POST['ticketNum'];
$custName = $_POST['custName'];
$address = $_POST['address'];
$hexVersion = $_POST['hexVersion'];
$hexSerial = $_POST['hexSerial'];
$hexColor = $_POST['hexColor'];
$receiveDate = $_POST['receiveDate'];
$dueDate = $_POST['dueDate'];

/*$ticketNum = mysqli_real_escape_string($ticketNum);
$custName = mysqli_real_escape_string($custName);
$address = mysqli_real_escape_string($address);
$hexVersion = mysqli_real_escape_string($hexVersion);
$hexSerial = mysqli_real_escape_string($hexSerial);
$hexColor = mysqli_real_escape_string($hexColor);*/

//connect to mysql database
$conn = new mysqli($servername, $username, $password, 'hexohm_repair');

//check connection
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}
else {
    echo "Connected to db! \n";
}
//old statment (working, but no input sanitizing)
/*$query = "INSERT INTO tickets (ticketNum, custName, address, hexVersion, hexSerial, hexColor, receiveDate, dueDate, isRepaired) 
VALUES ('$ticketNum', '$custName', '$address', '$hexVersion', '$hexSerial', '$hexColor', '$receiveDate', '$dueDate', 0)";

if ($conn->query($query) === TRUE) {
    $last_id = $conn->insert_id;
    echo "New record created successfully! Last inserted ID is: " .$last_id ."\n";
    echo $query;
} else {
    echo "Error: " .$query. "<br>" . $conn->error;
}*/

//new statement
$stmt = $conn->prepare("INSERT INTO tickets (ticketNum, custName, address, hexVersion, hexSerial, hexColor, receiveDate, dueDate, isRepaired) VALUES (?,?,?,?,?,?,?,?,0)");
$stmt->bind_param('ssssssss',$ticketNum, $custName, $address, $hexVersion, $hexSerial, $hexColor, $receiveDate, $dueDate);

$stmt->execute();
printf("%d Row inserted successfully!\n",$stmt->affected_rows);
$stmt->close();

          
echo $ticketNum, $custName, $address, $hexVersion, $hexSerial, $hexColor, $receiveDate, $dueDate;
$conn->close();
?>