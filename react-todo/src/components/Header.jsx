export default function Header(props) {
  return (
    <header>
      <h1>My Todos</h1>
      <h2>{props.subtitle}</h2>
    </header>
  );
}
