import React, { useEffect } from 'react';
import AppRoutes from './AppRoutes';
import { IntlProvider } from 'react-intl';
import defaultMessages from '../locales/en-us.js';

let defaultLocale = 'en-us';

const loadMessages = async (locale = 'en-us') => {
  const messages = await import(`../locales/${locale}.js`);
  return messages;
};
const App = () => {
  const [locale, setLocale] = React.useState(defaultLocale);
  const [messages, setMessages] = React.useState(defaultMessages);

  useEffect(() => {
    const handleLocaleChange = async () => {
      const messages = await loadMessages();
      setMessages(messages.default);
    };
    handleLocaleChange();
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <AppRoutes />
    </IntlProvider>
  );
};

export default App;
