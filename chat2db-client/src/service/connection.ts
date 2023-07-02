import { IPageResponse, IConnectionDetails } from '@/typings';
import createRequest from './base';
// import { IPageResponse, IConnectionDetails, IDB } from '@/types';

export interface IGetConnectionParams {
  searchKey?: string;
  pageNo: number;
  pageSize: number;
}

/**
 * 查询连接列表
 */
const getList = createRequest<
  IGetConnectionParams,
  IPageResponse<IConnectionDetails>
>('/api/connection/datasource/list', {});

const getDetails = createRequest<{ id: number }, IConnectionDetails>(
  '/api/connection/datasource/:id',
  {},
);

const save = createRequest<IConnectionDetails, string>(
  '/api/connection/datasource/create',
  { method: 'post', delayTime: true },
);

const close = createRequest<IConnectionDetails, void>(
  '/api/connection/datasource/close',
  { method: 'post' },
);

const test = createRequest<IConnectionDetails, boolean>(
  '/api/connection/datasource/pre_connect',
  { method: 'post', delayTime: true },
);
const testSSH = createRequest<any, boolean>('/api/connection/ssh/pre_connect', {
  method: 'post',
  delayTime: true,
});

const update = createRequest<IConnectionDetails, void>(
  '/api/connection/datasource/update',
  { method: 'post' },
);

const remove = createRequest<{ id: number }, void>(
  '/api/connection/datasource/:id',
  { method: 'delete' },
);

const clone = createRequest<{ id: number }, void>(
  '/api/connection/datasource/clone',
  { method: 'post' },
);

const getDBList = createRequest<{ id: number }, IDB[]>(
  '/api/connection/datasource/connect',
  { method: 'get' },
);

export default {
  getList,
  getDetails,
  save,
  test,
  update,
  remove,
  clone,
  getDBList,
  close,
  testSSH,
};
