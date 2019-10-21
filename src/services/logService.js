import * as Sentry from '@sentry/browser';

function init() {
  Sentry.init({
    dsn: 'https://77bef05ad3924efbae308a006b863a2a@sentry.io/1784426'
  });
}

function log(error) {
  console.error(error);
  Sentry.captureException(error);
}

export default {
  init,
  log
};
