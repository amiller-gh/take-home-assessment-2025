"use server"

import "./app.css";

import { JSendResponse, IRegistrationDeadline } from "./models";
import MOCK_DATA from "./assets/data/mock";

import App from './App';

// In a real application, I'd bake this into the Next.js pre-render. But,
// for the sake of the interview, I've implemented it as a server side fetch
// that is streamed back to the client with <Suspense>.
async function getDeadlines(): Promise<IRegistrationDeadline[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/api/registration`);
    const data = await response.json() as JSendResponse<IRegistrationDeadline[]>;
    if (data.status === 'error') {
      throw new Error(data.message);
    }
    return data.data;
  }

  // Because we don't have a production API server and database deployed,
  // go ahead and return a mock data response so we can statically host a
  // demo site on vercel. This is not hit in dev mode – it will use the API.
  catch {
    return MOCK_DATA;
  }
}

export default async function Page() {
  const data = getDeadlines();
  return <App data={data} />
}
