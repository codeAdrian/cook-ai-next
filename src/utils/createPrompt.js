export const createPrompt = ({
  dishType = '',
  ingredients,
  extraIngredients,
  healthLabels = [],
  dietLabels = [],
}) => {
  // Combine all requirements with proper punctuation
  let requirements = [...healthLabels, ...dietLabels]
    .filter((req) => req.length > 0)
    .join('. ')

  if (requirements.length > 0) {
    requirements = `${requirements}. `
  }

  if (dishType) {
    dishType = `${dishType} `
  }

  const total = ingredients.split(',').length + parseInt(extraIngredients)

  const prompt = `Please create a recipe using these ingredients: ${ingredients}. ${requirements}You may add up to ${extraIngredients} additional common cooking ingredients. The total ingredients should not exceed ${total}. If you want to make a ${dishType}recipe, please do so, but feel free to suggest another dish type if it would work better with these ingredients.`

  return prompt
}
