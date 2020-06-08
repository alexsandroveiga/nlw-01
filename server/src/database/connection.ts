import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default connection;

/**
 * Entidades
 * - points (Pontos de coleta)
 * image
 * name
 * email
 * whatsapp
 * latitude
 * longitude
 * city
 * uf
 * - items (Itens de coleta)
 * image
 * title
 * - point_items (Relacionamentos dos itens que um ponto coleta)
 * point_id
 * item_id
 * Relacionamento muitos para muitos (N-N) (Tabela Pivot)
 */
