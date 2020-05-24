<?php

require_once("Database.php");

class BaseModel {
    private $table;
    private $database;
    private $databaseConnection;

    public function __construct($table = "") {
        if ($table != "") {
            $this->table = strval($table);
        }
        
        $database = new Database();
        $this->database = $database;

        $this->databaseConnection = $database->Connect();
    }

    public function getDatabase() {
        return $this->database;
    }

    public function getConnection() {
        return $this->databaseConnection;
    }

    public function getAll() {
        $resultSet = null;

        if ($this->databaseConnection != null) {
            $connection = $this->databaseConnection;
            $result = $connection->query("SELECT * FROM " . $this->table  . " ORDER BY Id ASC");

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_object()) {
                    $resultSet[] = $row;
                }
            }
        }

        return $resultSet;
    }

    public function getById($Id) {
        $resultSet = null;
        
        if ($this->databaseConnection != null) {
            $connection = $this->databaseConnection;
            $result = $connection->query("SELECT * FROM " .  $this->table . " WHERE Id = $Id");

            if ($result->num_rows > 0) {
                if ($row = $result->fetch_object()) {
                    $resultSet = $row;
                }
            }
        }

        return $resultSet;
    }

    public function getBy($column, $value) {
        $resultSet;

        if ($this->databaseConnection != null) {
            $connection = $this->databaseConnection;
            $result = $connection->query("SELECT * FROM " .  $this->table . " WHERE $column = $value");

            if ($result->num_rows > 0) {
                if ($row = $result->fetch_object()) {
                    $resultSet = $row;
                }
            }
        }

        return $resultSet;
    }

    public function deleteById($Id) {
        $resultSet = null;
        
        if ($this->databaseConnection != null) {
            $connection = $this->databaseConnection;
            $result = $connection->query("DELETE FROM " .  $this->table . " WHERE id = $Id");

            if ($query->num_rows > 0) {
                if ($row = $result->fetch_object()) {
                    $resultSet = $row;
                }
            }
        }

        return $resultSet;
    }

    public function deleteBy($column, $value) {
        $resultSet;

        if ($this->databaseConnection != null) {
            $connection = $this->databaseConnection;
            $result = $connection->query("DELETE FROM " .  $this->table . "WHERE $column = $value");

            if ($result->num_rows > 0) {
                if ($row = $result->fetch_object()) {
                    $resultSet = $row;
                }
            }
        }

        return $resultSet;
    }
}
