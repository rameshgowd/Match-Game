import './index.css'

const TabItem = props => {
  const {tabDetails, active, onClick} = props

  const onClickTabItem = () => {
    onClick(tabDetails.tabId)
  }
  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-item-button ${active ? 'active-tab' : ''}`}
        onClick={onClickTabItem}
      >
        {tabDetails.displayText}
      </button>
    </li>
  )
}
export default TabItem
