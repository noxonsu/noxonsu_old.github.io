# ERC20_widgets
Minimal &amp; secure ERC20 dashboard/wallet. using lightwallet.js, ethereumjs &amp; etherscan as node provider

<a href="">Minimal Demo</a> | <a href="">Full featured demo</a>

Designed special for <a href="http://ethereum.org/token">ERC20 projects</a>. Just insert address of ERC20 smart contract and wallet ready to go. 

# Secure
All logic of this dashboard workink on front-end (in users browser). All

# Mailchimp integration
Upload mailchim_connector.php in the same folder with wallet.html and provide your API key. All users will be add his email to mailer List on mailchimp.

# Easy EMBED integration to any sites and site builders (like Tilda). 
Just embed wallet.html to iframe. 

# Install

<h2>1. Install MetaMask Chrome plugin</h2>
You must have any ethereum wallet, we recommend Metamask. Metamask have connection to ethereum testnet - you will get 1 ETH on your address for testing. <a href="https://metamastk.io">https://metamastk.io</a>
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

2.2 
Go to Environment. Select  Web3 
Click Injected Web3 
And now you can see contract address (0x….). Copy it to bufer (ctrl + c). 

<h2>3 Fork this project</h2>

Click FORK at bottom of this page <img src='http://dl4.joxi.net/drive/2017/03/28/0004/2038/272374/74/8ad7b348b6.jpg'>. You may need to create your own GitHub account. 

<h2>4 Run the dashboard</h2>
4.1 Go to cloned repositary settings and rename repositary to {yourgithublogin}.github.io
4.2 Go to erc2dashboard.js click Edit and "ctrl + v" ERC20 contract from bufer to "erc20contract_address" var. Click save.
4.3 Done. Now you can see your dashboard at https://{yourgithublogin}.github.io 
4.4 Now you can add custom domain. https://help.github.com/articles/quick-start-setting-up-a-custom-domain/ 
