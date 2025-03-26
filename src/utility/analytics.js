import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";
import googleAnalytics from "@analytics/google-analytics";

const GTM_CONTAINER_ID = "GTM-PWJH53XL";
export const ANALYTICS_ID = "G-PZLB8HJXYN"

const analytics = Analytics({
  app: "avaluos-web",
  plugins: [
    googleTagManager({
      containerId: GTM_CONTAINER_ID,
      enabled: true,
    }),
    googleAnalytics({
      measurementIds: ANALYTICS_ID,
    }),
  ],
});

export default analytics;
