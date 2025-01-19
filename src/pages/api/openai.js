import OpenAI from 'openai'

// Verify API key exists
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable')
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const COOKING_SYSTEM_PROMPT = `You are an experienced chef and cooking instructor. Your role is to:
1. Create delicious recipes using provided ingredients
2. Ensure recipes are practical and easy to follow
3. Consider any dietary restrictions or health labels provided
4. Assume common kitchen ingredients are available, including:
   - Basic spices (salt, black pepper, garlic powder, onion powder)
   - Common herbs (basil, oregano, thyme, rosemary, parsley)
5. Ignore any non-food items or ingredients that are not edible/cooking-related
6. If most ingredients are not food-related, respond with "Please provide valid food ingredients"

When creating recipes:
- Only use common cooking ingredients and provided food items
- Feel free to use basic spices and herbs without listing them as additional ingredients
- Exclude any non-edible items from consideration
- Focus on practical, kitchen-safe ingredients
- If unsure about an ingredient's edibility, exclude it

Format your response in the following structure:

Recipe Name
-----------

Prep: X min | Process Time: X min | Total: X min | Serves: X

-----------

Ingredients:
- Ingredient 1 (provided)
- Ingredient 2 (provided)
- Additional ingredient 1
- Additional ingredient 2

Instructions:
1. Step 1...
2. Step 2...
`

export default async function handler(req, res) {
  // Add CORS check at the start of the handler
  const origin = req.headers.origin
  const allowedOrigins = [
    'https://cook-ai-next.vercel.app', // Main production URL
    /^https:\/\/cook-ai-next-.*\.vercel\.app$/, // Vercel preview deployments
  ]

  // Only allow localhost in development
  if (process.env.NODE_ENV === 'development') {
    allowedOrigins.push('http://localhost:3000')
  }

  const isAllowedOrigin = allowedOrigins.some((allowed) =>
    allowed instanceof RegExp ? allowed.test(origin) : allowed === origin
  )

  if (!isAllowedOrigin) {
    return res.status(403).json({ error: 'Origin not allowed' })
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', origin)
  res.setHeader('Access-Control-Allow-Methods', 'POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { prompt, model, maxTokens, temperature } = req.body

    // Validate required fields
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' })
    }

    // Enable streaming
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    })

    const validatedModel = model || 'gpt-4o-mini'
    const validatedMaxTokens = Math.min(Math.max(1, maxTokens || 1500), 4000)
    const validatedTemperature = Math.min(Math.max(0, temperature || 0.8), 2)

    const stream = await openai.chat.completions.create({
      model: validatedModel,
      messages: [
        { role: 'system', content: COOKING_SYSTEM_PROMPT },
        { role: 'user', content: prompt },
      ],
      max_tokens: validatedMaxTokens,
      temperature: validatedTemperature,
      stream: true,
    })

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || ''
      res.write(`data: ${JSON.stringify({ content })}\n\n`)
    }

    res.end('data: [DONE]\n\n')
  } catch (error) {
    console.error('OpenAI API Error:', error)

    // Handle rate limit and quota errors specifically
    if (error.status === 429) {
      res.write(
        `data: ${JSON.stringify({
          error:
            'API rate limit exceeded or insufficient quota. Please check your OpenAI account billing settings.',
        })}\n\n`
      )
    } else {
      res.write(
        `data: ${JSON.stringify({
          error:
            error.message || 'An error occurred while generating the recipe',
        })}\n\n`
      )
    }
    res.end()
  }
}
