import CommentItem from "./CommentItem";
import Comment from "../types/Comment";
import React, { useState } from "react";

type Props = {
    commentArray: Comment[];
};

const FormSubmission: React.FC<Props> = ({ commentArray }: Props) => {
    const [number, setNumber] = useState(0);
    const answer = { body: "", author: "", timestamp: new Date(2022, 10, 28, 10, 33, 30) };
    const [comments, setComments] = useState(commentArray);
    const [cAuthor, setCAuthor] = useState("");
    const [cBody, setCBody] = useState("");

    function handleClick() {
        answer.author = cAuthor;
        answer.body = cBody;
        answer.timestamp = new Date();
        setNumber(number + 1);
        submitForm(answer);
    }

    function handleAuthorChange(e: { target: { value: React.SetStateAction<string> } }) {
        setCAuthor(e.target.value);
    }

    function handleBodyChange(e: { target: { value: React.SetStateAction<string> } }) {
        setCBody(e.target.value);
    }

    function submitForm(response: Comment) {
        comments.push(response);
        setComments(comments);
    }

    return (
        <>
            <h4>{"Index: "}</h4>
            <h4>{number}</h4>
            <h4>
                {comments.map((comment) => (
                    <CommentItem comment={comment} styled={false} key="" />
                ))}
            </h4>
            <form onSubmit={handleClick}>
                <h4>Author: </h4>
                <textarea value={cAuthor} onChange={handleAuthorChange} />
                <br />
                <h4>Body: </h4>
                <textarea value={cBody} onChange={handleBodyChange} />
                <br />
                <button>Submit</button>
            </form>
        </>
    );
};

export default FormSubmission;
