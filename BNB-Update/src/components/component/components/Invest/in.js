import React from 'react'
import BnbCircle from '../../assets/img/bnb-circle.png'
import Bnb from '../../assets/img/bnb.png'
import { ethers } from "ethers";
import $ from 'jquery'
let jQuery = $
let ethereum = ethers
export default function Invest() {

    var mainChainIdHex = "0x38";
    var mainChainIdDec = "56";
    var mainRpcUrls = 'https://bsc-dataseed.binance.org/';
    var mainBlockExplorerUrls = 'https://bscscan.com/';
    var mainChainName = 'BSC Mainnet';

    var contractAddress = '0x6269df1321fcec2c5aba171436396628016e74a0';
    var abi = '[{"inputs":[{"internalType":"address payable","name":"_admin","type":"address"},{"internalType":"address payable","name":"_refAdmin","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountWithdrawned","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountReinvested","type":"uint256"}],"name":"Reinvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReturnDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SendTo","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"calculateReward","outputs":[{"internalType":"uint256","name":"totalReward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"calculateRewardByIndex","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"daysCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"checkDaysWithoutReward","outputs":[{"internalType":"uint256","name":"_days","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"investor","type":"address"}],"name":"getAllDeposits","outputs":[{"components":[{"internalType":"uint256","name":"deposited","type":"uint256"},{"internalType":"uint256","name":"withdrawals","type":"uint256"},{"internalType":"uint256","name":"lastUpdate","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct BnbMoney.Investment[10]","name":"","type":"tuple[10]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"investor","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCertainDeposit","outputs":[{"components":[{"internalType":"uint256","name":"deposited","type":"uint256"},{"internalType":"uint256","name":"withdrawals","type":"uint256"},{"internalType":"uint256","name":"lastUpdate","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct BnbMoney.Investment","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getRefsAmount","outputs":[{"internalType":"uint256[5]","name":"","type":"uint256[5]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getRefsWallet","outputs":[{"internalType":"address[5]","name":"","type":"address[5]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getRewardAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"incrementShiftTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"invests","outputs":[{"internalType":"uint256","name":"deposited","type":"uint256"},{"internalType":"uint256","name":"withdrawals","type":"uint256"},{"internalType":"uint256","name":"lastUpdate","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"newDeposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"refAdmin","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"refs","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"refsAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"shiftTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReinvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]';

    var wallet;
    var contractController;
    var isConnect = false;
    var signer;
    var provider;
    var current_network = undefined;
    var decimal = 1e18;

    window.addEventListener('load', function () {
        connect();
    })

    function connect() {
        if (isConnect === false) {
            doConnect();
            isConnect = true;
        }
        if (mainChainIdDec === current_network) {
            initControllers();
        }
    }

    async function withdraw() {
        if (provider != undefined) {
            signer = provider.getSigner();
            var writeController = contractController.connect(signer);
            var tx = await writeController.getRewardAll();
        } else {
            alert('Not connected');
        }
    }

    async function deposit() {
        if (provider != undefined) {
            signer = provider.getSigner();
            var user = '0x0000000000000000000000000000000000000000';
            let searchParams = new URLSearchParams(window.location.search);
            if (searchParams.has('ref')) {
                user = searchParams.get('ref');
            }

            var writeController = contractController.connect(signer);
            var amount = $('#investAmount').val();
            console.log('amount', amount);
            console.log('user', user);
            try {
                await writeController.newDeposit(user, { value: ethers.utils.parseEther(amount) });
            } catch (addError) {
                alert(addError.data.message);
            }
        } else {
            alert('Not connected');
        }
        makeRefLink();
    }

    async function fillTotalVariable() {
        const accounts = await ethereum.request({ method: 'eth_accounts' }).catch(checkErrEthAccounts());

        var totalInvested = Number(await contractController.totalInvested()) / decimal;
        console.log("totalInvested", totalInvested);
        $('#totalInvested').html(totalInvested.toFixed(3));

        var contractBalance = Number(await provider.getBalance(contractAddress)) / decimal;
        console.log("contractBalance", contractBalance);
        $('#contractBalance').html(contractBalance.toFixed(3));

        var totalWithdrawals = Number(await contractController.totalWithdrawals()) / decimal;
        console.log("totalWithdrawals", totalWithdrawals);
        $('#totalWithdrawals').html(totalWithdrawals.toFixed(3));

        var totalReferralBonus = Number(await contractController.totalReferralBonus()) / decimal;
        console.log("totalReferralBonus", totalReferralBonus);
        $('#totalReferralBonus').html(totalReferralBonus.toFixed(3));
    }

    async function fillUserRefVariable() {
        console.log('starting fillUserRefVariable() ...');
        const accounts = await ethereum.request({ method: 'eth_accounts' }).catch(checkErrEthAccounts());
        wallet = accounts[0];

        var getRefsAmount = await contractController.getRefsAmount(accounts[0]);
        $('#userRefLevel1').html((Number(getRefsAmount[0]) / decimal).toFixed(3));
        $('#userRefLevel2').html((Number(getRefsAmount[1]) / decimal).toFixed(3));
        $('#userRefLevel3').html((Number(getRefsAmount[2]) / decimal).toFixed(3));
        $('#userRefLevel4').html((Number(getRefsAmount[3]) / decimal).toFixed(3));
        $('#userRefLevel5').html((Number(getRefsAmount[4]) / decimal).toFixed(3));
        var totalUserRefsAmount = (Number(getRefsAmount[0]) + Number(getRefsAmount[1]) + Number(getRefsAmount[2])
            + Number(getRefsAmount[3]) + Number(getRefsAmount[4])) / decimal;
        console.log("totalUserRefsAmount", totalUserRefsAmount);
        $('#totalUserRefsAmount').html(totalUserRefsAmount.toFixed(3));
        makeRefLink();

        console.log('end fillUserRefVariable()');
    }

    function makeRefLink() {
        var origin = window.location.origin;
        $('#referralLink').val(origin + '?ref=' + wallet);
    }

    async function fillUserInvestVariable() {
        console.log('starting fillUserInvestVariable() ...');

        const accounts = await ethereum.request({ method: 'eth_accounts' }).catch(checkErrEthAccounts());
        var allDeposits = await contractController.getAllDeposits(accounts[0]);
        console.log("allDeposits", allDeposits);

        var userInvested = 0;
        for (var i = 0; i < 10; i++) {
            userInvested = userInvested + Number(allDeposits[i][0]);
        }
        userInvested = userInvested / decimal;
        console.log("userInvested", userInvested);
        $('#userInvested').html(userInvested.toFixed(3));

        var userWithdrawn = 0;
        for (var i = 0; i < 10; i++) {
            userWithdrawn = userWithdrawn + Number(allDeposits[i][2]);
        }
        userWithdrawn = userWithdrawn / decimal;
        console.log("userWithdrawn", userWithdrawn);
        $('#userWithdrawn').html(userWithdrawn.toFixed(3));

        var calculateReward = Number(await contractController.calculateReward(accounts[0])) / decimal;
        console.log("calculateReward", calculateReward);
        $('#calculateReward').html(calculateReward.toFixed(3));

        if (Number(allDeposits[0][3]) > 0) {
            var shiftTextDate = timeConverter((Number(allDeposits[0][3]) + 86400));
            timer(shiftTextDate);
        }

        console.log('end fillUserInvestVariable()');
    }

    async function doConnect() {
        let ethereum = window.ethereum;
        ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((handleAccountsChanged) => {
                provider = new ethers.providers.Web3Provider(ethereum);
                signer = provider.getSigner();
                if (current_network === mainChainIdDec) {
                    connect();
                }
            }
            )
            .catch((error) => {
                if (error.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    console.log('Please connect to MetaMask.');
                } else {
                    console.error(error);
                    alert("Please refresh the page");
                }
            });
        await switchEthereumChain();
        current_network = ethereum.networkVersion;
        if (current_network === mainChainIdDec) {
            initControllers();
        } else if (isConnect) {
            isConnect = false;
            //location.reload();
        }
        console.log("doConnect() current_network", current_network);
        if (current_network != mainChainIdDec) {
            await switchEthereumChain();
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' }).catch(checkErrEthAccounts());
        wallet = accounts[0];
    }

    async function checkErrEthAccounts(error) {
        if (isConnect && current_network != mainChainIdDec) {
        }
    }

    async function switchEthereumChain() {
        if (current_network === null || current_network != mainChainIdDec) {
            console.log('switchEthereumChain');
            let ethereum = window.ethereum;
            try {
                await ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x38' }],
                }).then((handleswitchEthereumChain) => {
                })
                    .catch();
            } catch (switchError) {
                signer = undefined;
                // This error code indicates that the chain has not been added to MetaMask.
                isConnect = false;
                if (switchError.code === 4902) {
                    try {
                        await switchToMain();
                    } catch (addError) {
                        // handle "add" error
                    }
                }
                // handle other "switch" errors
            }
        }
    }

    async function switchToMain() {
        console.log('switchToMain()');
        if (current_network === null) {
            let ethereum = window.ethereum;
            const data = [{
                chainId: '0x38',
                chainName: mainChainName,
                nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNB',
                    decimals: 18,
                },
                rpcUrls: [mainRpcUrls],
                blockExplorerUrls: [mainBlockExplorerUrls],
            }]
            const tx = await ethereum.request({ method: 'wallet_addEthereumChain', params: data }).catch()
            current_network = ethereum.networkVersion;
            if (tx) {
                console.log('tx = ', tx);
            }
        }
    }

    function initContracts() {
        if (signer === undefined) {
            isConnect = false;
            return;
        }
    }

    function initControllers() {
        contractController = new ethers.Contract(contractAddress, abi, provider);
        console.log('initControllers ...', contractController);
        isConnect = true;
        checkShowConnect();
    }

    function startApp() {
        fillTotalVariable();
        fillUserRefVariable();
        fillUserInvestVariable();
    }

    function checkShowConnect() {
        console.log('checkShowConnect() isConnect = ', isConnect);
        if (isConnect && current_network === mainChainIdDec) {
            $('#connectButton').hide();
            startApp();
        } else {
            $('#connectButton').show();
            alert('Please, change network');
        }
    }

    function timer(newDate) {
        $('#countdown').timeTo({
            timeTo: new Date(newDate),
            displayDays: 0,
        });

        $('.timeTo div:eq(1)').after('<span>:</span>');
    }

    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = month + ' ' + date + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }
    return (
        <div>
            <section className="invest" id="invest">
                <div className="container">
                    <div className="section-title" style={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}>
                        <h2>
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
                                        $ 0
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
                                        $ 0
                                    </p>
                                </li>

                                {/* <li className="invest-list__item">
                                   <h3 className="invest-list__title">
                                       deleted Block
                                   </h3>
                                   <p className="invest-list__value"><span id="contractBalance"></span>
                                       BNB
                                   </p>
                               </li> */}

                            </ul>
                            <div className="invest-bottom">
                                <div className="invest-connect">
                                    <span className="invest-connect__token f-center-center">
                                        BNB
                                    </span>

                                    <input id="investAmount" type="" name="invest" placeholder="500" step="" />
                                    <button onClick={deposit} className="main-btn main-btn_blue invest-connect__btn">
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
                                        $ 0
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
                                        $ 0
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
                                        $ 0
                                    </p>
                                </li>
                            </ul>
                            <div className="invest-bottom">
                                <div className="invest-offer f-center">
                                    <button onClick={withdraw} type="button" className="main-btn">
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
