import React from 'react'
import styled from "styled-components"
import { FaArchway } from "react-icons/fa";
import { ImSpinner10 } from "react-icons/im";
import { BiMessageDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCheckmarkDoneOutline, IoCheckmarkOutline } from "react-icons/io5";
import img1 from "../img/me.jpg"
import img2 from "../img/p.jpeg"
import img3 from "../img/b.jpeg"
import img4 from "../img/n.jpg"
import img5 from "../img/eze.jpeg"
import img6 from "../img/nn.jpg"
import img7 from "../img/2.jpg"
import img8 from "../img/s.jpeg"
import img9 from "../img/u.jpeg"
import img10 from "../img/1.jpg"
import img11 from "../img/4.jpg"
import whatts from "../img/whatts.png"

const Whatsapp = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <TopBar>
                        <ImageCon>
                            <Img src={img1}/>
                        </ImageCon>
                        <Icons>
                            <FaArchway style={{
                                "margin-right": "25px",
                                "cursor": "pointer"
                            }}/>
                            <ImSpinner10 style={{
                                "margin-right": "25px",
                                "cursor": "pointer"
                            }}/>
                            <BiMessageDetail style={{
                                "margin-right": "25px",
                                "cursor": "pointer"
                            }}/>
                            <BsThreeDotsVertical style={{
                                "cursor": "pointer"
                            }}/>
                        </Icons>
                    </TopBar>
                    <SearchContainer>
                        <SearchCon>
                            <AiOutlineSearch style={{
                                "margin-left": "20px",
                                "cursor": "pointer",
                                "color": "gray",
                                "font-size": "20px"
                            }}/>
                            <input type="text" placeholder="Search or start a new chat"/>
                            <Dot/>
                        </SearchCon>
                    </SearchContainer>
                    <ChatBox>
                        <Chat1>
                            <ImgChat1 src={img2}/>
                            <Info>
                                <NameTime>
                                    <Name>Mr Peter</Name>
                                    <Time>4:16 pm</Time>
                                </NameTime>
                                <Post><IoCheckmarkDoneOutline style={{
                                    "fontSize": "20px",
                                    "color":"#bdbdbd;",
                                    "marginRight": "5px",
                                }}/>Good evening sir</Post>
                            </Info>
                        </Chat1>
                        <Chat1>
                            <ImgChat1 src={img3}/>
                            <Info>
                                <NameTime>
                                    <Name>Mrs Bukola</Name>
                                    <Time>5:00 pm</Time>
                                </NameTime>
                                <Post><IoCheckmarkOutline style={{
                                    "fontSize": "20px",
                                    "color":"#bdbdbd;",
                                    "marginRight": "5px",
                                }}/>Good evening Ma</Post>
                            </Info>
                        </Chat1>
                        <Chat1>
                            <ImgChat1 src={img4}/>
                            <Info>
                                <NameTime>
                                    <Name>Happy❤😍😘💕</Name>
                                    <Time>5:02 pm</Time>
                                </NameTime>
                                <Post><IoCheckmarkDoneOutline style={{
                                    "fontSize": "20px",
                                    "color":"#bdbdbd;",
                                    "marginRight": "5px",
                                }}/>Yo Watsup Beautiful?</Post>
                            </Info>
                        </Chat1>
                        <Chat1>
                            <ImgChat1 src={img5}/>
                            <Info>
                                <NameTime>
                                    <Name>Eze Comb</Name>
                                    <Time>5:06 pm</Time>
                                </NameTime>
                                <Post><IoCheckmarkOutline style={{
                                    "fontSize": "20px",
                                    "color":"#bdbdbd;",
                                    "marginRight": "5px",
                                }}/>Hello House😜</Post>
                            </Info>
                        </Chat1>
                        <Chat1>
                              <ImgChat1 src={img6}/>
                            <Info>
                                <NameTime>
                                    <Name>CodeLab General Group</Name>
                                    <Time>5:06 pm</Time>
                                </NameTime>
                                <Post><IoCheckmarkDoneOutline style={{
                                    "fontSize": "20px",
                                    "color":"#bdbdbd;",
                                    "marginRight": "5px",
                                }}/>Colin Codelab: Ok ma</Post>
                            </Info>
                        </Chat1>
                        <Chat1>
                            <ImgChat1 src={img7}/>
                            <Info>
                                <NameTime>
                                    <Name>Grace❤</Name>
                                    <Time>5:08 pm</Time>
                                </NameTime>
                                <Post><IoCheckmarkOutline style={{
                                    "fontSize": "20px",
                                    "color":"#bdbdbd;",
                                    "marginRight": "5px",
                                }}/>watsup</Post>
                            </Info>
                        </Chat1>
                        <Chat1>
                             <ImgChat1 src={img8}/>
                            <Info>
                                <NameTime>
                                    <Name>Mr Samuel</Name>
                                    <Time>5:16 pm</Time>
                                </NameTime>
                                <Post><IoCheckmarkDoneOutline style={{
                                    "fontSize": "20px",
                                    "color":"#bdbdbd;",
                                    "marginRight": "5px",
                                }}/>Am good sir.</Post>
                            </Info>
                        </Chat1>
                        <Chat1>
                                <ImgChat1 src={img9}/>
                            <Info>
                                <NameTime>
                                    <Name>Mr Ubani</Name>
                                    <Time>5:18 pm</Time>
                                </NameTime>
                                <Post><IoCheckmarkOutline style={{
                                    "fontSize": "20px",
                                    "color":"#bdbdbd;",
                                    "marginRight": "5px",
                                }}/>Sir can I see you today</Post>
                            </Info>
                        </Chat1>
                        <Chat1>
                             <ImgChat1 src={img10}/>
                            <Info>
                                <NameTime>
                                    <Name>Set O4</Name>
                                    <Time>yesterday</Time>
                                </NameTime>
                                <Post><IoCheckmarkDoneOutline style={{
                                    "fontSize": "20px",
                                    "color":"#bdbdbd;",
                                    "marginRight": "5px",
                                }}/>any work?</Post>
                            </Info>
                        </Chat1>
                        <Chat1>
                             <ImgChat1 src={img11}/>
                            <Info>
                                <NameTime>
                                    <Name>Sunday</Name>
                                    <Time>Tuesday</Time>
                                </NameTime>
                                <Post><IoCheckmarkOutline style={{
                                    "fontSize": "20px",
                                    "color":"#bdbdbd;",
                                    "marginRight": "5px",
                                }}/>Big boss</Post>
                            </Info>
                        </Chat1>
                    </ChatBox>
                </Left>
                <Right>
                    <WhatsappImag src={whatts}/>
                    <Text1>Keep your phone connected</Text1>
                    <Text2>WhatsApp connect to your phone
                        to sync message. To reduce data usage, 
                        connect your phone to Wi-Fi
                    </Text2>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Whatsapp
