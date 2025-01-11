// Share configuration
const shareConfig = {
  title: "Sprunki Sinner Edition - Creative Online Music Game with Halloween Theme",
  text: "Join me in Sprunki Sinner Edition! Create haunting melodies, unlock spooky characters, and unleash your musical creativity in this unique Halloween-themed game. 🎵👻",
  url: "https://sprunkisinner.online"
};

// Social media share URLs
const shareUrls = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareConfig.url)}`,
  twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareConfig.url)}&text=${encodeURIComponent(shareConfig.text)}`,
  reddit: `https://reddit.com/submit?url=${encodeURIComponent(shareConfig.url)}&title=${encodeURIComponent(shareConfig.title)}`,
  pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareConfig.url)}&description=${encodeURIComponent(shareConfig.text)}`
};

// Initialize share buttons
document.addEventListener('DOMContentLoaded', () => {
  // Social media share buttons
  document.getElementById('share-facebook')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(shareUrls.facebook, 'Share on Facebook', 'width=600,height=400');
  });

  document.getElementById('share-x')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(shareUrls.twitter, 'Share on X', 'width=600,height=400');
  });

  document.getElementById('share-reddit')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(shareUrls.reddit, 'Share on Reddit', 'width=600,height=400');
  });

  document.getElementById('share-pinterest')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(shareUrls.pinterest, 'Share on Pinterest', 'width=600,height=400');
  });

  // General share button using Web Share API
  document.getElementById('share-general')?.addEventListener('click', async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareConfig);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(shareConfig.url);
        const button = document.getElementById('share-general');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i><span>Link Copied!</span>';
        setTimeout(() => {
          button.innerHTML = originalText;
        }, 2000);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  });
});
