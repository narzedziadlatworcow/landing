export default {
  site: "http://localhost:4321",
  // jawna lista — /a i /b są noindex, więc crawler/sitemap by je pominął
  urls: ["/", "/a", "/b", "/blog", "/blog/jak-nadac-tresciom-kierunek"],
  scanner: {
    device: "mobile",
    throttle: true, // wymuszone na localhost — bez tego koszt hydration Reacta jest niewidoczny
    samples: 2, // mediana z 2 przebiegów (TBT bywa zmienne)
    sitemap: false,
    crawler: false,
  },
};
