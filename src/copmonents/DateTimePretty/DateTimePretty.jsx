
import { customFormatFunction } from '../../utils/formatUtils';
import DateTime from '../DataTime/DataTime';
import withPrettyDate from '../../hoc/withPrettyDate';

const DateTimePretty = withPrettyDate(DateTime, customFormatFunction);

export default DateTimePretty;
