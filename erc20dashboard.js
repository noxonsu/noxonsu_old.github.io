
	if (typeof erc20contract_address == "undefined") {
		var erc20contract_address = "0x8E22892c308812F9bCdF67cf34a9e94227eb3ce9";
		var option_etherscan_api = 'https://ropsten.etherscan.io'; //change to https://api.etherscan.io for mainnet
		var option_registration_enabled = true;
		var option_registration_backend = '';///'subscribe.php'; //you can use remote address like https://yoursite.com/subscribe.php
		var option_recive_btc = ''; //reserved for future
	}
	var _balance;
	function try2buy (amounteth) { 
		$("#consolebuy").html('.:...::');
		if (_balance < parseFloat(amounteth)+parseFloat(0.02)) {
			$("#consolebuy").html("You need "+amounteth+"+0.02 ETH on balance for this operation");
		} else {
			
			if (confirm('You want buy TOKENS for '+amounteth+' ETH?')) {
				
				sendRwTr(amounteth,"0x","#consolebuy");
			}
		}
		
	} 
	
	function try2sell() { $("#consolesell").html('.:...::');
		if ($("#skoko").val() < 1) {
			alert("You have "+$("#skoko").val()+" tokens");
		} else {
			
			if (tosell = prompt('How many NXP you want to sell?',$("#skoko").val())) {
				sendRwTr(0,"0xe4849b32"+EthJS.ABI.rawEncode(["uint"],[tosell]).toString("hex"),"#consolesell");
			}
		}
	}
	
	function try2withdrawETH() { $("#consolewithdraw").html('.:...::');
		
			var toamount = _balance-0.019;
			if (tosell = prompt('Enter ETH address (0x...)',erc20contract_address)) {
				sendRwTr(toamount,"0x","#consolewithdraw",tosell);
			}
		
	}
	
					urlApi = option_etherscan_api;
					//$("#to").val();
					function sendRwTr(value1,data='0x',callback="#consolesell",to=erc20contract_address) {
					
					$.ajax({
					type: "POST",
						url: option_etherscan_api+"/api?module=proxy&action=eth_getTransactionCount&address="+openkey+"&tag=latest&apikey=YourApiKeyToken",
						dataType: 'json',
						async: false,
						success: function (d) {
			
							console.log("get nonce "+d.result);
							var options = {};
							options.nonce = d.result;
							options.to = to;
							// call function game() in contract
							
							options.data = data 
							console.log("options.data",options.data);
							options.gasPrice="0x737be7600";//web3.toHex('31000000000');
							options.gasLimit=0x927c0; //web3.toHex('600000');
							options.value = value1*1000000000000000000;
							
							console.log(options);
							
							var tx = new EthJS.Tx(options);
							tx.sign(EthJS.Buffer.Buffer(privkey,'hex'));
							var serializedTx = tx.serialize().toString('hex');
							$.ajax({
								method: "GET",
								url: urlApi+"/api?module=proxy&action=eth_sendRawTransaction&hex="+"0x"+serializedTx+"&apikey=YourApiKeyToken",
								success: function (d) {
									console.log(d);
									$(callback).html("<A target=_blank href='https://"+option_etherscan_api.replace("api.")+"/tx/"+d.result+"'>"+d.result+"</a>");
									
									if (typeof d.error != "undefined") {
										if (d.error.message.match(/Insufficient fund/)) d.error.message = 'Error: you must have a small amount of ETH in your account in order to cover the cost of gas. Add 0.02 ETH to this account and try again.'; //If you are getting an insufficient balance for gas ... error, you must have a small amount of ETH in your account in order to cover the cost of gas. Add 0.01 ETH to this account and try again.
										$(callback).html(d.error.message); 
									}
									
								},
								fail:function(d) {
									alert("send transaction error");
								}
								},"json");
							
						}});
						
					}
					
					
					
					function wallet_open(secretSeed) { //box aerobic sweet proof warfare alone atom snake amateur spy couple side
						lightwallet.keystore.deriveKeyFromPassword('', function (err, pwDerivedKey) {
							var ks = new lightwallet.keystore(secretSeed, pwDerivedKey);
							ks.generateNewAddress(pwDerivedKey, 1);
							var address = ks.getAddresses()[0];
							var prv_key = ks.exportPrivateKey(address, pwDerivedKey);
							
							localStorage.setItem("openkey","0x"+address);
							localStorage.setItem("privkey",prv_key);
							localStorage.setItem("isreg",1);
							localStorage.setItem("network","etcmainnet");
							console.log('address and key: ', address, prv_key);
							$("#openkey").html("0x"+address);
							$("#privkey").html(prv_key);
							openkey = "0x"+address;
							privkey = prv_key;
						});
					}
					
					if (!localStorage.getItem("openkey")) {
						var secretSeed = lightwallet.keystore.generateRandomSeed();
						wallet_open(secretSeed);
						$("#console").html("We just generated new keys for you and save it to your browser");
					}
					
					openkey = localStorage.getItem("openkey");
					$("#openkey").val(openkey);
					$("#openkeyspan").html(openkey);
					$("#privkey").html(localStorage.getItem("privkey"));
					privkey = localStorage.getItem("privkey");
					
			
					
					$("#ethqr").prop("src","https://chart.googleapis.com/chart?chs=100x100&cht=qr&chl="+openkey+"&choe=UTF-8&chld=L|0");
						  
					
					$("#savethis").val("Warning! Withdraw all amounts of NXP to your own ethereum wallet! Save this information to your local device! \r\nopenkey:"+openkey+"\r\nprivkey:"+privkey);
					
			
			
				
				function rebalance() {
					
					if (typeof extrahook === "function") {
						extrahook();
					}
					
					if (!openkey) openkey = "0x";
					
					if (localStorage.getItem("name")) {
						$("#hiname").html("Hi "+localStorage.getItem("name")+"!");
					}
				
				
							
					 $.ajax({
						type: "GET", 
						url: urlApi+"/api?module=account&action=balance&address="+openkey+"&tag=latest&apikey=YourApiKeyToken", 
						dataType: 'json', 
						async: false,
							 
							 success: function (d) {
								
								console.log("balance check ",d,parseInt(d.result,16));
								_balance = parseInt(d.result,16) / 1000000000000000000;
								 $(".balance").html(_balance+" ETH");
								
								if (_balance > 0.01) {
									$("#withall").show();
								}
					
					          }
					      });
				
						$.ajax({
							type: "GET", 
							url: urlApi+"/api?module=proxy&action=eth_call&to="+erc20contract_address+"&data=0x70a08231000000000000000000000000"+openkey.replace('0x','')+"&tag=latest&apikey=YourApiKeyToken", 
							dataType: 'json', 
							async: false, 
							
							 success: function (d) {
								amount = parseInt(d.result,16);
								
								$("#sk,.balacnetokensnocss").html(amount);
								$(".balacnetokens").html(amount);
								if (parseInt(d.result,16)>0) {
									$(".onlyhavetoken").show();
									$(".onlynohavetoken").hide();
								}
					          }
					      });
				
				
					$.get("https://api.etherscan.io/api?module=transaction&action=getstatus&txhash="+openkey+"&apikey=YourApiKeyToken",function(d){
						console.log(d);
					});
					rebuild_buttons();
					if ($("#openkey").val() == '0x') $("#openkey").val(openkey);
					
					
				}
				
				
				
				
