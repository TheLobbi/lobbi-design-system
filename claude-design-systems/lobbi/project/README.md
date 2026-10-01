One system, 255 styles. Every Lobbi style — its colours, type, spacing, radii, shadows and brand-book rules — lives in this system as `styles/<id>.json`. The Colors and Typography views show the default style, **Dark Academia** (`009-dark-academia`); the **Style Switcher** previews any style live.

## Using a style

1. Pick a style from the catalogue below (or `styles/index.json`): match its **Perfect for**, tags, temperature (1 cool – 10 warm) and formality (1 casual – 10 ceremonial) to the brief. No style named → use the default.
2. Read `styles/<id>.json`. `readme` is that style's brand book: content rules, colour roles, type, spacing, states, accessibility. Follow it.
3. Build from `tokens` (same shape as this system's `tokens.json`: `color.tokens[] {name, value, usage}`, `type.groups[].styles[]`, `spacing`, `radius`, `shadow`). Emit them as CSS custom properties named exactly `--<token name>`; aliases `{name}` become `var(--name)`.
4. `roles` is a shortcut for quick UI: `bg`, `text`, `muted`, `surface`, `border`, `primary`/`onPrimary`, `accent`/`onAccent`, status colours, and `display`/`heading`/`body`/`label`/`button` type. Load `roles.fonts` (Google Fonts links) before rendering text.
5. Use one style per product surface. Never mix two styles' palettes on one page.

## Rules for every style

- Body text holds 4.5:1 on its ground; each style's token notes give the measured contrast on `page-bg`.
- Status colours always travel with a word or icon.
- No logos ship with the styles: set the organization name in the style's `display` type.
- Honour `prefers-reduced-motion`.

## Catalogue

| # | Style | Tags | Temp | Formality | Perfect for | File |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Byzantine Luxury | premium, heritage | 5 | 9 | Heritage Organizations, Religious Institutions, Museums | `styles/001-byzantine-luxury.json` |
| 2 | Streamline Moderne | creative | 5 | 7 | Design Studios, Creative Agencies, Architecture Firms | `styles/002-streamline-moderne.json` |
| 3 | Quiet Luxury | premium | 6 | 8 | Luxury Brands, Premium Services, Private Wealth | `styles/003-quiet-luxury.json` |
| 4 | Japandi + Glass | creative | 5 | 6 | Wellness Brands, Design Studios, Lifestyle Products | `styles/004-japandi-glass.json` |
| 5 | Swiss + Aurora | professional | 3 | 8 | Consulting Firms, Professional Services, Corporate | `styles/005-swiss-aurora.json` |
| 6 | Art Deco Cyberpunk | creative | 3 | 7 | Tech Startups, Gaming Companies, Creative Agencies | `styles/006-art-deco-cyberpunk.json` |
| 7 | Neubrutalism Memphis | creative | 6 | 4 | Design Studios, Creative Agencies, Modern Brands | `styles/007-neubrutalism-memphis.json` |
| 8 | Scandinavian Bento | professional | 6 | 6 | SaaS Companies, Tech Startups, Modern Business | `styles/008-scandinavian-bento.json` |
| 9 | Dark Academia | premium, academic | 4 | 8 | Universities, Libraries, Academic Institutions | `styles/009-dark-academia.json` |
| 10 | Vaporwave Y2K | creative | 5 | 3 | Creative Agencies, Entertainment Brands, Media Companies | `styles/010-vaporwave-y2k.json` |
| 11 | Solarpunk Biophilic | tech | 7 | 5 | Sustainability Orgs, Environmental Groups, Green Tech | `styles/011-solarpunk-biophilic.json` |
| 12 | Brutalist Concrete | creative | 3 | 6 | Architecture Firms, Design Studios, Modern Brands | `styles/012-brutalist-concrete.json` |
| 13 | Corporate Refinement | premium, professional | 5 | 9 | Executive Services, Premium Consulting, Corporate Leaders | `styles/013-corporate-refinement.json` |
| 14 | Editorial Swiss | professional, media | 4 | 8 | Publishers, Media Companies, News Organizations | `styles/014-editorial-swiss.json` |
| 15 | Private Banking | premium, professional | 4 | 9 | Private Banks, Wealth Management, Investment Firms | `styles/015-private-banking.json` |
| 16 | Architect Portfolio | professional | 2 | 8 | Architecture Firms, Design Studios, Creative Professionals | `styles/016-architect-portfolio.json` |
| 17 | Executive Suite | professional | 5 | 8 | Corporate Headquarters, C-Suite Services, Executive Firms | `styles/017-executive-suite.json` |
| 18 | Law Firm Premium | premium, professional | 4 | 10 | Law Firms, Legal Services, Attorney Associations | `styles/018-law-firm-premium.json` |
| 19 | Luxury Hotel | premium, hospitality | 6 | 8 | Luxury Hotels, Premium Resorts, 5-Star Hospitality | `styles/019-luxury-hotel.json` |
| 20 | Investment Fund | professional, tech | 3 | 8 | Investment Firms, Hedge Funds, Financial Services | `styles/020-investment-fund.json` |
| 21 | Wealth Management | premium, professional | 5 | 9 | Wealth Advisors, Private Banks, Asset Management | `styles/021-wealth-management.json` |
| 22 | Fintech Modern | tech, professional | 4 | 7 | Digital Banks, Payment Platforms, Investment Apps | `styles/022-fintech-modern.json` |
| 23 | Trading Terminal | tech, professional | 2 | 8 | Trading Platforms, Financial Tech, Investment Apps | `styles/023-trading-terminal.json` |
| 24 | Insurance Premium | professional | 5 | 9 | Insurance Companies, Risk Management, Financial Security | `styles/024-insurance-premium.json` |
| 25 | Crypto Luxury | tech, premium | 3 | 8 | Crypto Exchanges, Blockchain Startups, Web3 Projects | `styles/025-crypto-luxury.json` |
| 26 | Real Estate Luxury | premium, hospitality | 6 | 8 | Luxury Real Estate, Property Developers, Estate Agencies | `styles/026-real-estate-luxury.json` |
| 27 | Consulting Elite | professional | 3 | 9 | Strategy Consultants, Management Firms, Business Advisors | `styles/027-consulting-elite.json` |
| 28 | Medical Premium | professional, tech | 4 | 8 | Medical Practices, Healthcare Networks, Clinical Services | `styles/028-medical-premium.json` |
| 29 | Dental Luxury | hospitality | 6 | 7 | Dental Practices, Cosmetic Dentistry, Oral Healthcare | `styles/029-dental-luxury.json` |
| 30 | Pharmaceutical | professional, tech | 3 | 9 | Pharma Companies, Drug Manufacturers, Medical Research | `styles/030-pharmaceutical.json` |
| 31 | Engineering Firm | professional, tech | 3 | 8 | Engineering Firms, Technical Services, Infrastructure | `styles/031-engineering-firm.json` |
| 32 | Accounting Premium | professional | 4 | 9 | Accounting Firms, CPA Services, Financial Auditing | `styles/032-accounting-premium.json` |
| 33 | Patent Law | professional | 3 | 9 | Patent Attorneys, IP Law Firms, Tech Legal Services | `styles/033-patent-law.json` |
| 34 | HR Enterprise | professional, tech | 6 | 7 | HR Consulting, Talent Management, Workforce Solutions | `styles/034-hr-enterprise.json` |
| 35 | Yacht Club | premium, hospitality | 4 | 9 | Yacht Clubs, Sailing Organizations, Maritime Societies | `styles/035-yacht-club.json` |
| 36 | Golf Resort | premium, hospitality | 5 | 8 | Golf Clubs, Country Clubs, Resort Communities | `styles/036-golf-resort.json` |
| 37 | Spa Wellness | hospitality | 7 | 6 | Spas, Wellness Centers, Retreat Centers | `styles/037-spa-wellness.json` |
| 38 | Fine Dining | premium, hospitality | 6 | 9 | Fine Dining, Michelin Restaurants, Culinary Experiences | `styles/038-fine-dining.json` |
| 39 | Private Aviation | premium | 4 | 9 | Private Jet Services, Aviation Charter, Executive Travel | `styles/039-private-aviation.json` |
| 40 | Watch Luxury | premium | 5 | 9 | Luxury Watchmakers, Timepiece Boutiques, Horology Brands | `styles/040-watch-luxury.json` |
| 41 | Jewelry Boutique | premium | 6 | 9 | Jewelry Brands, Luxury Boutiques, Fine Jewelry | `styles/041-jewelry-boutique.json` |
| 42 | Art Gallery | creative, premium | 5 | 8 | Art Galleries, Museums, Cultural Institutions | `styles/042-art-gallery.json` |
| 43 | AI Research | tech, academic | 3 | 8 | AI Research Labs, Tech Research, ML Companies | `styles/043-ai-research.json` |
| 44 | Biotech Lab | tech, professional | 3 | 8 | Biotech Firms, Life Sciences, Research Labs | `styles/044-biotech-lab.json` |
| 45 | Aerospace | tech, professional | 2 | 9 | Aerospace Companies, Space Industry, Aviation Tech | `styles/045-aerospace.json` |
| 46 | Robotics | tech | 3 | 8 | Robotics Companies, Automation Tech, AI Hardware | `styles/046-robotics.json` |
| 47 | Quantum Computing | tech, academic | 2 | 8 | Quantum Computing, Advanced Research, Tech Labs | `styles/047-quantum-computing.json` |
| 48 | Clean Energy | tech | 6 | 7 | Clean Energy Firms, Solar Companies, Sustainability Tech | `styles/048-clean-energy.json` |
| 49 | Space Industry | tech | 3 | 8 | Space Companies, Aerospace, Satellite Services | `styles/049-space-industry.json` |
| 50 | Cybersecurity | tech, professional | 2 | 9 | Security Firms, Cybersecurity, IT Security Services | `styles/050-cybersecurity.json` |
| 51 | News Editorial | media, professional | 5 | 8 | News Organizations, Publications, Media Companies | `styles/051-news-editorial.json` |
| 52 | Fashion Magazine | media, creative | 4 | 8 | Fashion Publishers, Style Magazines, Luxury Media | `styles/052-fashion-magazine.json` |
| 53 | Literary Journal | media, academic | 5 | 8 | Literary Journals, Publishers, Writing Organizations | `styles/053-literary-journal.json` |
| 54 | Music Label | media, creative | 6 | 7 | Record Labels, Music Publishers, Audio Brands | `styles/054-music-label.json` |
| 55 | Film Studio | media, creative | 6 | 7 | Film Studios, Production Companies, Entertainment | `styles/055-film-studio.json` |
| 56 | Photography Pro | media, creative | 5 | 7 | Photographers, Photography Studios, Visual Artists | `styles/056-photography-pro.json` |
| 57 | Podcast Premium | media, tech | 6 | 6 | Podcast Networks, Audio Productions, Content Creators | `styles/057-podcast-premium.json` |
| 58 | Streaming Platform | media, tech | 4 | 5 | Streaming Services, Entertainment Platforms, Media Tech | `styles/058-streaming-platform.json` |
| 59 | Board Room | premium, professional | 5 | 10 | Corporate Boards, Executive Councils, Leadership Groups | `styles/059-board-room.json` |
| 60 | Fortune 500 | professional | 4 | 9 | Fortune 500, Enterprise Corporations, Major Businesses | `styles/060-fortune-500.json` |
| 61 | Startup Unicorn | tech, professional | 6 | 7 | Tech Startups, VC-Backed Companies, Innovation Labs | `styles/061-startup-unicorn.json` |
| 62 | Non-Profit Premium | professional | 7 | 8 | Nonprofits, Foundations, Social Impact Orgs | `styles/062-non-profit-premium.json` |
| 63 | University Ivy | academic, premium | 5 | 9 | Universities, Ivy League Colleges, Academic Institutions | `styles/063-university-ivy.json` |
| 64 | Think Tank | academic, professional | 4 | 9 | Think Tanks, Research Institutes, Policy Organizations | `styles/064-think-tank.json` |
| 65 | Foundation | premium, professional | 5 | 9 | Foundations, Philanthropic Orgs, Charitable Trusts | `styles/065-foundation.json` |
| 66 | Government Civic | professional | 5 | 8 | Government Agencies, Public Services, Civic Organizations | `styles/066-government-civic.json` |
| 67 | Auction House | premium | 4 | 10 | Auction Houses, Fine Art Sales, Collectibles Markets | `styles/067-auction-house.json` |
| 68 | Wine Estate | premium, hospitality | 6 | 8 | Wineries, Vineyards, Wine Estates | `styles/068-wine-estate.json` |
| 69 | Equestrian | premium, hospitality | 5 | 9 | Equestrian Clubs, Horse Racing, Riding Organizations | `styles/069-equestrian.json` |
| 70 | Luxury Auto | premium, tech | 4 | 9 | Luxury Auto Brands, Car Dealerships, Automotive Clubs | `styles/070-luxury-auto.json` |
| 71 | Chamber of Commerce | association, professional | 5 | 8 | Local Chambers, Business Associations, Regional Councils | `styles/071-chamber-of-commerce.json` |
| 72 | Trade Association | association, professional | 4 | 9 | Trade Associations, Industry Groups, Sector Councils | `styles/072-trade-association.json` |
| 73 | Professional Society | association, academic | 4 | 9 | Professional Societies, Industry Associations, Certification Bodies | `styles/073-professional-society.json` |
| 74 | Alumni Association | association, academic | 6 | 7 | Alumni Associations, University Networks, Graduate Groups | `styles/074-alumni-association.json` |
| 75 | Bar Association | association, professional | 3 | 10 | Bar Associations, Legal Societies, Attorney Networks | `styles/075-bar-association.json` |
| 76 | Medical Association | association, professional | 4 | 9 | Medical Associations, Physician Groups, Healthcare Networks | `styles/076-medical-association.json` |
| 77 | Realtors Association | association, professional | 6 | 7 | Realtor Associations, Real Estate Boards, Agent Networks | `styles/077-realtors-association.json` |
| 78 | Rotary Service Club | association | 7 | 6 | Rotary Clubs, Service Organizations, Community Groups | `styles/078-rotary-service-club.json` |
| 79 | Credit Union League | association, professional | 6 | 7 | Credit Unions, Member-Owned Banks, Financial Cooperatives | `styles/079-credit-union-league.json` |
| 80 | HOA Management | association | 6 | 6 | HOAs, Community Associations, Residential Boards | `styles/080-hoa-management.json` |
| 81 | Teachers Union | association, professional | 6 | 7 | Teachers Unions, Education Associations, Faculty Groups | `styles/081-teachers-union.json` |
| 82 | Nonprofit Alliance | association, professional | 7 | 6 | Nonprofit Networks, NGO Alliances, Impact Coalitions | `styles/082-nonprofit-alliance.json` |
| 83 | Sports League | association | 7 | 6 | Sports Leagues, Athletic Associations, Recreation Councils | `styles/083-sports-league.json` |
| 84 | Veterans Organization | association, premium | 5 | 8 | Veterans Groups, Military Associations, Service Organizations | `styles/084-veterans-organization.json` |
| 85 | Religious Denomination | association | 6 | 7 | Religious Bodies, Faith Denominations, Church Networks | `styles/085-religious-denomination.json` |
| 86 | Fraternal Organization | association, premium | 5 | 8 | Fraternal Orders, Brotherhood Organizations, Social Clubs | `styles/086-fraternal-organization.json` |
| 87 | Industry Council | association, professional | 4 | 9 | Industry Councils, Sector Leadership, Business Forums | `styles/087-industry-council.json` |
| 88 | Cooperative Association | association | 7 | 6 | Cooperatives, Member-Owned Orgs, Collective Groups | `styles/088-cooperative-association.json` |
| 89 | Professional Network | association, professional | 5 | 7 | Professional Networks, Career Organizations, Industry Forums | `styles/089-professional-network.json` |
| 90 | Membership Collective | association, creative | 7 | 5 | Membership Clubs, Social Collectives, Community Hubs | `styles/090-membership-collective.json` |
| 91 | Enterprise SaaS | tech, professional | 4 | 8 | SaaS Companies, Enterprise Software, B2B Platforms | `styles/091-enterprise-saas.json` |
| 92 | Nordic Minimal | creative, professional | 6 | 6 | Design Agencies, Creative Studios, Modern Brands | `styles/092-nordic-minimal.json` |
| 93 | Luxury Concierge | premium, hospitality | 6 | 9 | Concierge Services, Luxury Lifestyle, VIP Services | `styles/093-luxury-concierge.json` |
| 94 | Cyber Command | tech | 2 | 9 | Cybersecurity Firms, Defense Tech, Security Operations | `styles/094-cyber-command.json` |
| 95 | Organic Wellness | hospitality, creative | 8 | 5 | Wellness Brands, Organic Products, Eco Lifestyle | `styles/095-organic-wellness.json` |
| 96 | Investment Elite | premium, professional | 3 | 10 | Investment Banks, Private Equity, Wealth Management | `styles/096-investment-elite.json` |
| 97 | Creative Studio | creative | 6 | 4 | Design Studios, Creative Agencies, Branding Firms | `styles/097-creative-studio.json` |
| 98 | Academic Research | academic, professional | 4 | 9 | Research Institutes, Academic Centers, University Labs | `styles/098-academic-research.json` |
| 99 | Sports Premium | media, premium | 7 | 6 | Sports Media, Athletic Brands, Premium Sports | `styles/099-sports-premium.json` |
| 100 | Heritage Society | premium, academic | 5 | 9 | Heritage Societies, Genealogy Orgs, Historical Groups | `styles/100-heritage-society.json` |
| 101 | Quantum Lab | tech, academic | 3 | 8 | Quantum Labs, Advanced Research, Science Tech | `styles/101-quantum-lab.json` |
| 102 | Maritime Guild | association, premium | 5 | 8 | Maritime Associations, Shipping Guilds, Nautical Societies | `styles/102-maritime-guild.json` |
| 103 | Artisan Collective | creative, association | 7 | 5 | Artisan Collectives, Craft Guilds, Maker Communities | `styles/103-artisan-collective.json` |
| 104 | Aviation Elite | premium, tech | 4 | 9 | Private Aviation, Jet Services, Executive Travel | `styles/104-aviation-elite.json` |
| 105 | Music Conservatory | academic, creative | 5 | 8 | Music Schools, Conservatories, Performance Academies | `styles/105-music-conservatory.json` |
| 106 | Green Energy | tech, association | 7 | 6 | Green Energy Orgs, Renewable Tech, Climate Groups | `styles/106-green-energy.json` |
| 107 | Legal Summit | professional, association | 3 | 10 | Legal Conferences, Law Associations, Attorney Networks | `styles/107-legal-summit.json` |
| 108 | Culinary Guild | hospitality, association | 6 | 7 | Culinary Institutes, Chef Associations, Food Guilds | `styles/108-culinary-guild.json` |
| 109 | Architecture Forum | professional, creative | 3 | 8 | Architect Associations, Design Forums, Urban Planning | `styles/109-architecture-forum.json` |
| 110 | Philanthropy Circle | premium, association | 6 | 8 | Philanthropic Circles, Donor Networks, Giving Societies | `styles/110-philanthropy-circle.json` |
| 111 | eSports Arena | tech, media | 8 | 3 | Esports Teams, Gaming Leagues, Tournament Platforms | `styles/111-esports-arena.json` |
| 112 | Wine Society | premium, hospitality | 6 | 8 | Wine Clubs, Sommelier Societies, Collector Groups | `styles/112-wine-society.json` |
| 113 | Blockchain DAO | tech | 4 | 5 | DAOs, Crypto Communities, Blockchain Projects | `styles/113-blockchain-dao.json` |
| 114 | Healthcare Network | professional, association | 4 | 9 | Healthcare Networks, Medical Associations, Clinical Groups | `styles/114-healthcare-network.json` |
| 115 | Fashion Council | creative, media | 5 | 8 | Fashion Councils, Designer Networks, Style Associations | `styles/115-fashion-council.json` |
| 116 | Motorsport Club | premium, association | 6 | 7 | Motorsport Clubs, Racing Associations, Car Enthusiasts | `styles/116-motorsport-club.json` |
| 117 | Diplomatic Corps | professional | 4 | 10 | Diplomatic Corps, Foreign Service, International Relations | `styles/117-diplomatic-corps.json` |
| 118 | Startup Accelerator | tech, professional | 7 | 5 | Startup Accelerators, VC Networks, Innovation Hubs | `styles/118-startup-accelerator.json` |
| 119 | Meditation Sangha | hospitality, creative | 8 | 4 | Meditation Centers, Mindfulness Groups, Spiritual Communities | `styles/119-meditation-sangha.json` |
| 120 | Space Pioneers | tech, academic | 4 | 7 | Space Organizations, Aerospace Advocacy, Space Tech | `styles/120-space-pioneers.json` |
| 121 | Civic Innovation Hub | professional, association | 5 | 7 | Innovation Hubs, Civic Tech, Government Innovation | `styles/121-civic-innovation-hub.json` |
| 122 | Democratic Transparency | professional, association | 6 | 8 | Government Agencies, Public Transparency, Civic Initiatives | `styles/122-democratic-transparency.json` |
| 123 | Public Service Excellence | premium, professional, association | 5 | 9 | Public Services, Government Excellence, Civic Leadership | `styles/123-public-service-excellence.json` |
| 124 | Regulatory Modernization | professional, association | 4 | 9 | Regulatory Bodies, Government Agencies, Policy Makers | `styles/124-regulatory-modernization.json` |
| 125 | Impact Collective | creative, association | 7 | 7 | Impact Networks, Nonprofit Alliances, Social Enterprise | `styles/125-impact-collective.json` |
| 126 | Philanthropic Legacy | premium, association | 6 | 9 | Philanthropic Foundations, Legacy Donors, Charitable Trusts | `styles/126-philanthropic-legacy.json` |
| 127 | Community Catalyst | creative, association, hospitality | 8 | 5 | Community Groups, Grassroots Orgs, Local Initiatives | `styles/127-community-catalyst.json` |
| 128 | Advocacy Alliance | professional, association, media | 6 | 7 | Advocacy Groups, Policy Networks, Industry Advocates | `styles/128-advocacy-alliance.json` |
| 129 | Member Ecosystem | tech, association | 5 | 7 | Member Platforms, Professional Networks, Community Tech | `styles/129-member-ecosystem.json` |
| 130 | Credential Authority | professional, association | 3 | 9 | Certification Bodies, Professional Credentials, Standards Orgs | `styles/130-credential-authority.json` |
| 131 | Industry Council Evolution | tech, association, professional | 4 | 8 | Industry Councils, Sector Leadership, Trade Forums | `styles/131-industry-council-evolution.json` |
| 132 | Membership Renaissance | creative, premium, association | 7 | 6 | Creative Collectives, Member Organizations, Artistic Guilds | `styles/132-membership-renaissance.json` |
| 133 | Professional Guild Modern | professional, association, creative | 4 | 8 | Professional Guilds, Trade Associations, Craft Councils | `styles/133-professional-guild-modern.json` |
| 134 | Association Intelligence | tech, association | 3 | 8 | Research Associations, Think Tanks, Intelligence Networks | `styles/134-association-intelligence.json` |
| 135 | Global Standards Body | premium, professional, association | 4 | 9 | Global Standards, International Bodies, Regulatory Authorities | `styles/135-global-standards-body.json` |
| 136 | Minimal Wellness | hospitality, creative | 8 | 5 | Wellness Centers, Spas, Mindfulness Brands | `styles/136-minimal-wellness.json` |
| 137 | Heritage Modernist | premium, association | 4 | 8 | Heritage Organizations, Preservation Societies, Museums | `styles/137-heritage-modernist.json` |
| 138 | Eco-Luxury Refined | premium, creative | 6 | 8 | Sustainable Luxury, Eco Premium Brands, Green Design | `styles/138-eco-luxury-refined.json` |
| 139 | Artisan Contemporary | creative, professional | 6 | 6 | Artisan Brands, Contemporary Craft, Design Studios | `styles/139-artisan-contemporary.json` |
| 140 | Accessible Professional Plus | professional, association | 5 | 8 | Accessible Services, Inclusive Orgs, Universal Design | `styles/140-accessible-professional-plus.json` |
| 141 | Art Nouveau Elegance | creative, premium | 7 | 7 | Art Galleries, Design Studios, Cultural Organizations | `styles/141-art-nouveau-elegance.json` |
| 142 | Gothic Revival Digital | premium, academic | 4 | 9 | Universities, Libraries, Heritage Institutions | `styles/142-gothic-revival-digital.json` |
| 143 | Victorian Modernist | premium, professional | 5 | 8 | Heritage Brands, Classic Services, Traditional Business | `styles/143-victorian-modernist.json` |
| 144 | Rococo Digital Garden | creative, hospitality | 8 | 6 | Floral Brands, Garden Societies, Botanical Organizations | `styles/144-rococo-digital-garden.json` |
| 145 | Neoclassical Authority | professional, association | 4 | 9 | Government Buildings, Civic Institutions, Public Services | `styles/145-neoclassical-authority.json` |
| 146 | Renaissance Revival | premium, creative | 6 | 8 | Fine Art Museums, Cultural Institutions, Art Organizations | `styles/146-renaissance-revival.json` |
| 147 | Medieval Guild Hall | association, premium | 5 | 7 | Traditional Guilds, Craft Associations, Heritage Groups | `styles/147-medieval-guild-hall.json` |
| 148 | Baroque Grandeur | premium, hospitality | 6 | 9 | Opera Houses, Theaters, Performing Arts Centers | `styles/148-baroque-grandeur.json` |
| 149 | Roman Empire Digital | professional, association | 3 | 10 | Law Firms, Legal Institutions, Justice Organizations | `styles/149-roman-empire-digital.json` |
| 150 | Ancient Egyptian Luxe | premium, creative | 5 | 8 | Luxury Museums, Cultural Heritage, Ancient Art | `styles/150-ancient-egyptian-luxe.json` |
| 151 | Byzantine Contemporary | premium, heritage | 5 | 8 | Religious Institutions, Orthodox Churches, Faith Communities | `styles/151-byzantine-contemporary.json` |
| 152 | Colonial American Heritage | association, professional | 5 | 8 | Heritage Societies, Historical Associations, Preservation Groups | `styles/152-colonial-american-heritage.json` |
| 153 | Japanese Wabi-Sabi | creative, hospitality | 6 | 6 | Zen Centers, Japanese Culture, Minimalist Brands | `styles/153-japanese-wabi-sabi.json` |
| 154 | Scandinavian Hygge | hospitality, creative | 8 | 5 | Nordic Brands, Scandinavian Lifestyle, Cozy Spaces | `styles/154-scandinavian-hygge.json` |
| 155 | Moroccan Geometric | premium, hospitality | 7 | 7 | Mediterranean Venues, Moroccan Brands, Cultural Centers | `styles/155-moroccan-geometric.json` |
| 156 | Indian Mughal Luxury | premium, creative | 7 | 8 | Indian Luxury, Cultural Heritage, Traditional Arts | `styles/156-indian-mughal-luxury.json` |
| 157 | Chinese Imperial | premium, association | 6 | 9 | Chinese Organizations, Asian Heritage, Cultural Institutions | `styles/157-chinese-imperial.json` |
| 158 | Greek Mediterranean | hospitality, creative | 7 | 6 | Greek Resorts, Mediterranean Hospitality, Island Venues | `styles/158-greek-mediterranean.json` |
| 159 | African Kente | creative, association | 8 | 6 | African Art, Cultural Organizations, Heritage Groups | `styles/159-african-kente.json` |
| 160 | Celtic Heritage | heritage, association | 5 | 7 | Celtic Heritage, Irish Organizations, Cultural Societies | `styles/160-celtic-heritage.json` |
| 161 | Persian Carpet | premium, hospitality | 6 | 8 | Persian Culture, Middle Eastern Luxury, Heritage Brands | `styles/161-persian-carpet.json` |
| 162 | Mexican Folk Art | creative, hospitality | 9 | 4 | Mexican Culture, Latin Arts, Festive Venues | `styles/162-mexican-folk-art.json` |
| 163 | Nordic Rune | heritage, association | 3 | 7 | Nordic Heritage, Viking Culture, Scandinavian Groups | `styles/163-nordic-rune.json` |
| 164 | Brazilian Carnival | creative, media | 9 | 3 | Brazilian Culture, Carnival Events, Latin Entertainment | `styles/164-brazilian-carnival.json` |
| 165 | Flat Design 2.0 | tech, professional | 5 | 6 | SaaS Companies, Tech Startups, Modern Apps | `styles/165-flat-design-2-0.json` |
| 166 | Skeuomorphic Revival | tech, premium | 5 | 7 | Premium Apps, Luxury Software, High-End Tech | `styles/166-skeuomorphic-revival.json` |
| 167 | Isometric Illustration | tech, creative | 6 | 5 | Tech Companies, SaaS Platforms, Digital Products | `styles/167-isometric-illustration.json` |
| 168 | Line Art Minimal | creative, professional | 4 | 7 | Design Agencies, Creative Studios, Minimal Brands | `styles/168-line-art-minimal.json` |
| 169 | Gradient Mesh UI | creative, tech | 6 | 5 | Creative Tech, Design Apps, Visual Platforms | `styles/169-gradient-mesh-ui.json` |
| 170 | Duotone Photography | media, creative | 5 | 6 | Photography Studios, Visual Media, Creative Agencies | `styles/170-duotone-photography.json` |
| 171 | Low Poly 3D | tech, creative | 5 | 5 | Tech Startups, 3D Companies, Gaming Studios | `styles/171-low-poly-3d.json` |
| 172 | Watercolor Digital | creative, hospitality | 7 | 5 | Creative Brands, Artistic Services, Design Studios | `styles/172-watercolor-digital.json` |
| 173 | Comic Book Pop | creative, media | 7 | 3 | Entertainment Brands, Pop Culture, Media Companies | `styles/173-comic-book-pop.json` |
| 174 | Pixel Art Retro | creative, tech | 6 | 3 | Gaming Brands, Retro Tech, Nostalgic Products | `styles/174-pixel-art-retro.json` |
| 175 | Sticker Playful | creative, hospitality | 8 | 2 | Playful Brands, Youth Products, Friendly Services | `styles/175-sticker-playful.json` |
| 176 | Blueprint Technical | tech, professional | 3 | 8 | Engineering Firms, Technical Services, Industrial Design | `styles/176-blueprint-technical.json` |
| 177 | 1950s Diner | hospitality, creative | 7 | 4 | Retro Diners, Vintage Restaurants, Nostalgic Venues | `styles/177-1950s-diner.json` |
| 178 | 1960s Mod | creative, media | 6 | 4 | Retro Brands, Vintage Shops, Nostalgic Services | `styles/178-1960s-mod.json` |
| 179 | 1970s Disco | creative, media | 7 | 3 | Entertainment Venues, Nightclubs, Retro Brands | `styles/179-1970s-disco.json` |
| 180 | 1980s Synthwave | creative, tech | 5 | 4 | Retro Tech, Synthwave Brands, Gaming Companies | `styles/180-1980s-synthwave.json` |
| 181 | 1990s Grunge | creative, media | 4 | 2 | Alternative Brands, Music Labels, Edgy Services | `styles/181-1990s-grunge.json` |
| 182 | Y2K Millennium | tech, creative | 5 | 4 | Tech Nostalgia, Y2K Brands, Digital Services | `styles/182-y2k-millennium.json` |
| 183 | Vintage Americana | hospitality, heritage | 6 | 5 | American Brands, Heritage Businesses, Traditional Services | `styles/183-vintage-americana.json` |
| 184 | Art Deco Golden | premium, hospitality | 5 | 8 | Luxury Hotels, Premium Events, Elegant Venues | `styles/184-art-deco-golden.json` |
| 185 | Vintage Cinema | media, premium | 4 | 8 | Film Festivals, Cinema Organizations, Entertainment Venues | `styles/185-vintage-cinema.json` |
| 186 | Retro Computing | tech, creative | 3 | 6 | Tech Retro, Computing History, Developer Tools | `styles/186-retro-computing.json` |
| 187 | Victorian Steampunk | creative, premium | 5 | 7 | Alternative Fashion, Unique Brands, Creative Services | `styles/187-victorian-steampunk.json` |
| 188 | Mid-Century Modern | creative, professional | 6 | 6 | Modern Furniture, Design Brands, Contemporary Living | `styles/188-mid-century-modern.json` |
| 189 | Paper Texture | creative, professional | 6 | 7 | Print Services, Publishing, Traditional Media | `styles/189-paper-texture.json` |
| 190 | Concrete Brutalist | creative, professional | 3 | 7 | Architecture Firms, Industrial Design, Modern Brands | `styles/190-concrete-brutalist.json` |
| 191 | Wood Grain Natural | hospitality, creative | 7 | 5 | Furniture Brands, Natural Products, Craft Businesses | `styles/191-wood-grain-natural.json` |
| 192 | Marble Luxury | premium, hospitality | 4 | 9 | Luxury Interior, High-End Design, Premium Services | `styles/192-marble-luxury.json` |
| 193 | Kinetic Typography | creative, media | 5 | 5 | Motion Design, Video Production, Creative Media | `styles/193-kinetic-typography.json` |
| 194 | Parallax Depth | tech, creative | 5 | 6 | Interactive Media, Web Design, Digital Agencies | `styles/194-parallax-depth.json` |
| 195 | Liquid Motion | creative, tech | 6 | 4 | Animation Studios, Motion Design, Creative Tech | `styles/195-liquid-motion.json` |
| 196 | Micro-Interaction Rich | tech, professional | 5 | 6 | UX Design, Tech Products, Interactive Services | `styles/196-micro-interaction-rich.json` |
| 197 | RPG Fantasy | creative, tech | 5 | 5 | Gaming Companies, RPG Studios, Fantasy Brands | `styles/197-rpg-fantasy.json` |
| 198 | Sci-Fi HUD | tech, creative | 3 | 7 | Tech Companies, Gaming Studios, Futuristic Brands | `styles/198-sci-fi-hud.json` |
| 199 | Casual Mobile | creative, tech | 8 | 2 | Mobile Games, Casual Gaming, App Studios | `styles/199-casual-mobile.json` |
| 200 | Esports Arena | tech, media | 6 | 4 | Esports Organizations, Gaming Leagues, Tournament Platforms | `styles/200-esports-arena.json` |
| 201 | Pure Light Minimal | professional, tech | 5 | 7 | Minimalist Brands, Clean Tech, Modern Services | `styles/201-pure-light-minimal.json` |
| 202 | Warm Light Natural | hospitality, creative | 7 | 6 | Wellness Brands, Natural Products, Holistic Services | `styles/202-warm-light-natural.json` |
| 203 | Cool Light Professional | professional, tech | 3 | 8 | Tech Companies, Data Services, Corporate Software | `styles/203-cool-light-professional.json` |
| 204 | True Dark Mode | tech, professional | 4 | 6 | Tech Products, Developer Tools, Modern Apps | `styles/204-true-dark-mode.json` |
| 205 | Elevated Dark | tech, premium | 5 | 7 | Premium Tech, Design Software, Professional Apps | `styles/205-elevated-dark.json` |
| 206 | AI Native Interface | tech, professional | 5 | 6 | AI Companies, ML Services, Intelligent Platforms | `styles/206-ai-native-interface.json` |
| 207 | Neural Network | tech, academic | 4 | 7 | AI Research, Data Science, Neural Networks | `styles/207-neural-network.json` |
| 208 | Spatial Computing | tech, creative | 5 | 6 | AR/VR Companies, Spatial Computing, 3D Platforms | `styles/208-spatial-computing.json` |
| 209 | Generative Art | creative, tech | 5 | 5 | Creative Tech, Generative Design, Art Platforms | `styles/209-generative-art.json` |
| 210 | Sustainable Digital | tech, creative | 6 | 6 | Sustainable Tech, Eco Companies, Green Design | `styles/210-sustainable-digital.json` |
| 211 | Metaverse Social | tech, creative | 4 | 5 | Metaverse Platforms, VR Communities, Digital Social Clubs | `styles/211-metaverse-social.json` |
| 212 | Biometric Identity | tech, professional | 5 | 8 | Security Firms, Identity Verification, Biometric Tech | `styles/212-biometric-identity.json` |
| 213 | Voice Interface | tech, creative | 6 | 6 | Voice AI, Audio Platforms, Sound Technology | `styles/213-voice-interface.json` |
| 214 | Holographic Display | tech, creative | 3 | 5 | Holographic Tech, Display Innovation, Light Technology | `styles/214-holographic-display.json` |
| 215 | Neural Link | tech, academic | 4 | 7 | Neurotechnology, BCI Research, Cognitive Science | `styles/215-neural-link.json` |
| 216 | Autonomous Mobility | tech, professional | 5 | 7 | Autonomous Vehicles, EV Companies, Mobility Tech | `styles/216-autonomous-mobility.json` |
| 217 | Climate Tech | tech, association | 6 | 7 | Climate Tech, Environmental Organizations, Green Innovation | `styles/217-climate-tech.json` |
| 218 | Digital Twin | tech, professional | 4 | 8 | Digital Twin Tech, Simulation Companies, IoT Platforms | `styles/218-digital-twin.json` |
| 219 | Tokenized Community | tech, association | 5 | 5 | DAOs, NFT Communities, Web3 Organizations | `styles/219-tokenized-community.json` |
| 220 | Zero Trust Security | tech, professional | 3 | 9 | Cybersecurity, Defense Tech, Security Operations | `styles/220-zero-trust-security.json` |
| 221 | K-Wave Digital | creative, media | 7 | 4 | K-Pop Fandom, Korean Culture, Digital Entertainment | `styles/221-k-wave-digital.json` |
| 222 | Amazonian Heritage | association, creative | 8 | 6 | Conservation Groups, Indigenous Rights, Environmental NGOs | `styles/222-amazonian-heritage.json` |
| 223 | Arctic Aurora | creative, hospitality | 2 | 6 | Nordic Brands, Arctic Tourism, Northern Organizations | `styles/223-arctic-aurora.json` |
| 224 | Silk Road | premium, association | 8 | 7 | Trade Organizations, Central Asian Culture, Heritage Commerce | `styles/224-silk-road.json` |
| 225 | Pacific Rim | professional, association | 6 | 7 | Pacific Trade, Asian Business Networks, International Commerce | `styles/225-pacific-rim.json` |
| 226 | Mediterranean Council | hospitality, association | 9 | 6 | Mediterranean Tourism, Southern European Brands, Coastal Hospitality | `styles/226-mediterranean-council.json` |
| 227 | Alpine Excellence | premium, hospitality | 4 | 8 | Swiss Brands, Alpine Resorts, Mountain Organizations | `styles/227-alpine-excellence.json` |
| 228 | Saharan Oasis | premium, hospitality | 9 | 7 | Desert Resorts, Middle Eastern Luxury, Saharan Tourism | `styles/228-saharan-oasis.json` |
| 229 | Slavic Heritage | heritage, association | 7 | 6 | Slavic Culture, Eastern European Heritage, Folk Organizations | `styles/229-slavic-heritage.json` |
| 230 | Polynesian Voyage | heritage, hospitality | 8 | 5 | Pacific Culture, Polynesian Heritage, Ocean Organizations | `styles/230-polynesian-voyage.json` |
| 231 | Biohacker Collective | tech, association | 5 | 6 | Biohacking Communities, Health Optimization, Quantified Self | `styles/231-biohacker-collective.json` |
| 232 | Slow Living | hospitality, creative | 7 | 4 | Wellness Retreats, Slow Living Movement, Mindfulness Brands | `styles/232-slow-living.json` |
| 233 | Artisan Makers | creative, association | 8 | 5 | Maker Spaces, Artisan Guilds, Craft Communities | `styles/233-artisan-makers.json` |
| 234 | Remote Nomad | tech, hospitality | 6 | 4 | Digital Nomads, Remote Work Communities, Travel Tech | `styles/234-remote-nomad.json` |
| 235 | Heritage Preservation | heritage, association | 7 | 8 | Preservation Societies, Historical Archives, Museum Organizations | `styles/235-heritage-preservation.json` |
| 236 | Citizen Science | academic, association | 6 | 5 | Citizen Science, Community Research, Amateur Scientists | `styles/236-citizen-science.json` |
| 237 | Urban Farming | association, creative | 7 | 5 | Urban Agriculture, Community Gardens, Food Sustainability | `styles/237-urban-farming.json` |
| 238 | Memory Archive | heritage, creative | 7 | 5 | Memory Organizations, Digital Archives, Nostalgia Platforms | `styles/238-memory-archive.json` |
| 239 | Future Elders | association, professional | 8 | 6 | Senior Organizations, Elder Communities, Intergenerational Groups | `styles/239-future-elders.json` |
| 240 | Inclusive Design | professional, association | 6 | 6 | Accessibility Organizations, Inclusive Design, Universal Design | `styles/240-inclusive-design.json` |
| 241 | Quantum Finance | tech, premium, professional | 3 | 10 | Quantum Finance, Algorithmic Trading, Scientific Investment | `styles/241-quantum-finance.json` |
| 242 | Biotech Elite | tech, premium, academic | 4 | 9 | Biotech Firms, Life Sciences VCs, Research Networks | `styles/242-biotech-elite.json` |
| 243 | Space Commerce | tech, professional | 3 | 8 | Space Commerce, Aerospace Trade, Orbital Industries | `styles/243-space-commerce.json` |
| 244 | Numismatic Society | heritage, premium | 5 | 9 | Coin Collectors, Numismatic Societies, Currency Museums | `styles/244-numismatic-society.json` |
| 245 | Antiquarian Books | heritage, academic | 6 | 9 | Rare Book Dealers, Antiquarian Guilds, Literary Archives | `styles/245-antiquarian-books.json` |
| 246 | Horological Masters | premium, heritage | 4 | 10 | Watchmakers, Horology Institutes, Timepiece Collectors | `styles/246-horological-masters.json` |
| 247 | Haute Couture | creative, premium | 3 | 9 | Fashion Houses, Couture Ateliers, Designer Guilds | `styles/247-haute-couture.json` |
| 248 | Symphonic Orchestra | creative, premium | 5 | 10 | Orchestras, Concert Halls, Music Patrons | `styles/248-symphonic-orchestra.json` |
| 249 | Master Sommelier | hospitality, premium | 6 | 9 | Sommelier Guilds, Wine Societies, Gastronomy Institutes | `styles/249-master-sommelier.json` |
| 250 | Supreme Court Bar | professional, premium | 3 | 10 | Supreme Court Bars, Constitutional Lawyers, Judicial Societies | `styles/250-supreme-court-bar.json` |
| 251 | Royal Academy | academic, premium | 4 | 10 | Royal Academies, Scientific Societies, Distinguished Fellows | `styles/251-royal-academy.json` |
| 252 | Diplomatic Summit | professional, premium | 4 | 10 | Diplomatic Corps, International Forums, Global Summits | `styles/252-diplomatic-summit.json` |
| 253 | Polar Expedition | creative, association | 1 | 7 | Polar Expeditions, Arctic Research, Exploration Societies | `styles/253-polar-expedition.json` |
| 254 | Grand Prix Collectors | premium, association | 5 | 7 | Racing Collectors, Grand Prix Clubs, Automotive Elite | `styles/254-grand-prix-collectors.json` |
| 255 | Alpine Mountaineering | association, hospitality | 2 | 7 | Mountaineering Federations, Alpine Clubs, Summit Societies | `styles/255-alpine-mountaineering.json` |

## By tag

- **professional** (87): 5, 8, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 27, 28, 30, 31, 32, 33, 34, 44, 45, 50, 51, 59, 60, 61, 62, 64, 65, 66, 71, 72, 75, 76, 77, 79, 81, 82, 87, 89, 91, 92, 96, 98, 107, 109, 114, 117, 118, 121, 122, 123, 124, 128, 130, 131, 133, 135, 139, 140, 143, 145, 149, 152, 165, 168, 176, 188, 189, 190, 196, 201, 203, 204, 206, 212, 216, 218, 220, 225, 239, 240, 241, 243, 250, 252
- **creative** (82): 2, 4, 6, 7, 10, 12, 42, 52, 54, 55, 56, 90, 92, 95, 97, 103, 105, 109, 115, 119, 125, 127, 132, 133, 136, 138, 139, 141, 144, 146, 150, 153, 154, 156, 158, 159, 162, 164, 167, 168, 169, 170, 171, 172, 173, 174, 175, 177, 178, 179, 180, 181, 182, 186, 187, 188, 189, 190, 191, 193, 194, 195, 197, 198, 199, 202, 208, 209, 210, 211, 213, 214, 221, 222, 223, 232, 233, 237, 238, 247, 248, 253
- **tech** (74): 11, 20, 22, 23, 25, 28, 30, 31, 34, 43, 44, 45, 46, 47, 48, 49, 50, 57, 58, 61, 70, 91, 94, 101, 104, 106, 111, 113, 118, 120, 129, 131, 134, 165, 166, 167, 169, 171, 174, 176, 180, 182, 186, 194, 195, 196, 197, 198, 199, 200, 201, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 231, 234, 241, 242, 243
- **premium** (73): 1, 3, 9, 13, 15, 18, 19, 21, 25, 26, 35, 36, 38, 39, 40, 41, 42, 59, 63, 65, 67, 68, 69, 70, 84, 86, 93, 96, 99, 100, 102, 104, 110, 112, 116, 123, 126, 132, 135, 137, 138, 141, 142, 143, 146, 147, 148, 150, 151, 155, 156, 157, 161, 166, 184, 185, 187, 192, 205, 224, 227, 228, 241, 242, 244, 246, 247, 248, 249, 250, 251, 252, 254
- **association** (70): 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 102, 103, 106, 107, 108, 110, 114, 116, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 137, 140, 145, 147, 149, 152, 157, 159, 160, 163, 217, 219, 222, 224, 225, 226, 229, 231, 233, 235, 236, 237, 239, 240, 253, 254, 255
- **hospitality** (41): 19, 26, 29, 35, 36, 37, 38, 68, 69, 93, 95, 108, 112, 119, 127, 136, 144, 148, 153, 154, 155, 158, 161, 162, 172, 175, 177, 183, 184, 191, 192, 202, 223, 226, 227, 228, 230, 232, 234, 249, 255
- **media** (23): 14, 51, 52, 53, 54, 55, 56, 57, 58, 99, 111, 115, 128, 164, 170, 173, 178, 179, 181, 185, 193, 200, 221
- **academic** (20): 9, 43, 47, 53, 63, 64, 73, 74, 98, 100, 101, 105, 120, 142, 207, 215, 236, 242, 245, 251
- **heritage** (12): 1, 151, 160, 163, 183, 229, 230, 235, 238, 244, 245, 246
