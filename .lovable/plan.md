# Ligne Claire — page de présentation unique

Une seule page en français, fidèle à la trame (01) et au kit UI/UX (02). Aucun chiffre, logo client, témoignage ou certification n'est inventé. Les éléments à vérifier restent visibles entre crochets (e-mail, téléphone, raison sociale, année).

## Direction artistique
- Fond noir dominant, surfaces vert-gris (#000000, #0A0A0A, #101410, #1D1D1A, #2D322C, #343F33, #7F887D), comme extrait dans le kit.
- Accent vert lumineux : valeur de travail documentée dans le code comme « à confirmer » (le kit refuse d'en figer une). Contraste du bouton vérifié AA.
- Typographie plus distinctive, même esprit sobre : **Geist** (titres et texte) + **Geist Mono** (sur-titres, numéros 01–06, étiquettes). Pas de police futuriste.
- Hero : image originale générée — paysage végétal dense et sombre, cube clair, halo vert subtil. Texte à gauche, visuel à droite ; sur mobile, texte avant l'image.
- Logo : piste B « Ligne Claire » — deux lignes orthogonales formant un cap, traversées par une trajectoire qui finit sur un point. SVG, lisible en monochrome. Signature : « Clarifier. Prioriser. Transformer. »
- Profondeur par contraste et filets fins, pas d'ombres lourdes ni de verre dépoli. Rayons modestes (4–12 px).
- Dépasser la référence : grille éditoriale 12 colonnes, filets fins qui « tracent la ligne claire » d'une section à l'autre, apparitions douces au défilement, cube qui réagit légèrement à la souris. Tout coupé si l'utilisateur réduit les animations.

## Sections (dans l'ordre de la trame)
1. Navigation : logo, 6 liens qui défilent vers les sections, bouton « Parlons de vos enjeux ↗ », menu mobile accessible.
2. Hero : sur-titre, titre, texte, deux boutons, microcopie.
3. Bande des cinq axes : Stratégie · Opérations · Données & technologie · Équipes · Gouvernance.
4. Le vrai défi : trois situations + conclusion.
5. Expertises : six cartes numérotées avec livrables possibles.
6. Approche : quatre étapes avec question de contrôle, en frise.
7. Contexte Cameroun / Afrique centrale : six points de vigilance + phrase de clôture.
8. Principes de travail : cinq principes.
9. Secteurs et fonctions : huit domaines et fonctions, avec la mention « terrains possibles, pas des références clients ».
10. Crédibilité : méthode et preuves à construire, sans fausses preuves (« À propos »).
11. Offre d'entrée : conversation exploratoire, bouton « Préparer une conversation ↗ ».
12. FAQ : six questions en accordéon accessible ; la question sur la construction des solutions affiche « À préciser avant publication ».
13. CTA final + formulaire maquette (nom, e-mail pro, organisation, enjeu, case de consentement non cochée) avec états erreur et succès, sans envoi réel.
14. Pied de page : liens, ligne légale à compléter.

## Qualité
- Titre et description SEO de la trame (section 15), og et twitter.
- Un seul H1, hiérarchie de titres, focus visible, cibles 44 px, contraste AA, réduction des mouvements.
- Vérification visuelle au bureau et sur mobile.

## Détails techniques
- `src/routes/index.tsx` remplace l'espace réservé ; composants par section dans `src/components/site/`.
- Jetons de couleur en oklch dans `src/styles.css` (mode sombre par défaut), polices chargées via `<link>` dans `__root.tsx`.
- Image du hero générée dans `src/assets/`. Favicon SVG du logo.
- Tests de validation du formulaire (champs requis, e-mail, consentement non coché par défaut).
- Mémoire projet : marque, palette, polices, règle « aucune fausse preuve ».
