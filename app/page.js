import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Main Page</h1>
        <ul>
          <li>
            <Link href="server-props">server-client-props</Link>
          </li>
          <li>
            <Link href="request-memo">Request Memoization</Link>
          </li>
          <li>
            <Link href="request-client">request-client</Link>
          </li>
          <li>
            <Link href="tanstack-query">tanstack-query</Link>
          </li>
        </ul>
      </header>
      <main>lorem</main>
    </div>
  );
}
