import styled from "styled-components";

export const Container = styled.footer`
    border-top: 1px solid #e6e6e6;
    margin-top:10vh;
`
export const FooterBar = styled.section`
    width:100%;
    height:60vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Logo = styled.div`
    width:25%;
    height:40%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width:70%;
        cursor: pointer;
    }
`
export const Contact = styled.div`
    width:65%;
    height:40%;
    display: flex;
    justify-content: space-around;
    align-items: start;
`
export const BandMembers = styled.div`
    h2{
        margin-bottom:3vh;
        color:#B8860B;
        text-shadow: 0px 0px 5px #333;
    }
`
export const BandMember = styled.div`
    p{
        width:fit-content;
        margin-bottom:1vh;
        font-size:1.2vw;
        &:hover{
            color:#5C703B;
            cursor: pointer;
        }
    }
`
export const SocialMedia = styled.div`
    h2{
        margin-bottom:3vh;
        color:#B8860B;
        text-shadow: 0px 0px 5px #333;
    }
`
export const SocialMediaItem = styled.div`
    display: flex;
    flex-direction:column;
    a{
        width:fit-content;
        margin-bottom:1vh;
        font-size:1.2vw;
        &:hover{
            color:#5C703B;
            cursor: pointer;
        }
    }
`
export const Show = styled.div`
    h2{
        margin-bottom:3vh;
        color:#B8860B;
        text-shadow: 0px 0px 5px #333;
    }
`
export const Date = styled.div`
    p{
        width:fit-content;
        margin-bottom:1vh;
        font-size:1.2vw;
    }
`
export const Links = styled.div`
    h2{
        margin-bottom:3vh;
        color:#B8860B;
        text-shadow: 0px 0px 5px #333;
    }
`
export const LinkList = styled.nav`
    
`
export const LinkItem = styled.ul`
display: flex;
flex-direction:column;
a{
    width:fit-content;
    margin-bottom:1vh;
    font-size:1.2vw;
    &:hover{
        color:#5C703B;
        cursor: pointer;
    }
}
`
export const Copyright = styled.section`
    width:100%;
    height:7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top:1px solid white;
    p{
        font-weight:100;
        font-size:1vw;
    }
`
export const References = styled.section`
    width:100%;
    height:7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5C703B;
    p{
        font-weight:100;
        font-size:0.7vw;
        font-family: 'Roboto', sans-serif;
    }
`