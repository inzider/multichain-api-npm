import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getaddressbalances* command.
 */
export interface GetAddressBalancesRequest extends RpcRequest {
    readonly method: 'getaddressbalances';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *getaddressbalances* command.
 */
export interface GetAddressBalancesResponse extends RpcResponse {
    readonly result: GetAddressBalancesResult | null;
}
/**
 * Result of the *getaddressbalances* command.
 */
export declare type GetAddressBalancesResult = any;
export declare function GetAddressBalances(...params: any[]): GetAddressBalancesRequest;
