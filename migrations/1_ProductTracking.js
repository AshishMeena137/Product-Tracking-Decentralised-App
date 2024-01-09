const Migrations = artifacts.require("ProductTracking");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
