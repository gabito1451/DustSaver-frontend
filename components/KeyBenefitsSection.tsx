// components/KeyBenefitsSection.tsx
import React from "react";
import {
  Banknote,
  Lock,
  Shield,
  Trophy,
  X,
  Repeat,
  ArrowUpRight,
} from "lucide-react";

const KeyBenefitsSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 to-black z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
            Why Choose DustSaver?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Experience the future of finance with a platform that puts you in
            control of your financial journey
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard
            title="Bank-Free Finance"
            description="Access financial services without relying on traditional banks. Store, borrow, and grow your assets entirely on the blockchain."
            icon={<BankIcon />}
            iconBg="from-red-500/20 to-red-900/20"
            accentColor="red-500"
          />

          <BenefitCard
            title="Complete Control"
            description="Maintain full custody of your funds with non-custodial wallets. Your keys, your crypto, your financial freedom."
            icon={<LockIcon />}
            iconBg="from-indigo-500/20 to-indigo-900/20"
            accentColor="indigo-500"
          />

          <BenefitCard
            title="Blockchain Security"
            description="Smart contracts provide immutable, trustless security. Your assets are protected by the same technology that secures billions in crypto."
            icon={<ShieldIcon />}
            iconBg="from-blue-500/20 to-blue-900/20"
            accentColor="blue-500"
          />

          <BenefitCard
            title="Earn While You Save"
            description="Receive rewards in $DUSTSAVER tokens for every saving goal met and financial lesson completed."
            icon={<TrophyIcon />}
            iconBg="from-purple-500/20 to-purple-900/20"
            accentColor="purple-500"
          />
        </div>

        {/* Supplementary benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-indigo-900/30 bg-gradient-to-br from-black to-indigo-950/20 transition-all duration-200 hover:border-indigo-700/30 group">
            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-green-900/20 to-green-900/10 flex items-center justify-center border border-green-700/20 shadow-md">
              <Repeat className="h-6 w-6 text-green-500 group-hover:text-green-400 transition-colors duration-200" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                Automatic Savings
                <ArrowUpRight className="h-4 w-4 ml-2 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </h3>
              <p className="text-gray-400">
                Set up recurring deposits or define rules to automatically save
                a percentage of incoming funds.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl border border-indigo-900/30 bg-gradient-to-br from-black to-indigo-950/20 transition-all duration-200 hover:border-indigo-700/30 group">
            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-900/20 to-yellow-900/10 flex items-center justify-center border border-yellow-700/20 shadow-md">
              <X className="h-6 w-6 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-200" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
                Zero Hidden Fees
                <ArrowUpRight className="h-4 w-4 ml-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </h3>
              <p className="text-gray-400">
                All platform fees are transparent and community-governed. No
                surprise charges or hidden costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefit Card Component
interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  accentColor: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  icon,
  iconBg,
  accentColor,
}) => {
  return (
    <div
      className={`relative p-6 rounded-2xl border border-indigo-900/30 bg-gradient-to-br from-black to-indigo-950/20 h-full group transition-all duration-300 hover:border-${accentColor}/30`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-8 right-8 h-0.5 bg-${accentColor}/50 transform -translate-y-px opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>

      {/* Icon */}
      <div
        className={`h-16 w-16 mb-5 rounded-2xl bg-gradient-to-br ${iconBg} p-0.5`}
      >
        <div className="h-full w-full rounded-2xl bg-black/70 backdrop-blur-sm flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>

      {/* Hover indicator */}
      <div
        className={`absolute bottom-6 right-6 h-6 w-6 rounded-full flex items-center justify-center bg-${accentColor}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      >
        <ArrowUpRight className={`h-3 w-3 text-${accentColor}`} />
      </div>
    </div>
  );
};

// Custom Icon Components with Glow Effects
const BankIcon: React.FC = () => (
  <div className="relative">
    <Banknote className="h-8 w-8 text-red-500 relative z-10" />
    <div className="absolute inset-0 text-red-500 opacity-50 blur-sm">
      <Banknote className="h-8 w-8" />
    </div>
    <div className="absolute top-0 right-0 text-red-500 opacity-30 -translate-x-0.5 -translate-y-1">
      <X className="h-4 w-4" />
    </div>
  </div>
);

const LockIcon: React.FC = () => (
  <div className="relative">
    <Lock className="h-8 w-8 text-indigo-500 relative z-10" />
    <div className="absolute inset-0 text-indigo-500 opacity-50 blur-sm">
      <Lock className="h-8 w-8" />
    </div>
  </div>
);

const ShieldIcon: React.FC = () => (
  <div className="relative">
    <Shield className="h-8 w-8 text-blue-500 relative z-10" />
    <div className="absolute inset-0 text-blue-500 opacity-50 blur-sm">
      <Shield className="h-8 w-8" />
    </div>
  </div>
);

const TrophyIcon: React.FC = () => (
  <div className="relative">
    <Trophy className="h-8 w-8 text-purple-500 relative z-10" />
    <div className="absolute inset-0 text-purple-500 opacity-50 blur-sm">
      <Trophy className="h-8 w-8" />
    </div>
  </div>
);

export default KeyBenefitsSection;
