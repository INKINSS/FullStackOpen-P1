const FeedBackButton = ({title, onclick}) => {
  return (
    <button type="button" onClick={onclick}>{title}</button>
  )
}

export default FeedBackButton