import { PenTool, Code2, Monitor, Briefcase, Megaphone, Camera } from 'lucide-react';

const map = { pen: PenTool, code: Code2, monitor: Monitor, briefcase: Briefcase, megaphone: Megaphone, camera: Camera };

export default function CategoryIcon({ name, size = 36 }) {
  const Icon = map[name] ?? PenTool;
  return <Icon size={size} strokeWidth={1.75} aria-hidden="true" />;
}
