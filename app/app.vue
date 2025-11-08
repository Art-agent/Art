<script setup lang="ts">
import { createAppKit } from '@reown/appkit/vue';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'

const config = useRuntimeConfig();
const projectId = config.public.projectId;
const projectUrl = config.public.projectUrl;

if (!projectId || !projectUrl) {
  throw new Error("No projectID or projectUrl found");
}

const metadata = {
  name: "Art",
  description: "Autonomous AI that discovers, pays for, and chains premium APIs using x402 on solana.",
  url: projectUrl,
  icons: ['https://art0-bucket.s3.us-east-1.amazonaws.com/ArtLogoNew.png']
};

const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
});

createAppKit({
  adapters: [solanaWeb3JsAdapter],
  metadata,
  networks: [solana, solanaTestnet, solanaDevnet],
  projectId,
  featuredWalletIds: [
    "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
    "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
  ],
  features: {
    analytics: true,
    email: true,
    socials: ['google', 'x', 'github'],
    emailShowWallets: true
  }
})

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
