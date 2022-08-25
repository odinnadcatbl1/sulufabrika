const rulesList = [
    {
        number: 1,
        rule: "Izvairieties no tiešiem saules stariem",
    },
    {
        number: 2,
        rule: "Uzglabājiet iepakojumu vēsā, tumšā vietā.",
    },
    {
        number: 3,
        rule: "Uzglabāšanas temperatūra nedrīkst būt zemāka par 0°C un augstāka par 20°C",
    },
    {
        number: 4,
        rule: "Transportējot sulu, pārliecinieties, ka sulas iepakojumam nepieskaras asi priekšmeti",
    },
    {
        number: 5,
        rule: "Neatskrūvējiet krānu un neļaujiet gaisam iekļūt iepakojumā",
    },
    {
        number: 6,
        rule: "Neizmantojiet iepakojumu atkārtoti",
    },
];

const Rules = () => {
    return (
        <section className="rules" id="rules">
            <div className="container">
                <h2 className="page__title">NOTEIKUMI</h2>
                <div className="rules__inner">
                    <div className="rules__inner-text">
                        <span>Sulu Fabrika</span> nedod garantiju derīguma
                        termiņam. Ja visi uzturēšanas noteikumi bija ievēroti,
                        tad aizvērta veida sula nezaudēs savas īpašības un
                        nebojāsies gadu un vairāk, atvērta veida sulu ieteicams
                        izdzert mēneša laikā. Galvenais faktors, kas ietekme
                        ābolu sulas derīguma termiņu ir ābolu stāvoklis. Āboliem
                        jābūt laicīgi salasītiem no koka, vai arī no zemes,
                        neļaujot bojāšanas procesam sākties. Nedrīkst izmantot
                        sulas spiešanai jau satrūdējušos ābolus, jo tie saīsina
                        sulas derīguma laiku un tās garšu. <br />
                        <b>
                            Noteikumi zemāk, esiet uzmanīgi un izbaudiet sulu!
                        </b>
                    </div>

                    <div className="rules__list-box">
                        <ul className="rules__list">
                            {rulesList.map((rule) => {
                                return (
                                    <li className="rules__item">
                                        <div className="rules__number">
                                            {rule.number}
                                        </div>

                                        <div className="rules__text">
                                            {rule.rule}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rules;
