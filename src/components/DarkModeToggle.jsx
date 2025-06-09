// DarkModeToggle.jsx
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="pt-10 flex items-center justify-start space-x-3">
      <Sun className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-500' : 'text-yellow-500'}`} />
      <label className="relative inline-block w-14 h-8 cursor-pointer">
        <input
          type="checkbox"
          className="peer opacity-0 w-0 h-0"
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <span className="absolute inset-0 rounded-full transition-colors duration-300 bg-gray-700 peer-checked:bg-cyan-500"></span>
        <span className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6"></span>
      </label>
      <Moon className={`w-6 h-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-gray-700'}`} />
    </div>
  );
};

export default DarkModeToggle;
