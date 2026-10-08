import database from "@/infra/database";

export async function getSystemStatus() {
  const result = await database.query(`
    SELECT
      current_setting('server_version') AS version,
      current_setting('max_connections')::int AS max_connections,
      (
        SELECT count(*)::int
        FROM pg_stat_activity
        WHERE datname = current_database()
      ) AS opened_connections;
  `);

  const databaseStatus = result.rows[0];

  return {
    updated_at: new Date().toISOString(),
    dependecies: {
      database: {
        version: databaseStatus.version,
        max_connections: databaseStatus.max_connections,
        opened_connections: databaseStatus.opened_connections,
      },
    },
  };
}
