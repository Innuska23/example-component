import 'react-toastify/dist/ReactToastify.css'
import { Button, Card, TextField, Typography } from './components'

export function App() {
  return (
    <>
      <Button variant="primary" as="a">
        Button
      </Button>
      <Card className="custom-class">
        <Typography variant="h1">Card Title</Typography>
        <Typography variant="h3">This is a simple card component.</Typography>
      </Card>
      <TextField />
    </>
  )
}
