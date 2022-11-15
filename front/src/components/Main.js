import React from 'react'
import WidgetStory from "../components/WidgetStory"
import WidgetPodium from "../components/WidgetPodium"
import WidgetAthlete from "../components/WidgetAthlete"
import WidgetQuizz from "../components/WidgetQuizz"

const Main = () => {

    return (
        <main className="main">
            <WidgetStory/>
            <WidgetPodium/>
            <WidgetAthlete/>
            <WidgetQuizz/>
        </main>
    );
};

export default Main;