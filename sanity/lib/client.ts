import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sktRGl6GBsFPPovAdIRfSrMwNTn8YncsAgsAIVxZ8eKfkURmi5gUAybogRNzDy2shvSKcRQ9NGvNly8RczRHYYQ2lvOwcZ5AtI3p2iiv5jvmgwCJFMqzmtSWPnM0DRASOnD9Te5spONsnc8Gj7EVDAJdvlaMPOMT4ilAX9lBHvdQd1Lq6wt0"
})
