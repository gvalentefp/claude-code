import type { Message, SystemMessage } from '../../types/message.js'

export const SNIP_NUDGE_TEXT =
  'Context snipping is unavailable in this local build. Continue normally.'

export function isSnipRuntimeEnabled(): boolean {
  return false
}

export function isSnipMarkerMessage(_message: Message): boolean {
  return false
}

export function shouldNudgeForSnips(_messages: Message[]): boolean {
  return false
}

export function snipCompactIfNeeded(
  messages: Message[],
  _opts?: { force?: boolean },
): {
  messages: Message[]
  tokensFreed: number
  boundaryMessage?: SystemMessage
} {
  return { messages, tokensFreed: 0 }
}
