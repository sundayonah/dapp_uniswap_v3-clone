export const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
export const WETH = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
export const USDC = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F";

export const routerABI = [
  "function factory() external pure returns (address)",
  "function WETH() external pure returns (address)",
  "function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)",
  "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)",
];

export const ERC20ABI = [
  "function name() external pure returns (string memory)",
  "function symbol() external pure returns (string memory)",
  "function decimals() external pure returns (uint8)",
  "function balanceOf(address owner) external view returns (uint)",
];
