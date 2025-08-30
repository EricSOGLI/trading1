import { motion } from "framer-motion";
import { FaWhatsapp, FaChartLine, FaUsers, FaGraduationCap, FaMoneyBillWave, FaLock, FaMobileAlt, FaStar } from "react-icons/fa";
import { CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-[#0a0f1c] text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#0a0f1c] to-[#0f1830] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg"
        >
          🚀 Devenez un Trader Rentable – Formation 100% Gratuite
        </motion.h1>
        <p className="relative mt-4 text-lg md:text-xl max-w-2xl text-gray-300">
          Rejoignez notre groupe WhatsApp et recevez une formation exclusive + des signaux gratuits pour commencer à trader dès aujourd’hui.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#whatsapp"
          className="relative mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-2xl animate-bounce"
        >
          <FaWhatsapp size={24} /> Rejoindre le groupe WhatsApp
        </motion.a>
        <div className="relative mt-8 text-gray-400 text-sm italic">Sans carte bancaire – accès immédiat</div>
      </section>

      {/* Pourquoi nous rejoindre */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Pourquoi rejoindre notre formation ?</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-[#101828] rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaChartLine className="mx-auto text-green-400 text-5xl" />
            <p className="mt-4 font-semibold">📈 Signaux gratuits en temps réel</p>
          </div>
          <div className="p-6 bg-[#101828] rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaGraduationCap className="mx-auto text-green-400 text-5xl" />
            <p className="mt-4 font-semibold">🎓 Formation simple et efficace</p>
          </div>
          <div className="p-6 bg-[#101828] rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaUsers className="mx-auto text-green-400 text-5xl" />
            <p className="mt-4 font-semibold">🤝 Communauté active et entraide</p>
          </div>
          <div className="p-6 bg-[#101828] rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaMoneyBillWave className="mx-auto text-green-400 text-5xl" />
            <p className="mt-4 font-semibold">💰 Potentiel de gains rapide</p>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-20 px-6 bg-[#0f1830] text-center">
        <h2 className="text-4xl font-bold mb-6">À propos de nous</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Notre équipe de traders professionnels partage son expérience et ses stratégies pour vous aider à réussir. Pas de théorie compliquée : du concret et des résultats.
        </p>
        <div className="flex justify-center gap-6 mt-8">
          <FaLock className="text-green-400 text-3xl" />
          <FaMobileAlt className="text-green-400 text-3xl" />
          <FaStar className="text-green-400 text-3xl" />
        </div>
      </section>

      {/* Ce que vous allez apprendre */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Ce que vous allez apprendre</h2>
        <ul className="space-y-5 text-lg">
          {[
            "Comprendre les bases du trading et de la bourse",
            "Savoir analyser les graphiques et tendances",
            "Maîtriser les stratégies de scalping et swing trading",
            "Utiliser correctement les signaux pour maximiser les gains",
            "Gestion du risque et discipline mentale",
            "Découvrir les secrets des traders professionnels",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 bg-[#101828] p-4 rounded-xl shadow-md hover:bg-[#1a2238] transition">
              <CheckCircle className="text-green-400" /> {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Témoignages */}
      <section className="py-20 px-6 bg-[#0f1830]">
        <h2 className="text-4xl font-bold text-center mb-12">Ils nous font confiance</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Grâce à cette formation, j’ai compris le trading et j’ai réalisé mes premiers profits !", "Une communauté super motivante, et les signaux sont très fiables.", "Je recommande à tous ceux qui veulent démarrer sérieusement dans le trading."].map((avis, i) => (
            <div key={i} className="p-6 bg-[#101828] rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
              <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="avatar" className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-green-400" />
              <p className="text-gray-300 italic">“{avis}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="whatsapp" className="py-20 px-6 text-center bg-gradient-to-r from-green-600 to-green-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10" />
        <h2 className="relative text-4xl md:text-5xl font-extrabold mb-6 animate-pulse">
          🎯 Ne perdez plus de temps !
        </h2>
        <p className="relative max-w-2xl mx-auto mb-8 text-lg">
          Rejoignez dès maintenant notre groupe WhatsApp et accédez gratuitement à la formation + signaux en direct.
        </p>
        <a
          href="https://wa.me/"
          className="relative inline-flex items-center gap-2 bg-white text-green-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-110"
        >
          👉 Rejoindre le groupe WhatsApp
        </a>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#101828] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold">Est-ce vraiment gratuit ?</h3>
            <p className="text-gray-300">Oui, accès libre sans frais cachés.</p>
          </div>
          <div className="bg-[#101828] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold">Dois-je avoir de l’expérience en trading ?</h3>
            <p className="text-gray-300">Non, la formation est adaptée aux débutants.</p>
          </div>
          <div className="bg-[#101828] p-6 rounded-xl shadow-md">
            <h3 className="font-semibold">Comment accéder aux signaux ?</h3>
            <p className="text-gray-300">Directement dans le groupe WhatsApp.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center bg-[#0a0f1c] text-gray-400 text-sm">
        <p>⚠️ Le trading comporte des risques. Les résultats passés ne garantissent pas les résultats futurs.</p>
        <p className="mt-4">© 2025 Formation Trading – Tous droits réservés.</p>
      </footer>
    </div>
  );
}
