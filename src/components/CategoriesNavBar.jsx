import "./CategoriesNavBar.css";

function CategoriesNavBar() {
  return (
    <>
      <div className="categoriesContainerNavBar">
        <div className="allProduct">Tous&nbsp;les&nbsp;produits</div>
        <div className="categoriesNavBar">
          <a>Smartphones</a>
          <a>Ordinateurs</a>
          <a>Tablettes</a>
          <a>Son&nbsp;&&nbsp;Vidéo</a>
          <a>Consoles</a>
          <a>Accessoires</a>
          <a>Drônes</a>
          <a>Sécurité</a>
          <a>Composants</a>
          <a>Réseaux&nbsp;&&nbsp;Connectivité</a>
          <a>Appareils&nbsp;ménagers</a>
        </div>
      </div>
    </>
  );
}

export default CategoriesNavBar;
