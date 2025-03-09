import { createFileRoute } from "@tanstack/react-router";
import DemoCraousel from "../components/DemoCraousel";

export const Route = createFileRoute("/craousel")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DemoCraousel />;
}
