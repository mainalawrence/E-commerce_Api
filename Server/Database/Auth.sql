
--CREATE A LOGIN PROCEDURE
go
CREATE or alter PROC login(@email VARCHAR(100))
AS
BEGIN
    SELECT id, email, firstName, lastName, password, role
    FROM USERS
    WHERE email =@email
END
go

SELECT * from USERS

