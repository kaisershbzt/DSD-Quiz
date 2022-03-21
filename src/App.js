import React, { useState } from 'react';

export default function App() {
	const questions = [
		/*a1 */
		{
			questionText: 'Welcher Satz ist richtig ?',
			answerOptions: [
				{ answerText: 'Der Zug fährt ab um 10.00 Uhr.', isCorrect: false },
				{ answerText: 'Der Zug abfährt um 10.00 Uhr.', isCorrect: false },
				{ answerText: 'Der Zug fährt um 10.00 Uhr ab.', isCorrect: true },
				{ answerText: 'Fährt der Zug um 10.00 Uhr ab.', isCorrect: false },
			],
		},
		{
			questionText: 'Welcher Satz ist richtig ?',
			answerOptions: [
				{ answerText: 'Klaus will heute ins Kino gehen nicht.', isCorrect: false },
				{ answerText: 'Klaus nicht heute ins Kino gehen will.', isCorrect: false },
				{ answerText: 'Klaus will heute nicht ins Kino gehen.', isCorrect: true },
				{ answerText: 'Klaus will gehen heute nicht ins Kino.', isCorrect: false },
			],
		},
		{
			questionText: 'Welches Verb passt ? Was __________ Frau Maier von Beruf ?',
			answerOptions: [
				{ answerText: 'machst', isCorrect: false },
				{ answerText: 'arbeitet', isCorrect: false },
				{ answerText: 'ist', isCorrect: true },
				{ answerText: 'verdient', isCorrect: false },
			],
		},
		{
			questionText: 'Welches Verb passt ? Frau Müller hat gestern bis 23.00 Uhr __________.',
			answerOptions: [
				{ answerText: 'arbeitet', isCorrect: false },
				{ answerText: 'gearbeiten', isCorrect: false },
				{ answerText: 'gearbeitet', isCorrect: true },
				{ answerText: 'arbeiten', isCorrect: false },
			],
		},
		{
			questionText: 'Wie geht der Satz weiter ? Möchtest du mit mir heute Abend...',
			answerOptions: [
				{ answerText: '...das Kaffee trinken?', isCorrect: false },
				{ answerText: '...eine Kaffee trinken?', isCorrect: false },
				{ answerText: '...einen Kaffee trinken?', isCorrect: true },
				{ answerText: '...dem Kaffee trinken?', isCorrect: false },
			],
		},
		{
			questionText: 'Welches Wort ist falsch ?',
			answerOptions: [
				{ answerText: 'schön', isCorrect: false },
				{ answerText: 'nett', isCorrect: false },
				{ answerText: 'stühle', isCorrect: true },
				{ answerText: 'verheiratet', isCorrect: false },
			],
		},
		{
			questionText: 'Welches Wort ist richtig ? Ich kann __________ Stift nicht finden. Hast du ihn gesehen ?',
			answerOptions: [
				{ answerText: 'mein', isCorrect: true },
				{ answerText: 'meinem', isCorrect: false },
				{ answerText: 'meinen', isCorrect: false },
				{ answerText: 'meine', isCorrect: false },
			],
		},
		{
			questionText: 'Welches Wort ist richtig ? Gefällt dir mein neuer Pullover? - Ja, ich finde _____ sehr schön!',
			answerOptions: [
				{ answerText: 'ihn', isCorrect: false },
				{ answerText: 'es', isCorrect: false },
				{ answerText: 'der', isCorrect: false },
				{ answerText: 'dem', isCorrect: true },
			],
		},
		/*a2*/
		{
			questionText: 'Unser Urlaub in Spanien war toll. - Schön, _____ es euch dort gefallen hat!',
			answerOptions: [
				{ answerText: 'dass', isCorrect: true },
				{ answerText: 'ob', isCorrect: false },
				{ answerText: 'das', isCorrect: false },
				{ answerText: 'da', isCorrect: true },
			],
		},		{
			questionText: 'Wir sind die neuen Nachbarn und möchten uns vorstellen. - Willkommen, ich freue_____, Sie kennenzulernen.',
			answerOptions: [
				{ answerText: 'dich', isCorrect: false },
				{ answerText: 'mich', isCorrect: true },
				{ answerText: 'es', isCorrect: false },
				{ answerText: 'sich', isCorrect: true },
			],
		},		{
			questionText: 'Möchten Sie bestellen? - Ja, ich _____ die Spaghetti, bitte.',
			answerOptions: [
				{ answerText: 'würde gern', isCorrect: false },
				{ answerText: 'reserviere', isCorrect: false },
				{ answerText: 'zahle', isCorrect: false },
				{ answerText: 'hätte gern', isCorrect: true },
			],
		},		{
			questionText: 'Warum kennt Michael Tokio so gut? - Weil er für ein Jahr dort _____ .!',
			answerOptions: [
				{ answerText: 'lebte', isCorrect: false },
				{ answerText: 'gelebt hat', isCorrect: true },
				{ answerText: 'gelebt ist', isCorrect: false },
				{ answerText: 'leben hat', isCorrect: false },

			],
		},		{
			questionText: 'Guten Tag, mein Name ist Andrea Ulm. Können Sie mich bitte mit Herrn Leopold _____? - Herr Leopold ist gerade in einer Besprechung. Soll ich etwas ausrichten?',
			answerOptions: [
				{ answerText: 'telefonieren', isCorrect: false },
				{ answerText: 'sprechen', isCorrect: false },
				{ answerText: 'anrufen', isCorrect: false },
				{ answerText: 'verbinden', isCorrect: true },
			],
		},		{
			questionText: 'Was machst du denn so, wenn du frei hast? - Ich gehe _____ Rad fahren.',
			answerOptions: [
				{ answerText: 'lieber', isCorrect: false },
				{ answerText: 'mehr', isCorrect: false },
				{ answerText: 'gern', isCorrect: true },
				{ answerText: 'gut', isCorrect: false },
			],
		},		{
			questionText: 'Warum sind Paul und Xaver noch nicht da? - Sie verspäten sich, _____ .',
			answerOptions: [
				{ answerText: 'weil sie den Bus verpasst haben', isCorrect: true },
				{ answerText: 'weil verpasst haben sie den Bus', isCorrect: false },
				{ answerText: 'weil sie haben den Bus verpasst', isCorrect: false },
				{ answerText: 'weil sie verpasst haben den Bus', isCorrect: false },
			],
		},		{
			questionText: 'Was wollen wir Pia zu ihrem Geburtstag schenken? - Ich will ihr gerne _____ Gutschein für die Therme schenken.',
			answerOptions: [
				{ answerText: 'einen', isCorrect: false },
				{ answerText: 'eine', isCorrect: false },
				{ answerText: 'einem', isCorrect: false },
				{ answerText: 'einer', isCorrect: true },
			],
		},
		/*b1*/{
			questionText: 'Wir freuen uns schon ___ unser nächstes Treffen!',
			answerOptions: [
				{ answerText: 'an', isCorrect: false },
				{ answerText: 'auf', isCorrect: true },
				{ answerText: 'über', isCorrect: false },
				{ answerText: 'für', isCorrect: false },
			],
		},
		{
			questionText: 'Magst du auch ein Cola? - Nein, ich habe Durst. Ich mag kein Cola, ___ Wasser.',
			answerOptions: [
				{ answerText: 'anstatt', isCorrect: false },
				{ answerText: 'aber auch', isCorrect: false },
				{ answerText: 'sondern', isCorrect: false },
				{ answerText: 'sondern auch', isCorrect: false },
			],
		},
		{
			questionText: 'Früher ___ die Leute nicht so oft das Flugzeug wie heute.',
			answerOptions: [
				{ answerText: 'nehmen', isCorrect: false },
				{ answerText: 'nahmen', isCorrect: true },
				{ answerText: 'nehmten', isCorrect: false },
				{ answerText: 'nahm', isCorrect: false },
			],
		},
		{
			questionText: 'Wasch ___ bitte die Hände vor dem Essen, Kleines.',
			answerOptions: [
				{ answerText: 'mir', isCorrect: false },
				{ answerText: 'dich', isCorrect: true },
				{ answerText: 'dir', isCorrect: false },
				{ answerText: 'es', isCorrect: false },
			],
		},
		{
			questionText: 'Peter und Maria helfen sich immer, sie sind immer ___ da.',
			answerOptions: [
				{ answerText: 'gegeneinander', isCorrect: false },
				{ answerText: 'füreinander', isCorrect: true },
				{ answerText: 'miteinander', isCorrect: false },
				{ answerText: 'voneinander', isCorrect: false },
			],
		},
		{
			questionText: '___ des Unwetters müssen wir die Bergtour leider verschieben.',
			answerOptions: [
				{ answerText: 'Außerhalb', isCorrect: false },
				{ answerText: 'Während', isCorrect: false },
				{ answerText: 'Innerhalb', isCorrect: false },
				{ answerText: 'Wegen', isCorrect: true },
			],
		},
		{
			questionText: 'Mach dich lieber nützlich, ___ zu jammern, dass es regnet.',
			answerOptions: [
				{ answerText: 'nicht', isCorrect: false },
				{ answerText: 'sondern', isCorrect: false },
				{ answerText: 'anstatt', isCorrect: false },
				{ answerText: 'um', isCorrect: false },
			],
		},
		{
			questionText: 'Mein ______ Computer ist wirklich schnell!',
			answerOptions: [
				{ answerText: 'neues', isCorrect: false },
				{ answerText: 'neuen', isCorrect: false },
				{ answerText: 'neuer', isCorrect: true },
				{ answerText: 'neue', isCorrect: false },
			],
		},
		/*b2*/
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Sie haben {score} von {questions.length} möglichen Punkten erreicht.
					<br/>
					1, 6 - A1
					<br/>
					6, 12 - A2
					<br/>
					12, 18 - B1
					<br/>
					18, 24 - B2
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Frage {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
