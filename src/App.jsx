import './App.css'
import './Componenten/button/Button.jsx'
import Button from "./Componenten/button/Button.jsx";
import handyBag from  "./assets/bag_1.png"
import stylishBag from  "./assets/bag_2.png"
import simpleBag from  "./assets/bag_3.png"
import trendyBag from  "./assets/bag_4.png"
import Product from "./Componenten/product/Product.jsx";
import Tile from "./Componenten/tile/Tile.jsx";
import ourBrand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";


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
                <Tile
                sectionTitle="Our Brand"
                sectionText="potenti cubilia iusto urna quem eos adipisci natum adhuc laoreet faucibus novum utamur melius deseruisse mollis falli laudem maluisset electram vel legimus tractatos ac ius"
                />
                  <Tile
                        tileImg={ourBrand}
                  />
                  <Tile
                    tileImg={ourStory}
                  />
                  <Tile
                  sectionTitle="Our Story"
                  sectionText="reprehendunt enim eam gravida mediocrem justo magna cubilia per cras eliore constituto docendi solum invidunt sit litora mediocrem fabellas himenaeos laudem rhoncus sale latine porta faucibus mus contentiones tibique doming vehicula quas singulis enim ullamcorper appetere ridens postulant mollis assueverit"
                  />
              </footer>
          </>
      </>
  );
}

export default App
