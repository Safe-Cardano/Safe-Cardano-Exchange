<?php
 // Fill these in with the information from your CoinPayments.net account.
$cp_merchant_id = 'c0f821db80068f21d7b321f9524ae8af';
$cp_ipn_secret = 'jkljfksjdflajfoiweriojlkjadlfskjlwe';
$cp_debug_email = 'mukesh.immanent@gmail.com';

function errorAndDie($error_msg) {
	global $cp_debug_email;
	if (!empty($cp_debug_email)) {
		$report = 'Error: '.$error_msg."\n\n";
		$report .= "POST Data\n\n";
		foreach ($_POST as $k => $v) {
			$report .= "|$k| = |$v|\n";
		}
		sendgridMail($cp_debug_email, 'CoinPayments IPN SafeCardano', $report);
	}
	die('IPN Error: '.$error_msg);
}

if (!isset($_POST['ipn_mode']) || $_POST['ipn_mode'] != 'hmac') {
	errorAndDie('IPN Mode is not HMAC');
}

if (!isset($_SERVER['HTTP_HMAC']) || empty($_SERVER['HTTP_HMAC'])) {
	errorAndDie('No HMAC signature sent.');
}

$request = file_get_contents('php://input');
if ($request === FALSE || empty($request)) {
	errorAndDie('Error reading POST data');
}

if (!isset($_POST['merchant']) || $_POST['merchant'] != trim($cp_merchant_id)) {
	errorAndDie('No or incorrect Merchant ID passed');
}

$hmac = hash_hmac("sha512", $request, trim($cp_ipn_secret));
// if (!hash_equals($hmac, $_SERVER['HTTP_HMAC'])) {
   if ($hmac != $_SERVER['HTTP_HMAC']) { 
		errorAndDie('HMAC signature does not match');
	}
//}

// HMAC Signature verified at this point, load some variables.

$txn_id = $_POST['txn_id'];
$item_name = $_POST['item_name'];
$item_number = $_POST['item_number'];
$amount1 = floatval($_POST['amount1']);
$amount2 = floatval($_POST['amount2']);
$currency1 = $_POST['currency1'];
$currency2 = $_POST['currency2'];
$status = intval($_POST['status']);
$status_text = $_POST['status_text'];

if ($status >= 100 || $status == 2) {
	// payment is complete or queued for nightly payout, success
	$report = "POST Data\n\n";
	foreach ($_POST as $k => $v) {
		$report .= "|$k| = |$v|\n";
	}
	sendgridMail($cp_debug_email, 'CoinPayments IPN SafeCardano', $report);
} else if ($status < 0) {
	//payment error, this is usually final but payments will sometimes be reopened if there was no exchange rate conversion or with seller consent
	$report = "POST Data\n\n";
	foreach ($_POST as $k => $v) {
		$report .= "|$k| = |$v|\n";
	}
	sendgridMail($cp_debug_email, 'CoinPayments IPN SafeCardano', $report);
} else {
	//payment is pending, you can optionally add a note to the order page
	$report = "POST Data\n\n";
	foreach ($_POST as $k => $v) {
		$report .= "|$k| = |$v|\n";
	}
	sendgridMail($cp_debug_email, 'CoinPayments IPN SafeCardano', $report);
}

function sendgridMail($toEmail, $subject, $content){
	include("/var/www/bulkmail.demodemodemo.info/public_html/vendor/autoload.php");
	$email = new \SendGrid\Mail\Mail();
	$email->setFrom("mukesh.immanent@gmail.com", "Mukesh Kumar");
	$email->setSubject($subject);
	$email->addTo($toEmail);
	$email->addContent(
		"text/html", $content
	);
	$sendgrid = new \SendGrid('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');
	try {
		$response = $sendgrid->send($email);
		//print $response->statusCode() . "\n";
		return $response->headers();
		//print $response->body() . "\n";
	} catch (Exception $e) {
		echo 'Caught exception: '. $e->getMessage() ."\n";
	}
}	
?>