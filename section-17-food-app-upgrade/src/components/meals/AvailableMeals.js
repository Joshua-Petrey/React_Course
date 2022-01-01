import Card from '../UI/Card/Card';
import MealItem from './Mealitem/MealItem';
import styles from './AvalibleMeals.module.css'
import { useEffect, useState } from 'react';

// renders a list of all meals
const AvailableMeals = () => {
  const [meals, setMeals ] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState()

  //get meals from server
  useEffect( () => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-hhtp-32085-default-rtdb.firebaseio.com/meals.json"
      );
        // if error thrown in promise(fetch) the promise rejects
        if(!response.ok){
          throw new Error('Something went wrong')
        }

      // convert to js object
      const responseData = await response.json()

      const loadedMeals = []
      // transform meals object to array of objects  
      for (const key in responseData){
        loadedMeals.push({
          id: key.id,
          description: responseData[key].description,
          price: responseData[key].price,
          name: responseData[key].name,
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false);
    }
  // to handle error if one occurs in fetchMeals
  fetchMeals().catch((err) => {
  setIsLoading(false)
  setError(err.message)
        });
      }
  ,[])

  if(isLoading){
    return (<section className={styles.MealsLoading}><p>Loading...</p></section>)
  }

  // show error
  if(error){
    return (
      <section className={styles.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  // Create list of meals
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    >
      {meal.name}
    </MealItem>
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals