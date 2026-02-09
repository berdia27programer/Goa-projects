import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Books() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const API = await fetch("https://openlibrary.org/works/OL45804W.json")

                const res = await API.json()

                setData(res)
            } catch(err) {
                console.log(`Error has been appeared: ${err}`)
            }
        }

        fetchBooks()
    }, [])

    return (
        <View>
            <Text>Title: {data.title}</Text>
            <Text>Author: {data.authors.author}</Text>
            <Text>Description: {data.description}</Text>
            <Text>Subjects: {data.subjects}</Text>
            <Text>Covers: {data.covers}</Text>
        </View>
    )
}