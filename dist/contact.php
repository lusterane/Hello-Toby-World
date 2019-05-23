<?php

    /* Configuration Variables */
    
    // email address that will be in from text box
    $from = 'demo contact';
    $sendTo = 'tobychow98@gmail.com';

    // subject of the email
    $subject = 'New message from Portfolio Website'

    // form field names and translations
    $fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message'); 

    // success message
    $successMessage = "Message successfully submitted. I will get back to you soon!";

    // error message
    $errorMessage = "Unfortunately, there was an error submitting the message. Please try again later";

    // debuging
    // error_reporting(E_ALL & ~E_NOTICE);
    
    try{
        if(count($_POST) == 0) throw new \Exception('Form is Empty');

        $emailText = "You have a new message from your contact form\n=============================\n";

        foreach ($_POST as $key => $value) {
            // If the field exists in the $fields array, include it in the email 
            if (isset($fields[$key])) {
                $emailText .= "$fields[$key]: $value\n";
            }
        }

        $headers = array('Content-Type: text/plain; charset="UTF-8";',
            'From: ' . $from,
            'Reply-To: ' . $from,
            'Return-Path: ' . $from,
        );

        
    }