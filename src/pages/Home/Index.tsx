import { Fragment } from "react";
import FectDataItemPrices from '../../api/getItemPrices';
import { calculateTotalCost } from "../../utility/calculateTotalPriceData";

const Home = () => {
    const { data: T7_MEAL_OMELETTE, isLoading: y } = FectDataItemPrices('T7_MEAL_OMELETTE', 'Fort%20Sterling');
    const testData = calculateTotalCost("T7_MEAL_OMELETTE", 10, 'Fort%20Sterling');
    console.log(T7_MEAL_OMELETTE);
    console.log("this is All cost", testData);
    if (T7_MEAL_OMELETTE) {
        console.log("This is profit", (T7_MEAL_OMELETTE?.sell_price_min * 100) - testData);
    }
    return (
        <Fragment>
            <div className="flex justify-center max-w-screen min-h-screen bg-gray-900 text-white font-bold text-5xl">
            </div>
        </Fragment>
    );
};

export default Home;
