
import CardUi from "./CardUi";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CARTSLICE";
import NavBar from "./NavBar";

export default function CardList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (!existingItem) {
      dispatch(addItem(product));
    }
  };

  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://www.evosmart.it/wp-content/uploads/2020/01/iphone-8-64-gb-960x553.jpg",
    },
    {
      id: 2,
      title: "iPhone X",
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://tse1.mm.bing.net/th?id=OIP.vx-zx2OtnTERHd8IGo1W0AHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4D0xR0A__35F9YOKK_kvI5V7Z8tFelYj8cw&s",
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail:
        "https://tse3.mm.bing.net/th?id=OIP.P-xPOvf42M3RwKEO3bNCjAHaE7&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      title: "Huawei P30",
      description: "Huawei’s re-badged P30 Pro New Edition",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnzWrhVypbABDihQGicZrKjesL-MxtYy8jjw&s",
    },
  ];

  return (
    <>
      <NavBar />

      <div
        className="d-flex flex-wrap  text-white "
        style={{
          gap: "3%",
          marginBottom: "20px",
          marginTop: "55px",
          height: "600px",
        }}
      >
        {products.map((elements) => (
          <CardUi
            key={elements.id}
            {...elements}
            id={elements.id}
            addItem={
              <button
                className="btn btn-primary"
                style={{ border: "none", width: "100%" }}
                onClick={() => handleAddItem(elements)}
              >
                Add Item Store
              </button>
            }
          />
        ))}
      </div>
    </>
  );
}
