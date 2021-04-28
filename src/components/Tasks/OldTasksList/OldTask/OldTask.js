import {css} from '@emotion/react'
import styled from '@emotion/styled'

const OldTaskDiv = styled.div`
  padding-right: 1%;
  margin-bottom: 0.5%;
  display: flex;
  justify-content: space-between;
`
const OldTaskH3 = styled.h3`
  text-align: left;
  padding: 0 3rem;
`
const OldTaskAuthor = styled.div`
  padding: 1rem;
`
const OldTaskExecutor = styled.div`
  padding: 1rem 1rem 2rem 1rem;
`

const OldTask = ({task: x}) => (
  <div
    css={css`
      border: 2px solid #234465;
      margin-bottom: 35px;
      border-radius: 5px;
    `}>
    <img
      css={css`
        width: 32px;
        height: 32px;
        padding: 3px 0 0 3px;
      `}
      src='/skull.png'
      alt='skull'
    />
    <h2
      css={css`
        display: inline-block;
        text-align: center;
        width: 90%;
        padding: 1.2rem 0 0 0;
      `}>
      {x.title}
    </h2>
    <OldTaskH3>Description</OldTaskH3>
    <p
      css={css`
        word-wrap: break-word;
        padding: 0 10px;
        font-style: italic;
        margin: 1% auto;
      `}>
      {x.description}
    </p>
    <OldTaskH3>Solution</OldTaskH3>
    <p
      css={css`
        padding: 0 10px 1rem 10px;
      `}>
      {x.solution}
    </p>
    <h3
      css={css`
        text-align: left;
        margin: 0.5rem 0 1rem 3rem;
      `}>
      Public: {x.isPublic ? 'Public Task' : 'Private Task!'}
    </h3>
    <OldTaskDiv>
      <OldTaskAuthor>
        <small>Author: </small> {x.creator.username}
      </OldTaskAuthor>
      <OldTaskAuthor>
        <small>Created at: </small> {`${x.createdAt.slice(0, 10)} ${x.createdAt.slice(11, 19)}`}
      </OldTaskAuthor>
    </OldTaskDiv>
    <OldTaskDiv>
      <OldTaskExecutor>
        <small>Executor: </small> {x.executor.username}
      </OldTaskExecutor>
      <OldTaskExecutor>
        <small>Executed on: </small> {`${x.executedOn.slice(0, 10)} ${x.executedOn.slice(11, 19)}`}
      </OldTaskExecutor>
    </OldTaskDiv>
  </div>
)

export default OldTask
