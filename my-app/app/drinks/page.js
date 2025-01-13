import DrinkList from "@/components/DrinkList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);
    // throw an error 
    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    const data = await response.json();
    return data 
};


const DrinksPage = async () => {
    const data = await fetchDrinks();
    return (
    <div>
        <DrinkList drinks={data.drinks} />  
    </div>
    );
};
export default DrinksPage; 