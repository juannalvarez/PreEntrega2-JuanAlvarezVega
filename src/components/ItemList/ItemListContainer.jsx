import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import Loader from "../Loader";
import Error from "../Error/Error";
import { useParams } from "react-router";

const ItemListContainer = () => {
    const categoryId = useParams().categoryId;
    const URL = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : "https://fakestoreapi.com/products";
    const [items] = useFetch(URL);

    if (items == null) {
        return <Loader />
    } else if (items !== null) {
        return <div className="">
            <ItemList items={items} />

        </div>
    } else {
        return <Error />
    }
}

export default ItemListContainer;