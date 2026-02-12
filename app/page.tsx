import Image from "next/image";
import EmailForm from "@/components/EmailForm";

export default function Home() {
  return (
    <div className="page">
      <header className="nav">
        <div className="logo">ModePourTous</div>
        <a className="nav-cta" href="#wishlist">
          Rejoindre la wishlist
        </a>
      </header>

      <main>
        <section className="hero section" aria-labelledby="hero-title">
          <div className="hero-text">
            <div className="eyebrow-row">
              <p className="eyebrow">Mode • IA • Atelier</p>
              <dotlottie-player
                className="lottie lottie-spark"
                src="/lottie/spark.lottie"
                background="transparent"
                speed="1"
                loop
                autoplay
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <h1 id="hero-title">Transformez une idée en pièce de mode réelle.</h1>
            <p className="lead">
              Une idée, un visuel, un croquis. L’IA transforme votre inspiration en plan d’action
              concret jusqu’aux matières, ateliers et fournisseurs.
            </p>
            <EmailForm id="wishlist" buttonLabel="Recevoir l’accès en avant-première" />
            <p className="note">
              Rejoignez la wishlist pour tester la plateforme en premier et influencer ses
              fonctionnalités.
            </p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-photo">
              <Image
                src="/images/hero-image.png"
                alt="Moodboard de création mode"
                width={960}
                height={1200}
                priority
              />
              <div className="hero-overlay">
                <span>Studio</span>
                <span>Textiles</span>
                <span>Prototype</span>
              </div>
            </div>
            <div className="hero-caption">
              <p>Une méthode claire pour transformer l’inspiration en objet réel.</p>
              <div className="hero-stats">
                <span>Idée → Prototype</span>
                <span>Matières → Fournisseurs</span>
                <span>Guidance → Autonomie</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section problem" aria-labelledby="problem-title">
          <p className="eyebrow">Constat</p>
          <h2 id="problem-title">La création devrait être simple et accessible.</h2>
          <div className="grid-2">
            <p>
              Trop d’idées restent dans un carnet faute de méthode. Entre matériaux, fournisseurs
              et contraintes techniques, le passage à l’action devient flou.
            </p>
            <p>
              ModePourTous remet de l’élan : une trajectoire claire, des choix concrets et un
              accompagnement qui vous donne confiance dès le départ.
            </p>
          </div>
        </section>

        <section className="section solution" aria-labelledby="solution-title">
          <h2 id="solution-title">Un studio de mode intelligent, dans votre écran.</h2>
          <div className="steps">
            <article>
              <div className="icon-badge">
                <Image src="/icons/idea.png" alt="" width={44} height={44} />
              </div>
              <h3>1. Point de départ</h3>
              <p>Un texte, une image ou un croquis suffit.</p>
            </article>
            <article>
              <div className="icon-badge">
                <Image src="/icons/question-circle.png" alt="" width={44} height={44} />
              </div>
              <h3>2. Direction créative</h3>
              <p>L’IA affine l’intention, le style et la cible.</p>
            </article>
            <article>
              <div className="icon-badge">
                <Image src="/icons/layers.png" alt="" width={44} height={44} />
              </div>
              <h3>3. Plan d’action</h3>
              <p>Étapes claires, décisions guidées, zéro jargon.</p>
            </article>
            <article>
              <div className="icon-badge">
                <Image src="/icons/storefront.png" alt="" width={44} height={44} />
              </div>
              <h3>4. Passage au réel</h3>
              <p>Matières, ateliers et fournisseurs accessibles.</p>
            </article>
          </div>
        </section>

        <section className="section materials" aria-labelledby="materials-title">
          <div>
            <p className="eyebrow">Matières & Atelier</p>
            <h2 id="materials-title">Passez de l’intuition au concret.</h2>
            <p className="lead">
              Recevez des recommandations de matières et d’ateliers cohérents avec votre idée,
              puis des pistes de fournisseurs pour passer à la fabrication.
            </p>
          </div>
          <div className="materials-grid" aria-hidden="true">
            <div className="image-card">
              <Image
                src="/images/matiere.png"
                alt="Gros plan de matières textiles"
                width={820}
                height={980}
              />
              <span>Textures & finitions</span>
            </div>
            <div className="image-card">
              <Image
                src="/images/machine.png"
                alt="Atelier de fabrication"
                width={820}
                height={980}
              />
              <span>Savoir-faire atelier</span>
            </div>
          </div>
        </section>

        <section className="section process" aria-labelledby="process-title">
          <div>
            <h2 id="process-title">Un parcours simple, de A à Z.</h2>
            <p className="lead">
              Chaque étape vous rapproche d’un prototype réel, sans zones d’ombre.
            </p>
            <ol className="process-list">
              <li>
                <Image src="/icons/image-upload.png" alt="" width={28} height={28} />
                Décrire une idée ou importer une image.
              </li>
              <li>
                <Image src="/icons/question-circle.png" alt="" width={28} height={28} />
                Questions intelligentes pour affiner le projet.
              </li>
              <li>
                <Image src="/icons/fabric.png" alt="" width={28} height={28} />
                Recommandation des matières (cuir, textile, semelles, etc.).
              </li>
              <li>
                <Image src="/icons/storefront.png" alt="" width={28} height={28} />
                Suggestions de fournisseurs et ateliers adaptés.
              </li>
              <li>
                <Image src="/icons/ruler.png" alt="" width={28} height={28} />
                Conseils sur les tailles, volumes et contraintes techniques.
              </li>
              <li>
                <Image src="/icons/compass.png" alt="" width={28} height={28} />
                Orientation vers les réseaux de distribution possibles.
              </li>
            </ol>
          </div>
          <div className="process-image" aria-hidden="true">
            <Image
              src="/images/collage.png"
              alt="Collage d'inspiration mode"
              width={960}
              height={720}
            />
            <dotlottie-player
              className="lottie lottie-scan"
              src="/lottie/scan.lottie"
              background="transparent"
              speed="1"
              loop
              autoplay
            />
            <p className="caption">Moodboard & inspirations guidées.</p>
          </div>
        </section>

        <section className="section audience" aria-labelledby="audience-title">
          <h2 id="audience-title">Pour qui ?</h2>
          <div className="audience-layout">
            <div className="audience-copy">
              <p className="lead">
                Pensé pour celles et ceux qui veulent créer sans maîtriser les codes de la mode.
                Une approche ouverte, simple et guidée.
              </p>
              <p>
                Que vous démarriez un projet solo, que vous soyez en phase de test ou en quête
                d’un premier prototype, la plateforme vous donne un cadre rassurant et clair.
              </p>
            </div>
            <ul className="audience-list">
              <li>Créateurs débutants qui veulent passer à l’action.</li>
              <li>Entrepreneurs en phase d’exploration ou de lancement.</li>
              <li>Étudiants qui souhaitent prototyper un projet rapidement.</li>
              <li>Passionnés de mode à la recherche d’un guide fiable.</li>
              <li>Marques en phase de test ou de pré-collection.</li>
            </ul>
          </div>
        </section>

        <section className="section value" aria-labelledby="value-title">
          <h2 id="value-title">Ce que vous gagnez, dès les premiers jours</h2>
          <div className="value-grid">
            <article>
              <div className="icon-badge">
                <Image src="/icons/time.png" alt="" width={44} height={44} />
              </div>
              <h3>Gain de temps</h3>
              <p>Un parcours guidé, sans essais inutiles.</p>
            </article>
            <article>
              <div className="icon-badge">
                <Image src="/icons/compass.png" alt="" width={44} height={44} />
              </div>
              <h3>Clarté</h3>
              <p>Chaque étape est expliquée avec simplicité.</p>
            </article>
            <article>
              <div className="icon-badge">
                <Image src="/icons/shield.png" alt="" width={44} height={44} />
              </div>
              <h3>Accompagnement</h3>
              <p>Une IA qui vous soutient comme un mentor.</p>
            </article>
            <article>
              <div className="icon-badge">
                <Image src="/icons/sparkle.png" alt="" width={44} height={44} />
              </div>
              <h3>Accessibilité</h3>
              <p>Ouvert à tous, sans jargon technique.</p>
            </article>
            <article>
              <div className="icon-badge">
                <Image src="/icons/idea.png" alt="" width={44} height={44} />
              </div>
              <h3>Autonomie</h3>
              <p>Vous avancez avec confiance, à votre rythme.</p>
            </article>
          </div>
        </section>

        <section className="section showcase" aria-labelledby="showcase-title">
          <div>
            <p className="eyebrow">Résultat</p>
            <h2 id="showcase-title">De l’idée au produit fini.</h2>
            <p className="lead">
              L’objectif final : une pièce tangible et prête à être présentée, testée ou
              commercialisée. L’IA vous accompagne jusque-là.
            </p>
            <div className="quote">
              “Une vision claire, un plan d’action, et un produit qui existe.”
            </div>
          </div>
          <div className="showcase-image" aria-hidden="true">
            <Image
              src="/images/produit-fini.png"
              alt="Produit fini présenté en studio"
              width={860}
              height={1100}
            />
          </div>
        </section>

        <section className="section cta-final" aria-labelledby="cta-title">
          <div className="cta-panel">
            <div>
              <h2 id="cta-title">Faites partie des premiers créateurs.</h2>
              <p>
                Rejoignez la liste d’attente pour découvrir la plateforme avant tout le monde,
                recevoir les prochaines démos et influencer la roadmap.
              </p>
              <div className="cta-inline">
                <span>Accès prioritaire • Mises à jour exclusives • Retours privilégiés</span>
              </div>
            </div>
            <EmailForm buttonLabel="Réserver ma place" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Projet en cours • ModePourTous</p>
      </footer>
    </div>
  );
}
