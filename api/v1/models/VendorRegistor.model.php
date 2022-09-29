<?php

require_once('../config/db.config.php');
require_once('../libs/Bcrypt.php');

class VendorRegistorModel extends DatabaseConfig
{
     private $conn;
     private $bcrypt;
     public function __construct()
     {
          $this->conn = new PDO(
               "sqlsrv:server=" . $this->dbServer . "database=" . $this->dbDatabase,
               $this->dbUsername,
               $this->dbPassword
          );
          $this->bcrypt = new Bcrypt(10);
     }

     private function checkExistAccount(string $Email)
     {
          $sql = "SELECT AccountID FROM AccountVendor;";
          $stmt = $this->conn->prepare($sql);
          $stmt->execute([
               ":Email" => $Email
          ]);

          $rowCount = $stmt->rowCount();
          $stmt->closeCursor();

          return $rowCount;
     }

     public function addAccount(string $FirstName, string $LastName, string $Email, string $Password, string $BusinessRole)
     {
          try {
               if ($this->checkExistAccount($Email) != 0) return array("state" => false, "msg" => "Account does exist");

               $sql = "INSERT INTO AccountVendor (FirstName, LastName, Email, Password, BusinessRole) 
                         VALUES (:FirstName, :LastName, :Email, :Password, :BusinessRole);";
               $hash = $this->bcrypt->hash($Password);
               $stmt = $this->conn->prepare($sql);
               $stmt->execute([
                    ":FirstName" => $FirstName,
                    ":LastName" => $LastName,
                    ":Email" => $Email,
                    ":Password" => $hash,
                    ":BusinessRole" => $BusinessRole,
               ]);

               return array("state" => true, "msg" => "Add account successfully");
          } catch (PDOException $e) {
               throw new Error($e->getMessage());
          }
     }
}
