import styled from 'styled-components';

export default function Header(){
    return(
        <HeaderStyle>
            <TitleHeaders>art.<span>crypt</span></TitleHeaders>
            <LinksContainer>
                <LinksHeaders>home</LinksHeaders>
                <LinksHeaders>I'm a creator</LinksHeaders>
                <div/> <div/>
            </LinksContainer>
            
            <TitleHeaders><span>wallet</span></TitleHeaders>
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
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
`;