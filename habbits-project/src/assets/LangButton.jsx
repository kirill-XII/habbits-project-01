// import s from './LangButton.module.css'
// import { Picker } from 'emoji-mart'
// import 'emoji-mart/css/emoji-mart.css'
// import React, { useState } from 'react'

// const LangButton = () => {
// 	const [selectedEmoji, setSelectedEmoji] = useState(null)

// 	const handleEmojiSelect = emoji => {
// 		// Обработайте выбор эмодзи здесь (например, установите выбранное значение в состояние)
// 		setSelectedEmoji(emoji)
// 	}

// 	return (
// 		<>
// 			<div className={s.button}>
// 				<button>
// 					{selectedEmoji && <span>{selectedEmoji.native}</span>}
// 					<Picker onSelect={handleEmojiSelect} title='Выберите язык' />
// 				</button>
// 			</div>
// 		</>
// 	)
// }

// export default LangButton
import React, { useState, useRef, useEffect } from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import s from './LangButton.module.css'

const LangButton = () => {
	const [showPicker, setShowPicker] = useState(false)
	const [selectedEmoji, setSelectedEmoji] = useState(null)
	const buttonRef = useRef(null)
	const handleEmojiSelect = emoji => {
		console.log('Selected emoji:', emoji)
		setSelectedEmoji(emoji)
		setShowPicker(false) // Закрываем модальное окно после выбора эмодзи
	}
	const handleClickOutside = event => {
		if (buttonRef.current && !buttonRef.current.contains(event.target)) {
			console.log('Closing picker')
			setShowPicker(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<>
			<div className={s.button} ref={buttonRef}>
				<button onClick={() => setShowPicker(true)}>
					{selectedEmoji && <span>{selectedEmoji.native}</span>}
				</button>

				{showPicker && (
					<div className={s.pickerContainer}>
						<Picker
							set='apple'
							onSelect={handleEmojiSelect}
							title='Выберите язык'
							onClick={() => setShowPicker(false)}
						/>
					</div>
				)}
			</div>
		</>
	)
}

export default LangButton
