import { products } from "@/utils/Products"
import { truncateText } from "@/utils/truncateText"
import Container from "./components/Container"
import HomeBanner from "./components/HomeBanner"
import ProductCard from "./components/products/ProductCard"


//server side component-rendered on the server


export default function Home() {
  return (
    <div className="p-8"> 
      <Container>
        <div>
          <HomeBanner/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product: any) => {
            return <ProductCard data={product}/> 
          })}
        </div>
      </Container>
    </div>
  )
}
