import { lazy, Suspense, useEffect, useState } from "react";
import { delayedSvgImport } from "../../utils/import";

const ICONS = {
  email: "social-icon-email",
  linkedin: "social-icon-linkedin",
};

const loadIcon = (iconName) =>
  lazy(() => delayedSvgImport(ICONS[iconName], 1000));

const Icon = ({ name, ...props }) => {
  const [View, setView] = useState(null);

  useEffect(() => {
    if (!(name && name in ICONS)) {
      console.warn(`"${name}" is not available in Icon List `);
      return;
    }

    setView(loadIcon(name));
  }, [name]);

  return (
    View && (
      <Suspense fallback="Loading...">
        <View {...props} />
      </Suspense>
    )
  );
};

export default Icon;
