import { StrictDict } from 'utils';

const EMAIL_HEADING = 'Email';
const TOTAL_COURSE_GRADE_HEADING = 'Total Grade (%)';
const USERNAME_HEADING = 'Username';
const FULL_NAME_HEADING = 'Full Name';
const PROFILE_USERNAME_HEADING = 'Profile'; // ✅ новая константа

const GradeFormats = StrictDict({
  absolute: 'absolute',
  percent: 'percent',
});

const Headings = StrictDict({
  email: EMAIL_HEADING,
  totalGrade: TOTAL_COURSE_GRADE_HEADING,
  username: USERNAME_HEADING,
  fullName: FULL_NAME_HEADING,

  profileUsername: PROFILE_USERNAME_HEADING, // ✅ ВОТ ТУТ
});

export {
  EMAIL_HEADING,
  TOTAL_COURSE_GRADE_HEADING,
  USERNAME_HEADING,
  FULL_NAME_HEADING,
  PROFILE_USERNAME_HEADING, // ✅ желательно экспортировать
  GradeFormats,
  Headings,
};
