# SQL Cheat sheet

```sql
mysql -u root -p

-- Reset password
USE mysql;
UPDATE mysql.user SET password = PASSWORD('my_pass') WHERE user = 'root';
FLUSH PRIVILEGES;


\h -- help
\q -- quit

status; -- details
show databases; // SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA;
SHOW DATABASES LIKE 'dbName'; -- check if exists
SHOW DATABASES WHERE `database` = 'dbName' --safe way to check
use <databaseName>;
CREATE DATABASE IF NOT EXISTS <databaseName>;
show tables;
describe <tableName>; // desc <tableName>; // explain <tableName>; // SHOW COLUMNS FROM <tableName>;
describe <databaseName>.<tableName>;
create table <tableName> (id int primary key, name varchar(20));
create table <databaseName>.<tableName> (id int primary key, name varchar(20)) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE =   ;
show create table [db_name].table_name;
drop table <tableName>;
select <columnName> from <tableName>;
select * from <tableName>;
if exists/ if not exists;
DEFAULT CHARACTER SET utf8 ;
```

# SQL with Java

- Java 8/11/latest
- JDBC Driver
- Mysql server

```java
// Imports
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
```

```java
// Constants
static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
static final String DB_URL = "jdbc:mysql://localhost/<databaseName>";
```

```java
// Database credentials
static final String USER = "root";
static final String PASS = "password";
```

```java
Connection conn = null;
PreparedStatement stmt = null;
```

```java
try {
	Class.forName(JDBC_DRIVER);
	// Step 4 make/open a connection
	System.out.println("Connecting to database...");
	conn = DriverManager.getConnection(DB_URL, USER, PASS);
    //String sql = "update student set isApprovedByAdmin = ? where studentid = ? ";
	stmt = conn.prepareStatement("update student set  isApprovedByAdmin= ? where studentid = ?");
	stmt.setBoolean(1, true);
	stmt.setInt(2, id);
	stmt.execute();

	System.out.println("Admin approving in DB");
	StudentDao stu = new StudentDaoImplementation();
	Student student = stu.fetchStudentById(id);
    // UserDao user=new UserDaoImplementation();
    // user.successUserRegistration(student.getName(),student.getEmailId() ,student.getPassword() ,student.getRole());
	stmt.close();
	conn.close();
	} catch (SQLException se) {
	// Handle errors for JDBC
	se.printStackTrace();
	} catch (Exception e) {
	// Handle errors for Class.forName
	e.printStackTrace();
	} finally {
	// finally block used to close resources
	try {
		if (stmt != null)
			stmt.close();
		} catch (SQLException se2) {} // nothing we can do
		try {
			if (conn != null)
				conn.close();
		} catch (SQLException se) {
			se.printStackTrace();
	} // end finally try
}
```
