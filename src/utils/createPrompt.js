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

  const total = ingredients.split(',').length + parseInt(extraIngredients)

  const prompt = `Create a new ${dishType}recipe using most or, ideally, all of the following ingredients: ${ingredients}. ${labels}You are allowed to add ${extraIngredients} additional ingredients that are not on the list, but the total number of ingredients in the recipe should not exceed ${total}. Create a list of the additional ingredients used, along with a link to Walmart's webshop search results for additional ingredients that I need to buy.`

  return prompt
}
