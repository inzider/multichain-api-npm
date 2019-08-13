import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *getaddresstransaction* command.
 */
export interface GetAddressTransactionRequest extends RpcRequest {
    readonly method: 'getaddresstransaction';
    readonly params: [string, string, boolean | undefined];
}
/**
 * JSON-RPC response for the *getaddresstransaction* command.
 */
export interface GetAddressTransactionResponse extends RpcResponse {
    readonly result: GetAddressTransactionResult | null;
}
/**
 * Result of the *getaddresstransaction* command.
 */
export declare type GetAddressTransactionResult = any;
export declare function GetAddressTransaction(address: string, txId: string, verbose?: boolean): GetAddressTransactionRequest;
