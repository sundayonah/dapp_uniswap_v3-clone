//SPDX-license-Identifier: GPL-2.0-or-Later
pragma solidity >= 0.7.0 <0.9.0;

pragma abicoder v2;


//imports
import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
contract SingleSwapToken{
    ISwapRouter public constant swapRouter = ISwapRouter
    ();
    address public constant DAI =;
    address public constant WETH9 =;
    address public constant USDC=;


function swapExaltInputString(uint amountIn) external returns (uint amountOut){
    TransferHelper.safeTransferFrom(WETH9, msg.sender, address(this), amountIn);
    TransferHelper.safeApprove(WETH9, address(swapRouter), amountIn);
    ISwapRouter.ExactIputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
        tokinIn: WETH9,
         tokeOut:DAI,

         fee :3000,
         recipient: msg.sender,
         deadline: block.timestamp,
         amountIn: amountIn,
         amountOutMinimum: 0,
         sqrtPriceLimitx96: 0
    });

amountOut.swapRouter.exactInputSingle(params)

}
function swapExaltInputString(uint amountOut, uint amountMaximum) external returns(uint amountIn){
    TransferHelper.safeTransferFrom(WETH9,msg.sender, address(this), amountMaximum)
    TransferHelper.safeApprove(WETH9, address(this) amountMaximum);
    ISwapRouter.ExactIputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
         tokinIn: WETH9,
         tokeOut:DAI,

         fee :3000,
         recipient: msg.sender,
         deadline: block.timestamp,
         amountOut: amountOut,
         amountOutMinimum: amountOutMinimum,
         sqrtPriceLimitx96: 0
 });
       

if(amountIn < amountInMaximum){
    TransferHelper.safeApprove(WETH9, address(swapRouter), 0);
    TransferHelper.safeTransfer(WETH9, msg.sender, amountInMaximum - amountIn)
}        
         
         };

}