export type ActionProfessionalsType = {
  type: string,
  payload?: any,
  error?: any
}

export type FamilyDocumentType = {
  id:  number | null,
  code: string
}

export type ProfessionalType = {
  id:  number | null,
  name: boolean,
  familyDocuments: FamilyDocumentType[]
}

export type ProfessionalsState = {
  professionals: ProfessionalType | [],
  error: Error | null,
  loanding: boolean
}
