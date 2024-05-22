function Tile({tileImg, sectionTitle, sectionText}) {

    if (tileImg) {
        return (
            <section>
                <img
                src={tileImg}
                 alt='Brand Story'/>
            </section>
        );
    } else {
        return (
            <section>
                <h2>{sectionTitle}</h2>
                <p>{sectionText}</p>
                <p>{sectionText}</p>
            </section>
        );
    }

}

export default Tile;