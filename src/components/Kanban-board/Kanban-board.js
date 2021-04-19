import {css} from '@emotion/react'
import DragNDrop from './DragNDrop'

const KanbanBoard = () => {
  return (
    <div
      css={css`
        color: white;
        background-color: thistle;
        font-size: calc(10px + 2vmin);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}>
      <DragNDrop />
    </div>
  )
}
export default KanbanBoard
