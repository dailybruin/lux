import styled from 'react-emotion'

interface LineProps {
  color: string
}

const Line = styled('div')(
  (props: LineProps) => `
  height: 0.25rem;
  width: 3.125rem;
  margin-right: 0.3125rem;
  background-color: ${props.color};
`
)

export default Line
