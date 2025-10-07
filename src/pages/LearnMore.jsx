import React, { useEffect } from "react";
import { LearnMoreFooter } from "../components/LearnMoreFooter";
import { LearnMoreMain } from "../components/LearnMoreMain";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export function LearnMore() {


    const {store, dispatch} = useGlobalReducer()
    const { group, id } = useParams()


    async function getDetail(group, id) {
        const url = `https://swapi.tech/api/${group}/${id}`
        try {
            const response = await fetch(url)
            if (response.status != 200) {
                alert("Error, server not respond")
                return
            }
            const body = await response.json()
            return body.result
        } catch (error) {
            console.log("Error", error)
        }
    }

    useEffect(() => {
        const loadDetail = async () => {
            if (!group || !id) return

            const itemDetails = await getDetail(group, id);

            if (itemDetails) {
                dispatch({
                    type: "SET_CURRENT_ITEM_DETAIL",
                    payload: itemDetails
                });
            }
        };

        loadDetail();
    }, [group, id]);

    return (
        <div className="container">
            <LearnMoreMain name={store.detail.properties?.name}/>
            <LearnMoreFooter group={group}/>
        </div >

    )
}