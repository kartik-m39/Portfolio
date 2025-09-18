interface CardProps {
  title: string;
  description?: string;
  techStack?: string[];
  liveLink?: string;
  githubLink?: string;
  imageUrl: string;
}

export const Projects: CardProps[] = [
  {
    title: 'Mime.ai (Frontend)',
    description:
      "Mime.AI converts audio, video, and text into animated sign language in real time or via uploads. It improves accessibility and promotes sign language learning through an intuitive interface.",
    techStack: ["NextJS", "Typescript", "ThreeJS", "Tailwind"],
    liveLink: "https://mime-ai-7vxu.vercel.app/",
    githubLink: "https://github.com/kartik-m39/Mime.ai",
    imageUrl: "/Mime.png",
  },
  {
    title: 'Aegis (Bridged Frontend With IPFS)',
    description:
      "A Web3 exam system ensuring secure and fair exams. Uses Ethereum smart contracts for CID storage and IPFS for question hosting, preventing leaks and ensuring transparency.",
    techStack: ["NextJs", "EtherJs", "Pinata", "IPFS", "Solidity", "OpenZeppelin"],
    liveLink: "https://aegis-zenithlabs-eight.vercel.app/",
    githubLink: "https://github.com/garvittsingla/Aegis",
    imageUrl: "/aegis.png",
  },
  {
    title: 'Real Time Chat App',
    description:
      "A real-time chat app built with React, TypeScript, and WebSockets. Users can create rooms and chat instantly in a clean, interactive interface with instant message delivery.",
    techStack: ["React", "Typescript", "WebSockets"],
    liveLink: "https://ws-chat-room-7n7f.vercel.app/",
    githubLink: "https://github.com/kartik-m39/WS_ChatRoom",
    imageUrl: "/wsChat.png",
  },
  {
    title: 'PharmaSage',
    description:
      "A medicine information platform using data scraped from NHS UK via Selenium. Integrated with Groq API to deliver accurate query-based medical info through a simple Next.js interface.",
    techStack: ["Selenium", "NextJS", "Typescript", "Clerk"],
    liveLink: "https://pharma-sage-djza.vercel.app/",
    githubLink: "https://github.com/kartik-m39/PharmaSage",
    imageUrl: "/PharmaSage.png",
  },
  {
    title: 'WebRTC',
    description:
      "A simple WebRTC system enabling one browser tab to stream audio/video to another. Uses PeerConnection for media and WebSockets for signaling, demonstrating peer-to-peer communication basics.",
    techStack: ["NextJS", "Typescript", "WebRTC", "WebSockets"],
    liveLink: "",
    githubLink: "https://github.com/kartik-m39/WebRTC",
    imageUrl: "/webrtc.png",
  },
  {
    title: 'Mailkage',
    description:
      "A browser extension that provides temporary email addresses for secure, anonymous sign-ups. Built with Turborepo and mail.tm API for seamless disposable email management.",
    techStack: ["Turborepo", "Express", "React", "Typescript", "Mail.tm"],
    liveLink: "",
    githubLink: "https://github.com/kartik-m39/MailKage",
    imageUrl: "/mailkage.png",
  },
  {
    title: 'Real Time Excalidraw Clone',
    description:
      "A collaborative drawing app using Next.js, Canvas, and WebSockets for real-time sketching. Features authentication via Express and stroke persistence with Prisma.",
    techStack: ["Turborepo", "NextJS", "Websockets", "Prisma", "Express"],
    liveLink: "",
    githubLink: "https://github.com/kartik-m39/Draw-App",
    imageUrl: "/drawApp.png",
  },
  {
    title: "Solana Faucet",
    description: "A Solana Faucet for airdropping SOL into a wallet address. Also check for the balance of that wallet address",
    techStack: ["web3JS", "NextJS", "Typescript", "anza-xyz Wallet adapters"],
    liveLink: "https://sol-faucet-git-main-kartik-manchandas-projects.vercel.app/",
    githubLink: "https://github.com/kartik-m39/SOL_Faucet",
    imageUrl: "/solFaucet.png",
  },
  {
    title: "Solana Token Mint",
    description: "A web app to create and launch your own SPL tokens on the Solana blockchain, with custom metadata and image upload via Pinata/IPFS.",
    techStack: ["web3JS", "NextJS", "Typescript", "anza-xyz Wallet adapters", "@solana/spl-token", "Pinata"],
    liveLink: "https://sol-mint-x.vercel.app/",
    githubLink: "https://github.com/kartik-m39/SolMintX/",
    imageUrl: "/tokenLaunchPad.png",
  },
  {
    title: "Pixi-Hero",
    description: "A web app to create and launch your own SPL tokens on the Solana blockchain, with custom metadata and image upload via Pinata/IPFS.",
    techStack: ["@pixi/react", "PixiJs", "Typescript", "Canvas"],
    liveLink: "https://pixi-hero.vercel.app/",
    githubLink: "https://github.com/kartik-m39/PixiHero",
    imageUrl: "/game.png",
  },
];


