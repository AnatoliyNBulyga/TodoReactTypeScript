import React from "react";
import { useHistory } from "react-router-dom";

const About: React.FC = (props) => {
    const history = useHistory();
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda deleniti et eum facilis iste laborum magnam nihil, pariatur quas quis quisquam repellat, veniam, veritatis voluptatem? Asperiores non odio sunt.</p>
            <button className="btn" onClick={() => history.push('/')}>На главную</button>
        </>
    )
};
export default About;