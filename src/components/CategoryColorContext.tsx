import { createContext } from 'react';

import { colors } from '../App.styles';

const CategoryColorContext = createContext({
  color: colors.orangePrimary
});

export default CategoryColorContext;
