import React, { useEffect, useState } from 'react'
import { MAIN_PAGE, LIST_OF_SECTIONS, LOADING } from './styles'
import FeaturedMovie from './components/FeaturedMovie'
import PageHeader from './components/PageHeader'
import MovieSection from './components/MovieSection'
import Tmdb from './Tmdb'
import loading from './assets/images/loading.gif'


function App() {

    const [movieList, setMovieList] = useState([])
    const [featuredData, setFeaturedData] = useState(null)
    const [blackHeader, setBlackHeader] = useState(false)

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList()
            setMovieList(list)

            let originals = list.filter((item) => item.slug === 'originals')
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
            let chosen = originals[0].items.results[randomChosen]
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
            setFeaturedData(chosenInfo)

        }

        loadAll()
    }, [])

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY >= 10)
                setBlackHeader(true)
            else
                setBlackHeader(false)
        }

        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return (
        <MAIN_PAGE>
            <PageHeader blackHeader={blackHeader} />
            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }
            <LIST_OF_SECTIONS>
                {movieList.map((item, key) => {
                    return (
                        <MovieSection key={key} title={item.title} items={item.items} />
                    )
                })}
            </LIST_OF_SECTIONS>
            {movieList.length <= 0 &&
                <LOADING>
                    <img src={loading}></img>
                </LOADING>
            }
        </MAIN_PAGE>
    );
}

export default App;
