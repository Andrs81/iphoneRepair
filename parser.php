<?php 
try
{

	if(isset($_POST['name'])){
		$message = "Name: ".$_POST['name'].
		"\niPhone type: ".$_POST["ipModel"]." ".$_POST["scolor"].
		"\nVisit on: ".$_POST["fechaFinal"]." at ".$_POST["visitTime"].
		"\nIssues: ".$_POST["problems"]." ".$_POST["more"].
		"\nTotal: ".$_POST["total"].
		"\nAddress:  ".$_POST["address"]." ".$_POST["floor"].
		"\nInstruccions: ".$_POST["instructions"].
		"\nEmail: ".$_POST["email"].
		"\nCode: ".$_POST["code"].
		"\nPhone number: ".$_POST["phoneNumber"];
	
	}

	$headers = "From: ifixorlando@website.com" . "\r\n" ."CC: somebodyelse@example.com";
	$headers .= "Content-Type: text/html; charset=iso-8859-1\r\n";

	mail('kristen.mannix@hotmail.com', 'iFixOrlando - iPhone repair request', $message, $headers); 


}
catch (\Exception $e)
{
	$responseArray = array('type' => 'danger', 'message' => $errorMessage);
}
?>