const Text2 = styled.div`
    width: 490px;
    text-align: center;
    color: #bdbdbd;
`
const Text1 = styled.div`
    font-size: 33px;
    font-weight: 600;
    color: #dbd9d9;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 20px;
`
const WhatsappImag = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #fff;
    object-fit: cover;
    margin-bottom: 30px;
    border: none;
`
const Right = styled.div`
    background-color: #131C21;
    width: 69%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 800px) and (min-width: 320px){
        display: none;
    }
`
const Post = styled.div`
    margin-bottom: 10px;
    font-size: 13px;
    color: #bdbdbd;
    display: flex;
    align-items: center;
`
const Time = styled.div`
    color: #bdbdbd;
    font-size: 12px;
    margin-right: 10px;
`
const Name = styled.div`
    font-size: 20px;
    color: #dbd9d9;
`
const NameTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column; 
    margin-left: 20px; 
    border-bottom: 1px solid #5a5a5a96; 

        :hover{
            border-bottom: none;
        }
`
const ImgChat1 = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #fff;
    object-fit: cover;
    margin-left: 10px;
`
const Chat1 = styled.div`
    display: flex;
    height: 68px;
    width: 100%;
    align-items: center;
    transition: all 350ms;
    cursor: pointer;

    :hover{
        background-color: #5a5a5a96;
    }
`
const ChatBox = styled.div`
    width: 100%;
    height: 78vh;
    margin-top: 10px;
    overflow-y: scroll;
    /* background-color: #fff; */

    ::-webkit-scrollbar{
        width: 15px;
    }

    /* ::-webkit-scrollbar-track{
        background-color: blue;
    } */

    ::-webkit-scrollbar-thumb{
        background-color: #394045;
        border-radius: 20px;
        border: 4px solid transparent;
        background-clip: content-box;
    }
`
const Dot = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: lightgreen; 
    border: 1px solid whitesmoke;
    margin-top: 5px;
`
const SearchCon = styled.div`
    width: 93%;
    height: 65%;
    background-color: #2A2F32;
    border-radius: 50px;
    display: flex;
    align-items: center;

    input{
        width: 70%;
        margin: 0px 20px;
        height: 64%;
        border: none;
        outline: none;
        background-color: transparent;
        color: lightgray;
        font-size: 15px;
    }
`
const SearchContainer = styled.div`
    width: 100%;
    height: 60px;
    /* background-color: #fff; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #5a5a5a96;
`
const Icons = styled.div`
    display: flex;
    color: #B1B3B5;
    margin: 0px 30px;
    font-size: 23px;
`
const Img = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    /* background-color: #fff; */
    margin: 0px 20px;
    object-fit: contain;
    border: 1px solid whitesmoke;
`
const ImageCon = styled.div`
flex: 1;
`
const TopBar = styled.div`
    width: 100%;
    height: 63px;
    background-color: #2A2F32;
    display: flex;
    align-items: center;
`
const Left = styled.div` 
    width: 31%;
    height: 100%;
    min-height: 99.7vh;
    background-color: #131C21;
    display: flex;
    flex-direction: column;
    border: 1px solid #5a5a5a96;

    @media screen and (max-width: 800px) and (min-width: 320px){
        width: 100%;
    }
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
`