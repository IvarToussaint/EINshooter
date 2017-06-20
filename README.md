WW2 Dogfight shooter

De game is te spelen op deze link:  https://ivartoussaint.github.io/PRG04-Game/

HANDLEIDING
Het spel is te spelen met A & D om naar links en rechts te bewegen, met de SHIFT-knop kan geschoten worden om de andere vliegtuig die vanaf boven naar beneden vliegen, je verdient elke keer als je een vliegtuig neerschiet 1 punt.

OOP

Classes
Ik heb classes gebruikt om de verschillende soorten onderdel voor de game te maken, de classes die ik heb zijn onder andere game, enemy, player

Instances
Ik heb gebruik gemaakt van instances wanneer ik een nieuw object wilde creeëren bijvoorbeeld in een array waar ik alle enemies aanmaak.

Encapsulation
Ik alle methods/objects de goede private/public/protected tag te geven, ik heb de extends van enemy de protected tag gegeven en de dingen die ikvan buiten niet wil aanpassen de private, alles wat vanaf buiten wel bewerkt mag worden heeft de public tag.


Composition
Met composition heb ik ervoor gezorgt dat mijn instances weer andere instaces aanmaken, dit heb ik gedaan met het maken van de Player die daarin gelijk een gun aanmaakt waarmee je kunt schieten.

Inheritance
Mijn class Enemy heeft 2 classes die deze extenden, big_plane en small_plane, deze erfen alle onderdelen van Enemy maar de snelheid en afbeelding wordt aangepast


![Screenshot](https://raw.githubusercontent.com/IvarToussaint/PRG04-Game/master/docs/images/UML3.png)
