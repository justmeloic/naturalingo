import { cookies } from 'next/headers';
import { ThemeProvider } from '@/providers/theme-provider';
import ThemeWrapper from './theme-wrapper'; // Import ThemeWrapper here

interface ThemeCookieHandlerProps {
  children: React.ReactNode;
}

export default function ThemeCookieHandler({ children }: ThemeCookieHandlerProps) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value as "light" | "dark" | undefined;

  console.log("ThemeCookieHandler (server) - theme from cookie:", theme);
  return (
    <ThemeProvider defaultTheme={theme || 'light'} enableSystem>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeProvider>
  );
};
