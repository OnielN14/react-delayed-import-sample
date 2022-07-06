import { lazy, Suspense, useState } from "react";
import { delayedComponentImport } from "./utils/import";

const Header = lazy(() => delayedComponentImport("Header"));
const Content = lazy(() => delayedComponentImport("Content"));
const ContentImage = lazy(() => delayedComponentImport("ContentImage"));
const Icon = lazy(() => delayedComponentImport("Icon"));

function App() {
  const [iconName, setIconName] = useState("email");

  return (
    <Suspense fallback="Loading...">
      <Header />
      <Content>
        <h1>Icon</h1>
        <div>
          <select
            value={iconName}
            onChange={(ev) => setIconName(ev.target.value)}
          >
            <option value="email">Email</option>
            <option value="linkedin">LinkedIn</option>
          </select>
        </div>
        <Icon name={iconName} />
      </Content>
      <ContentImage />
    </Suspense>
  );
}

export default App;
