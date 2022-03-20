import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import arrowImg from "../img/arrow.png";
import { useState } from "react";
import axios from "axios";

export default function UploadVideo(){
    const [name, setName] = useState("");
    const [file, setFile] = useState();

    function uploadToLivePeer(){
        if(name === ""){
            alert("É necessário um nome!");
            return;
        }
        if(!file){
            alert("Faça upload de um vídeo!");
            return;
        }
        const config = {
            headers:{
                'Authorization': 'Bearer 59a38eab-4eb0-4a51-ad20-bf1e58204e86',
                'Content-Type': 'application/json'
            }
        }
        const data = {
            "name": name
        }
        const url = "https://livepeer.com/api/asset/request-upload"
        const response = axios.post(url, data, config);
        response.then(res =>{
            const path = (window.URL || window.webkitURL).createObjectURL(file);
            
            const url2 = res.data.url;
            const config2 = {
                headers: {
                    'Content-Type': 'video/mp4'
                }
            }
            console.log(path);
            const data2 = {
                "data-binary": `@${path}`
            }
            const response2 = axios.put(url2,data2, config2);
            response2.then(res2 => {
                console.log(res2);
            });
            response2.catch(err2 => {
                console.log(err2);
            })
        })
        response.catch(err => {
            console.log(err);
        })
    }
    
    return(
        <UploadStyles>
            <Header/>
            <UploadForm>
                <ImgStyle src={arrowImg} onClick={uploadToLivePeer}/>
                <TitleUpload>upload<span>.video</span></TitleUpload>
                <ButtonStyle>search
                    <InputStyle type="file"                    
                    onChange={e => {
                        console.log(e);
                        e.preventDefault();
                        setFile(e.target.files[0]);
                    }}/>
                </ButtonStyle>
                <TextInputStyle>
                    <h3>name*</h3>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                </TextInputStyle>
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
    cursor: pointer;
`;

const InputStyle = styled.input`
    display: none;
`;

const ButtonStyle = styled.label`
    color: #000000;
    margin-top: 14px;
    background: #24FEC1;
    border: none;
    font-weight: bold;
    font-size: 18px;
    width: 10%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        display: hidden;
    }
`;

const TextInputStyle = styled.div`
    margin-top: 13px;
    background: #212121;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 80px;
    padding-left: 5%
    padding-right: 5%;
    align-items: center;
    h3{
        display: block;
        font-weight: bold;
        color: #FFFFFF;
        width: 90%;
        margin-bottom: 4px;
        margin-top: 3px;
    }
    input{
        background: #272727;
        border: none;
        width: 90%;
        height: 38px;
    }
`;
