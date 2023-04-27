import { Fragment } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function useDataItemPrices(name: string) {
    return useQuery({
        queryKey: [name],
        queryFn: async () => {
            const { data } = await axios.get(
                `https://www.albion-online-data.com/api/v2/stats/Prices/${name}.json?locations=Fort%20Sterling`
            );
            return data;
        },
    });
}

const Home = () => {
    const { data: stew, isLoading: x } = useDataItemPrices('T6_MEAL_STEW');
    const { data: omelet, isLoading: y } = useDataItemPrices('T3_MEAL_OMELETTE');
    if (!x) {
        console.log("stew", stew);
    }
    if (!y) {
        console.log("omelet", omelet);
    }
    return (
        <Fragment>
            <div className="flex justify-center max-w-screen min-h-screen bg-gray-900 text-white font-bold text-5xl">
                adasdds
            </div>
        </Fragment>
    );
};

export default Home;
