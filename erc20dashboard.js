<!DOCTYPE html>
<html>
<head>
	<script>
	//if (window.location.protocol != "https:")
    //window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);	
	</script>
	<title>Dashboard</title>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
	<meta name="description" content="NoxonFund investments">
	<meta name="keywords" content="financial template, ethereum, dao ethereum, noxon project">
	<link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="stylesheet" href="css/dashboardred.css">
	<link rel="stylesheet" href="css/jquery-u.css">
	<script src="js/jquery.min.js"></script>
	
	<!-- Bootstrap v3 -->
	
	</head>

<body>
	<div class="b-form-place container">
		<div class="row" id='reg'>
		<div class="col-md-offset-2 col-md-8" style='display:none' id='right'>
			<div class="b-form-cont">
				<h2 class="b-form-cont__title">Create account <span style='float:right' onclick='importkey();'>import key</span></h2>
				<div class="b-form b-form--place container-fluid">
					<div class="b-form__row">
						<input type="text" id='name' onkeyup='onkeyup2(this)' placeholder="Enter your name">
					</div>
					<div class="b-form__row email" style='display:none'>
						<input type="text" id='email' onkeyup='onkeyup2(this)' placeholder="Enter your email">	
					</div>
					<div class="b-form__row pass" style='display:none'>
						<input type="password" id='pass' onkeyup='onkeyup2(this)' placeholder="Enter password">	
					</div>
				</div>
			</div>
		</div>
		
		</div>
		
			<div id='savekey' style='display:none' class='row savekey'>
			<div class="col-md-12">
				<div class="b-form-cont">
				<h2 class="b-form-cont__title"><span id='hiname'>Hi ....</span> <a href="#" style='float:right' onclick='localStorage.clear();window.location.reload();return false'>Exit</a></h2> 
				
				<div class="b-form b-form--place container-fluid">
				<div class='b-form__row'>
					
					Write down these 12 words using <i class="fa fa-pencil" aria-hidden="true"></i> and <i class="fa fa-file-o" aria-hidden="true"></i>:<br><br> 
					<textarea id='d12keys' onclick="this.focus();this.select()" readonly="readonly">Generation in process... Wait</textarea>
					<br><br>
					<i style='color:red' class="fa fa-exclamation-triangle" aria-hidden="true"></i> We do not store your private keys and will not be able to restore them.
					<br><br><a href='#' class='btn' onclick='sv(window.location.host+"_keys.txt",getmsg());return false'>download keys</a>  or <a href='#' class='mailto'>send to email</a> <br>
					<Br>You will continue after save
					
					
				</div>
				</div>
				</div>
			</div>
			</div>
			
			<div class="row mainboard">
				
				<div class="col-md-6">
 
					<!-- .b-form-cont -->
                    <div class="b-form-cont">
						<div style='float:right;padding:22px 18px;'>
						<a href="#" id='exprta' onclick='sv(window.location.host+"_keys.txt",getmsg());return false'>Export plain keys</a>  | <a href="#" onclick='localStorage.clear();window.location.reload();return false'>Exit</a>
						</div>
						<h2 class="b-form-cont__title" id='hiname'>Hi</h2> 
							<div class="b-form b-form--place container-fluid">
								<div class="b-form__row">
								<div id='topupbalance'>
								For buy TOKENs you must topup your balance! Using <a href="#" onclick='$("#openkey").focus().select()'>this form</a>. 
								</div>
								
								<div id='balancediv'>
								 <span class='balacnetokens'></span> TOKEN(s) you have<Br><br>
								</div>
								<span id='uniqkey' >Your unique PUBLIC key: <span id='openkeyspan'></span> </span>
								
								
								 
								</div>
							</div>
					</div>
                    <!-- .b-form-cont -->
                </div>


				<div class="col-md-6 tabs" id='sendtokens'>
 
					<!-- .b-form-cont -->
                    <div class="b-form-cont">
						<h2 class="b-form-cont__title">Send tokens</h2> 
							<div class="b-form b-form--place container-fluid">
								<div class='b-form__row'>
									<div class='onlyhavetoken'>
									To address: <Br>
									<input type='text' id='kuda' style='margin-bottom:20px' id='openkey22' value='0x'>
									Amount: <Br>
									<input type='text' id='skoko' style='margin-bottom:20px' value=''>
									
									<input type='button' onclick='try2send()' class='btn' name='BTN' value='Send'>
									<span id='consolesend'></span>
									<script>
									function try2send() {
										$("#consolesend").html('.:...::');
										sendRwTr(0,[$("#kuda").val(),$("#skoko").val()],"transfer","#consolesend");
									}
									</script>
									</div>
									
									<div class='onlynohavetoken'>
									Transfer between shareholders enabled. When you get or buy TOKENs the form will be displayed here
									</div>
								</div>
								
							</div>
					</div>
                    <!-- .b-form-cont -->
                </div>
				
				<div class="col-md-12 " id='a4'>
 
					<!-- .b-form-cont -->
                    <div class="b-form-cont">
						<h2 class="b-form-cont__title">Transactions</h2> 
							<div class="b-form b-form--place container-fluid">
								<div class='b-form__row'>
								You can check all transactions at etherscan: <a href='#' id='mysmart' target='_blank'>open smart contract</a>
									<div id='nhistory'></div>
								</div>
							</div>
					</div>
                    <!-- .b-form-cont -->
                </div>
	
            </div>
            <!-- .row -->
     </div>
        <!-- .b-form-place -->
	
	<script src="js/lightwallet.js"></script>
	<script src="js/jquery-u.js"></script>
	<script src="js/masonry.pkgd.min.js"></script>
	<script src="erc20dashboard.js"></script>
	<script>
	build_state();
	rebalance() ;
	setInterval(rebalance,10000);
	
	</script>
	
	
	
</body>
</html>
