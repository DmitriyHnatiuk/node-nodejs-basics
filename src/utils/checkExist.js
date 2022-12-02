import { stat } from 'fs/promises';

export async function checkExist(path) {
  try {
    const _exist = await stat(path);
    return Boolean(_exist);
  } catch (error) {
    return false;
  }
}
