import { Product, ServicePole, FixedPriceEvent, Testimonial } from './types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjwS1unPpWyMn2k4pcV5lE_bM2xPqXEvyeSCX0nu1p4t4zkH4zohBj-0zKs-lKtCfRmm5DjvqsCfU8MOz5SIVJlP_0BVY_pC3MfaETrmTwsontpxg2vCpJ2fwhCoWsGme1E9Cy8u7Gb-lpXLFw9ClvWOmxD68Ac-QKbkK7X2tbXSxLqqJq8nOz-3DbZpcaBbwtktaLRSvm8EcCzczPIIRKWbLmNdhOifTXrGXZpgMcQrV2x2QQjrNbkEMQMwaBtveL0P9Piug33riv';

export const ABSTRACT_TECH_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoxLD81Aa6e4xwws8K6t87wHM314axSR1MJA-AZJsoSoaafvVoeHr2sTa_Fi2q2lRuK3960CjSJTx5wzhlRuDx2f1m0hZFO6QTv2YsAJqoEd_WIXVJ0iuHKH_BE4-t6zQghkr0ALfK0o2jbgLoJ6k0ku3rFfKholX0skO3hMUX4J0Evp8k6ur-5F-H760w9lFRWa2VUgFt4Rj2_AybGeRPI8ykCDP_41NjTj-0Z_73MXBDXMrR5VQlMycs5baZ86XfLnBJbdWdVCmb';

export const OFFICE_BACKGROUND_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfDLu_5EJaYu5NGfI9Youa05EEC5vAMhLri7PS5JEAytrlVnlNpItOTJAkz6MEpyah6nZSDuqgfFNivVmB_Uy2lkMefpdqmjm70isEaZhHqLKmzs3lAIgUQOihsBadjJfPtw7IK_vo9A1S1S8fPnbgISc-uiom0Xasy-6lL_U7_bIk9way6bHfelzeYHUewCmPHUtDfzbA8AN9TAJyjLYfunmscXsCEkMkhqNbGiTAeCFRqztc364os7gVxM-7Txf11pooLlWF8u0R';

export const HANDBAGS_PEDESTAL_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtQ6GddUGcPvMtZyTzdPJYGnROu5v9z3Ujv1hoaKZcPr6IiDQEMwZm9LynGDEypsxd0fotVEMhNPblcCeD0kPhIpyHeCcLLnGrPj8g2ntgfOEzx5RWpYFziRO54AZbMRpFW9sLbyDfiI-R-O8umgr0Ds1Iy1ZLTOpjWJyo7uTUXlQjxT5bqUb7GJvw3BBKV_JshNdyj9O43uwlBlUmN5Tapu3izc86sBGD3KNXu9FjaDtpWbgbffVeoBzwnp-ESoPLoo5pCIMKl5Zq';

