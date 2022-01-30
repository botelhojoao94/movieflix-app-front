import styled from 'styled-components'

export const MAIN_PAGE = styled.div`

`

export const HEADER = styled.header`
    position: fixed;
    z-index:998;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 30px ;
    transition: all ease 0.2s;
    background-color: ${props => props.blackHeader ? `#141414` : `transparent`};

    div:nth-of-type(1) {
        height: 35px;
    }

    div:nth-of-type(2) {
        height: 35px;
    }

    div:nth-of-type(1) img {
        height: 100%;
    }

    div:nth-of-type(2) img {
        height: 100%;
        border-radius: 3px;
    }
`

export const FEATURED_MOVIE = styled.div`
    height: 85vh;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url(https://image.tmdb.org/t/p/original${props.img})`};
`

export const VERTICAL_EFFECT = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`

export const HORIZONTAL_EFFECT = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
`
export const FEATURED_TITLE = styled.div`
    font-size: 60px;
    font-weight: bold;

    @media (max-width: 760px){
        font-size: 40px;
    } 
`

export const FEATURED_INFO = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;

    div:nth-of-type(1), div:nth-of-type(2), div:nth-of-type(3) {
        display: inline-block;
        margin-right: 15px;
    }

    div:nth-of-type(1) {
        color: #46d369;
    }

    @media (max-width: 760px){
        font-size: 16px;
    } 
`

export const FEATURED_DESCRIPTION = styled.div`
    color: #999;
    font-size: 20px;
    margin-top: 15px;
    max-width: 40%;

    @media (max-width: 760px){
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    } 
`

export const FEATURED_BUTTONS = styled.div`
    margin-top: 15px;

    a:nth-of-type(1), a:nth-of-type(2) {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 12px 25px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 10px;
        opacity: 1;

        @media (max-width: 760px){
        font-size: 16px;
        } 
    }

    a:nth-of-type(1) {
        background-color: #fff;
        color: #000;
    }

    a:nth-of-type(2) {
        background-color: #333;
        color: #fff;
    }

    a:nth-of-type(1):hover, a:nth-of-type(2):hover {
        opacity: 0.7;
    }
`

export const FEATURED_GENRES = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;

    @media (max-width: 760px){
        font-size: 14px;
    } 
`

export const LIST_OF_SECTIONS = styled.div`

`

export const ARROW_LEFT = styled.div`
    left: 0;
    position: absolute;
    z-index: 99;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    @media (max-width: 760px){
        opacity: 1;
    } 
`

export const ARROW_RIGHT = styled.div`
    right: 0;
    position: absolute;
    z-index: 99;
    overflow: hidden;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    @media (max-width: 760px){
        opacity: 1;
    }
`

export const SECTION = styled.div`
    margin-bottom: 30px;

    &:hover ${ARROW_LEFT}{
        opacity: 1;
    }

    &:hover ${ARROW_RIGHT}{
        opacity: 1;
    }
`

export const SECTION_TITLE = styled.h2`
    margin: 0 0 0 30px;
`

export const ALL_MOVIES = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`

export const ALL_MOVIES_LIST = styled.div`
    margin-left: ${props => `${props.marginLeft}px`};
    width: ${props => `${props.width}px`};
    transition: all ease 0.5s;
`

export const MOVIE = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;

    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }

    img:hover {
        transform: scale(1);
    }
`

export const LOADING = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 500px;
    }
`