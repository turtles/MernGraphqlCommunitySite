import FormatDate from './FormatDate'

test('formatDate.date outputs correct date', () => {
  expect(FormatDate.date('Mon May 14 2018 06:42:23 GMT-0700 (PDT)', 'en-US')).toBe('5/14/2018');
});

test('FormatDate.dateAndTime outputs correct date and time', () => {
  expect(FormatDate.dateAndTime('Mon May 14 2018 06:42:23 GMT-0700 (PDT)', 'en-US')).toBe('5/14/2018 6:42:23 AM');
});
