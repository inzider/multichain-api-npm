import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *setlastblock* command.
 */
export interface SetLastBlockRequest extends RpcRequest {
    readonly method: 'setlastblock';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *setlastblock* command.
 */
export interface SetLastBlockResponse extends RpcResponse {
    readonly result: SetLastBlockResult | null;
}
/**
 * Result of the *setlastblock* command.
 */
export declare type SetLastBlockResult = any;
export declare function SetLastBlock(...params: any[]): SetLastBlockRequest;
