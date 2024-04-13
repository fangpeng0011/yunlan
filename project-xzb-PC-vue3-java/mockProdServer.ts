//  mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

import mockModule from './mock/index';

export function setupProdMockServer() {
  createProdMockServer([...mockModule]);
}
