import FormSubmission from "../components/FormSubmission";
import { Link } from "react-router-dom";
import React from "react";

const AddCommentView: React.FC = () => {
    return (
        <>
            <h1> {"Insert a Comment"} </h1>
            <br />
            <FormSubmission
                commentArray={[
                    {
                        body:
                            "Any fool can write code that a computer can understand.\n" +
                            "Good programmers write code that humans can understand.\n" +
                            " ~ Martin Fowler",
                        author: "Benedict",
                        timestamp: new Date(2022, 10, 28, 10, 33, 30),
                    },
                ]}
            />
            <br />
            <Link to="/thread/1">{`<- Back to thread`}</Link>
        </>
    );
};

export default AddCommentView;
