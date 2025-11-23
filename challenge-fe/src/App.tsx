import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>성능 최적화 비교</h1>
      <Link to="/social-non-optimized">소셜 페이지로 이동(비최적화 버전)</Link>
      <br />
      <br />
      <Link to="/social-optimized">소셜 페이지로 이동(최적화 버전)</Link>

      <Outlet />
    </div>
  );
};

export default App;
