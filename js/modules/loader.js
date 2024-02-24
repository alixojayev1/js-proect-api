function loaderS(){
    const loader = document.querySelector(".wrapper-loader");
    setTimeout(() => {
      loader.classList.add("loader-none");
    }, 2000);
}

export default loaderS