export const BRIEFCASE_WATCH_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtKdTqip9NUd-wzdLuRaVf2KpEUoKCNMzzzdwlOlRc77Sl4v1kk6Xcu2ROWOxSKhFTV8FB5wF8piLzPU7qgjF2_Y8t3YSzEDlvSnddgq3PVKZXB2zr2WPWfe6DO1WM0w73-2LCTsy005y3DxPnflZ62i9cqGTMYKmz8XJWq0Dqp7uBgJEQbrBt6LOwcyOcPvKOmkF-bem9noJPYpbRrisNSOL5BTw8ChOsCwDlzick-36uF5dqSXJOuqbfFg8G8VQeTbZEEkQnWrCT';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Costume Executive Navy',
    price: 750000,
    formattedPrice: '750,000 FCFA',
    category: 'Vêtements',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA23rxfkla_gWy1WJ13kD_Tp8oHsN1vOcJE_0VakPuZ9DIxWrgbfqTjmfry8g65-r5o2IIA4fO-sBduBjKZPXJGuWm5znuOx6gHU5rFYYXY9f7_qHeCT_cQH2vRiy8oTaYoTYVPcx-lZSUgQRogHp3wGNrxh-q38dIvOTdcz_s_AolNIPzp3Moj3q3TJxhm7tokVdyrRPvGF34yZhLLN9mkMCQ7vRlGTzdJUlsAPeTRSbAHwPoVX9rV7VLAvVh2FfDnKb98LffmSP9E',
    description: 'Une coupe de costume présidentielle, façonnée sur mesure dans un tissu d\'excellence italien pour projeter le statut suprême de son porteur.',
  },
  {
    id: 'prod-2',
    name: 'Chronomètre Gold Master',
    price: 1200000,
    formattedPrice: '1,200,000 FCFA',
    category: 'Accessoires',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlYCPFVveJwM8LJH0RXZK7L3tBqdGsjBUEZ2YH5Wy3W5lPZ2ukX27q7Z0j-v_m8iyngkAwP9zYJA4nTqOVARwc4ahblGObQj4umtISsEUHpp5mSVkq2FT4vnHCrUkEgJiVV-xcIiQpiT3a1CxHYsG0nBnYFrwZ-7IJ2QUPXXWALutM7TOqUVh6ZGoHVve78E48liseVNoZcRbLgR8zQ8gZif5KRWfFF8XSl6ZgUZRou_TQihOtlmDkc4GOnXqhKZX5sTEPbUWh2xeZ',
    description: 'Une montre mécanique d\'une précision extrême rehaussée d\'or blanc et d\'or fin massif pour mesurer votre temps précieux avec distinction.',
  },
  {
    id: 'prod-3',
    name: 'Smartphone Pro Max',
    price: 950000,
    formattedPrice: '950,000 FCFA',
    category: 'Électronique',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYz0OPCU5bkfOGNt2CF-V5b8B4K8nQIZPIBYbFH8cPnhsT9N94QgeEYmcHgQ8bgfm_iZ8fOrWkLCiBoeKmjvTfvfGl-KMPUso3swixcC2oUfPimmthRjxWHI-MiCnTpZdogb8Ca9T0p0bvbejGuQltv8kX4AGU4u6V5UXbVP0SdH_8Y7ofKTSYhusbcb4c6ykJIvm2O9tY4nHoNkvdZK2CDeGnNZAADzN9NXACo_v2SUTS1mbGColR_EPwcUE56GLKzTNDWMwlNpMo',
    description: 'L\'excellence technologique au service de votre productivité commerciale avec un design de titane sombre et d\'éléments d\'affichage fluides.',
  },
  {
    id: 'prod-4',
    name: 'Parfum Signature N°48',
    price: 150000,
    formattedPrice: '150,000 FCFA',
    category: 'Cosmétiques',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaOCMLoKHMYNGGEInyXD0qoVK5djke1rN0kdEDQxNH_i_cIjkJodx98SNe4NnDD-jm6E8Za2NBpNI-WgMqT8C7EkwWH6S_p8A7CjFZoaw2FJ6gA8TqpBYkky43B9f_eBAjPSy5z4gykhaJy-k03fRyIYMk-an9YMD4HsBD8OhmoRFXBkKdHP-PTzcufS7Q30Qet58x854_UK01OTyWKyU96IGNVRuL5vu0L9W7U6j8FVZNfaANBM4aBdjYlcR5G2Tgsz3Um4VwWn3I',
    description: 'Un accord olfactif somptueux de cuir d\'Orient et d\'épices nobles, enveloppé dans un écrin de verre pur géométrique.',
  },
  {
    id: 'prod-5',
    name: 'Sac de Voyage Elite',
    price: 320000,
    formattedPrice: '320,000 FCFA',
    category: 'Accessoires',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtQ6GddUGcPvMtZyTzdPJYGnROu5v9z3Ujv1hoaKZcPr6IiDQEMwZm9LynGDEypsxd0fotVEMhNPblcCeD0kPhIpyHeCcLLnGrPj8g2ntgfOEzx5RWpYFziRO54AZbMRpFW9sLbyDfiI-R-O8umgr0Ds1Iy1ZLTOpjWJyo7uTUXlQjxT5bqUb7GJvw3BBKV_JshNdyj9O43uwlBlUmN5Tapu3izc86sBGD3KNXu9FjaDtpWbgbffVeoBzwnp-ESoPLoo5pCIMKl5Zq',
    description: 'Confectionné artisanalement dans un cuir de mahoganey strié. Robuste, d\'une géométrie impeccable, il s\'affirme comme l\'allié par excellence de vos déplacements.',
  },
  {
    id: 'prod-6',
    name: 'Audio Tech Studio Pro',
    price: 245000,
    formattedPrice: '245,000 FCFA',
    category: 'Électronique',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABDRWswP6RZSXgi3jHT2NcqJ8eZz_nLsbiPJy9K8_pGUNF4rDHNZ_k5JMjRo72LdCNI5lKsqM0G90cuv5WRIIZzKEkGsNusmwdPgxVwYlfBBbC6nrUrBWd7djEcmgI0PUfzrib333_NOgBA_B2ELwrS8ybMVtnUevgd3w-rHFi31lVSTnU7o6fSmqN13Y0RiI7uoQRNltgJaJv78wxbOxQJ8E8hx9PwOvHC4_yBsof922bWhGwJ3VeRJLgI2R37YebFHWOgu-y8D5D',
    description: 'Casque acoustique haute fidélité doté d\'un réducteur de bruit actif d\'avant-garde pour un isolement parfait et une concentration sans faille.',
  },
  {
    id: 'prod-7',
    name: 'Robe de Soirée Étoile',
    price: 480000,
    formattedPrice: '480,000 FCFA',
    category: 'Vêtements',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACLiqX_WSYMtGIqe77pIc0gAZKfxtzd8K7oZBPlKDMB0wlfmtLMe6sOGKpwxSe9ZNwOxDqtTC5T_kGYhFX4YFFkeO6O0W6jRHbgWq0MhxDQp-x2VVinePMCOZlNJhjUOYqauTC5Yrw6l7EuG0iTMpEhyxmhUdiSGVwNtasaZYMVAxPj1bbr3oCQ1mmO85TfcvDa9KcqBgVk8L-XpWdTP4GHrTl82Gtxp7joHxXiDJHzPwAzMgCL6ZwC0jscO47HGg07ButEZ5t3tOq',
    description: 'Une soie fluide de minuit d\'une volupté absolue, coupée pour magnifier votre prestance lors des plus grands galas et cérémonies.',
  },
  {
    id: 'prod-8',
    name: 'Smart Control Series VII',
    price: 350000,
    formattedPrice: '350,000 FCFA',
    category: 'Accessoires',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDomtMAYXueLdR_vxKWazTY4MMu8kAYJvHQIrSkN3ChoJJ8SlD_tF52SYml45lMnzx1PplUKa9dKFq4i2rGY6JnOK9immLMeEobft8sRu8BYFQmVslGUM1ktve_JL4T9m2F6UJGVsIrnRM9N42w1c_mLFABd0bjBkrlBuZBfSE6fvd2j2zrM1wxJCIoMp9IDP5X1CKfzkTwURkntxgKPriNC8oAMDgaVQSqAki-6qxUscIirLRbkMTOmmyPFqgeq0IvOOy923SJ78p1',
    description: 'Une montre intelligente sport-chic en titane brossé avec interface d\'analyse tactique en temps réel connectée à vos applications de rentabilité.',
  }
];

