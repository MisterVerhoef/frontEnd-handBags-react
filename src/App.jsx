import './App.css'
import './Componenten/button/Button.jsx'
import Button from "./Componenten/button/Button.jsx";
import handyBag from  "./assets/bag_1.png"
import stylishBag from  "./assets/bag_2.png"
import simpleBag from  "./assets/bag_3.png"
import trendyBag from  "./assets/bag_4.png"
import Product from "./Componenten/product/Product.jsx";


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
                  <p>© 2021 Handbags & Purses</p>
              </footer>
          </>
      </>
  );
}

export default App
