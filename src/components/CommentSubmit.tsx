import CommentItem from "./CommentItem";
import Comment from "../types/Comment";

import React from "react";

const SubmitForm = (b: string, a: string, t: Date) => {
    const comment: Comment = {
        body: b,
        author: a,
        timestamp: t
    };
    return comment;
}