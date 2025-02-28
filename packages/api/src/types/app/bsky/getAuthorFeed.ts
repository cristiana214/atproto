/**
* GENERATED CODE - DO NOT MODIFY
*/
import { Headers, XRPCError } from '@atproto/xrpc'

export interface QueryParams {
  author: string;
  limit?: number;
  before?: string;
}

export interface CallOptions {
  headers?: Headers;
}

export type InputSchema = undefined

export interface OutputSchema {
  cursor?: string;
  feed: FeedItem[];
}
export interface FeedItem {
  uri: string;
  cid: string;
  author: User;
  repostedBy?: User;
  record: {};
  embed?: RecordEmbed | ExternalEmbed | UnknownEmbed;
  replyCount: number;
  repostCount: number;
  likeCount: number;
  indexedAt: string;
  myState?: {
    repost?: string,
    like?: string,
  };
}
export interface User {
  did: string;
  name: string;
  displayName?: string;
}
export interface RecordEmbed {
  type: 'record';
  author: User;
  record: {};
}
export interface ExternalEmbed {
  type: 'external';
  uri: string;
  title: string;
  description: string;
  imageUri: string;
}
export interface UnknownEmbed {
  type: string;
}

export interface Response {
  success: boolean;
  headers: Headers;
  data: OutputSchema;
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
  }
  return e
}
