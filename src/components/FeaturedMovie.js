import React from "react";
import { FEATURED_MOVIE, VERTICAL_EFFECT, HORIZONTAL_EFFECT, FEATURED_TITLE, FEATURED_INFO, FEATURED_DESCRIPTION, FEATURED_BUTTONS, FEATURED_GENRES } from '../styles'

export default function FeaturedMovie(props) {

    let firstDate = new Date(props.item.first_air_date)
    let genres = []
    for (let i in props.item.genres) {
        genres.push(props.item.genres[i].name)
    }

    return (
        <FEATURED_MOVIE img={props.item.backdrop_path}>
            <VERTICAL_EFFECT>
                <HORIZONTAL_EFFECT>
                    <FEATURED_TITLE>{props.item.original_name}</FEATURED_TITLE>
                    <FEATURED_INFO>
                        <div>{props.item.vote_average} pontos</div>
                        <div>{firstDate.getFullYear()}</div>
                        <div>{props.item.number_of_seasons} Temporada{props.item.number_of_seasons != 1 ? 's' : ''}</div>
                    </FEATURED_INFO>
                    <FEATURED_DESCRIPTION>{props.item.overview}</FEATURED_DESCRIPTION>
                    <FEATURED_BUTTONS>
                        <a href={`/watch/${props.item.id}`}>▶ Assistir</a>
                        <a href={`/list/add/${props.item.id}`}>+ Minha lista</a>
                    </FEATURED_BUTTONS>
                    <FEATURED_GENRES><strong>Generos: </strong>{genres.join(', ')}</FEATURED_GENRES>
                </HORIZONTAL_EFFECT>
            </VERTICAL_EFFECT>
        </FEATURED_MOVIE>
    )
}