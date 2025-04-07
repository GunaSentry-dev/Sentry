import * as Sentry from "@sentry/remix";

Sentry.init({
    dsn: "https://f54486c5ffbe60ce750dc1e209f0aa74@dev-sentry.spanllc.com/27",
    tracesSampleRate: 1
})