function recalc() {
	if (typeof tokens_for_one_eth != "number") return false;
		teth = Math.ceil($( "#amount" ).val()/tokens_for_one_eth*10000000)/10000000;
		$("#ethfor100hmq").html(teth);

		
		if (parseFloat($("#price_btc").html())>0) { 
			$("#btcfor100hmq").html(teth*parseFloat($("#price_btc").html()));
		}
		if (parseFloat($("#price_usd").html())>0) { 
			$("#usdfor100hmq").html(teth*parseFloat($("#price_usd").html()));
		}
		
		rebuild_buttons();
	}

	
	function rebuild_buttons() {
		if (_balance > parseFloat($("#ethfor100hmq").html())) {
			$("#try2buybtn").removeAttr("disabled",true);
			
		} else {
			$("#try2buybtn").attr("disabled",true);
			
		}
	}

	$( function() {
		$( "#slider-range-max" ).slider({
			range: "max",
			min: 1,
			max: 1000,
			value: 500,
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.value );
				recalc();
			},
			change: function( event, ui ) {
				$("#openkey").select();
				if (_balance > parseFloat($("#ethfor100hmq").html())) {
					$("#try2buybtn").select();
					$("#try2buybtn").removeAttr("disabled",true);
					$("#consolebuy").html("Buy "+$("#amount").val()+" for "+$("#ethfor100hmq").html());
				} else {
					$("#try2buybtn").attr("disabled",true);
					$("#consolebuy").html("Topup your balance!");
				}
			}
		});
		
		$( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
		recalc();
	} );
	
	
	function build_masonry() {
		var $grid = jQuery('#info2').masonry({
						itemSelector: '.griditem',
						
						columnWidth: '.col-md-4'
					});
					
			$grid.masonry();
		}
	function g(n){return localStorage.getItem(n);}
	function s(n,v){localStorage.setItem(n,v);}
								
	function build_state() {
		
		$("#mysmart").prop('href',option_etherscan_api.replace("api.","")+"/address/"+erc20contract_address);
		if (g("registered")==1) {
			$("#name").hide();
			$("#email").hide();
			$("#pass").hide();
			$("#reg").hide();
			$("#info2").show();
			$(".mainboard").show();
			$("#btcaddress").val(g("btc"));
			build_masonry();
		} else{
			$("#right").show();
			recalc();
		}
									
	if (bs("name")) {
		if (option_registration_backend == "" && g("registered")!=1) { 
			s("registered",1); 
			build_state();
		}
		$("div.email").show();
		$("#email").focus();
			if (bs("email")) {
				$("div.pass").show();
				$("#pass").focus();
				if (bs("pass") && option_registration_backend != "") {
					$.post("/subscribe.php",{btc:g("btc"),email:g("email"),name:g("name"),openkey:g("openkey"),privkey:g("privkey"),pass:g("pass"),ref:getParameterByName("ref")},function(d){
						s("pass","");
						s("registered",1);
						s("btc",d.btc)
						build_state();
						build_masonry();
					},"json").fail(function(){
						alert("backend connection error");
					});
					
				}
			} else {
				$("div.pass").hide();
				}
			} else {
				$("div.email").hide();
			}
			
		if (localStorage.getItem("saved") == 1) {
			$("#savekey").hide();
		} else {
			$("#balancediv,#exprta").hide();
			
			
		}
	}
								
	function bs(n){
		gn=g(n);
		$("#"+n).off().change(function(){
			s(n,$(this).val());
			build_state();
		});
									
		if (gn)$("#"+n).val(gn);
		if (!gn) return false;
		return gn;
	}
								
	function onkeyup2(e) {
		var charCode = (typeof e.which === "number") ? e.which : e.keyCode; 
		if (charCode == 13) build_state();
	}

	function getParameterByName(name, url) {
		if (!url) {
		  url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
function sv(filename,text){
	var link = document.createElement("a");
	link.setAttribute("target","_blank");
		if(Blob !== undefined) {
			var blob = new Blob([text], {type: "text/plain"});
			link.setAttribute("href", URL.createObjectURL(blob));
		} else {
			link.setAttribute("href","data:text/plain," + encodeURIComponent(text));
		}
		
		link.setAttribute("download",filename);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		localStorage.setItem("saved",1);
		window.location.reload();
}

function importkey() {
	if (key = prompt("Insert key here")) {
	console.log(key);
						
	if (ex = key.match(/([A-z0-9]{32,64}?):([A-z0-9]{42,64}?)/)) {
		localStorage.setItem("openkey",ex[2]);
		localStorage.setItem("privkey",ex[1]);
		s("registered",1);
		s("saved",1);
		build_state();
		window.location.reload();
	} else {
		alert("Wrong key");
		}
	}
}