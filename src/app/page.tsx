"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import { useState } from 'react';

import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

const theme: SiteTheme = { styleVariant: 'brainRot', colorTemplate: 2, textAnimation: 'flip' };

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-b-1759143530426-188d0504.jpg"
          logoWidth={50}
          logoHeight={50}
          buttonText="Buy BRN"
          onButtonClick={() => {}}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="BrainRot Coin"
          description="Join the memecoin revolution."
          primaryButtonText="Buy Now"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <BaseAbout
          title="About BrainRot"
          descriptions={["The future of memecoins is here.", "Embracing creativity and chaos. "]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          steps={[
            { position: 'left', image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/create-a-2d-digital-illustration-in-brai-1759143525077-e3f92d4a.jpg", title: "Step 1", description: "Connect your wallet." },
            { position: 'center', image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/create-a-2d-digital-illustration-in-brai-1759143527107-fddfbf74.jpg", title: "Step 2", description: "Select your amount." },
            { position: 'right', image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/create-a-2d-digital-illustration-in-brai-1759143528826-d08c5407.jpg", title: "Step 3", description: "Confirm your transaction." },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics"
          description="Our token distribution and allocation."
          kpiItems={[
            { value: "1M", description: "Total Supply", icon: LucideIcon },
            { value: "500K", description: "Liquidity", icon: LucideIcon },
            { value: "100K", description: "Marketing", icon: LucideIcon },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-b-1759143530426-188d0504.jpg"
          logoAlt="BrainRot Logo"
          logoText="BrainRot"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => {}}] },
            { items: [{ label: "Contact", onClick: () => {}}] },
            { items: [{ label: "Terms of Use", onClick: () => {}}] },
          ]}
          copyrightText="© 2023 BrainRot"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}