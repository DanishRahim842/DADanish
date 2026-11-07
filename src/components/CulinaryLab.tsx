import { useState } from 'react';
import { MELANAU_TALL_HOUSE_FACTS } from '../data/melanauData';
import { Sparkles, Utensils, Home, Flame, Check, Award } from 'lucide-react';
import { playSuccessChime } from '../utils/audio';
import { MelanauFoodIllustration, SagoProcessingIllustration, RumahTinggiIllustration } from './HeritageIllustrations';

interface CulinaryLabProps {
  onUnlockBadge: (badgeId: string) => void;
  unlockedBadges: string[];
}

export function CulinaryLab({ onUnlockBadge, unlockedBadges }: CulinaryLabProps) {
  const [activeDish, setActiveDish] = useState<'umai' | 'linut' | 'tebaloi'>('umai');
  const [curingProgress, setCuringProgress] = useState<number>(30); // for Umai
  const [linutStirred, setLinutStirred] = useState<boolean>(false); // for Linut
  const [tebaloiBaked, setTebaloiBaked] = useState<boolean>(false); // for Tebaloi

  const checkCulinaryMastery = () => {
    if (!unlockedBadges.includes('sago-master')) {
      playSuccessChime();
      onUnlockBadge('sago-master');
    }
  };

  return (
    <section id="cuisine" className="py-16 border-b border-stone-200 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-mono mb-2">
            <span>Sago Lore & Indigenous Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Batang Rajang Traditions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            The Sago Palm & Culinary Traditions of Central Sarawak
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            The Melanau culture is inseparably tied to the Sago Palm (<em>Metroxylon sagu</em> or <em>Rumbia</em>) and the sea. Discover the world-famous Umai ceviche, gooey Linut, and the legendary 40-foot Tall Houses.
          </p>
        </div>

        {/* Part 1: Interactive Culinary Lab */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Authentic Culinary SVG Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm group">
              <div className="relative aspect-[4/3] flex items-center justify-center">
                <MelanauFoodIllustration className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-amber-300">
                    Sacred Sago & Coastal Flavors
                  </div>
                  <div className="text-base font-serif font-semibold">
                    Umai, Linut & Tebaloi
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white text-xs text-stone-600">
                Freshly caught empirang fish ceviche dressed in wild lime and bird's eye chilies, paired with hot Linut sago porridge.
              </div>
            </div>

            {/* Sago Palm Fast Facts */}
            <div className="p-4 bg-stone-100/70 rounded-xl border border-stone-200 space-y-2 text-xs">
              <div className="font-semibold text-stone-900 uppercase font-mono tracking-wider">
                Why Sago Saved the Melanau:
              </div>
              <p className="text-stone-700 leading-relaxed">
                Unlike rice which fails in tidal saline swamps, the Sago palm thrives in coastal Sarawak peatlands. One mature trunk produces up to 200kg of clean, gluten-free carbohydrate flour!
              </p>
            </div>
          </div>

          {/* Right: Interactive Dish Workshop */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            
            {/* Dish Tabs */}
            <div className="flex items-center gap-2 p-1 bg-stone-100 rounded-xl">
              <button
                onClick={() => setActiveDish('umai')}
                className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  activeDish === 'umai'
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                1. Umai (Raw Fish Ceviche)
              </button>
              <button
                onClick={() => setActiveDish('linut')}
                className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  activeDish === 'linut'
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                2. Linut (Warm Sago Starch)
              </button>
              <button
                onClick={() => setActiveDish('tebaloi')}
                className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  activeDish === 'tebaloi'
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                3. Tebaloi (Crisp Sago Wafers)
              </button>
            </div>

            {/* Dish 1: UMAI Curing Simulator */}
            {activeDish === 'umai' && (
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-stone-900">
                      Umai Melanau: The Ocean Fisher's Ceviche
                    </h3>
                    <p className="text-xs text-stone-500 font-mono mt-0.5">
                      Origin: Batang Igan & Mukah deep sea fisherfolk
                    </p>
                  </div>
                  <span className="text-2xl" aria-hidden="true">🐟</span>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed">
                  Melanau fishermen spending days out at sea had no wood to light cooking fires on small wooden boats. Instead, they perfected the art of curing fresh fish using the natural citric acid of calamansi lime juice!
                </p>

                {/* Interactive Curing Slider */}
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-stone-700">Lime Curing Duration:</span>
                    <span className="font-mono text-amber-900 font-medium">
                      {curingProgress < 35
                        ? 'Rare / Sashimi style'
                        : curingProgress < 75
                        ? 'Perfect Traditional Cure (Sweet & Translucent)'
                        : 'Fully Firm / Well-cured'}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={curingProgress}
                    onChange={(e) => {
                      setCuringProgress(Number(e.target.value));
                      if (Number(e.target.value) >= 50 && Number(e.target.value) <= 75) {
                        checkCulinaryMastery();
                      }
                    }}
                    className="w-full accent-amber-900 cursor-pointer"
                  />

                  <div className="flex justify-between text-[11px] text-stone-500 font-mono">
                    <span>5 mins (Light marinade)</span>
                    <span className="text-amber-900 font-semibold">15-20 mins (Ideal balance)</span>
                    <span>45 mins (Firm texture)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900">Fish Selection:</strong>
                    Empirang, tenggiri (mackerel), or red snapper sliced razor-thin.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900">Aromatics:</strong>
                    Finely chopped shallots, ginger, lemongrass, and bird's eye chilies.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <strong className="block text-stone-900">Dip Pairing:</strong>
                    Served with a saucer of spicy dried shrimp sambal or eaten directly.
                  </div>
                </div>
              </div>
            )}

            {/* Dish 2: LINUT Water Pouring Simulator */}
            {activeDish === 'linut' && (
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-stone-900">
                      Linut: The Translucent Sago Porridge
                    </h3>
                    <p className="text-xs text-stone-500 font-mono mt-0.5">
                      Signature Melanau & Bruneian communal delicacy (also known as Ambuyat)
                    </p>
                  </div>
                  <span className="text-2xl" aria-hidden="true">🥣</span>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed">
                  Raw sago starch looks like pure white chalk powder. When piping hot boiling water is stirred vigorously into the starch at the exact ratio, a magical chemical gelatinization occurs, turning into smooth, glossy Linut!
                </p>

                {/* Interactive Stirring Demo */}
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-2xl shrink-0">
                      {linutStirred ? '✨' : '🍶'}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-stone-900">
                        {linutStirred ? 'Linut Gelatinized!' : 'Raw Sago Starch Bowl'}
                      </div>
                      <div className="text-xs text-stone-600">
                        {linutStirred
                          ? 'Translucent, gooey, and piping hot. Ready to twirl with candas chopsticks!'
                          : 'White sago sediment waiting for rapid boiling water agitation.'}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setLinutStirred(!linutStirred);
                      if (!linutStirred) checkCulinaryMastery();
                    }}
                    className="px-4 py-2 bg-amber-900 hover:bg-amber-800 text-white text-xs font-semibold rounded-lg transition-colors shrink-0 cursor-pointer"
                  >
                    {linutStirred ? 'Reset Starch Bowl' : 'Pour Boiling Water & Stir'}
                  </button>
                </div>

                <div className="p-3 bg-amber-50/70 rounded-lg border border-amber-200 text-xs text-amber-950">
                  <strong className="font-semibold">How to Eat Like a Local:</strong> Do not chew Linut! Roll it into a bite-sized ball using twin bamboo sticks (<em>candas</em>), dip into spicy belacan sauce or fermented durian tempoyak, and swallow smoothly.
                </div>
              </div>
            )}

            {/* Dish 3: TEBALOI Crisp Sago Biscuits */}
            {activeDish === 'tebaloi' && (
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-stone-900">
                      Tebaloi: Sweet Roasted Sago & Coconut Crisps
                    </h3>
                    <p className="text-xs text-stone-500 font-mono mt-0.5">
                      Mukah's most famous cultural snack export across Malaysia
                    </p>
                  </div>
                  <span className="text-2xl" aria-hidden="true">🍪</span>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed">
                  Tebaloi is made by kneading wet sago flour with fresh grated coconut, eggs, and sugar. The dough is spread paper-thin across large rectangular baking mats made of palm fiber and slowly toasted over wood fire ovens until shatteringly crisp.
                </p>

                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-stone-900">
                      {tebaloiBaked ? 'Tebaloi Freshly Toasted!' : 'Unbaked Sago Dough on Palm Mat'}
                    </div>
                    <div className="text-xs text-stone-600 mt-0.5">
                      {tebaloiBaked
                        ? 'Golden grid texture infused with rustic ironwood smoke aroma.'
                        : 'Flattened dough prepared with grated coconut and brown palm sugar.'}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setTebaloiBaked(!tebaloiBaked);
                      if (!tebaloiBaked) checkCulinaryMastery();
                    }}
                    className="px-4 py-2 bg-amber-900 hover:bg-amber-800 text-white text-xs font-semibold rounded-lg transition-colors shrink-0 cursor-pointer flex items-center gap-1.5"
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>{tebaloiBaked ? 'Reset Oven' : 'Toast on Wood Oven'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Food Master Badge Alert */}
            {unlockedBadges.includes('sago-master') && (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-800 shrink-0" />
                <div className="text-xs text-amber-950">
                  <strong className="font-semibold">Badge Earned: Sago Heritage Artisan!</strong> You explored the indigenous science of sago starch processing and Melanau food preservation.
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Part 2: 4. Traditional Sago Processing (Pemprosesan Sagu) */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-stone-500 font-mono mb-2">
              4. Sago Processing Heritage
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              4. Traditional Melanau Sago Processing
            </h3>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              Before modern machinery, Melanau families spent days by the river extracting white gold from felled sago palms (<em>Pokok Rumbia</em>). Discover the ingenious indigenous water filtration and starch sedimentation methods.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sago Processing Self-Contained SVG Illustration */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm group">
              <div className="relative aspect-[16/9] sm:aspect-[16/10] flex items-center justify-center">
                <SagoProcessingIllustration className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-amber-300">
                    4. Sago Processing · Dalat & Mukah
                  </div>
                  <div className="text-base font-serif font-semibold">
                    Starch Sieving in River Troughs (Jak)
                  </div>
                  <p className="text-[11px] text-stone-200 mt-0.5 line-clamp-2">
                    Grated sago trunk pith is trampled with river water, filtering pure starch into settling vats.
                  </p>
                </div>
              </div>
            </div>

            {/* Sago Processing Steps */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
                <div className="text-xs font-mono font-semibold text-amber-900 uppercase">
                  1. Felling & Peeling the Rumbia Trunk
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Only mature palms (10 to 12 years old, before flowering) are felled. The thorny bark is stripped with adzes to expose the starch-rich fibrous pith.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
                <div className="text-xs font-mono font-semibold text-amber-900 uppercase">
                  2. Water Trampling (Mengirik Sagu)
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  The shredded pith is placed on coarse rattan sieves over a tilted wooden trough (<em>jak</em>). Villagers trample it with clean river water, washing microscopic starch granules down into the vat.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-1">
                <div className="text-xs font-mono font-semibold text-amber-900 uppercase">
                  3. Sedimentation & Lemantak Harvest
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  The heavy starch settles to the bottom of the vat as pure white paste called <em>Lemantak</em>, dried into flour or baked immediately into <em>Linut</em> and <em>Tebaloi</em>.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Part 3: 5. The Melanau Tall House (Rumah Tinggi Melanau) Deep Dive */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-stone-500 font-mono mb-2">
              5. Rumah Tinggi Melanau Architectural Legacy
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              5. Rumah Tinggi Melanau: Fortresses 40 Feet in the Air
            </h3>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              Before modern river settlements along Sibu and Mukah, Melanau communities lived in massive communal longhouses elevated up to 40 feet above the swamp floor on monolithic ironwood stilts.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Architectural SVG Illustration */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm group">
              <div className="relative aspect-[16/9] sm:aspect-[16/10] flex items-center justify-center">
                <RumahTinggiIllustration className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-amber-300">
                    5. Rumah Tinggi Melanau · Sibu & Mukah
                  </div>
                  <div className="text-base font-serif font-semibold">
                    The 40-Foot Ironwood Tall House
                  </div>
                  <p className="text-[11px] text-stone-200 mt-0.5 line-clamp-2">
                    Elevated on indestructible Borneo Ironwood (Belian) stilts for defensive immunity.
                  </p>
                </div>
              </div>
            </div>

            {/* Architectural Features */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-1">
                <div className="text-xs font-mono font-semibold text-amber-900 uppercase">
                  Impenetrable Belian Pillars
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {MELANAU_TALL_HOUSE_FACTS.ironwood}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-1">
                <div className="text-xs font-mono font-semibold text-amber-900 uppercase">
                  Defensive Fortification & Flood Immunity
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {MELANAU_TALL_HOUSE_FACTS.defense}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-1">
                <div className="text-xs font-mono font-semibold text-amber-900 uppercase">
                  Communal Living & Sago Extraction
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {MELANAU_TALL_HOUSE_FACTS.community}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
