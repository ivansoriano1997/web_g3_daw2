<?php

class Database {
    private $driver = "mysql";
    private $host = "localhost:3306";
    private $user = "g3_daw2";
    private $password = "Kcbq902_";
    private $database = "g3_daw2";
    private $charset = "utf8";

    public function __construct($connectionConfig = array()) {
        if (!empty($connectionConfig)) {
            if (isset($connectionConfig["driver"]) && strval($connectionConfig["driver"]) != "") {
                $this->driver   = $connectionConfig["driver"];
            }

            if (isset($connectionConfig["host"]) && strval($connectionConfig["host"]) != "") {
                $this->driver   = $connectionConfig["host"];
            }

            if (isset($connectionConfig["user"]) && strval($connectionConfig["user"]) != "") {
                $this->driver   = $connectionConfig["user"];
            }

            if (isset($connectionConfig["password"]) && strval($connectionConfig["password"]) != "") {
                $this->driver   = $connectionConfig["password"];
            }

            if (isset($connectionConfig["database"]) && strval($connectionConfig["database"]) != "") {
                $this->driver   = $connectionConfig["database"];
            }

            if (isset($connectionConfig["charset"]) && strval($connectionConfig["charset"]) != "") {
                $this->driver   = $connectionConfig["charset"];
            }
        }
    }

    public function Connect() {
        $connection = null;

        if ($this->driver == "mysql" || $this->driver == null) {
            $connection = new mysqli($this->host, $this->user, $this->password, $this->database);
            $connection->set_charset($this->charset);
        }

        return $connection;
    }


}

?>
