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
        $this->database = new Database();
        $this->databaseConnection = $this->database->Connect();
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
            $query = $this->databaseConnection->query("SELECT * FROM $this->table ORDER BY Id DESC");

            if ($query->num_rows > 0) {
                while ($row = $query->fetch_object()) {
                    $resultSet[] = $row;
                }
            }
        }

        return $resultSet;
    }

    public function getById($Id) {
        $resultSet = null;
        
        if ($this->databaseConnection != null) {
            $query = $this->databaseConnection->query("SELECT * FROM $this->table WHERE id = $id");

            if ($query->num_rows > 0) {
                if ($row = $query->fetch_object()) {
                    $resultSet = $row;
                }
            }
        }

        return $resultSet;
    }

    public function getBy($column, $value) {
        $resultSet;

        if ($this->databaseConnection != null) {
            $query = $this->databaseConnection->query("SELECT * FROM $this->table WHERE $column = '$value'");

            if ($query->num_rows > 0) {
                if ($row = $query->fetch_object()) {
                    $resultSet = $row;
                }
            }
        }

        return $resultSet;
    }

    public function deleteById($Id) {
        $resultSet = null;
        
        if ($this->databaseConnection != null) {
            $query = $this->databaseConnection->query("DELETE FROM $this->table WHERE id = $id");

            if ($query->num_rows > 0) {
                if ($row = $query->fetch_object()) {
                    $resultSet = $row;
                }
            }
        }

        return $resultSet;
    }

    public function deleteBy($column, $value) {
        $resultSet;

        if ($this->databaseConnection != null) {
            $query = $this->databaseConnection->query("DELETE FROM $this->table WHERE $column = '$value'");

            if ($query->num_rows > 0) {
                if ($row = $query->fetch_object()) {
                    $resultSet = $row;
                }
            }
        }

        return $resultSet;
    }
}