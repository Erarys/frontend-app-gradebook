// Pasted names and emails may include leading, trailing or repeated whitespace.
const normalizeLearnerSearch = (value = '') => (value || '').trim().replace(/\s+/g, ' ');

export default normalizeLearnerSearch;
