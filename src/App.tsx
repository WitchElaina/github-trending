import { Repo } from './components/repo';
import { getTrending } from './lib/api';
import getParams from './lib/getParam';

const { language, since, spoken_language } = getParams();
const repos = await getTrending(language, since, spoken_language);

export const App = () => {
  return (
    <div className="App">
      {repos.map((repo, index) => (
        <Repo repo={repo} key={index} />
      ))}
    </div>
  );
};
