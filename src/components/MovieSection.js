import React, { useState } from "react";
import { SECTION, SECTION_TITLE, ARROW_LEFT, ARROW_RIGHT, ALL_MOVIES, ALL_MOVIES_LIST, MOVIE } from '../styles'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function MovieSection(props) {

    const [scrollX, setScrollX] = useState(0)

    function handleLeftArrow() {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    function handleRightArrow() {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listWidth = props.items.results.length * 150
        if ((window.innerWidth - listWidth) > x) {
            x = (window.innerWidth - listWidth) - 60
        }
        setScrollX(x)
    }

    return (
        <SECTION>
            <SECTION_TITLE>{props.title}</SECTION_TITLE>
            <ARROW_LEFT onClick={() => { handleLeftArrow() }}><NavigateBeforeIcon style={{ fontSize: 50 }} /></ARROW_LEFT>
            <ARROW_RIGHT onClick={() => { handleRightArrow() }}><NavigateNextIcon style={{ fontSize: 50 }} /></ARROW_RIGHT>
            <ALL_MOVIES>
                <ALL_MOVIES_LIST marginLeft={scrollX} width={props.items.results.length * 150} >
                    {props.items.results.length > 0 && props.items.results.map((item, key) => {
                        return (
                            <MOVIE key={key}>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </MOVIE>
                        )
                    })}
                </ALL_MOVIES_LIST>
            </ALL_MOVIES>
        </SECTION>
    )
}