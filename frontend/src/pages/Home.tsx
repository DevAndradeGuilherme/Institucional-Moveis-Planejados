import './home.css'
import { HomeTextos } from "../components/HomeTextos";
import { HomeButton } from '../components/HomeButton';
import { HomeCards } from '../components/HomeCards';

export function Home() {
    return (
        <>
            <section id="home">
                <div className="background">
                    <HomeTextos/>
                    <HomeButton/>
                    <HomeCards/>
                </div>
            </section>
        </>
    )
}