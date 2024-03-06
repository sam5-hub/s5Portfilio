import HeroPage from "@/app/home/Hero";
import Footer from "@/app/home/Footer";
import {BentoGridThirdDemo} from "@/components/framemotion/BentoGridThirdDemo";
import {BouncyCardsFeatures} from "@/app/home/BouncyCardsFeatures";
import {ProjectBentoGrid} from "@/app/home/ProjectBentoGrid";
import {Header} from "@/app/home/Header";

export default function Home({darkMode, toggleDarkMode}) {

    return (
        <div className="flex flex-col gap-10">

            <Header/>
            <HeroPage/>
            <ProjectBentoGrid/>
            <BouncyCardsFeatures/>
            {/*<BentoGridThirdDemo/>*/}
            {/*<Footer/>*/}

        </div>

    );
}
