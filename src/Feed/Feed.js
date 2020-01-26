import React from 'react';
import './Feed.css';
import Card from '../Card/Card';

const Feed = ({ recipes, deleteRecipe }) => {
  const recipesCards = recipes.map(recipe => {
    return(
        <Card
          title={recipe.title}
          link={recipe.href}
          ingredients={recipe.ingredients}
          img={recipe.thumbnail}
        />
    )
  })

  return(
    <section>
      <h2 className='section-title'>News Feed</h2>
      {recipesCards}
    </section>
  )
}

export default Feed;