// pages/_app.js

import Layout from '../components/layout'
import CardList from "../components/CardList";
import QuestionnaresList from "../components/QuestionnaresList";

export default function App({ Component, pageProps }) {
    return <QuestionnaresList />
}