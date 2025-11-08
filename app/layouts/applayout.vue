<script setup lang="ts">
import { House, Receipt, Boxes, ChartColumn, KeyRound, Settings, BookText } from 'lucide-vue-next';
import { useAppKit } from '@reown/appkit/vue';

const { open } = useAppKit();

function openModal() {
  open();
}

</script>

<template>
	<div class="main-layout">
	  <nav class="vert-navbar">
			<section class="artlogo">
			  <ArtLogo height="40" width="39" class="logosvg" />
				<h1 class="logo-text">Art</h1>
			</section>
			<section class="wallet-docs">
			  <client-only> 
  			  <button class="wallet-container" @click="openModal">
  					<SvgsUnconnectedWallet class="unconnected" />
  					<!-- <SvgsConnectedWallet class="unconnected" /> -->
  					<span>Connect solana wallet</span>
  				</button>
				</client-only>  
				<div class="doc-more-container">
				  <button class="docs">
						<BookText :size="18" class="icon" />
						<span>Docs</span>
					</button>
				</div>
			</section>
		</nav>
	  <section class="main">
			<nav class="horiz-navbar">
			  <NuxtLink to="/app" class="option">
					<House :size="18" class="icon" />
					<span>Home</span>
				</NuxtLink>
				<NuxtLink to="/app/transactions" class="option">
  				<Receipt :size="18" class="icon" />
  				<span>Transactions</span>
  			</NuxtLink>
  			<NuxtLink to="/app/agents" class="option">
     			<Boxes :size="18" class="icon" />
     			<span>Agents</span>
        </NuxtLink>
    		<NuxtLink to="/app/usage" class="option">
      		<ChartColumn :size="18" class="icon" />
    		  <span>Usage</span>
     	  </NuxtLink>
        <NuxtLink to="/app/apikeys" class="option">
      		<KeyRound :size="18" class="icon" />
      	  <span>API Keys</span>
       	</NuxtLink>
        <NuxtLink to="/app/settings" class="option">
      		<Settings :size="18" class="icon" />
      	  <span>Settings</span>
       	</NuxtLink>
			</nav>
			<section class="body">
			  <NuxtPage />
			</section>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.main-layout {
  height: 100vh;
  background: var(--color-bg-primary-light);
  display: flex;
  flex-direction: column;
  .vert-navbar {
    display: flex;
    height: 70px;
    align-items: center;
    .artlogo {
      height: 70px;
      width: 300px;
      column-gap: 10px;
      display: flex;
      border-bottom: 1px solid var(--color-border);
      border-top: 0;
      border-left: 0;
      border-right: 1px solid var(--color-border);
      align-items: center;
      justify-content: left;
      padding: 0px 0px 0px 20px;
      .logo-text {
        font-family: var(--font-family);
        font-weight: var(--font-medium);
        letter-spacing: var(--letter-spacing);
        font-size: var(--font-size-lg);
        color: var(--color-text-primary-light);
      }
    }
    .wallet-docs {
      width: stretch;
      height: 70px;
      padding: 0px 20px 0px 20px;
      border-bottom: 1px solid var(--color-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .wallet-container {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        border: 1px solid var(--color-border);
        background: var(--color-button-light);
        height: var(--height-button-sm);
        width: fit-content;
        padding: 0px var(--padding-sm);
        border-radius: var(--radius-xlg);
        column-gap: 5px;
        transition: 0.2s ease-out;
        .unconnected {
          display: flex;
          fill: var(--color-text-primary-light);
        }
        span {
          font-family: var(--font-family);
          font-size: var(--font-size-md);
          font-weight: var(--font-medium);
          font-style: normal;
          letter-spacing: var(--letter-spacing);
          color: var(--color-text-primary-light);
        }
      }
      .wallet-container:active {
        background: var(--color-bg-primary-dark);
        color: var(--color-text-primary-dark);
        span {
          color: var(--color-text-primary-dark);
        }
        .unconnected {
          display: flex;
          fill: var(--color-text-primary-dark);
        }
      }
      .doc-more-container {
        .docs {
          all: unset;
          cursor: pointer;
          background: var(--color-bg-primary-dark);
          border: 1px solid var(--color-border);
          height: var(--height-button-sm);
          width: fit-content;
          display: flex;
          align-items: center;
          column-gap: 10px;
          padding: 0px var(--padding-md);
          border-radius: var(--radius-xlg);
          transition: 0.2s ease-out;
          .icon {
            color: var(--color-text-primary-dark);
            stroke-width: var(--stroke-width);
          }
          span {
            font-family: var(--font-family);
            font-size: var(--font-size-md);
            font-weight: var(--font-medium);
            font-style: normal;
            letter-spacing: var(--letter-spacing);
            color: var(--color-text-primary-dark);
          }
          &:active {
            background: var(--color-bg-primary-light);
            .icon {
              color: var(--color-text-primary-light);
            }
            span {
              color: var(--color-bg-primary-dark);
            }
          }
        }
      }
    }
  }
  .main {
    height: stretch;
    display: flex;
    .horiz-navbar {
      display: flex;
      flex-direction: column;
      border-right: 1px solid var(--color-border);
      align-items: left;
      justify-content: start;
      width: 276px;
      padding: 10px 20px 0px 20px;
      .option {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: var(--padding-vsm) var(--padding-sm);
        border-radius: var(--radius-md);
        column-gap: var(--padding-md);
        transition: 0.2s ease-in;
        .icon {
          color: var(--color-text-primary-transparent);
          stroke-width: var(--stroke-width);
        }
        span {
          color: var(--color-text-primary-transparent);
          font-family: var(--font-family);
          font-size: var(--font-size-md);
          font-weight: var(--font-regular);
          font-style: normal;
          letter-spacing: var(--letter-spacing);
        }
      }
    }
    .body {
      height: stretch;
      width: stretch;
      margin: 0px 30px;
      /* border: 1px solid blue; */
    }
  }
}
.router-link-exact-active {
  background: var(--color-button-light);
  border: 1px solid var(--color-border);
  .icon {
    color: var(--color-text-primary-light);
  }
  span {
    color: var(--color-text-primary-light);
    font-weight: var(--font-medium);
  }
}
</style>
