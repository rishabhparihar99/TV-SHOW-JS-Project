const form = document.querySelector("#formSearch");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  /*
  console.log("submitted");
  console.dir(form); //see form object
  console.log(form.elements.query.value);// give input text of form on clicking submit
  
  */
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  // console.log(res.data[0].show.image.medium); //will print image link
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    //console.log(result); will print array of res.data;
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
