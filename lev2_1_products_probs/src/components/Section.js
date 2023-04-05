const Section = (probs) => {
    return (
        <div>
            <img src={probs.img} />
            <p>{probs.product}</p>
            <p>{probs.price}</p>
            {/* <input type="button" value={probs.description} /> */}
            <a href="#">{probs.description}</a>
        </div>
    );
}

export default Section;