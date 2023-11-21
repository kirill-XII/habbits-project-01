import LangButton from './LangButton'
import s from './NamePanel.module.css'

const NamePanel = () => {
	return (
		<>
			<div className={s.panel}>
				<h1>Habbits</h1>
				<LangButton />
			</div>
		</>
	)
}

export default NamePanel
