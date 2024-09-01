export const API_URL =
  window.location.hostname === "localhost"
    ? "https://tuanlelearni-8181.theiadockernext-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai"
    : "https://tuanlelearni-8181.theiadockernext-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai";
console.log("API_URL :", API_URL);
