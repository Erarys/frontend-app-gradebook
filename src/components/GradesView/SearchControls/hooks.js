import { useIntl } from '@edx/frontend-platform/i18n';

import { actions, selectors, thunkActions } from 'data/redux/hooks';
import normalizeLearnerSearch from 'utils/normalizeLearnerSearch';

import messages from './messages';

/**
 * Controls for filtering the GradebookTable. Contains the "Edit Filters" button for opening the filter drawer
 * as well as the search box for searching by learner identity fragments.
 */
export const useSearchControlsData = () => {
  const { formatMessage } = useIntl();
  const searchValue = selectors.app.useSearchValue();
  const fetchGrades = thunkActions.grades.useFetchGrades();
  const setSearchValue = actions.app.useSetSearchValue();

  const onBlur = (e) => {
    setSearchValue(normalizeLearnerSearch(e.target.value));
  };

  const onClear = () => {
    setSearchValue('');
    fetchGrades({ options: { searchText: '' } });
  };

  const onSubmit = (newValue) => {
    const searchText = normalizeLearnerSearch(newValue);
    setSearchValue(searchText);
    fetchGrades({ options: { searchText } });
  };

  return {
    onSubmit,
    onBlur,
    onClear,
    searchValue,
    inputLabel: formatMessage(messages.label),
    hintText: formatMessage(messages.hint),
  };
};

export default useSearchControlsData;
