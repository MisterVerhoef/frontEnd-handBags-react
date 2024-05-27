function Tile(props) {


        return (
            <section >
                <img src={props.tileImg} alt=""/>
                {props.children}
            </section>
        );
    }


export default Tile;