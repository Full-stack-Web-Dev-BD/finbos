import React, { useEffect } from 'react'
import { useState } from 'react';
import { HashLink } from "react-router-hash-link";
import Web3 from 'web3'
import Contract from 'web3-eth-contract';
import { connectWallet, getWalletAddressOrConnect } from '../../wallet'

const abi = require('../abi.json')
const contractAddress = "0xdFA13D1b2850f623ADD9921337e9193Ad3559f80";

const Home = () => {

    const [myReword, setMyReword] = useState(null)
    const [mobileNav, setMobileNav] = useState(false)

    const connectWC = async () => {
        await connectWallet()
    }



    const fetchReword = async () => {
        var acc = await getWalletAddressOrConnect()
        console.log("mywc is ", acc);
        if (typeof window.web3 !== 'undefined') {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            var web3Provider = new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org")
            window.web3 = new Web3(web3Provider)
        }
        Contract.setProvider(window.web3.currentProvider);
        var contract = new Contract(abi, contractAddress);
        console.log(contract)

        const reword = await contract.methods.withdrawableDividendOf(acc).call({ from: acc })
        console.log("my reword is ", reword)
        document.getElementById("connect").innerHTML = `${reword} BUSD(Reward)`
        document.getElementById("fetch_reword").innerHTML = `${reword} BUSD(Reward)`
        document.getElementById("fetch_reword").style.color = "white"
        document.getElementById("fetch_reword").style.fontWeight = "600"

        setMyReword(reword)
    }



    const hideNav = () => {
        document.getElementById('my_nav').style.left = "-365px"
        setMobileNav(false)
    }
    const showNav = () => {
        document.getElementById('my_nav').style.left = 0
        setMobileNav(true)
    }
    return (
        <div>
            {/* html goes here  */}
            <h2>Hello world!</h2>
        </div>
    )
}

export default Home