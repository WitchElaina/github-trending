export default function getParams() {
  // get params from url
  const urlParams = new URLSearchParams(window.location.search);
  // get language, since and spoken_language from url
  const language = urlParams.get('language') || undefined;
  const since = urlParams.get('since') || undefined;
  const spoken_language = urlParams.get('spoken_language') || undefined;
  // return params
  return { language, since, spoken_language };
}
