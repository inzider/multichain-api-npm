import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the `stop` command.
 */
export interface StopRequest extends RpcRequest {
    readonly method: 'stop';
    readonly params?: undefined;
}
/**
 * JSON-RPC response for the `stop` command.
 */
export interface StopResponse extends RpcResponse {
    readonly result: StopResult | null;
}
/**
 * Result of the `stop` command.
 */
export declare type StopResult = string;
export declare function Stop(): StopRequest;
