export function Header({score, bestScore}) {
    return (
        <header>
            <h1>Pokemon Memory Game</h1>
            <p>Get points by clicking on an image but don't click on any more than once!</p>

            <section className="scoreboard">
                <span>Score:{score}</span>
                <span>Best Score:{bestScore}</span>
            </section>
        </header>
        
    )
}
