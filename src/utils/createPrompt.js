export const createPrompt = ({
  ingredients,
  extraIngredients,
  healthLabels = [],
  dietLabels = [],
}) => {
  let labels = [...healthLabels, ...dietLabels].join('. ') ?? ''
  if (Boolean(labels.length)) {
    labels = `${labels}. `
  }

  return `Suggest a recipe that contains some or all of 
    the following ingredients: ${ingredients}. Use up to ${extraIngredients} ingredients that are not listed. 
    Tell me which ingredients I need to buy but make sure I don't 
    have to buy more than ${extraIngredients} ingredients. ${labels}Include link to Walmart's 
    webshop search results to buy missing items.
`
}