export const SERVICE_POLES: ServicePole[] = [
  {
    id: 'pole-rp',
    title: 'Relation Publique (RP)',
    description: 'Conseil stratégique et représentation de marque. Nous identifions vos cibles prioritaires et bâtissons une image d\'autorité absolue et de prestige pour votre institution sur le plan local et international.',
    subservices: ['Conseil Stratégique d\'Autorité', 'Recherche de Cibles & Audit d\'Impact', 'Représentation Active de Marque d\'Élite'],
    iconName: 'groups'
  },
  {
    id: 'pole-event',
    title: 'Événementiel',
    description: 'Organisation de A à Z. Du mariage intime de très haut standing au gala d\'entreprise ou séminaire de prestige, nous orchestrons minutieusement chaque détail pour offrir une expérience sensorielle mémorable et sans aucune friction.',
    subservices: ['Mariages de Prestige & Réceptions Privées', 'Galas Institutionnels & Séminaires Corporatifs', 'Logistique, Traiteur & Design Scénographique'],
    iconName: 'celebration'
  },
  {
    id: 'pole-commerce',
    title: 'Gestion Commerciale',
    description: 'Optimisation chirurgicale de vos cycles de vente, architectures de entonnoirs et fidélisation client à long terme. Nous mettons en œuvre des processus technologiques et humains rigoureux pour maximiser votre marge nette.',
    subservices: ['Optimisation Tactique des Ventes', 'Fidélisation Client & Rétention Avancée', 'Audit de Performance Digitale & Physique'],
    iconName: 'trending_up'
  },
  {
    id: 'pole-whatsapp',
    title: 'WhatsApp Business',
    description: 'Service client externalisé de très haute réactivité et performance. Réponses automatisées ou humaines ultra-rapides et gestion méticuleuse de flux pour convertir instantanément vos prospects sur le canal de messagerie préféré et le plus direct.',
    subservices: ['Service Client Multi-Agent Externalisé', 'Réactivité Inégalée et Temps Réponse < 5 Minutes', 'Conception et Routage de Tunnels de Vente Convergeants'],
    iconName: 'chat_bubble'
  }
];

