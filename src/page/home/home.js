import Hero from "../../components/hero/hero.js";
import Layanan from "../../components/layanan/layanan.js";
import Tentang from "../../components/tentang/tentang.js";
import Stats from "../../components/stats/stats.js";
import KlienKami from "../../components/klienkami/klienkami.js";
import Pertanyaan from "../../components/pertanyaan/pertanyaan.js";

function Home(){
    return (<div>
        <Hero/>
        <Tentang/>
        <Layanan/>
        <Stats/>
        <KlienKami/>
        <Pertanyaan/>
    </div>)
}

export default Home;