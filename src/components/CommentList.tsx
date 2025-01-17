import CommentItem from "./CommentItem";
import Comment from "../types/Comment";

import React from "react";

type Props = {
    styled: boolean;
};

export const BasicCommentList: React.FC<Props> = ({ styled }: Props) => {
    const comments: Comment[] = [
        {
            body:
                "Any fool can write code that a computer can understand.\n" +
                "Good programmers write code that humans can understand.\n" +
                " ~ Martin Fowler",
            author: "Benedict",
            timestamp: new Date(2022, 10, 28, 10, 33, 30),
        },
        {
            body: "Code reuse is the Holy Grail of Software Engineering.\n" + " ~ Douglas Crockford",
            author: "Casey",
            timestamp: new Date(2022, 11, 1, 11, 11, 11),
        },
        {
            body: "Nine people can't make a baby in a month.\n" + " ~ Fred Brooks",
            author: "Duuet",
            timestamp: new Date(2022, 11, 2, 10, 30, 0),
        },
        {
            body: "What the heck is React? \n" + " ~ Desean",
            author: "Desean",
            timestamp: new Date(2023, 11, 25, 15, 19, 0),
        },
    ];

    return (
        <ul>
            {comments.map((comment) => (
                <CommentItem comment={comment} styled={styled} key="" />
            ))}
        </ul>
    );
};

export const NewCommentList: React.FC<Props> = ({ styled }: Props) => {
    const comments: Comment[] = [
        {
            body:
                "Any fool can write code that a computer can understand.\n" +
                "Good programmers write code that humans can understand.\n" +
                " ~ BabaBooey",
            author: "Benedict",
            timestamp: new Date(2022, 10, 28, 10, 33, 30),
        },
        {
            body: "Code reuse is the Holy Grail of Software Engineering.\n" + " ~ Douglas Crockford",
            author: "Malabogo",
            timestamp: new Date(2022, 11, 1, 11, 11, 11),
        },
        {
            body: "Nine people can't make a baby in a month.\n" + " ~ Fred Brooks",
            author: "Chippi",
            timestamp: new Date(2022, 11, 2, 10, 30, 0),
        },
        {
            body: "What the heck is React? \n" + " ~ Desean",
            author: "Chappa",
            timestamp: new Date(2023, 11, 25, 15, 19, 0),
        },
    ];

    return (
        <ul>
            {comments.map((comment) => (
                <CommentItem comment={comment} styled={styled} key="" />
            ))}
        </ul>
    );
};
