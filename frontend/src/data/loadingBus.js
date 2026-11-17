import axios from 'axios';

// Counts in-flight API requests so a single top progress bar can show them all,
// with no changes needed in the pages that make the calls.
let pending = 0;
const listeners = new Set();
const notify = () => listeners.forEach((fn) => fn(pending));

export const subscribeLoading = (fn) => {
  listeners.add(fn);
  fn(pending);
  return () => listeners.delete(fn);
};

let installed = false;
export const installLoadingInterceptors = () => {
  if (installed) return;
  installed = true;
  axios.interceptors.request.use((config) => {
    pending += 1; notify();
    return config;
  }, (error) => { pending = Math.max(0, pending - 1); notify(); return Promise.reject(error); });

  axios.interceptors.response.use((res) => {
    pending = Math.max(0, pending - 1); notify();
    return res;
  }, (error) => { pending = Math.max(0, pending - 1); notify(); return Promise.reject(error); });
};
