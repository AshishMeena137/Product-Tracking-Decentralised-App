// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ProductTracking {
    uint ManufacturerID;
    uint SalerID;

    struct Manufacturerproduct{
        uint ManufacturerId;
        string ProductName;
        string ProductBrand;
        uint ProductPrice;
        string ProductSN;
        bool sold;
        address soldTo;
    }

    struct Sellerproduct{
        uint SellerId;
        string ProductName;
        string ProductBrand;
        uint ProductPrice;
        string ProductSN;
        bool sold;
        address soldTo;
    }

    struct ConsumerHistory{
        string ProductName;
        string ProductBrand;
        uint ProductPrice;
        address Seller;
    }

    mapping(address => Manufacturerproduct[]) ManufacturerProducts;
    mapping(address => Sellerproduct[]) SellerProducts;
    mapping(address => ConsumerHistory[]) ConsumerHistorys;
    mapping(address => bool) presentManufacturer;
    mapping(address => bool) presentSeller;
    mapping(address => bool) presentConsumer;
    mapping(address => mapping(address => bool)) access;
    mapping(string => address) manufacDeteils;


    // Manufacturer Part Start:-
    
    function RegisterAsManufacturer() public {
        presentManufacturer[msg.sender] = true;
    }

    function AddProduct(string memory _name, string memory _brand, uint _price, string memory _sn) public {
       require(presentManufacturer[msg.sender] == true);
       manufacDeteils[_sn] = msg.sender;
       ManufacturerProducts[msg.sender].push(Manufacturerproduct(ManufacturerID,_name,_brand,_price,_sn,false,address(0)));
       ManufacturerID++;
    }

    function GetProduct() public view returns(Manufacturerproduct[] memory){
        return ManufacturerProducts[msg.sender];
    }

    // Seller part Start:-

    function RegisterAsSeller() public {
        presentSeller[msg.sender] = true;
    }

    function PurchaseFromManufacturer(uint Number, address _Manufacturer) public payable{
      require(presentSeller[msg.sender],"not present");
      Manufacturerproduct storage _product = ManufacturerProducts[_Manufacturer][Number];
      _product.sold = true;
      _product.soldTo = msg.sender;
      payable(_Manufacturer).transfer(_product.ProductPrice);
      SellerProducts[msg.sender].push(Sellerproduct(SalerID,_product.ProductName,_product.ProductBrand,_product.ProductPrice + _product.ProductPrice/10,_product.ProductSN,false,address(0)));
      SalerID++;
    }

    function AllProduct() public view returns(Sellerproduct[] memory){
        return SellerProducts[msg.sender];
    }


    // Consumer Part Start:-

    function RegisterAsConsumer() public {
        presentConsumer[msg.sender] = true;
    }

    function PurchaseFromSeller(address _seller, uint Number) public payable{
        require(presentConsumer[msg.sender]);
        Sellerproduct storage _product = SellerProducts[_seller][Number];
        _product.sold = true;
        _product.soldTo = msg.sender;
        payable(_seller).transfer(_product.ProductPrice);
        ConsumerHistorys[msg.sender].push(ConsumerHistory(_product.ProductName, _product.ProductBrand, _product.ProductPrice, _seller));
    }

    function PurchaseHistory() public view returns(ConsumerHistory[] memory){
        return ConsumerHistorys[msg.sender];
    }

    // Verification function for Consumer to verify Products
    function Verify(string memory SN) public view returns(address,Manufacturerproduct[] memory) {
       address manu = manufacDeteils[SN];
       return (manu,ManufacturerProducts[manu]);
    }
}