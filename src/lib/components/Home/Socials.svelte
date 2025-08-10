<script>
  const linkClass =
    "p-2 rounded-lg flex items-center justify-center transition-all duration-500 hover:border-transparent hover:border border border-transparent bg-gray-100 hover:bg-primary";

  const socials = [
    {
      href: "mailto:rohannikumbh2793@gmail.com",
      label: "Email Rohan Nikumbh",
      title: "Email Rohan Nikumbh",
      icon: "/socials/gmailIcon.svg",
      external: false
    },
    {
      href: "https://www.linkedin.com/in/rohan-nikumbh-989aa4244/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      label: "Visit Rohan Nikumbh on LinkedIn",
      title: "LinkedIn: Rohan Nikumbh",
      icon: "/socials/linkedinIcon.svg",
      external: true
    },
    {
      href: "https://wa.me/9766576487",
      label: "Chat on WhatsApp",
      title: "Chat on WhatsApp",
      icon: "/socials/whatsappIcon.svg",
      external: true
    },
    {
      href: "https://x.com/NikumbhRoh385?t=eN7tgDqDn-ltskTRXdj2vg&s=09",
      label: "Follow on X (Twitter)",
      title: "Follow on X (Twitter)",
      icon: "/socials/xIcon.svg",
      external: true
    },
    {
      href: "https://www.youtube.com/channel/UCTa_SdCrLdmis9zCc9BJN_w",
      label: "Subscribe on YouTube",
      title: "Subscribe on YouTube",
      icon: "/socials/youtubeIcon.svg",
      external: true
    },
    {
      href: "https://www.instagram.com/rohannikumbh/",
      label: "Follow on Instagram",
      title: "Follow on Instagram",
      icon: "/socials/instaIcon.svg",
      external: true
    }
  ];
</script>

<div class="mt-10 rounded-xl w-full h-auto py-8 flex items-center justify-center gap-2 flex-wrap">
  {#each socials as s}
    <a
      href={s.href}
      class={linkClass}
      aria-label={s.label}
      title={s.title}
      target={s.external ? "_blank" : undefined}
      rel={s.external ? "noopener noreferrer" : undefined}
    >
      <span class="sr-only">{s.label}</span>
      <img src={s.icon} alt="" aria-hidden="true" />
    </a>
  {/each}
</div>
