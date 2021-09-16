const form = document.querySelector("#searchForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const search = form.elements.query.value;
  const config = { params: { q: search } };
  const res = await axios.get("http://api.tvmaze.com/search/shows", config);
  removeImages();
  displayImages(res.data);
  form.elements.query.value = "";
});

const displayImages = function (shows) {
  for (let result of shows) {
    if (result.show.image) {
      const container = document.querySelector("#container");
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      container.appendChild(img);
    }
  }
};

const removeImages = () => {
  const images = document.querySelectorAll("img");
  for (let image of images) {
    image.remove();
  }
};
