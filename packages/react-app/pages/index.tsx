// This is the main page of the app

// Import the AddProductModal and ProductList, RandomProduct components
import AddProductModal from "@/components/modals/AddProductModal";
import ProductList from "@/components/ProductList";
import RandomProductModal from "@/components/modals/RandomProductModal";

// Export the Home component
export default function Home() {
  return (
    <div>
        <AddProductModal />
        <RandomProductModal/>
        <ProductList />
    </div>
  )
}