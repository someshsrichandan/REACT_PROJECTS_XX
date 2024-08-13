// src/openaiClient.js

import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new Configuration({
  apiKey: "sk-FnYbkCdLR0ENmrpShAUZ_nzOBh0yDc-0dDmDlaI00_T3BlbkFJduLqh_P83t2Q-Kt_i0mI2seGOT2JpCctnf5b3B6gsA"
});

const openai = new OpenAIApi(configuration);

export default openai;
