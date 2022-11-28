//SPDX-License-identifier: GPL-2.0-or-later
pragma soidity >=0.7.0 < 0.9.0;
interface IWETH {
    function deposite() external payable;

    function withdraw(uint) external;
    function totalSuply() external view returns (uint);
    function balanceOf (address account) external view returns(uint);
    function transfer (address recipient, uint amount) external view returns(uint);
    function allowance (address spender, uint amount) external returns (bool);
    function approve(address spender, uint amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint value);
    event Approve(address indexed owner, address indexed spender, uint value);


}