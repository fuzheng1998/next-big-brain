/**
 * @fileoverview ListPage.tsx
 * @description ListPage list out all games, where can be only accessed by authenticated users.
 */

import Header from "@/components/Header";

export default function ListPage() {
  return (
    <div>
      <Header isAuthenticated={false} />
      <h1>List Page</h1>
    </div>
  );
}
