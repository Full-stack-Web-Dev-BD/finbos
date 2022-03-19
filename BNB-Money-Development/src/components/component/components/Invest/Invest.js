import React, { useEffect, useState } from 'react'
import Bnb from '../../assets/img/bnb.png'
import Web3 from "web3"
import Contract from 'web3-eth-contract';

import { connectWallet, getWalletAddressOrConnect } from '../../../../wallet';

var decimal = 1e18;
const abi = require('./abi.json')
const contractAddress = "0x6269Df1321fcEc2C5ABA171436396628016E74A0";

export default function Invest() {
    const [totalInvested, setTotalInvested] = useState(0)
    const [totalWithdrawals, setTotalWithdrawals] = useState(0)
    const [tokenReferralBonus, setTokenReferralBonus] = useState(0)
    const [totalRefsAmount, setTotalRefsAmount] = useState(0)
    const [userInvested, setUserInvested] = useState(0)
    const [userWithdrawn, setUserWithdrawn] = useState(0)
    var contract
    useEffect(() => {
        if (typeof window.web3 !== 'undefined') {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            var web3Provider = new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org")
            window.web3 = new Web3(web3Provider)
        }
        Contract.setProvider(window.web3.currentProvider);
        contract = new Contract(abi, contractAddress);
        console.log(contract.methods)
        fetchContractData()
    }, [])
    const getContract = () => {
        if (typeof window.web3 !== 'undefined') {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            var web3Provider = new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org")
            window.web3 = new Web3(web3Provider)
        }
        Contract.setProvider(window.web3.currentProvider);
        contract = new Contract(abi, contractAddress);
    }
    const fetchContractData = async () => {
        var myContract = await getContract()
        // console.log("hello", await contract.methods.totalInvested().call())
        console.log("contract is ", myContract)
    }

    const fetchUserData = async () => {
        var account = await getWalletAddressOrConnect()
        var getRefsAmount = await contract.methods.getRefsAmount(account).call({ from: account })
        console.log("refam", getRefsAmount)

        var tUserRefsAmount = (Number(getRefsAmount[0]) + Number(getRefsAmount[1]) + Number(getRefsAmount[2])
            + Number(getRefsAmount[3]) + Number(getRefsAmount[4])) / decimal;
        setTotalRefsAmount(tUserRefsAmount);
        fillUserInvestVariable()
    }

    const fillUserInvestVariable = async () => {

        var account = await getWalletAddressOrConnect()
        var allDeposits = await contract.methods.getAllDeposits(account).call();
        console.log("allDeposits", allDeposits);

        var userInvested = 0;
        for (var i = 0; i < 10; i++) {
            userInvested = userInvested + Number(allDeposits[i][0]);
        }
        userInvested = userInvested / decimal;
        console.log("userInvested", userInvested);
        setUserInvested(userInvested.toFixed(3));

        var userWithdrawn = 0;
        for (var i = 0; i < 10; i++) {
            userWithdrawn = userWithdrawn + Number(allDeposits[i][2]);
        }
        userWithdrawn = userWithdrawn / decimal;
        console.log("userWithdrawn", userWithdrawn);
        setUserWithdrawn(userWithdrawn.toFixed(3));

        var calculateReward = Number(await contract.methods.calculateReward(account).call()) / decimal;
        console.log("calculateReward", calculateReward);

        // if (Number(allDeposits[0][3]) > 0) {
        //     var shiftTextDate = timeConverter((Number(allDeposits[0][3]) + 86400));
        //     timer(shiftTextDate);
        // }

        console.log('end fillUserInvestVariable()');
    }
    return (
        <div>
            <section className="invest" id="invest">
                <div className="container">
                    <div className="section-title" style={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}>
                        <h2 onClick={e => fetchContractData()}>
                            TIME to INVEST
                        </h2>
                        <img style={{ width: '3.5rem' }} src={Bnb} alt="" />
                    </div>
                    <div className="invest-block f-jcsb">
                        <div className="invest-wrap">
                            <ul className="invest-list">
                                <li className="invest-list__item">
                                    <h3 className="invest-list__title">
                                        Total Invested
                                    </h3>
                                    <p className="invest-list__value"><span id="totalInvested"></span>
                                        BNB
                                    </p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#565454', marginTop: '10px' }}>
                                        $ {totalInvested}
                                    </p>
                                </li>
                                <li className="invest-list__item">
                                    <h3 className="invest-list__title">
                                        Total Withdrawals
                                    </h3>
                                    <p className="invest-list__value"><span id="totalWithdrawals"></span>
                                        BNB
                                    </p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#565454', marginTop: '10px' }}>
                                        $ {totalWithdrawals}
                                    </p>
                                </li>
                                <button className="btn btn-primary main-btn main-btn_blue" onClick={e => fetchUserData()} >Connect Wallet</button>
                            </ul>
                            <div className="invest-bottom">
                                <div className="invest-connect">
                                    <span className="invest-connect__token f-center-center">
                                        BNB
                                    </span>

                                    <input id="investAmount" type="" name="invest" placeholder="500" step="" />
                                    <button className="main-btn main-btn_blue invest-connect__btn">
                                        Invest Now
                                    </button>
                                </div>
                                <p className="invest-text">
                                    * 0.05 BNB Minimum Deposit
                                </p>
                            </div>
                        </div>
                        <div className="invest-wrap">
                            <ul className="invest-list invest-list_accent">
                                <li className="invest-list__item">
                                    <h3 className="invest-list__title">
                                        Your Total Deposits
                                    </h3>
                                    <p className="invest-list__value"><span id="userInvested"></span>
                                        BNB
                                    </p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#565454', marginTop: '10px' }}>
                                        $ {userInvested}
                                    </p>
                                </li>
                                <li className="invest-list__item">
                                    <h3 className="invest-list__title">
                                        Your Withdrawals
                                    </h3>
                                    <p className="invest-list__value"><span id="userWithdrawn"></span>
                                        BNB
                                    </p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#565454', marginTop: '10px' }}>
                                        $ {userWithdrawn}
                                    </p>
                                </li>
                                <li className="invest-list__item">
                                    <h3 className="invest-list__title">
                                        Your Income
                                    </h3>
                                    <p className="invest-list__value"><span id="calculateReward"></span>
                                        BNB
                                    </p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#565454', marginTop: '10px' }}>
                                        $ 0
                                    </p>
                                </li>
                                <li className="invest-list__item">
                                    <h3 className="invest-list__title">
                                        Referral Rewards
                                    </h3>
                                    <p className="invest-list__value"><span id="totalUserRefsAmount"></span>
                                        BNB
                                    </p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#565454', marginTop: '10px' }}>
                                        $ {totalRefsAmount}
                                    </p>
                                </li>
                            </ul>
                            <div className="invest-bottom">
                                <div className="invest-offer f-center">
                                    <button type="button" className="main-btn">
                                        Claim
                                    </button>
                                </div>
                                <p className="invest-text">
                                    * 0.05 BNB Minimum Amount
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="invest-theme">
                        Profit
                    </div>
                    {/* <div className="invest-circle rotate-circle">
                        <img src={BnbCircle} alt="" />
                    </div> */}
                </div>
            </section>
        </div>
    )
}
