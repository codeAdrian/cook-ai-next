export const createPrompt = ({
  dishType = '',
  ingredients,
  extraIngredients,
  healthLabels = [],
  dietLabels = [],
}) => {
  let labels = [...healthLabels, ...dietLabels].join('. ') ?? ''
  if (Boolean(labels.length)) {
    labels = `${labels}. `
  }

  if (dishType) {
    dishType = `${dishType} `
  }

  return `Create a new ${dishType}recipe that contains some or all of the following ingredients: ${ingredients}. ${labels}Use up to ${extraIngredients} additional ingredients that are not on the list. List the additional ingredients that are not on the ingredients list. Include link to Walmart's webshop search results to additional ingredients.`
}
