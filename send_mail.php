<html>
<head>
<meta charset="utf-8">
<title>Hari Bhargo</title>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
<link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" />
<link href="css/style_reset.css" rel="stylesheet" type="text/css" />
<link href="css/hari_brgo.css" rel="stylesheet" type="text/css" />
</head>
<body>
<?php
if (isset($_REQUEST['email']))
{
$name = $_POST["name"];
$number = $_POST["number"];
$enquiry = $_POST["enquiry"];
$email = $_POST["email"];
$to = "makmaniac@gmail.com";
$subject = "Enquiry";
$message = $enquiry;
$from = $email;
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
header("localhost/ajay_karan/Ribosome/Hari/contact.htm");
}
else
{
echo "<form method='post' action='send_mail	.php'>
  <label>Name:</label>
  <input type='text' name='name'><br><br>
  <label>E-mail Id</label>
  <input type='text' name='email'><br><br>
  <label>Contact Number:</label>
  <input type='text' name='number'><br><br>
  <label>Enquiry:</label>
  <textarea rows='10' cols='50' name='enquiry'></textarea><br>
  <button type='reset'>Clear</button>
  <button type='submit'>Send Enquiry</button>
  </form>";
}
?>
</body>
</html>
