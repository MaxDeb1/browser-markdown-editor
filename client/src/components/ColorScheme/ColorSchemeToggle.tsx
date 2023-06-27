import Toggle from 'react-toggle';
import "react-toggle/style.css"
import { useColorScheme } from './useColorScheme';
import moon from '../../assets/icon-dark-mode.svg';
import sun from '../../assets/icon-light-mode.svg';
import './style.css'

const ColorSchemeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();

  return (
    <div className="toggle-container">
      <img className='moon' src={moon} alt="dark" />
      <Toggle
        checked={isDark}
        onChange={(event) => setIsDark(event.target.checked)}
        icons={false}
        aria-label="Dark mode"
      />
      <img className='sun' src={sun} alt="light" />
    </div>
  );
};

export default ColorSchemeToggle;