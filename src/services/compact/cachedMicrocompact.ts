export type CacheEditsBlock = {
  type: 'cache_edits'
  edits: unknown[]
}

export type PinnedCacheEdits = {
  userMessageIndex: number
  block: CacheEditsBlock
}

export type CachedMCState = {
  pinnedEdits: PinnedCacheEdits[]
}

export function createCachedMCState(): CachedMCState {
  return { pinnedEdits: [] }
}

export function markToolsSentToAPI(_state: CachedMCState): void {}

export function resetCachedMCState(state: CachedMCState): void {
  state.pinnedEdits = []
}

export function isCachedMicrocompactEnabled(): boolean {
  return false
}

export function isModelSupportedForCacheEditing(_model?: string): boolean {
  return false
}

export function getCachedMCConfig(): { supportedModels: string[] } {
  return { supportedModels: [] }
}
