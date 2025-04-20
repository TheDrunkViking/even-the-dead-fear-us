
export function Button({ children, className }) {
  return <button className={`rounded px-4 py-2 ${className}`}>{children}</button>;
}
