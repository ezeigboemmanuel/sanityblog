export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-08-12'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skDybTG7wqcMqNW2tNVLLQCnJodxmRQ0UFSE3HHNXsmwwFuMvJjFGYhypEc7ZMJMXW2pTBolJkzaF0dp5VyRYzmS7i1xWL5wVK0DUabUE8sIreFSiUwEqdUBgjxYIOuQGwV82ZpxlO1jFFeCgTMBCggzzAC3yKW75Ng0BCJYHLIE4UEWD0wI",
  'Missing environment variable: SANITY_API_TOKEN'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
