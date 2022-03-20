import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import arrowImg from "../img/arrow.png";

export default function UploadVideo(){
    return(
        <UploadStyles>
            <Header/>
            <UploadForm>
                <ImgStyle src={arrowImg}/>
                <TitleUpload>upload<span>.video</span></TitleUpload>
                <ButtonStyle type="file"/>
                
            </UploadForm>
            <Footer/>
        </UploadStyles>
    );
}

const UploadStyles = styled.div``;

const UploadForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30em;
    position: fixed;
    top: 75px;
    width: 100%;

`;

const TitleUpload = styled.h1`
    font-weight: bold;
    font-size: 30px;
    color: #FFFFFF;
    span{
        color: #24FEC1;
    }
`;

const ImgStyle = styled.img`
    height: 110px;
    width: 110px;
    margin-bottom: 15px;
`;

const ButtonStyle = styled.input`
    margin-top: 14px;
    background: #24FEC1;
    border: none;
    font-weight: bold;
    font-size: 18px;
    width: 10%;
    height: 30px;
`;
