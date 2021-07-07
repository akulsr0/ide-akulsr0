import axios from 'axios';

const shareLink = (data, cb) => {
  const url = 'http://akul.codes/code/';
  axios
    .post(url, {
      language: data.language,
      code_snippet: data.inputCode,
      is_dark_theme: data.isDarkMode,
    })
    .then((res) => cb(null, res.data))
    .catch((err) => cb(err, null));
};

const fetchLinkData = (id, cb) => {
  const url = 'http://akul.codes/code/';
  axios
    .get(url, { params: { id } })
    .then((res) => cb(null, res.data))
    .catch((err) => cb(err, null));
};

export { shareLink, fetchLinkData };
export default { shareLink, fetchLinkData };
