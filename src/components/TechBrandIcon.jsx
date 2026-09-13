import StackIcon from 'tech-stack-icons';

export default function TechBrandIcon({ name }) {
  return (
    <span className="brand-icon" aria-hidden="true">
      <span className="brand-icon-dark"><StackIcon name={name} variant="dark" /></span>
      <span className="brand-icon-light"><StackIcon name={name} variant="light" /></span>
    </span>
  );
}
