import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";
const GTM_CONTAINER_ID = "GTM-5JMXK6D";

const analytics = Analytics({
  app: "avaluos-web", // Call this whatever you like.
  plugins: [
    googleTagManager({
      containerId: GTM_CONTAINER_ID,
      enabled: true,
    }),
  ],
});

export default analytics;
