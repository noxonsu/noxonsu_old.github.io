# ERC20 wallet
Minimal &amp; secure ERC20 dashboard/wallet. using lightwallet.js, ethereumjs &amp; etherscan as node provider

Designed special for <a href="http://ethereum.org/token">ERC20 projects</a>. Just insert address of ERC20 smart contract and wallet ready to go. All the logic of this panel working on the front-end (in the user's browser), the user himself keeps his keys, never sends to our or another server.

# Usage

<a href="https://noxonsu.github.io/">Demo</a>

# Installation

<h2>1. Install MetaMask Chrome plugin (optional)</h2>
You must have any ethereum wallet, we recommend Metamask. Metamask have connection to ethereum testnet - you will get 1 ETH on your address for testing. <a href="https://metamask.io">https://metamask.io</a>
<img src='https://static.tildacdn.com/tild6364-3031-4333-a537-383066326663/image02.gif'>

<h2>2. Deploy ERC20 Contract using remix.ethereum.org</h2>
2.1 Go to <a href="https://remix.ethereum.org">https://remix.ethereum.org</a> and paste this code in Left area.
<pre>
contract MyToken {
    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;

    /* Initializes contract with initial supply tokens to the creator of the contract */
    function MyToken(
        uint256 initialSupply
        ) {
        balanceOf[msg.sender] = initialSupply;              // Give the creator all initial tokens
    }

    /* Send coins */
    function transfer(address _to, uint256 _value) {
        if (balanceOf[msg.sender] < _value) throw;           // Check if the sender has enough
        if (balanceOf[_to] + _value < balanceOf[_to]) throw; // Check for overflows
        balanceOf[msg.sender] -= _value;                     // Subtract from the sender
        balanceOf[_to] += _value;                            // Add the same to the recipient
    }
}
</pre>
MINIMUM VIABLE TOKEN from https://ethereum.org/token
<br><br>
<a href="http://dl4.joxi.net/drive/2017/03/29/0004/2038/272374/74/1f1c454c18.jpg" target="_blank">
<img src="http://dl4.joxi.net/drive/2017/03/29/0004/2038/272374/74/1f1c454c18.jpg">
</a>
<br><br>
2.2 Go to Environment. <br>
2.3 Select  "Injected Web3" <br>
2.4 set "initial suply" as you want (e.x. 10000 tokens)<br>
2.5 click create<br>
2.6 wait about 30 seconds and copy your contract address (0x....) to buffer.<br>



<h2>3 Fork this project</h2>

Click FORK at bottom of this page <img src='http://dl4.joxi.net/drive/2017/03/28/0004/2038/272374/74/8ad7b348b6.jpg'>. You may need to create your own GitHub account. f

<h2>4 Run the dashboard</h2>

4.1 Go to cloned repositary  settings (1)  and rename repositary to something like "supercoinWallet" (2,3)<br>
<img src="http://dl4.joxi.net/drive/2017/04/02/0004/2038/272374/74/0395e82e1e.jpg">
4.2 Enable "Githube pages" feature (below on the settings page).
<br>
4.3 Go to Code  > erc2dashboard.js (1) > click Edit (2) and paste contract address from bufer to "erc20contract_address" var (3). <br>
<img src='http://dl3.joxi.net/drive/2017/04/02/0004/2038/272374/74/29edaae900.jpg'>
Then Click save. <br>
4.4 Done. Now you can see your dashboard at https://{yourgithublogin}.github.io/superWallet <br>
4.5 Now you can add custom domain. https://help.github.com/articles/quick-start-setting-up-a-custom-domain/


Copyright 2017

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
