import React, { useEffect, useState } from 'react'
import Bnb from '../../assets/img/bnb.png'
import Web3 from "web3"
import Contract from 'web3-eth-contract';
import { ethers } from "ethers";

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
    const [income, setIncome] = useState(0)
    const [refReword, setRefReword] = useState(0)
    const [amount, setAmount] = useState(0)
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
        return contract = new Contract(abi, contractAddress);
    }
    const fetchContractData = async () => {
        var myContract = await getContract()
        console.log("contract  is:  ", myContract)
        setTotalInvested(await contract.methods.totalInvested().call() / decimal)
        console.log("Total Invested : ", await myContract.methods.totalInvested().call() / decimal)

        var tWithdrawals = await contract.methods.totalWithdrawals().call() / decimal
        setTotalWithdrawals(tWithdrawals);
        console.log("Total withdrawal : ", tWithdrawals)

    }

    const fetchUserData = async () => {
        var account = await getWalletAddressOrConnect()
        var myContract = await getContract()
        console.clear()
        console.log("Contrac  is : ", myContract)
        var getRefsAmount = await myContract.methods.getRefsAmount(account).call({ from: account })

        var tUserRefsAmount = (Number(getRefsAmount[0]) + Number(getRefsAmount[1]) + Number(getRefsAmount[2])
            + Number(getRefsAmount[3]) + Number(getRefsAmount[4])) / decimal;
        setTotalRefsAmount(tUserRefsAmount);
        console.log("Total refsAmount : ", tUserRefsAmount)


        var account = await getWalletAddressOrConnect()
        var allDeposits = await contract.methods.getAllDeposits(account).call();
        console.log("User  deposit is  : ", allDeposits);

        var userInvested = 0;
        for (var i = 0; i < 10; i++) {
            userInvested = userInvested + Number(allDeposits[i][0]);
        }
        userInvested = userInvested / decimal;
        console.log("Total invested is : (userinvested) ", userInvested);
        setUserInvested(userInvested.toFixed(3));

        var userWithdrawn = 0;
        for (var i = 0; i < 10; i++) {
            userWithdrawn = userWithdrawn + Number(allDeposits[i][2]);
        }
        userWithdrawn = userWithdrawn / decimal;
        console.log("Total  withdrawal is : ", userWithdrawn);
        setUserWithdrawn(userWithdrawn.toFixed(3));

        var calculateIncome = Number(await contract.methods.calculateReward(account).call()) / decimal;
        setIncome(calculateIncome)
        console.log("User Income is ", calculateIncome);


        var getRefsAmount = await contract.methods.getRefsAmount(account).call();
        console.log("get all ref amount ", getRefsAmount);
        var totalUserRefsAmount = (Number(getRefsAmount[0]) + Number(getRefsAmount[1]) + Number(getRefsAmount[2])
            + Number(getRefsAmount[3]) + Number(getRefsAmount[4])) / decimal;
        console.log("totalUserRefsAmount is ", totalUserRefsAmount);
        setRefReword(totalUserRefsAmount);

        // makeRefLink

        var origin = window.location.origin;
        var refLink = origin + '?ref=' + account
    }

    async function invest() {
        var account = await getWalletAddressOrConnect()
        var myContract = await getContract()
        console.clear()

        var user = '0x0000000000000000000000000000000000000000';
        let searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('ref')) {
            user = searchParams.get('ref');
        }

        var tx = await myContract.methods.newDeposit(user).send({ from: account, value: ethers.utils.parseEther(amount) });
        console.log("transection hash is ", tx)

        // makeRefLink();
    }

    async function claim() {

        var account = await getWalletAddressOrConnect()
        var myContract = await getContract()
        console.clear()
        var tx = await myContract.methods.getRewardAll().call();
        console.log("Reward transection is ", tx)
        alert("Reward claimed !")
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
                                        {totalInvested}BNB
                                    </p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#565454', marginTop: '10px' }}>
                                        $ --
                                    </p>
                                </li>
                                <li className="invest-list__item">
                                    <h3 className="invest-list__title">
                                        Total Withdrawals
                                    </h3>
                                    <p className="invest-list__value"><span id="totalWithdrawals"></span>
                                        {totalWithdrawals}BNB
                                    </p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#565454', marginTop: '10px' }}>
                                        $--
                                    </p>
                                </li>
                                <button className="btn btn-primary main-btn main-btn_blue" onClick={e => fetchUserData()} >Connect Wallet</button>
                            </ul>
                            <div className="invest-bottom">
                                <div className="invest-connect">
                                    <span className="invest-connect__token f-center-center">
                                        BNB
                                    </span>

                                    <input onChange={e => setAmount(e.target.value)} id="investAmount" type="number" name="invest" placeholder="500" step="" />
                                    <button onClick={e => { invest() }} className="main-btn main-btn_blue invest-connect__btn">
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
                                        {userWithdrawn} BNB
                                    </p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#565454', marginTop: '10px' }}>
                                        $ --
                                    </p>
                                </li>
                                <li className="invest-list__item">
                                    <h3 className="invest-list__title">
                                        Your Income
                                    </h3>
                                    <p className="invest-list__value"><span id="calculateReward"></span>
                                        {income}BNB
                                    </p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#565454', marginTop: '10px' }}>
                                        $ --
                                    </p>
                                </li>
                                <li className="invest-list__item">
                                    <h3 className="invest-list__title">
                                        Referral Rewards
                                    </h3>
                                    <p className="invest-list__value"><span id="totalUserRefsAmount"></span>
                                        {totalRefsAmount} BNB
                                    </p>
                                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#565454', marginTop: '10px' }}>
                                        $--
                                    </p>
                                </li>
                            </ul>
                            <div className="invest-bottom">
                                <div className="invest-offer f-center">
                                    <button onClick={e => { claim() }} type="button" className="main-btn">
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
