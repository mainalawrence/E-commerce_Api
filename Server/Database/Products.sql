
----PRODUCTS SECTION BEGINS HERE

CREATE TABLE Products
(
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(50) UNIQUE,
    price money NOT NULL,
    brand VARCHAR(100),
    images nvarchar(max),
    category VARCHAR(20),
    description VARCHAR(300),
    features nvarchar(max),
    specification nvarchar(max),
) 

--INSERT PRODUCT STORED PROCEDURE
go
CREATE OR ALTER PROC createProduct(
    @id VARCHAR(100),
    @name VARCHAR(100),
    @price money,
    @brand VARCHAR(100),
    @images nvarchar(max),
    @category VARCHAR(100),
    @description VARCHAR(300),
    @features nvarchar(max),
    @specification nvarchar(max))
AS
BEGIN
    INSERT INTO Products
    VALUES(@id, @name, @price, @brand, @images, @category, @description, @features, @specification)
--VALUES('qwerrty12334', 'JavaScript', 'It is a Javascript book', 234)
END
go

--GET PRODUCT STORED PROCEDURE
Create or ALTER PROCEDURE getProductById(@id VARCHAR(100))
AS
BEGIN
    SELECT *
    from Products
    WHERE id=@id
END
go

--GET ALL PRODUCTS STORED PROCEDURE
CREATE or alter PROC getProducts
AS
BEGIN
    SELECT *
    FROM Products
END

go
--UPDATE PRODUCT STORED PROCEDURE
CREATE or ALTER PROC updateProduct
    (
    @id VARCHAR(100),
    @name VARCHAR(100),
    @price INT,
    @brand VARCHAR(100),
    @image nvarchar(max),
    @category VARCHAR(100),
    @description VARCHAR(300),
    @features nvarchar(max),
    @specification nvarchar(max)
)
AS
BEGIN
    UPDATE Products SET name=@name, price=@price, brand=@brand,image=@image, category=@category, description=@description, features=@features, specification=@specification WHERE id=@id
end
 go

--DELETE PRODUCT STORED PROCEDURE
CREATE or alter PROC deleteProduct(@id VARCHAR(100))
AS
BEGIN
    DELETE FROM Products WHERE id=@id
END
go

exec getProducts