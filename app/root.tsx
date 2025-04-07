import { captureRemixErrorBoundaryError } from "@sentry/remix";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "~/assets/css/style.css";
import customTheme from "./themes/customTheme";
import { withEmotionCache } from '@emotion/react';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/material';
import ClientStyleContext from "./themes/ClientStyleContext";
import { useContext } from "react";
import type { EmotionCache } from '@emotion/cache';
import { Provider } from "react-redux";
import {store,persistor} from "./stores/userInfo.store";
import { PersistGate } from 'redux-persist/integration/react';


export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/png",
  },
];



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const Document = withEmotionCache(({ children }: { children: React.ReactNode }, emotionCache:EmotionCache) => {
  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEnhancedEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      (emotionCache.sheet as any)._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <Provider store={store}>
    {
     persistor ? (
      <PersistGate loading={null} persistor={persistor}>
      <Layout children={children}/>
     </PersistGate>
     ):
     (
      <Layout children={children}/>
     )
    }
  
    </Provider>
  );
})




export const ErrorBoundary = () => {
  const error = useRouteError();
  captureRemixErrorBoundaryError(error);
  return <div>Something went wrong</div>;
};




export default function App() {
  return (
    <Document>
    <ThemeProvider theme={customTheme}>
     <CssBaseline />
      <Outlet />
    </ThemeProvider>
    </Document>
  )
}