import './App.css'
import { Button } from './components/ui/Button'
import { LogoutIcon } from './icons/LogoutIcon'

function App() {

  return (
    <>
    <Button variant='secondary' size='lg' text='Button' startIcon={<LogoutIcon />} onclick={() => {alert("hellp")}} className=''/>
    <Button variant='primary' size='md' text='Logout' startIcon={<LogoutIcon />} onclick={() => {alert("hellp")}} className=''/>
    <Button variant='primary' size='sm' text='Login' startIcon={<LogoutIcon />} onclick={() => {alert("hellp")}} className=''/>

    <Button variant='secondary' size='md' text='Button' startIcon={<LogoutIcon />} onclick={() => {alert("hellp")}} className=''/>
    </>
  )
}

export default App
