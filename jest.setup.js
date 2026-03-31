// Suppress deprecation warning from @octokit/request-error
// The library warns about using error.code instead of error.status
// This can be safely suppressed as the functionality is not affected
const originalWarn = console.warn;
console.warn = function (...args) {
  if (args[0] && typeof args[0] === 'string' && args[0].includes('[@octokit/request-error]')) {
    return;
  }
  originalWarn.apply(console, args);
};
