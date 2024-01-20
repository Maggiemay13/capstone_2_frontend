import React from "react";

const Resources = () => {
  return (
    <div>
      <h2>Resources</h2>

      <ul>
        <li>Resource 1</li>
        <li>Resource 2</li>
      </ul>

      <div className="spotify-playlist">
        <h3>Playlist</h3>
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Resources;
