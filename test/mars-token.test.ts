import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('MarsToken contract', function () {
  it('Deployment should assign the total supply of tokens to the owner', async function () {
    const [owner] = await ethers.getSigners();

    const MarsToken = await ethers.getContractFactory('MarsToken');

    const hardhatToken = await MarsToken.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});

describe('Transactions', function () {
  it('Should transfer tokens between accounts', async function () {
    const [, address1, address2] = await ethers.getSigners();

    const MarsToken = await ethers.getContractFactory('MarsToken');

    const hardhatMarsToken = await MarsToken.deploy();

    // Transfer 50 tokens from owner to addr1
    await hardhatMarsToken.transfer(address1.address, 50);
    expect(await hardhatMarsToken.balanceOf(address1.address)).to.equal(50);

    // Transfer 50 tokens from addr1 to addr2
    await hardhatMarsToken.connect(address1).transfer(address2.address, 50);
    expect(await hardhatMarsToken.balanceOf(address2.address)).to.equal(50);
  });
});
