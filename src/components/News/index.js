import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectArticlesLoading, selectArticlesError, selectArticles } from "../../store/articles/selectors";
import { getArticles } from "../../store/articles/actions";
import {Button} from "../Button";
import './style.css';

export const News = () => {

    const dispatch = useDispatch();
    const loading = useSelector(selectArticlesLoading);
    const error = useSelector(selectArticlesError);
    const articles = useSelector(selectArticles);

    const requestArticles = useCallback(() => {
        dispatch(getArticles());
    }, []);

    useEffect(() => {
        requestArticles();
    }, []);

    if (loading) {
        return <h3>LOADING</h3>;
    }

    if (error) {
        return (
            <>
                <h3>Request error</h3>
                <Button onClick={requestArticles}>TRY AGAIN</Button>
            </>
        );
    }

    if (!articles.length) {
        return <h3>No articles</h3>;
    }

    return (
        <ul>
            {articles.map((a) => (
                <React.Fragment key={a.id}>
                    <li><a href={a.url} target="_blank">
                        <img src={a.imageUrl} />
                        <span>{a.publishedAt}</span><br />
                        {a.title}
                    </a>
                    </li>
                </React.Fragment>
            ))}
        </ul>
    );
};