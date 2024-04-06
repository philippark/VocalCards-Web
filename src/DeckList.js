const DeckList = ({decks}) => {
    return ( 
        <div className = "deck-list">
            {decks.map(deck=>(
                <div className = "deck">
                    <h2>{deck.name}</h2>
                </div>
            ))}
        </div>
     );
}
 
export default DeckList;