import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Web3 from "web3"
import Contract from 'web3-eth-contract';
import { ethers } from "ethers";
import { getWalletAddressOrConnect } from '../../../../wallet';
import './invest.css'
import { Row, Col } from 'react-bootstrap'
import NetWorth from '../../assets/img/invest2.png'
import Earning from '../../assets/img/invest3.png'
import Loss from '../../assets/img/invest4.png'
import Meter from '../../assets/img/speedmeter.png'



var decimal = 1e18;
const abi = require('./abi.json')
const contractAddress = "0xf8602C8f54451e515157EF565D5434d09db17D6F";//mainnet
// const contractAddress = "0x6F7AC8570c895Bb6076223334A59BF4819BC1857";//testnet
const defaultInvestAmount = 5

export default function Invest() {
    const [totalInvested, setTotalInvested] = useState(0)
    const [totalWithdrawals, setTotalWithdrawals] = useState(0)
    const [userInvested, setUserInvested] = useState(0)
    const [amount, setAmount] = useState(5)
    const [myBalance, setMyBalance] = useState(0)
    const [contractBalance, setContractBalance] = useState(0)
    const [totalProfit, setTotalProfit] = useState(0)
    const [bnbToClaim, setBnbToClaim] = useState(0)
    const [withdraw, setWithdraw] = useState(0)
    const [insBalance, setInsBalance] = useState(0)

    var contract
    useEffect(async () => {

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
            // var web3Provider = new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545")
            window.web3 = new Web3(web3Provider)
        }
        Contract.setProvider(window.web3.currentProvider);
        return contract = new Contract(abi, contractAddress);
    }
    const fetchContractData = async () => {
        var myContract = await getContract()
        console.log("Updated Contract  is:  ", myContract.methods)
        setTotalInvested(await contract.methods.totalInvested().call() / decimal)
        console.log("Total Invested : ", await myContract.methods.totalInvested().call() / decimal)

        // var tWithdrawals = await contract.methods.totalWithdrawals().call() / decimal
        var tWithdrawals = await contract.methods.totalWithdrawal().call() / decimal
        setTotalWithdrawals(tWithdrawals);
        console.log("Total withdrawal : ", tWithdrawals)

        // setContractBalance
        var cBalance = await contract.methods.getBalance().call() / decimal
        setContractBalance(cBalance)
    }

    const fetchUserData = async () => {
        var account = await getWalletAddressOrConnect()
        var bl = await window.web3.eth.getBalance(account)
        var bl2 = await window.web3.eth.getBalance("0xf3A80ac0d0E59D7f1580911784D51dE702CdacE2")
        console.log("Ins balance is ", bl2)

        console.log("My Account Balance is : ", bl)
        setMyBalance(bl)
        setInsBalance((bl2 / decimal).toFixed(3))



        document.getElementById("connect_btn").innerHTML = "Wallet Connected"
        var myContract = await getContract()

        console.clear()
        console.log("Ins balance is ", (bl2 / decimal).toFixed(3))

        var user = await myContract.methods.investors(account).call({ from: account })
        var myInvest = ((user.totalDeposit) / decimal).toFixed(3)
        var myWithdtaw = ((user.totalWithdraw) / decimal).toFixed(3)
        setUserInvested(myInvest)
        setWithdraw(myWithdtaw)

        console.log("My Balance is ", bl)
        console.log("Contrac  is : ", myContract)
        var bnbtoClaim = await myContract.methods.payoutOf(account).call({ from: account })
        console.log("BNB to Claim", bnbtoClaim)
        setBnbToClaim((bnbtoClaim.payout / decimal).toFixed(3))



        var tProfit = await myContract.methods.getDividends(account).call({ from: account })
        setTotalProfit((tProfit / decimal).toFixed(3))
        console.log("Total refsAmount : ", tProfit)
        // makeRefLink

        var origin = window.location.origin;
        var refLink = origin + '?ref=' + account
        console.log("my ref Link is  ", refLink);
        document.getElementById("referralLink").value = refLink
    }

    async function invest() {
        // if (amount   < 0.1) return toast.error("Invest amount must need to  be greater then 0.5")
        var account = await getWalletAddressOrConnect()
        var myContract = await getContract()
        console.clear()

        var user = '0x0000000000000000000000000000000000000000';
        let searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('ref')) {
            user = searchParams.get('ref');
        }
        console.log("Investing ", amount ? amount : defaultInvestAmount, "BNB")
        var tx = await myContract.methods.invest(account).send({ from: account, value: ethers.utils.parseEther(amount ? amount.toString() : defaultInvestAmount.toString()) });
        console.log("transection hash is ", tx)

        // makeRefLink();
    }

    async function claim() {

        var account = await getWalletAddressOrConnect()
        var myContract = await getContract()
        console.clear()
        var tx = await myContract.methods.getRewardAll().send({ from: account });
        console.log("Reward transection is ", tx)
        alert("Reward claimed !")
    }
    return (
        <div className='invest' id='invest'>
            <div className="container">
                <Row>
                    <Col md={4}></Col>
                    <Col md={8}>
                        <Row className='invite__rightTop'>
                            <Col xs={6} className='left'>
                                <h4 style={{ fontWeight: 'bold', marginBottom: '9px', whiteSpace: 'nowrap' }}>Stable & Profitable Yield Farming Dapp</h4>
                                <p> With Automated Users Insurance to protect late investors as well</p>
                            </Col>
                            <Col md={3} className='invite__wallet'>
                                <button style={{ cursor: 'pointer' }} id="connect_btn" onClick={e => { fetchUserData(); }} >Connect Wallet</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className='invest__left'>

                        <div className="mt-xs ">
                            <p className="dp-amount">Deposit Amount</p>
                        </div>
                        <div className='goalCont' style={{ margin: '0' }}>
                            <div className='d-flex'>
                                <button className='prepend__btn'>BNB</button>
                                <input onChange={e => setAmount(e.target.value)} id="investAmount" type="number" min={0.1} name="invest" placeholder="5" step="" />
                            </div>
                        </div>
                        <div>
                            <p style={{ width: '55%', textAlign: 'right', color: 'gray' }} >Minimum : 0.1 BNB</p>
                        </div>
                        <div>
                            <div>
                                <img style={{ width: '60px' }} src={NetWorth} alt="" />
                            </div>
                            <div>
                                <p className='invest__subtitle'>Daily ROI</p>
                                <h3 className="invest__number">10% </h3>
                            </div>

                        </div>
                        <div>
                            <div>
                                <img style={{ width: '60px' }} src={Earning} alt="" />
                            </div>
                            <div>
                                <p className='invest__subtitle'>Total Profit</p>
                                <h3 className="invest__number"> 300% </h3>
                            </div>

                        </div>
                        <div>
                            <div>
                                <img style={{ width: '60px' }} src={Loss} alt="" />
                            </div>
                            <div>
                                <p className='invest__subtitle'>In 30 days, You'll Earn</p>
                                <h3 className="invest__number">{amount ? (amount * 3).toFixed(3) : (defaultInvestAmount * 3).toFixed(3)} BNB</h3>
                            </div>
                        </div>
                        <div>
                            <button style={{ cursor: 'pointer' }} className='stake__btn' onClick={e => invest()}>
                                Stake
                            </button>
                        </div>
                    </Col>
                    <Col md={8}>

                        <div>
                            <h3 style={{ fontWeight: 'bold', marginBottom: '20px' }}> YOUR ACCOUNT </h3>
                        </div>
                        <Row>
                            <Col className='account__left ' md={6}>
                                <div className='mb-4'>
                                    <div>
                                        <p className='invest__subtitle mb-2'>Individual Account</p>
                                        <h4 className="invest__number">Build Wealth</h4>
                                    </div>
                                    <div>
                                        <p className='invest__subtitle mb-2'>Current Balance</p>
                                        <h4 className="invest__number"> {myBalance > 0 ? (myBalance / decimal).toFixed(3) : 0} BNB </h4>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <button className='claim__button' style={{ cursor: 'pointer' }} onClick={e => { claim() }}>Claim</button>
                                    </div>
                                    <div>
                                        <p className='invest__subtitle mb-2'>BNB to Claim</p>
                                        <h4 className="invest__number"> {bnbToClaim} BNB </h4>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="invest__number">Your Goal</h4>
                                </div>
                                <div className='justify-content-between'>
                                    <p className="invest__subtitle">What you have invested</p>
                                    <h6 className='invest__number'> {userInvested} BNB </h6>
                                </div>
                                <div className='justify-content-between'>
                                    <p className="invest__subtitle">What you have earned</p>
                                    <h6 className='invest__number'>{withdraw} BNB </h6>
                                </div>
                            </Col>
                            <Col className='account__right mx-auto' md={5}>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p className='invest__subtitle mb-2'>Daily Return</p>
                                        <h4 className="invest__number">10%</h4>
                                    </div>
                                    <div>
                                        <p className='invest__subtitle mb-2'>Total Profit</p>
                                        <h4 className="invest__number"> {userInvested * 3} BNB </h4>
                                    </div>
                                </div>
                                <div>
                                    <img style={{ width: '100%', marginTop: '20px' }} src={Meter} alt="" />
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ columnGap: '20px' }} >
                            <Col md={6}>
                                <h5 className="invest__number mb-3">The best way to Earn BNB</h5>
                            </Col>
                            <Col md={5} style={{ position: 'relative', left: '20px' }}>
                                <h5 className="invest__number mb-3 text-center">Insurance Pool</h5>
                                <p className='invest__subtitle mb-2 insBalance'> {insBalance} BNB </p>
                            </Col>
                            <Col md={5}>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{ fontWeight: '600' }}> Total Staked Volume</h6>
                                    <p className='invest__subtitle mb-2'> {totalInvested} BNB </p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{ fontWeight: '600' }}>Total Reinvestment Volume</h6>
                                    <p className='invest__subtitle mb-2'>13%</p>
                                </div>

                                <div className='d-flex justify-content-between'>
                                    <h6 style={{ fontWeight: '600' }}>Total Claim Reward</h6>
                                    <p className='invest__subtitle mb-2'> {totalWithdrawals} BNB </p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6 style={{ fontWeight: '600' }}>Contract Balance</h6>
                                    <p className='invest__subtitle mb-2'> {contractBalance} BNB </p>
                                </div>
                                {/* <div className='d-flex justify-content-between mt-3'>
                                    <h6 className='invest__number'>Auto Deposite on May 25</h6>
                                    <p className='invest__subtitle mb-2'>250 BNB</p>
                                </div> */}
                            </Col>
                            <Col md={5}>
                                <div className='d-flex justify-content-between mt-3'>
                                    {/* <h6 className='invest__number'>Insurance Pool</h6> */}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
        </div>
    )
}
