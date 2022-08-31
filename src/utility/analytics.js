import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";


const analytics = Analytics({
  app: "avaluos-web", // Call this whatever you like.
  plugins: [
    googleTagManager({
      containerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID,
      enabled: true,
    }),
    // googleAnalytics({
    //   measurementIds: ANALYTICS_ID,
    // }),
  ],
});

export default analytics;
