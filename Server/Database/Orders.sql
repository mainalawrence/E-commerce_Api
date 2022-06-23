
----PRODUCTS SECTION BEGINS HERE

CREATE TABLE Orders
(
    id VARCHAR(100) PRIMARY KEY ,
    userid VARCHAR(100) ,
    TotalCost money NOT NULL,
    orders nvarchar(max),
    status VARCHAR(20),
    date DATETIME

)

-- DROP TABLE Orders

--INSERT PRODUCT STORED PROCEDURE
go
CREATE OR ALTER PROC createOrders(
    @id VARCHAR(100),
    @userid VARCHAR(100) ,
    @TotalCost money,
    @orders nvarchar(max)
)
AS
BEGIN
    INSERT INTO Orders
    VALUES(@id, @userid, @TotalCost, @orders, CURRENT_TIMESTAMP)
--VALUES('qwerrty12334', 'JavaScript', 'It is a Javascript book', 234)
END
go

--GET PRODUCT STORED PROCEDURE
Create or ALTER PROCEDURE getOrderById(@id VARCHAR(100))
AS
BEGIN
    SELECT *
    from Orders
    WHERE id=@id
END
go

--GET ALL PRODUCTS STORED PROCEDURE
CREATE or alter PROC getOrders
AS
BEGIN
    SELECT *
    FROM Orders
END

go
--UPDATE PRODUCT STORED PROCEDURE
CREATE or ALTER PROC updateOrder
    (
    @id VARCHAR
(100),
    @userid VARCHAR
(100) ,
    @TotalCost money,
    @orders nvarchar
(max)
)
AS
BEGIN
    UPDATE Orders SET userid=@userid, TotalCost=@TotalCost, orders=@orders WHERE id=@id
end
 go

--DELETE PRODUCT STORED PROCEDURE
CREATE or alter PROC deleteOrders(@id VARCHAR(100))
AS
BEGIN
    DELETE FROM Orders WHERE id=@id
END
go


go
--GET ALL PRODUCTS STORED PROCEDURE
CREATE or alter PROC SearchOrder(@name VARCHAR(100))
AS
BEGIN
    SELECT *
    FROM Products
    WHERE name LIKE '@name%'
END

go
exec getOrders