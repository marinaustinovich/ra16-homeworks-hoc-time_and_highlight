
import { withPrettyDate } from '../../hoc';
import { customFormatFunction } from '../../utils/formatUtils';

import { DateTime } from '../DataTime';

export const DateTimePretty = withPrettyDate(DateTime, customFormatFunction);
