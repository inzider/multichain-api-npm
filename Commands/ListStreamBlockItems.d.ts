import { RpcRequest } from '../RpcRequest';
import { RpcResponse } from '../RpcResponse';
/**
 * JSON-RPC request for the *liststreamblockitems* command.
 */
export interface ListStreamBlockItemsRequest extends RpcRequest {
    readonly method: 'liststreamblockitems';
    readonly params?: any[];
}
/**
 * JSON-RPC response for the *liststreamblockitems* command.
 */
export interface ListStreamBlockItemsResponse extends RpcResponse {
    readonly result: ListStreamBlockItemsResult | null;
}
/**
 * Result of the *liststreamblockitems* command.
 */
export declare type ListStreamBlockItemsResult = any;
export declare function ListStreamBlockItems(...params: any[]): ListStreamBlockItemsRequest;
