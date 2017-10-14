var story = {
	'root' : {
		mainText: 'This is the root main text',
		children: [
			{
				choiceButtonText: 'Open the box',
			  	modalBody: 'Do you want to open the box?',
			  	mainText: 'You went ahead and opened the box.',
			  	children: [
			  		{
			  			choiceButtonText: 'Open the box again',
			  			modalBody: 'Look I know you\ve opened it once befoe but do you want to open the box again?',
			  			mainText: 'You went ahead and opened the box...again.',
			  			children: [
			  				{
			  					choiceButtonText: 'Open the box one last time.',
			  					modalBody: 'Third time\'s a charm?',
			  				}
			  			]
			  		},
			  		{
			  			choiceButtonText: 'Climb inside the box',
			  			modalBody: 'You don\'t really have much else to do...',
			  			mainText: 'You climb inside the box. It\'s oddly comforting.',
			  			children: [
			  				{
			  					choiceButtonText: 'Whistle a happy tune',
			  					modalBody: 'Because why not?',
			  				}
			  			]
			  		}
			  	]
			},
			{
				choiceButtonText: 'Look closer',
			  	modalBody: 'Do you want to take a closer look?',
			  	mainText: 'You turn the box over in your hands, it feels strangely warm to the touch.'

			},
			{
				choiceButtonText: 'Go back downstairs',
			  	modalBody: 'Would you like to nope the fuck out of there?'
			}
		]
	}
};