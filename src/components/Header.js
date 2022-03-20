import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header(){
    const history = useNavigate();
    const [userAddress, setUserAddress] = useState("");

    async function checkConnection(onConnected){
        if(window.ethereum){
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if(accounts.length > 0){
                const account = accounts[0];
                onConnected(account);
                return;
            }
        }
    }

    async function connect(onConnected){
        if(!window.ethereum){
            alert("Get Metamask!");
            return;
        }
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        onConnected(accounts[0]);
    }



    useEffect(() => {
        checkConnection(setUserAddress);

    }, []);

    return(
        <HeaderStyle>
            <TitleHeaders onClick={() => history("/")}>art.<span>crypt</span></TitleHeaders>
            <LinksContainer>
                <LinksHeaders 
                onClick={() => history("/upload")}>upload video</LinksHeaders>
                <LinksHeaders>I'm a creator</LinksHeaders>
                <LinksHeaders onClick={() => history("/watch")}>watch video</LinksHeaders>
                <div/>
            </LinksContainer>
            
            <TitleHeaders
            onClick={() => connect(setUserAddress)}
            ><span>wallet</span></TitleHeaders>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
    height: 75px;
    background: #212121;
    padding-left: 50px;
    padding-right: 50px;
`;

const TitleHeaders = styled.h1`
    font-weight: bold;
    font-size: 24px;
    color: #FFFFFF;
    cursor: pointer;
    span{
        color: #24FEC1;
    }
`;

const LinksHeaders = styled.h2`
    font-weight: bold;
    color: #FFFFFF;
    font-size: 16px;
    cursor: pointer;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
`;