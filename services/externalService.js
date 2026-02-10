import axios from 'axios';

/**
 * Query external API service
 * @param {string} query - Query string
 * @returns {Promise<string>} Response string
 */
export const queryExternal = async (query) => {
  const API_KEY = process.env.EXTERNAL_API_KEY;
  
  // Fallback if API key not configured
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    console.warn('External API key not configured, using fallback');
    return 'Unknown';
  }

  try {
    const response = await axios.post(
      process.env.EXTERNAL_API_URL || 'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: 'Answer in one word only.'
          },
          {
            role: 'user',
            content: query
          }
        ],
        temperature: 0.3,
        max_tokens: 10
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 10000
      }
    );

    const answer = response.data?.choices?.[0]?.message?.content?.trim();
    
    if (!answer) {
      return 'Unknown';
    }

    // Extract first word
    const singleWord = answer.split(/\s+/)[0].replace(/[^a-zA-Z0-9]/g, '');
    return singleWord || 'Unknown';

  } catch (error) {
    console.error('External service error:', error.message);
    // Return fallback instead of throwing
    return 'Unknown';
  }
};
