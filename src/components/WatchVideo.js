import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function WatchVideo(){
    const nomeCreator = "BAYC";
    return(
        <WatchStyles>
            <Header/>
            <PageContent>
                <HeaderWatch>
                    <h1>{nomeCreator} <span>- Exclusive Content</span></h1>
                    <div>
                    <div>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </HeaderWatch>
                <ContentStyle>
                    <VideoStyle/>
                    <InfoStyle/>
                </ContentStyle>
            </PageContent>
            <Footer/>
        </WatchStyles>
    );
}

const WatchStyles = styled.div`

`;

const PageContent = styled.div`
    padding-left: 3%;
    padding-right: 2%;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 80px;
    top: 75px;
    width: 100%;
`;

const HeaderWatch = styled.div`
    display: flex;
    margin-top: 12px;
    margin-bottom: 12px;
    justify-content: space-between;
    align-items: center;
    h1{
        font-weight: bold;
        font-size: 24px;
        color: #FFFFFF;
        cursor: pointer;
        span{
            color: #24FEC1;
        }
    }
    div{
        display: flex;
        justify-content: space-between;
        width: 17%;
        height: 40px;
        div{
            width: 20%;
            background: #24FEC1;
        }
    }
`;

const ContentStyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const VideoStyle = styled.div`
    width: 58%;
    height: 10px;
    background: #272727;
    height: 21em;
`;

const InfoStyle = styled.div`
    width: 35%;
    height: 10px;
    background: #272727;
    height: 21em;
`;