export const FIXED_PRICE_EVENTS: FixedPriceEvent[] = [
  {
    id: 'event-mariage',
    title: 'Mariage de Prestige',
    description: 'Coordination absolue de votre union sacrée. De la scénographie florale architecturale à la régie logistique totale, nous érigeons minutieusement le cadre exclusif de votre bonheur partagé.',
    price: 250000,
    formattedPrice: '250,000 frs',
    pricePrefix: 'À PARTIR DE',
    iconName: 'favorite',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhzen8Gl1pk4JIoykye48l-0kmZ02ziaWbfqfw7EnC5E32v8-HuZJiNXP_yiXUNQvUTbkOLnhIOwDi3ilS6GphGYXQclLdpGYfY0DvlxtOQHKhVrK_Nia9KW4dPPXkqtxBn4OFVzOb0Nw6D63qTrBpvC-jcBn-pqJH00H0u0FBOMIga3e7e_rdCaniKURHnKcgEDtFRX4BuSxu33pk8EfnbJEUFQpewChIbBvY8hJY12mHYa4zdekVBfDx_Vi9MhLfEbOPplS6w55b',
    tagline: 'Mariage Presentation'
  },
  {
    id: 'event-anniv',
    title: 'Anniversaire Signature',
    description: 'Célébrez une nouvelle année sous le signe du haut standing, de l\'audace et de la distinction absolue. Nous offrons des thèmes raffinés avec programmation gastronomique et musicale de premier plan.',
    price: 150000,
    formattedPrice: '150,000 frs',
    iconName: 'cake',
    tagline: 'Anniversaire d\'Exception'
  },
  {
    id: 'event-prof',
    title: 'Événement Professionnel',
    description: 'Séminaires d\'affaires, lancements de produits exclusifs et conférences stratégiques. Nous projetons la force institutionnelle et l\'autorité de votre marque à travers une exécution technologique et logistique sans faille.',
    price: 350000,
    formattedPrice: '350,000 frs',
    iconName: 'business_center',
    tagline: 'Gala & Corporate d\'Elite'
  },
  {
    id: 'event-gala',
    title: 'Retrouvailles / Gala',
    description: 'L\'élégance souveraine d\'une soirée de prestige pour reconnecter les cercles fermés de décideurs et célébrer avec éclat vos plus grands succès collectifs.',
    price: 200000,
    formattedPrice: '200,000 frs',
    priceSuffix: 'Tarif Standard',
    iconName: 'nightlife',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO3R1fcDNOoizPpJPIZs7AP7i1Eg9AclI2st5u8chlUjNK8DuA6zdK_uUf2Dq4bwIRYSqGY4Q1gdVZtxBEocOV3wcbFMqFzR5aH7lJ6pSZ6k7S1W_nsz7sgq7aMD7xQbBsewNM56ZBsGx_VsGBrtvt6GOGe-PMUHS1O9V_M90FbnnWeZrl6ROZxgHBkzIxvDicc02ID1ULvkGQnjV_E0o_dC5qy4AbSDO2MG-pPzSs3JeeprRpldLH5qfWUirGpZTz7gyScDOyRRKY',
    tagline: 'Gala Concept'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Sébastien N\'Kolo',
    role: 'Directeur Général',
    company: 'Congo Telecom Services',
    content: 'Grâce aux pôle marketing de BERTNA48, notre taux de conversion via WhatsApp Business a été multiplié par 3 en 60 jours. Leur rigueur architecturale de vente est impressionnante.'
  },
  {
    id: 'testi-2',
    name: 'Patricia Malonga',
    role: 'Fondatrice',
    company: 'Villa Orchidée Cérémonies',
    content: 'Pour notre grand gala annuel de bienfaisance, BERTNA48 a géré la logistique de A à Z avec brio. Une ponctualité exemplaire et un sens du détail digne de la haute couture.'
  }
];

export const CONTACT_WHATSAPP_NUMBER = '242066446257';
export const CONTACT_EMAIL = 'bertnajh@gmail.com';
export const CONTACT_PHONE = '+242 06 644 62 57';
