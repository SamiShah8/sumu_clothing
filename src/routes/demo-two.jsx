import Images from '../components/Images'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demo-two')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Images/>
}
