import { isEnvDefinedFalsy } from '../../utils/envUtils.js'

export type ColorModuleUnavailableReason = 'env'
type SyntaxTheme = unknown
type ColorDiffCtor = unknown
type ColorFileCtor = unknown

/**
 * Returns a static reason why the color-diff module is unavailable, or null if available.
 * 'env' = disabled via CLAUDE_CODE_SYNTAX_HIGHLIGHT
 *
 * The TS port of color-diff works in all build modes, so the only way to
 * disable it is via the env var.
 */
export function getColorModuleUnavailableReason(): ColorModuleUnavailableReason | null {
  if (isEnvDefinedFalsy(process.env.CLAUDE_CODE_SYNTAX_HIGHLIGHT)) {
    return 'env'
  }
  return null
}

export function expectColorDiff(): ColorDiffCtor | null {
  return null
}

export function expectColorFile(): ColorFileCtor | null {
  return null
}

export function getSyntaxTheme(themeName: string): SyntaxTheme | null {
  void themeName
  return null
}
