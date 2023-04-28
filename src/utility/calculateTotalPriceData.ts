import foodData from './recipeFood.json'
import FectDataItemPrices from '../api/getItemPrices'

type RecipeItem = {
  item_id: string;
  count: number;
};

type MenuItem = {
  item_id: string;
  craft_count:number;
  recipe: RecipeItem[];
};

type RecipeFood = MenuItem[];

const allFoodData:RecipeFood = foodData;

export const calculateTotalCost = (item_id: string, quantity: number, location:string): number => {
  const craftItem = allFoodData.find((result) => result.item_id === item_id);
  let totalCost = 0;
  if(craftItem){
  for (const recipeItem of craftItem.recipe) {
    const { data: ingredient } = FectDataItemPrices(recipeItem.item_id,location);
    const cost = ingredient?.sell_price_min || 0;
    const ingredientQuantity = recipeItem.count * quantity;
    totalCost += cost * ingredientQuantity;
  }
  }
  return totalCost;
}

