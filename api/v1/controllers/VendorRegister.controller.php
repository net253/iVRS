<?php

require_once('../models/VendorRegistor.model.php');

class VendorRegisterController
{
     public function __construct(object $request)
     {
          try {
               $FirstName = $request->FirstName;
               $LastName = $request->LastName;
               $Email = $request->Email;
               $Password = $request->Password;
               $BusinessRole = $request->BusinessRole;

               $model = new VendorRegistorModel();

               return $model->addAccount($FirstName, $LastName, $Email, $Password, $BusinessRole);
          } catch (Exception $e) {
               return array("state" => false, "msg" => $e->getMessage());
          }
     }
}
