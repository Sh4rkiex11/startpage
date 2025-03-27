// latte / frappe / macchiato / mocha
const palette = frappe;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Alicante",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "personal",
      background_url: "src/img/banners/window-room.png",
      categories: [
        {
          name: "media",
          links: [
            { name: "mastodon", url: "https://mastodon.social", icon: "brand-mastodon", icon_color: palette.green },
            { name: "X", url: "https://x.com", icon: "brand-x", icon_color: palette.mauve },
            { name: "reddit", url: "https://www.reddit.com/", icon: "brand-reddit", icon_color: palette.peach },
            { name: "youtube", url: "https://www.youtube.com/", icon: "brand-youtube", icon_color: palette.red },
            { name: "twitch", url: "https://www.twitch.tv/", icon: "brand-twitch", icon_color: palette.blue },
            { name: "hacker-news", url: "https://news.ycombinator.com/ask", icon: "news", icon_color: palette.mauve },
          ],
        },
        {
          name: "workspace",
          links: [
            { name: "mail", url: "https://mail.google.com", icon: "brand-gmail", icon_color: palette.green },
            { name: "calendar", url: "https://calendar.google.com", icon: "calendar-filled", icon_color: palette.peach },
            { name: "vault", url: "https://vault.bitwarden.com", icon: "lock", icon_color: palette.red },
            { name: "drive", url: "https://drive.google.com", icon: "brand-google-drive", icon_color: palette.blue },
          ],
        },
      ],
    },
    {
      name: "gaming",
      background_url: "src/img/banners/doom-slayer.png",
      categories: [
        {
          name: "deals",
          links: [
            { name: "GG Deals", url: "https://gg.deals/", icon: "cash", icon_color: palette.green },
            { name: "r/gameDeals", url: "https://www.reddit.com/r/GameDeals/", icon: "currency-euro", icon_color: palette.peach },
          ],
        },
        {
          name: "stores",
          links: [
            { name: "Steam", url: "https://store.steampowered.com/", icon: "brand-steam", icon_color: palette.blue },
            { name: "Epic Games", url: "https://store.epicgames.com/", icon: "brand-epic-games", icon_color: palette.mauve },
            { name: "GOG", url: "https://www.gog.com/", icon: "brand-gog", icon_color: palette.peach },
            { name: "Humble Bundle", url: "https://www.humblebundle.com/", icon: "shopping-cart", icon_color: palette.green },
          ],
        },
      ],
    },
    {
      name: "music",
      background_url: "src/img/banners/lofi.jpg",
      categories: [
        {
          name: "listen",
          links: [
            { name: "spotify", url: "https://open.spotify.com", icon: "brand-spotify", icon_color: palette.green },
            { name: "soundcloud", url: "https://www.soundcloud.com", icon: "brand-soundcloud", icon_color: palette.peach },
            { name: "youtube-music", url: "https://music.youtube.com/", icon: "brand-youtube", icon_color: palette.red },
            { name: "genius", url: "https://genius.com/", icon: "abc", icon_color: palette.mauve },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/retro-mario.png",
      categories: [
        {
          name: "media",
          links: [
            { name: "github", url: "https://github.com", icon: "brand-github", icon_color: palette.green },
            { name: "dev-community", url: "https://dev.to/", icon: "article", icon_color: palette.peach },
          ],
        },
        {
          name: "learn",
          links: [
            { name: "leetcode", url: "https://leetcode.com", icon: "code-plus", icon_color: palette.green },
            { name: "exercism", url: "https://exercism.org/", icon: "calculator", icon_color: palette.blue },
          ],
        },
      ],
    },
    {
      name: "art",
      background_url: "src/img/banners/sky.png",
      categories: [
        {
          name: "media",
          links: [
            { name: "pinterest", url: "https://www.pinterest.com/", icon: "brand-pinterest", icon_color: palette.red },
            { name: "artstation", url: "https://www.artstation.com", icon: "pencil-heart", icon_color: palette.blue },
          ],
        },
      ],
    },
    {
      name: "tools",
      background_url: "src/img/banners/tokyo.png",
      categories: [
        {
          name: "general",
          links: [
            { name: "deepl", url: "https://www.deepl.com", icon: "language", icon_color: palette.peach },
            { name: "monkeytype", url: "https://monkeytype.com/", icon: "keyboard", icon_color: palette.red },
            { name: "speed-test", url: "https://librespeed.org/", icon: "brand-speedtest", icon_color: palette.mauve },
            { name: "cloudconvert", url: "https://cloudconvert.com/", icon: "transform", icon_color: palette.lavender },
          ],
        },
        {
          name: "privacy",
          links: [
            { name: "privacy-guides", url: "https://www.privacyguides.org/en/", icon: "arrow-guide", icon_color: palette.peach },
            { name: "r/privacy", url: "https://www.reddit.com/r/privacy/", icon: "door-off", icon_color: palette.red },
          ],
        },
        {
          name: "security",
          links: [
            { name: "cybersecurity-guide", url: "https://s0cm0nkey.gitbook.io/s0cm0nkeys-security-reference-guide", icon: "fingerprint", icon_color: palette.green },
            { name: "virus-total", url: "https://www.virustotal.com", icon: "virus-search", icon_color: palette.peach },
          ],
        },
        {
          name: "ai",
          links: [
            { name: "chatgpt", url: "https://chatgpt.com/", icon: "brand-openai", icon_color: palette.green },
            { name: "deepseek", url: "http://chat.deepseek.com", icon: "message-chatbot", icon_color: palette.red },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);