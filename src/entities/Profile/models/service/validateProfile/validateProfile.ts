import { ValidationErrors, type Profile } from 'entities/Profile/models/types/profile';

export const validateProfile = (data: Profile) => {
  const { firstname, lastname, age } = data;
  const errors: ValidationErrors[] = []

  if (!data) {
    errors.push(ValidationErrors.NO_DATA)
  }

  if (!firstname || !lastname) {
    errors.push(ValidationErrors.INCORRECTED_NAME)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidationErrors.INCORRECTED_AGE)
  }

  return errors
}
