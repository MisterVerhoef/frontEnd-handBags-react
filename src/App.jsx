import './App.css'
import './Componenten/button/Button.jsx'
import Button from "./Componenten/button/Button.jsx";
import handyBag from "./assets/bag_1.png"
import stylishBag from "./assets/bag_2.png"
import simpleBag from "./assets/bag_3.png"
import trendyBag from "./assets/bag_4.png"
import Product from "./Componenten/product/Product.jsx";
import brandLogo from "./assets/brand.png"
import ourStory from "./assets/our_story.png"


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button
                    title="to the collection"
                    isDisabled={false}

                />
                <Button
                    title="shop all bags"
                    isDisabled={false}

                />
                <Button
                    title="pre-orders"
                    isDisabled={true}

                />
            </nav>
            <>
                <main>
                    <Product
                        special="Bestseller"
                        productImg={handyBag}
                        productName="The handy bag"
                        price="€400"

                    />
                    <Product
                        special="Bestseller"
                        productImg={stylishBag}
                        productName="The stylish bag"
                        price="€250"

                    />
                    <Product
                        special="New collection"
                        productImg={simpleBag}
                        productName="The simple bag"
                        price="€300"

                    />
                    <Product
                        special="New collection"
                        productImg={trendyBag}
                        productName="The trendy bag"
                        price="€150"

                    />
                </main>
                <footer>
                    <section>
                        <h2>Our Brand</h2>
                        <p>mandamus tortor graeci consequat populo senectus posse facilisis purus corrumpit dolorum
                            persecuti discere atomorum dicunt postea eleifend aptent delectus proin</p>
                        <p>mandamus tortor graeci consequat populo senectus posse facilisis purus corrumpit dolorum
                            persecuti discere atomorum dicunt postea eleifend aptent delectus proin</p>

                    </section>
                    <section>
                        < img src={brandLogo} alt="brand logo"/>
                    </section>
                    <section>
                        < img src={ourStory}/>
                    </section>
                    <section>
                        <h2>Our Story</h2>
                        <p>porttitor pharetra finibus auctor salutatus curae deterruisset quaerendum tota suscipit
                            dictum disputationi omittam quaestio no est nobis wisi feugiat senectus convenire fuisset
                            habitant tellus dico inani nec deterruisset interdum vehicula nominavi percipit aliquam
                            theophrastus nisi voluptatum esse fermentum solum magna veri elementum suscipit detraxit
                            unum adversarium diam metus theophrastus oporteat</p>
                    </section>
                </footer>
            </>
        </>
    );
}

export default App
