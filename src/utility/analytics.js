import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";
import googleAnalytics from "@analytics/google-analytics";

const analytics = Analytics({
  app: "avaluos-web",
  plugins: [
    googleTagManager({
      containerId: process.env.GTM_CONTAINER_ID,
      enabled: true,
    }),
    googleAnalytics({
      measurementIds: process.env.MEASUREMENT_ID,
    }),
  ],
});

export default analytics;
