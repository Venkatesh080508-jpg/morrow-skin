import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'dew-point-cleanser',
    slug: 'dew-point-barrier-cleanser',
    name: 'Dew Point Barrier Cleanser',
    subtitle: 'Gentle Oat & Bio-Squalane Conditioning Micro-Foam',
    category: 'cleansers',
    categoryLabel: 'Cleansers',
    price: 28,
    originalPrice: 32,
    rating: 4.9,
    reviewCount: 184,
    description:
      'A cushiony, non-stripping gel-to-foam cleanser formulated with colloidal oat extract, sugarcane squalane, and marshmallow root. Dissolves impurities, excess sebum, and everyday pollutants while respecting the delicate lipid barrier.',
    details:
      'Engineered at an optimal pH of 5.5 to mirror healthy human skin. Free from sulfates, drying alcohols, synthetic fragrance, and essential oils. Safe for twice-daily use even on ultra-reactive and eczema-prone complexions.',
    benefits: [
      'Thoroughly cleanses without tight or stripped after-feel',
      'Protects natural barrier lipids and replenishes moisture',
      'Calms visible redness and soothes seasonal reactivity',
      'Prepares skin to absorb subsequent treatment layers effectively'
    ],
    keyIngredients: [
      {
        name: 'Colloidal Oat Flour',
        purpose: 'Provides prebiotic beta-glucans to soothe tingling and reinforce skin flora.',
        percentage: '2.5%'
      },
      {
        name: 'Plant-Derived Squalane',
        purpose: 'Weightlessly cushions against moisture loss during rinsing.',
        percentage: '3.0%'
      },
      {
        name: 'Marshmallow Root Extract',
        purpose: 'Emollient botanical rich in mucilage that blankets surface skin in hydration.'
      }
    ],
    fullIngredients:
      'Water/Aqua/Eau, Glycerin, Sodium Cocoyl Isethionate, Squalane, Avena Sativa (Oat) Kernel Flour, Althaea Officinalis (Marshmallow) Root Extract, Camellia Sinensis (Green Tea) Leaf Extract, Allantoin, Betaine, Hydroxyethylcellulose, Phenoxyethanol, Ethylhexylglycerin, Citric Acid.',
    howToUse: [
      {
        step: 'Step 1',
        instruction: 'Dispense 1–2 pumps onto damp palms and gently lather with lukewarm water.'
      },
      {
        step: 'Step 2',
        instruction: 'Massage over face and neck in circular motions for 60 seconds.'
      },
      {
        step: 'Step 3',
        instruction: 'Rinse thoroughly with lukewarm water and pat dry with a clean towel.'
      }
    ],
    skinConcerns: ['barrier', 'redness', 'hydration'],
    skinTypes: ['all', 'sensitive', 'dry', 'normal'],
    volume: '150 ml / 5.1 fl oz',
    sizes: [
      { label: 'Standard', volume: '150 ml / 5.1 fl oz', price: 28 },
      { label: 'Jumbo Refill', volume: '300 ml / 10.1 fl oz', price: 46 }
    ],
    routineStep: 'Step 01 · AM & PM',
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608248597359-00994101e4a1?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    pairedWith: ['botanic-calming-mist', 'bio-squalane-cloud-cream']
  },
  {
    id: 'botanic-calming-mist',
    slug: 'botanic-calming-mist-essence',
    name: 'Botanic Calming Mist Essence',
    subtitle: 'Fermented Green Tea & Snow Mushroom Hydration Veil',
    category: 'toners',
    categoryLabel: 'Toners & Essences',
    price: 34,
    rating: 4.8,
    reviewCount: 96,
    description:
      'An ultra-fine restorative mist saturated with fermented green tea water, tremella fuciformis (snow mushroom), and panthenol. Immediately resets tired skin, quenches trans-epidermal dehydration, and imparts a dewy luminous finish.',
    details:
      'Unlike traditional astringent toners, this milky-translucent mist functions as an essence-serum hybrid. Ideal for layering between steps to supercharge absorption or spritzing throughout the day over makeup.',
    benefits: [
      'Floods dehydrated epidermis with micro-droplets of water-binding polysaccharides',
      'Neutralizes urban free radicals with polyphenol-rich fermented camellia',
      'Instantly reduces sensations of heat and environmental tightness',
      'Non-sticky, velvety dry-down that primes complexion'
    ],
    keyIngredients: [
      {
        name: 'Fermented Camellia Sinensis (Green Tea)',
        purpose: 'Bio-fermentation increases antioxidant bioavailability by 4x.',
        percentage: '68%'
      },
      {
        name: 'Tremella Fuciformis (Snow Mushroom)',
        purpose: 'Holds up to 500x its weight in water with smaller molecular particles than standard HA.'
      },
      {
        name: 'Pro-Vitamin B5 (Panthenol)',
        purpose: 'Deeply conditions epidermal layers and speeds barrier recovery.',
        percentage: '2.0%'
      }
    ],
    fullIngredients:
      'Camellia Sinensis Leaf Water, Tremella Fuciformis Sporocarp Extract, Butylene Glycol, Panthenol, Glycerin, Sodium Hyaluronate, Beta-Glucan, Centella Asiatica Extract, Dipotassium Glycyrrhizate, 1,2-Hexanediol, Hydroxyacetophenone.',
    howToUse: [
      {
        step: 'Step 1',
        instruction: 'Close eyes and hold bottle 8–10 inches away from face.'
      },
      {
        step: 'Step 2',
        instruction: 'Mist 3–4 generous sprays across face, neck, and décolletage.'
      },
      {
        step: 'Step 3',
        instruction: 'Gently press into skin with clean fingertips while still damp before applying serum.'
      }
    ],
    skinConcerns: ['hydration', 'redness', 'radiance'],
    skinTypes: ['all', 'dry', 'sensitive', 'combination'],
    volume: '120 ml / 4.0 fl oz',
    sizes: [
      { label: 'Travel Mist', volume: '50 ml / 1.7 fl oz', price: 18 },
      { label: 'Full Size', volume: '120 ml / 4.0 fl oz', price: 34 }
    ],
    routineStep: 'Step 02 · AM & PM',
    badge: 'Award Winner',
    images: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    pairedWith: ['cellular-radiance-serum', 'mineral-silk-spf']
  },
  {
    id: 'cellular-radiance-serum',
    slug: 'cellular-radiance-serum-10',
    name: 'Cellular Radiance Serum 10%',
    subtitle: 'Niacinamide, Stabilized Vitamin C & Zinc PCA',
    category: 'serums',
    categoryLabel: 'Serums & Actives',
    price: 48,
    originalPrice: 56,
    rating: 4.9,
    reviewCount: 312,
    description:
      'A multi-pathway brightening and refining serum engineered to re-energize lackluster skin, fade stubborn post-blemish discoloration, and smooth irregular surface texture without irritating fragile acid mantles.',
    details:
      'Features high-purity Vitamin B3 (Niacinamide) paired harmoniously with 3-O-Ethyl Ascorbic Acid (an ultra-stable, non-oxidizing Vitamin C derivative) and Zinc PCA to balance T-zone shine while promoting collagen integrity.',
    benefits: [
      'Visibly evens skin tone and targets hyperpigmentation spots',
      'Refines enlarged pores and balances sebum congestion',
      'Strengthens the stratum corneum barrier against environmental stressors',
      'Silky water-gel texture absorbs instantly with zero stickiness'
    ],
    keyIngredients: [
      {
        name: 'Niacinamide (Vitamin B3)',
        purpose: 'Brightens tone, diminishes texture, and strengthens lipid synthesis.',
        percentage: '10%'
      },
      {
        name: '3-O-Ethyl Ascorbic Acid',
        purpose: 'Lipid- and water-soluble stable Vitamin C that resists oxidation.',
        percentage: '3%'
      },
      {
        name: 'Zinc PCA',
        purpose: 'Balances sebum and calms surface redness without dehydrating.',
        percentage: '1%'
      }
    ],
    fullIngredients:
      'Aqua, Niacinamide, Propanediol, 3-O-Ethyl Ascorbic Acid, Zinc PCA, Sodium Hyaluronate, Camellia Sinensis (Green Tea) Leaf Extract, Allantoin, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Ethylhexylglycerin, Potassium Sorbate.',
    howToUse: [
      {
        step: 'Step 1',
        instruction: 'Apply 3–4 drops onto freshly cleansed, slightly damp skin.'
      },
      {
        step: 'Step 2',
        instruction: 'Smooth gently over face, neck, and chest until fully absorbed.'
      },
      {
        step: 'Step 3',
        instruction: 'Follow with your favorite moisturizer and SPF in the morning.'
      }
    ],
    skinConcerns: ['radiance', 'barrier', 'firmness'],
    skinTypes: ['all', 'oily', 'combination', 'normal', 'dry'],
    volume: '30 ml / 1.0 fl oz',
    sizes: [
      { label: 'Standard', volume: '30 ml / 1.0 fl oz', price: 48 },
      { label: 'Value Size', volume: '60 ml / 2.0 fl oz', price: 78 }
    ],
    routineStep: 'Step 03 · AM & PM',
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608248597359-00994101e4a1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    pairedWith: ['bio-squalane-cloud-cream', 'midnight-bakuchiol-elixir']
  },
  {
    id: 'bio-squalane-cloud-cream',
    slug: 'bio-squalane-restorative-cloud-cream',
    name: 'Bio-Squalane Restorative Cloud Cream',
    subtitle: 'Ceramides NP/AP, Centella & Botanical Squalane',
    category: 'moisturizers',
    categoryLabel: 'Moisturizers',
    price: 52,
    rating: 5.0,
    reviewCount: 420,
    description:
      'A whipped, cloud-light barrier cream that delivers 48-hour deep lipid hydration. Fortified with an identical 3:1:1 physiological ratio of ceramides, cholesterol, and essential fatty acids to repair compromised skin barriers.',
    details:
      'Feels luxurious yet weightless on application, melting seamlessly into skin without greasy residue or pore-clogging heaviness. Perfect for dry climates, post-active recovery, or daily barrier defense.',
    benefits: [
      'Clinically demonstrated to improve barrier moisture retention by 89%',
      'Soothes acute flaking, irritation, and over-exfoliated skin',
      'Imparts a soft, velvet-satin luminous finish under makeup',
      'Fragrance-free, hypoallergenic, and non-comedogenic'
    ],
    keyIngredients: [
      {
        name: 'Ceramide Complex (NP, AP, EOP)',
        purpose: 'Replenishes intercellular mortar to prevent moisture evaporation.',
        percentage: '2.0%'
      },
      {
        name: 'Pure Sugarcane Squalane',
        purpose: 'Mimics natural skin sebum to lock in active water hydration.',
        percentage: '5.0%'
      },
      {
        name: 'Centella Asiatica (Madecassoside)',
        purpose: 'Potent botanical active renowned for accelerating barrier repair.',
        percentage: '1.5%'
      }
    ],
    fullIngredients:
      'Water, Squalane, Caprylic/Capric Triglyceride, Glycerin, Cetearyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Madecassoside, Butyrospermum Parkii (Shea) Butter, Sodium Hyaluronate, Carbomer, Xanthan Gum, Phenoxyethanol.',
    howToUse: [
      {
        step: 'Step 1',
        instruction: 'Scoop a dime-sized dollop onto clean fingertips.'
      },
      {
        step: 'Step 2',
        instruction: 'Warm slightly between hands and press gently into face, jawline, and neck.'
      },
      {
        step: 'Step 3',
        instruction: 'Layer extra cream on dry spots or windburned areas for overnight repair.'
      }
    ],
    skinConcerns: ['barrier', 'hydration', 'redness', 'firmness'],
    skinTypes: ['all', 'dry', 'sensitive', 'normal'],
    volume: '50 ml / 1.7 fl oz',
    sizes: [
      { label: 'Standard Jar', volume: '50 ml / 1.7 fl oz', price: 52 },
      { label: 'Luxury Pot', volume: '100 ml / 3.4 fl oz', price: 86 }
    ],
    routineStep: 'Step 04 · AM & PM',
    badge: 'Staff Favorite',
    images: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608248597359-00994101e4a1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    pairedWith: ['cellular-radiance-serum', 'mineral-silk-spf']
  },
  {
    id: 'mineral-silk-spf',
    slug: 'mineral-silk-daily-shield-spf-50',
    name: 'Mineral Silk Daily Shield SPF 50+',
    subtitle: 'Non-Nano Zinc Oxide & Ectoin Invisible Fluid',
    category: 'suncare',
    categoryLabel: 'Sun Care',
    price: 38,
    rating: 4.8,
    reviewCount: 245,
    description:
      'A breathable, featherweight mineral sunscreen providing broad-spectrum UVA/UVB and blue light defense. Formulated with 12% non-nano zinc oxide and ectoin to protect against photo-aging without white cast or eye sting.',
    details:
      'Dispenses as a sheer fluid that settles into an imperceptible, semi-matte veil. Infused with bisabolol and green tea antioxidants to calm daytime inflammation.',
    benefits: [
      'Broad spectrum SPF 50+ UVA/UVB mineral protection',
      '100% white-cast free across diverse Fitzpatrick skin tones',
      'Reef-safe, water-resistant for 40 minutes, and non-greasy',
      'Doubles as a smoothing makeup primer that prevents midday shine'
    ],
    keyIngredients: [
      {
        name: 'Non-Nano Zinc Oxide',
        purpose: 'Mineral physical filter reflecting both UVA and UVB radiation.',
        percentage: '12%'
      },
      {
        name: 'Ectoin Extreme Biomolecule',
        purpose: 'Protects cellular membranes from oxidative thermal stress and blue light.',
        percentage: '1.0%'
      },
      {
        name: 'Alpha-Bisabolol',
        purpose: 'Chamomile-derived compound that mitigates UV-triggered redness.'
      }
    ],
    fullIngredients:
      'Zinc Oxide 12%, Isododecane, Caprylic/Capric Triglyceride, Butyloctyl Salicylate, Propanediol, Ectoin, Bisabolol, Camellia Sinensis Leaf Extract, Tocopherol, Silica, Polyglyceryl-4 Diisostearate/Polyhydroxystearate/Sebacate, Water, Ethylhexylglycerin.',
    howToUse: [
      {
        step: 'Step 1',
        instruction: 'Shake bottle thoroughly before every application.'
      },
      {
        step: 'Step 2',
        instruction: 'Dispense two full finger-lengths across face and one finger-length on neck and ears.'
      },
      {
        step: 'Step 3',
        instruction: 'Apply 15 minutes before sun exposure; reapply every 2 hours if outdoors.'
      }
    ],
    skinConcerns: ['barrier', 'radiance', 'firmness'],
    skinTypes: ['all', 'oily', 'sensitive', 'combination', 'dry'],
    volume: '50 ml / 1.7 fl oz',
    sizes: [
      { label: 'Standard', volume: '50 ml / 1.7 fl oz', price: 38 }
    ],
    routineStep: 'Step 05 · Morning Routine',
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    pairedWith: ['bio-squalane-cloud-cream', 'dew-point-cleanser']
  },
  {
    id: 'midnight-bakuchiol-elixir',
    slug: 'midnight-recovery-bakuchiol-elixir',
    name: 'Midnight Recovery Bakuchiol Elixir',
    subtitle: 'Plant-Based Retinol Alternative & Cold-Pressed Rosehip',
    category: 'treatments',
    categoryLabel: 'Treatments & Oils',
    price: 64,
    rating: 4.9,
    reviewCount: 167,
    description:
      'A nocturnal rejuvenating facial oil centered around 2% pure Ayurvedic bakuchiol suspended in cold-pressed rosehip seed, sea buckthorn, and marula oils. Firms skin, promotes cellular turnover, and restores youthful spring without dryness or peeling.',
    details:
      'The gold standard gentle alternative to synthetic retinoids. Completely safe for daytime wear and non-sensitizing for those unable to tolerate prescription tretinoin.',
    benefits: [
      'Stimulates dermal renewal and softens fine expression lines',
      'Improves elasticity and restores bounce to fatigued skin',
      'Deeply nourishes with rich omega-3, 6, and 9 essential fatty acids',
      'Subtle natural botanical aroma of calm chamomile and frankincense'
    ],
    keyIngredients: [
      {
        name: 'Pure Babchi Bakuchiol',
        purpose: 'Clinically proven botanical retinoic pathway activator without peeling.',
        percentage: '2.0%'
      },
      {
        name: 'Cold-Pressed Rosehip Fruit Oil',
        purpose: 'Naturally abundant in trans-retinoic acid, carotenoids, and Vitamin C.'
      },
      {
        name: 'Virgin Sea Buckthorn Berry Oil',
        purpose: 'Packed with rare Omega-7 (palmitoleic acid) for cellular regeneration.'
      }
    ],
    fullIngredients:
      'Rosa Canina (Rosehip) Seed Oil, Sclerocarya Birrea (Marula) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Bakuchiol, Hippophae Rhamnoides (Sea Buckthorn) Fruit Oil, Tocopherol, Boswellia Carterii (Frankincense) Resin Oil, Helianthus Annuus Seed Oil.',
    howToUse: [
      {
        step: 'Step 1',
        instruction: 'Warm 2–3 golden drops between palms.'
      },
      {
        step: 'Step 2',
        instruction: 'Press onto cleansed face, neck, and chest as the final step of your PM ritual.'
      },
      {
        step: 'Step 3',
        instruction: 'Can be mixed into Bio-Squalane Cloud Cream for an intensive sleeping pack.'
      }
    ],
    skinConcerns: ['firmness', 'radiance', 'hydration'],
    skinTypes: ['dry', 'normal', 'combination', 'sensitive'],
    volume: '30 ml / 1.0 fl oz',
    sizes: [
      { label: 'Standard Dropper', volume: '30 ml / 1.0 fl oz', price: 64 }
    ],
    routineStep: 'Step 05 · Evening Ritual',
    badge: 'New',
    images: [
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    pairedWith: ['bio-squalane-cloud-cream', 'dew-point-cleanser']
  },
  {
    id: 'phyto-peptide-eye-cream',
    slug: 'phyto-peptide-eye-contour-cream',
    name: 'Phyto-Peptide Eye Contour Cream',
    subtitle: 'Copper Tripeptide, Caffeine & Wild Elderberry Complex',
    category: 'moisturizers',
    categoryLabel: 'Moisturizers',
    price: 44,
    rating: 4.7,
    reviewCount: 118,
    description:
      'A cooling, bio-adaptive eye treatment that depuffs early-morning fluid retention, lightens vascular dark circles, and smoothes crow’s feet around the delicate periorbital zone.',
    details:
      'Formulated with an ergonomic cooling ceramic applicator feeling that instantly refreshes tired, strained eyes. Ophthalmologist tested and safe for contact lens wearers.',
    benefits: [
      'Visibly reduces morning puffiness in under 10 minutes',
      'Firms crepiness and smooths fine dehydration lines',
      'Awakens and brightens under-eye shadows',
      'Fast-absorbing velvet finish that prevents concealer creasing'
    ],
    keyIngredients: [
      {
        name: 'Copper Tripeptide-1 (GHK-Cu)',
        purpose: 'Signals micro-collagen synthesis and firms thin under-eye skin.'
      },
      {
        name: 'Encapsulated Green Tea Caffeine',
        purpose: 'Promotes micro-circulation to drain pooled lymphatic fluid.',
        percentage: '1.5%'
      },
      {
        name: 'Elderberry Fruit Extract',
        purpose: 'Flavonoid antioxidant that strengthens delicate capillaries.'
      }
    ],
    fullIngredients:
      'Aqua, Glycerin, Caprylic/Capric Triglyceride, Sambucus Nigra (Elderberry) Fruit Extract, Caffeine, Copper Tripeptide-1, Hesperidin Methyl Chalcone, Sodium Hyaluronate, N-Hydroxysuccinimide, Chrysin, Carbomer, Phenoxyethanol, Ethylhexylglycerin.',
    howToUse: [
      {
        step: 'Step 1',
        instruction: 'Dispense a rice-grain amount for both eyes.'
      },
      {
        step: 'Step 2',
        instruction: 'Gently dab along the orbital bone from inner to outer corners using your ring finger.'
      },
      {
        step: 'Step 3',
        instruction: 'Use AM and PM before heavy face creams.'
      }
    ],
    skinConcerns: ['firmness', 'hydration', 'radiance'],
    skinTypes: ['all', 'sensitive', 'dry', 'normal'],
    volume: '15 ml / 0.5 fl oz',
    sizes: [
      { label: 'Standard Tube', volume: '15 ml / 0.5 fl oz', price: 44 }
    ],
    routineStep: 'Step 03.5 · AM & PM',
    badge: 'Staff Favorite',
    images: [
      'https://images.unsplash.com/photo-1512290900672-1f55b6a0ce5e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    pairedWith: ['cellular-radiance-serum', 'bio-squalane-cloud-cream']
  },
  {
    id: 'clarifying-willow-bark-tonic',
    slug: 'clarifying-willow-bark-exfoliating-tonic',
    name: 'Clarifying Willow Bark Exfoliating Tonic',
    subtitle: 'Natural BHA, Gluconolactone PHA & Licorice Root',
    category: 'toners',
    categoryLabel: 'Toners & Essences',
    price: 36,
    rating: 4.8,
    reviewCount: 142,
    description:
      'A non-stinging micro-liquid exfoliant combining Salix Alba (white willow bark) BHA with 5% Polyhydroxy Acid (PHA). Gently lifts dead surface cells, dissolves pore blockage, and promotes glass-smooth clarity without stripping moisture.',
    details:
      'Specifically formulated for skin that usually cannot tolerate aggressive glycolic acid. PHA molecules have a larger molecular weight, delivering ultra-mild surface retexturizing alongside humectant hydration.',
    benefits: [
      'Gently clears congested pores and prevents blackheads',
      'Smooths dry flaky patches and improves light reflection',
      'Supports natural desquamation while preserving lipid envelope',
      'Balances sebum without peeling or stinging sensations'
    ],
    keyIngredients: [
      {
        name: 'Salix Alba (Willow Bark) Extract',
        purpose: 'Natural source of salicin that penetrates oil pores to loosen sebum.',
        percentage: '4.0%'
      },
      {
        name: 'Gluconolactone (PHA)',
        purpose: 'Next-generation acid that exfoliates while acting as a humectant water magnet.',
        percentage: '5.0%'
      },
      {
        name: 'Dipotassium Glycyrrhizate (Licorice)',
        purpose: 'Calms redness and brightens uneven post-breakout shadows.'
      }
    ],
    fullIngredients:
      'Water, Gluconolactone, Salix Alba (Willow) Bark Extract, Propanediol, Dipotassium Glycyrrhizate, Arginine, Betaine, Sodium Phytate, Lactic Acid, Phenoxyethanol, Ethylhexylglycerin.',
    howToUse: [
      {
        step: 'Step 1',
        instruction: 'Saturate a reusable cotton pad or pour 3–4 drops directly into palms.'
      },
      {
        step: 'Step 2',
        instruction: 'Sweep across clean face and neck, avoiding direct eye contact.'
      },
      {
        step: 'Step 3',
        instruction: 'Use 2–3 evenings per week, gradually increasing to daily use as tolerated.'
      }
    ],
    skinConcerns: ['radiance', 'barrier', 'redness'],
    skinTypes: ['all', 'oily', 'combination', 'sensitive', 'normal'],
    volume: '150 ml / 5.1 fl oz',
    sizes: [
      { label: 'Standard Bottle', volume: '150 ml / 5.1 fl oz', price: 36 }
    ],
    routineStep: 'Step 02 · PM (2-3x/wk)',
    badge: 'Eco Award',
    images: [
      'https://images.unsplash.com/photo-1608248597359-00994101e4a1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80'
    ],
    inStock: true,
    pairedWith: ['dew-point-cleanser', 'bio-squalane-cloud-cream']
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Routines' },
  { id: 'cleansers', label: 'Cleansers' },
  { id: 'toners', label: 'Toners & Essences' },
  { id: 'serums', label: 'Serums' },
  { id: 'moisturizers', label: 'Moisturizers' },
  { id: 'suncare', label: 'Sun Care' },
  { id: 'treatments', label: 'Treatments & Oils' }
] as const;

export const SKIN_CONCERNS = [
  { id: 'all', label: 'All Concerns' },
  { id: 'barrier', label: 'Barrier Support' },
  { id: 'hydration', label: 'Deep Hydration' },
  { id: 'radiance', label: 'Radiance & Tone' },
  { id: 'redness', label: 'Calming Redness' },
  { id: 'firmness', label: 'Firmness & Elasticity' }
] as const;
