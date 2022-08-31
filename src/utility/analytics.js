import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";
import googleAnalytics from "@analytics/google-analytics";

const GTM_CONTAINER_ID = "GTM-5JMXK6D";
const ANALYTICS_ID = "G-ZR2VYE7BSX"

const analytics = Analytics({
  app: "avaluos-web",
  plugins: [
    googleTagManager({
      containerId: process.env.GTM_CONTAINER_ID,
      enabled: true,
    }),
    // googleAnalytics({
    //   measurementIds: ANALYTICS_ID,
    // }),
  ],
});

export default analytics;
