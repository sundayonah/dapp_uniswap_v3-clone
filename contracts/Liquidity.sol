// // //SPDX-License-Identifier: MIT
// pragma solidity >=0.7.0 <0.9.0;
// pragma abicoder v2;


// import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
// import "@uniswap/v3-core/contracts/libraries/TickMath.sol";
// import "@openzeppelin/contracts/token/ERC721/IERC721Reciever.sol";
// import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
// import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
// import "@uniswap/v3-periphery/contracts/base/LiquidityManagement.sol";
// import "hardhat/console.sol";


// contract LiquidityExamples is IERC721Reciever{
//     address public constant DAI = 0x6B175474E89092C44Da98b954EedeAC495271d0f;
//     address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

//     //0.01% fee

//     uint24 public constant poolfee = 100;

//     INonfungiblePositionManager public nonfungiblePosition = INonfungiblePositionManager(0xC36442b4a4522E871399CD717aBDD847Ab11FE88)


// //@notice Represents the deposit of an NFT

// struct Deposit {
//     address owner;
//     uint128 liquidity;
//     address token0;
//     address token1;
// }

// ///@dev deposite[tokenId] => Deposit
// mapping(uint Deposit) public deposits;


// //Sore token id used in this example
// uint public tokenId;

// //Implementing `onERC721Recived` so this contract can recieve custody of erc721 token

// function onERc721Recieved(
//     address operator,
//     address, 
//     uint _tokenId, bytes calldata
// )
// external override returns (bytes4){
//     _createDeposit(operator, _tokenId);
//     return this.onERc721Recieved.selector;
// }

// function _createDeposit(address owner, uint _tokenId) internal{
//     (
//         ,
//         ,
//         address token0,
//         address token1,
//         ,
//         ,
//         ,
//         uint128 liquidity,
//         ,
//         ,
//         ,
//     ) = nonfungiblePositionManager.position(_tokenId)
//     // set the owner and data for position
//     // operator is msg.sender
//     deposits[_tokenId] = Deposite({
//         owner: owner,
//         liquidity: liquidity,
//         token0: token0,
//     });

// console.log("Token id" _tokenId);
// console.log("Liquidity" liquidity);

// token  = _tokenId
// }


// function mintNewPosition()
// external
// returns (
//     uint _tokenId,
//     uint128 liquidity,
//     uint amount0,
//     uint amount1,
// )
// {
//     // for this example, we will provide equal amounts of liquidity in both assets.
// // Providing liquidity in both assets means Liquidity will be earning fees and is in-range

// uint amount0ToMint = 100 * 1e18;
// uint amount1

// //Approve the position managerToMint = 100 * 1e6;
// TransferHelper.safeApprove(
//     DAI,
//     address(nonfungiblePositionManager),
//     amount0ToMint
// );
// TransferHelper.safeApprove(
//     USDC,
//     address(nonfungiblePosition),
//     amount1ToMint
// );

// INonfungiblePositionManager.MintParams
//  memory params = INonfungiblePositionManager.MintParams({
//     token0: DAI,
//     token1: USDC,
//     fee: poolFee,
//     //By using TickMath.MIN_TICK and TickMath.MAX_TICK,
//     //we are providing liquidity across the whole range of the pool.
//     // Not recommended in production.
//     tickLower: TickMath.MIN_TICK,
//     tichUpper:  TickMath.MAX_TICK,
//     amount0Desired:amount0ToMint;
//     amount1Desired:amount1ToMint;
//     amount0Min: 0,
//     amount1Min:0,
//     recipient: address(this),
//     deadline:block.timestamp,
//  });
// // Note that the pool define by DAI/USDC and fee tier 0.01% must 
// //already be created and initialize in order to mint
// (_tokenId, liquidity, amount0, aount1) = nonfungiblePositionManager
// .mint(params);

// // create a deposit

// _createDepodite(msg.sender, _tokenId);

// //remove allowance and frefund in both assets.
// if(amount0 < amount0ToMint){
//     TransferHelper.safeApprove(
//         DAi,
//         address(nonfungiblePositionManager),
//         0
//     );
//     uint refund0 = amount0ToMint - amount0;
//     TransferHelper.safeTransfer(Dai, msg.sender, refund0);
// }

// if(amount < amount1ToMint) {
//     TransferHelper.safeApprove(
//         USDC,
//         address(nonfungiblePositionManager),
//         0
//     );
//     uint refunf1 = amount1Tomint - amount1;
//     TransferHelper.safeApprove(USDC, msg.sender, refund1)
// }
// }

// function collectAllFees() external returns (uint256 amount0, uint256 amount1){
//     //set amount0Max to uint256.max to collect all fees
//     //alternatively can set to mdg.sender and avoid another transaction in `sendToOwner`

// INonfungiblePositionManager.collectParams memory params = 
// INonfungiblePositionManager.collectParams({
//     tokenId : tokenId,
//     recipient: address(this),
//     amount0Max:type(uint128).max
//     amount1Max:type(uint128).max
// });
// (amount0 amount1) =nonfungiblePositonManager.collect(params);
// console.log("fee 0", amount0)
// console.log("fee 1", amount1)

// }

// function increaseLiqudityCurrentRange(
//     uint256  amountAdd0
//     uint256  amountAdd1
// )
// external 
// returns (
//     uint128 liquidity,
//     uint128 amount0,
//     uint128 amount1,

// )
// (TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountAdd0);
// TransferHelper.safeTransferFrom(USDC, msg.sender, address(this), amountAdd1);


// TransferHelper.safeApprove(DAI, address(nonfungiblePositionManager) amountAdd0);
// TransferHelper.safeApprove(USDC, address(nonfungiblePositionManager) amountAdd1);

// INonfungiblePositionManager.IncreaseLiquidityParams memory params = 
// INonfungiblePositionManager.IncreaseLiquidityParams({
//     tokenId:token,
//     amount0Desired: amountAdd0,
//     amount1Desired: amountAdd1,
//     amount0Min:0
//     amount0In:0
//     deadline: block.timestamp
// });
// (liquidity, amount0, amount1) = nonfungiblePositionManager.IncreaseLiquidity(Params)

// console.log("liquidity", liquidity);
// console.log("amount0", amount0);
// console.log("amount1", amount1);
// )
// function getLiquidity( uint _token) external view returns (uint128){
//     (
//         ,
//         ,
//         ,
//         ,
//         ,
//         ,
//         ,
//         uint128 liquidity,
//         ,
//         ,
//         ,

//     ) =nonfungiblePositionManager.positions(_token);
//     return liquidity;
// }
// function decreasedLiquidity(uint128 liquidity) external returns (uint amount0 uint amount1)
// INonfungiblePositionManager.decreasedLiquidityparams memory params =
// INonfungiblePositionManager.decreasedLiquidityparams({
//     tokenId: tokenId,
//     liquidity:liquidity,
//     amount0MIn:0,
//     amount1Min:0,
//     deadline: block.timestamp,
// })




// (amount0, amount1) = nonfungiblePositionManager.decreasedLiquidity(params);


// console.log("acount 0", amount0)
// console.log("acount 1", amount1)
// }







