<?php
  $_POST = json_decode(file_get_contents('php://input'), true);
  
  if(isset($_POST['name'])){
    $name = $_POST['name'];
  }
  if(isset($_POST['email'])){
    $email = $_POST['email'];
  }
  if(isset($_POST['phone'])){
    $phone = $_POST['phone'];
  }
  if(isset($_POST['message'])){
    $message = $_POST['message'];
  }

  $data = 'Author: '.$name.'
Email: '.$email.'
Phone: '.$phone.'
Message: '.$message;

  $resp = mail('webkas.dev@gmail.com', 'Message form pizzeria online form.', $data);

  if(!$resp){
    echo 'error';
  }
  else{
    echo 'success';
  }
  
?>