import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import itemPrice from '../schema/itemPrice';

export default function FectDataItemPrices(name: string,locations:string) {
    return useQuery({
        queryKey: [name],
        queryFn: async () => {
            const { data } = await axios.get(
                `https://www.albion-online-data.com/api/v2/stats/Prices/${name}.json?locations=${locations}`
            );
            if (data.length > 1) {
                const fillterData = await data.filter((result: itemPrice) => {
                    const currentTime = new Date().toISOString().substring(0, 10);
                    const dateString = result.sell_price_min_date.substring(0, 10);
                    if (currentTime === dateString) return result
                })
                if (fillterData.length === 0) {
                    return data[0] as itemPrice;
                }
                return fillterData[0] as itemPrice;
            }
            return data[0] as itemPrice;
        },
    });
}