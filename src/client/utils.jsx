import moment from 'moment';

const makeVcard = (name, birthday) => {
  const vcardString = [
    `BEGIN:VCARD`,
    `VERSION:3.0`,
    `FN: ${name}`,
    `BDAY:${birthday.format('YYYY-MM-DD')}`,
    `END:VCARD`,
  ].join(`\n`);
  const vcardBlob = new Blob([vcardString], { type: 'text/vcard' });
  const url = URL.createObjectURL(vcardBlob);
  const fileName = `${name}.vcf`;
  return { url, fileName };
};

const normalizeTime = (elapsedTimeMs) => {
  const duration = moment.duration(elapsedTimeMs);
  const seconds = String(duration.seconds());
  const milliseconds = String(duration.milliseconds()).padStart(3, '0');
  return {
    years: duration.years(),
    months: duration.months(),
    weeks: duration.weeks(),
    days: duration.days() % 7,
    hours: duration.hours(),
    minutes: duration.minutes(),
    secondsWithMs: seconds + '.' + milliseconds.slice(0,1),
  };
};

export {
  makeVcard,
  normalizeTime,
};
