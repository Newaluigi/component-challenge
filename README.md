# WCS EXERCISE [ANGULAR 04 - Le Router]

## Result
![Capture d’écran 2023-07-08 013038](https://github.com/Newaluigi/component-challenge/assets/108535805/92bf5f79-0c1d-483a-ad1d-8dd2cf1222e2)


## Challenge 💪
Fais-moi naviguer ⛵️

Pour réaliser ce challenge, repars de l'app Angular que tu as créée dans la précédente quête.

Le but de ce challenge est d'afficher un menu pour naviguer entre le composant <sign-up/> et le composant <user-profile/>

- Créer un composant <menu/> qui contiendra deux liens : un vers /signup et l'autre vers /user
- Créer le routeur avec 3 routes, une sur signup, une sur user et une par défaut qui affiche le composant <user-profile/>
- Le composant <app/> ne doit contenir que le composant <menu/> et la directive <router-outlet/>
- Poste le lien vers ton repository en guise de solution.

### Critères de validation ✅

- Le router est implémenté avec la méthode manuelle que tu as étudiée dans cette quête
- Le composant menu est dans le composant App
- Les composants <sign-up/> et <user-profile/> ne sont plus dans le composant <app/>
- La directive RouterOutlet est utilisée dans le composant <app/>
- Le module RouterModule est correctement configuré pour afficher le composant <sign-up/> lorsqu'on navigue vers /sign-up
- Le module RouterModule est correctement configuré pour afficher le composant <user-profile/> lorsqu'on navigue vers /user
- Le module RouterModule est correctement configuré pour afficher le composant <user-profile/> lorsqu'on navigue vers /
- La navigation entre les composants <sign-up/> et <user-profile/> est fonctionnelle
<br/>

# WCS EXERCISE [ANGULAR 03.1 - Les Directives]

## Result

![Capture d’écran 2023-07-07 165722](https://github.com/Newaluigi/component-challenge/assets/108535805/d500f5fd-755a-43db-9f4e-12f4e102c033)

## Challenge 💪

Le coup classique !
Tu réaliseras ce challenge directement dans Codesandbox template angular
Clique sur fork pour générer un lien associé à ton travail.
Colle l'url de ton fork pour valider la quête.

Tu peux aussi créer une application Angular via ton terminal et poster le lien Github.

- Ajoute un titre "Bonjour !"
- Crée deux boutons en HTML : "View" et "Edit" (inutile de leur faire faire quoi que ce soit)
- Déclare une propriété boolean isAdmin dans ton component (false ou true).
- Utilise une structural directive pour afficher "Edit" uniquement si isAdmin est à true.
- Utilise NgClass ou NgStyle pour afficher le titre en rouge quand isAdmin est à true.

BONUS : Créer un bouton qui permet, au clic, de changer la valeur de isAdmin.

### Critères de validation ✅

- Quand tu changes la valeur de isAdmin: false → true (ou true → false) dans ton code, le rendu doit être différent et correspondre aux points ci-dessus.
<br/>

# WCS EXERCISE [ANGULAR 02 - Le binding]

## Result

![Capture d’écran 2023-07-07 155710](https://github.com/Newaluigi/component-challenge/assets/108535805/14eddcbb-dc53-463b-8b1b-3768b4f1d5f9)

## Challenge 💪

### Fiche de contact 📄

Pour réaliser ce challenge, repars de l'app Angular que tu as créé dans la précédente quête.

Tu vas devoir créer un nouveau composant user-profile, puis l'afficher dans le navigateur.

Ce composant contiendra un objet user :

user = {

  name : 'Doe',

  firstName : 'John',

  age : 25,

  quote : '',

  photo : 'https://randomuser.me/api/portraits/lego/2.jpg'

};

Tu devras afficher sous la forme d'une fiche de contact, l'ensemble de ces informations en utilisant l'interpolation et le binding :

- La photo de l'utilisateur
- Un champ input pour éditer la citation (quote)
- L'âge
- Le nom et le prénom
- Un bouton pour masquer l'âge. Pense à la propriété hidden redéfinie par Angular. N'hésite pas à fouiller sur internet 🤓 (en anglais naturellement, tu y trouveras toujours beaucoup plus de réponses précises et pertinentes).

### Critères de validation ✅

- Le composant user-profile est appelé dans app.component.html
- À la saisie dans le champ input la citation change
- Au clic sur le bouton, l'âge disparaît
- Poste ta solution avec le lien Github où ton projet Angular est hébergé
<br/>

# WCS EXERCISE [ANGULAR 01 - Les Composants]

## Result

![Capture d’écran 2023-07-07 155640](https://github.com/Newaluigi/component-challenge/assets/108535805/e2c1ba04-af86-43d0-aebc-5f21f4fe06b4)


## Challenge 💪

### Des boîtes aux quatre coins 📦

→ Pour réaliser ce challenge, crée un nouveau projet Angular sur ta machine et reprend le code de ce projet angular. Tu peux aussi forker la sandbox sur ton compte.
L’objectif de ce challenge va être d’obtenir ce résultat dans le navigateur :

- Le CSS du BlockComponent est valide, inutile de le toucher
- L'HTML du BlockComponent est presque complet
- Tu dois appeler le BlockComponent dans ton AppComponent
- Tu dois ajouter du CSS pour positionner les BlockComponents
- Prends garde avec les déclarations du AppModule ; pour l’instant, il manque quelque chose

### Critères de validation ✅

- La chaine de caractères “A B C” ne doit être présente qu’une seule fois dans tout ton code
- L’image doit correspondre globalement au screenshot ci-dessus
- Poste l’url vers ton projet hébergé sur Github ou de ta sandbox
