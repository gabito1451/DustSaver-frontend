"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Lock, Coins, LineChart, PiggyBank } from "lucide-react";

const HeroSection: React.FC = () => {
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  // Simple particles animation effect
  useEffect(() => {
    if (!particlesContainerRef.current) return;

    const container = particlesContainerRef.current;
    const particlesCount = 30;
    const particles: HTMLDivElement[] = [];

    // Create particles
    for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement("div");

      // Random size between 2-6px
      const size = Math.random() * 4 + 2;

      // Set particle styles
      particle.style.position = "absolute";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = "50%";
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();

      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Random color - blue/purple hues
      const hue = Math.random() * 60 + 220; // 220-280 hue range (blues to purples)
      particle.style.backgroundColor = `hsla(${hue}, 70%, 60%, 0.8)`;

      // Add to container
      container.appendChild(particle);
      particles.push(particle);

      // Animation
      const animate = () => {
        const x = parseFloat(particle.style.left);
        const y = parseFloat(particle.style.top);

        // Slow drift movement
        particle.style.left = `${
          (x + (Math.random() - 0.5) * 0.2 + 100) % 100
        }%`;
        particle.style.top = `${
          (y + (Math.random() - 0.5) * 0.2 + 100) % 100
        }%`;

        requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-indigo-950/20 z-0"></div>

      {/* Particles background */}
      <div
        ref={particlesContainerRef}
        className="absolute inset-0 opacity-30 z-0"
      ></div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-20 z-0"></div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left text section */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-400 text-sm mb-6">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-indigo-400"></span>
              Web3 Financial Freedom
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-purple-200">
              Save, Borrow, Grow. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                No Banks Required.
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              DustSaver gives you complete control over your financial future
              through decentralized savings and lending. Secure your assets,
              access loans, and grow your wealth—all on the blockchain.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-lg shadow-lg shadow-indigo-700/30 hover:shadow-indigo-700/50 transition-all duration-300 flex items-center justify-center gap-2">
                Start Saving Now
                <ArrowRight size={18} />
              </button>

              <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-indigo-500/50 hover:border-indigo-400 text-white font-medium text-lg transition-all duration-200 flex items-center justify-center">
                Watch Demo
              </button>
            </div>

            {/* Supported stablecoins */}
            <div className="mt-12 hidden md:block">
              <p className="text-gray-400 text-sm mb-3">
                Supported Stablecoins
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-blue-300">
                  USDC
                </div>
                <div className="h-10 w-10 rounded-full bg-green-900/30 border border-green-500/30 flex items-center justify-center text-green-300">
                  USDT
                </div>
                <div className="h-10 w-10 rounded-full bg-yellow-900/30 border border-yellow-500/30 flex items-center justify-center text-yellow-300">
                  DAI
                </div>
              </div>
            </div>
          </div>

          {/* Right visual section */}
          <div className="lg:w-1/2 lg:pl-8">
            <div className="relative">
              {/* Main visual - 3D Savings Vault */}
              <div className="relative h-80 w-80 sm:h-96 sm:w-96 md:h-[500px] md:w-[500px] mx-auto">
                {/* Outer rings */}
                <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20 animate-pulse"></div>
                <div
                  className="absolute inset-8 rounded-full border-4 border-purple-500/20 animate-pulse"
                  style={{ animationDelay: "500ms" }}
                ></div>

                {/* Inner hexagon */}
                <div className="absolute inset-16 rounded-3xl border-2 border-indigo-400/30 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm shadow-lg shadow-indigo-500/10 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-indigo-500/80 to-purple-600/80 shadow-lg shadow-indigo-500/30 flex items-center justify-center">
                    <PiggyBankGlow className="h-16 w-16 text-white" />
                  </div>
                </div>

                {/* Orbiting features */}
                <OrbitalFeature
                  icon={<Lock className="h-6 w-6 text-indigo-200" />}
                  label="Secure Savings"
                  position="top-0 left-1/2 -translate-x-1/2"
                  animationDelay="0ms"
                />

                <OrbitalFeature
                  icon={<Coins className="h-6 w-6 text-indigo-200" />}
                  label="DeFi Loans"
                  position="top-1/2 right-0 -translate-y-1/2"
                  animationDelay="1000ms"
                />

                <OrbitalFeature
                  icon={<LineChart className="h-6 w-6 text-indigo-200" />}
                  label="Track Progress"
                  position="bottom-0 left-1/2 -translate-x-1/2"
                  animationDelay="2000ms"
                />
              </div>

              {/* Floating particle effects */}
              <div className="absolute -top-10 -left-10 h-20 w-20 rounded-full bg-indigo-500/20 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-purple-500/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom PiggyBank icon with glow effect
const PiggyBankGlow: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 text-indigo-300 blur-sm">
        <PiggyBank className="h-full w-full" />
      </div>
      <PiggyBank className="h-full w-full relative z-10" />
    </div>
  );
};

// Orbital Feature Component
interface OrbitalFeatureProps {
  icon: React.ReactNode;
  label: string;
  position: string;
  animationDelay: string;
}

const OrbitalFeature: React.FC<OrbitalFeatureProps> = ({
  icon,
  label,
  position,
  animationDelay,
}) => {
  return (
    <div
      className={`absolute ${position} animate-float`}
      style={{ animationDelay }}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-full bg-indigo-900/50 border border-indigo-500/50 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-indigo-500/20">
          {icon}
        </div>
        <span className="text-xs text-gray-300 font-medium whitespace-nowrap px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
