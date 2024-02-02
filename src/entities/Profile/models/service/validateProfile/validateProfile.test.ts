import { validateProfile } from 'entities/Profile/models/service/validateProfile/validateProfile';
import { COUNTRY } from 'entities/Country';
import { CURRENCY } from 'entities/Currency';
import {
  ValidationErrors,
  type Profile
} from 'entities/Profile/models/types/profile';

const data: Profile = {
  firstname: 'Name',
  lastname: 'Name2',
  age: 21,
  country: COUNTRY.Russia,
  currency: CURRENCY.RUB,
  avatar: '',
  username: 'admin',
  id: '1'
};

describe('validateProfile', () => {
  it('should return zero errros', () => {
    const result = validateProfile(data);

    expect(result).toHaveLength(0);
  });
  it('should return name error when firstname is incorrect', () => {
    const result = validateProfile({ ...data, firstname: '' });

    expect(result).toHaveLength(1);
    expect(result).toEqual([ValidationErrors.INCORRECTED_NAME]);
  });
  it('should return name error when lastname is incorrect', () => {
    const result = validateProfile({ ...data, lastname: '' });

    expect(result).toHaveLength(1);
    expect(result).toEqual([ValidationErrors.INCORRECTED_NAME]);
  });
  it('should return age error when age is incorrect', () => {
    const result = validateProfile({ ...data, age: 0 });

    expect(result).toHaveLength(1);
    expect(result).toEqual([ValidationErrors.INCORRECTED_AGE]);
  });
  it('should return several errors when age and name are incorrect', () => {
    const result = validateProfile({ ...data, age: 0, firstname: '' });

    expect(result).toHaveLength(2);
    expect(result).toEqual([
      ValidationErrors.INCORRECTED_NAME,
      ValidationErrors.INCORRECTED_AGE
    ]);
  });
});
