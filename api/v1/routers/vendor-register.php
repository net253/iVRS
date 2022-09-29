<?php

require_once('../controllers/VendorRegister.controller.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
     $req = (object) json_decode(file_get_contents('php://input'));
     $response = new VendorRegisterController($req);
} else {
     http_response_code(400);
     $response = array("state" => false, "msg" => "Bad Request");
     echo json_encode($response);
}
