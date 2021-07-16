// refactored

coins = [bitcoin, ethereum, tether, dogecoin, 
         binanceCoin, cardano, usdCoin, uniswap, 
         bitcoinCash, xrp, tron, ethereumClassic, 
         litecoin, dash, polkadot] 

const SectionFour = () => {
return (
		<div className="sectionFour">
			<div className="container">
				<p className="header">Starting with 15 cryptocurrencies</p>

        coins.map (coin) => { 
          <div className=`coinLogo ${varToString({coin})} `>
            <img src={coin} alt=`${varToString({coin})}`/>
          </div>
        }
      </div>
    </div>

  ) 
}

// to refactor
const SectionFour = () => {
	return (
		<div className="sectionFour">
			<div className="container">
				<p className="header">Starting with 15 cryptocurrencies</p>
				{/* All the logos go here */}
				<div className="logos">
					<div className="coinLogo bitcoin">
						<img src={bitcoin} alt="bitcoin" />
					</div>
					<div className="coinLogo ethereum">
						<img src={ethereum} alt="ethereum" />
					</div>
					<div className="coinLogo tether">
						<img src={tether} alt="tether" />
					</div>
					<div className="coinLogo dogecoin">
						<img src={dogecoin} alt="dogecoin" />
					</div>
					<div className="coinLogo binanceCoin">
						<img src={binanceCoin} alt="binanceCoin" />
					</div>
					<div className="coinLogo polkadot">
						<img src={polkadot} alt="polkadot" />
					</div>
					<div className="coinLogo usdCoin">
						<img src={usdCoin} alt="usdCoin" />
					</div>
					<div className="coinLogo uniswap">
						<img src={uniswap} alt="uniswap" />
					</div>
					<div className="coinLogo bitcoinCash">
						<img src={bitcoinCash} alt="bitcoinCash" />
					</div>
					<div className="coinLogo xrp">
						<img src={xrp} alt="xrp" />
					</div>
					<div className="coinLogo cardano">
						<img src={cardano} alt="cardano" />
					</div>
					<div className="coinLogo tron">
						<img src={tron} alt="tron" />
					</div>
					<div className="coinLogo ethereumClassic">
						<img src={ethereumClassic} alt="ethereumClassic" />
					</div>
					<div className="coinLogo litecoin">
						<img src={litecoin} alt="litecoin" />
					</div>
					<div className="coinLogo dash">
						<img src={dash} alt="dash" />
					</div>
				</div>
				<p className="moreCoins">More would be added based on popularity and demand.</p>
			</div>
		</div>
	);
};

export default SectionFour;
