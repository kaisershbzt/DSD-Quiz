import React, { useState } from 'react';

export default function App() {
	const questions = [
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
			questionText: 'Welches Wort ist richtig ? Gefällt dir mein neuer Pullover? – Ja, ich finde _____ sehr schön!',
			answerOptions: [
				{ answerText: 'ihn', isCorrect: false },
				{ answerText: 'es', isCorrect: false },
				{ answerText: 'der', isCorrect: false },
				{ answerText: 'dem', isCorrect: true },
			],
		},
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
					1, 2 - A1
					<br/>
					3,4 - A2
					<br/>
					5,6 - B1
					<br/>
					7,8 - B2
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
