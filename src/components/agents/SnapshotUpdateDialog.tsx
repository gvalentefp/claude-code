import React from 'react'
import { Box, Text } from '../../ink.js'

type Props = {
  agentType: string
  scope: unknown
  snapshotTimestamp: string
  onComplete: (choice: 'merge' | 'keep' | 'replace') => void
  onCancel: () => void
}

export function SnapshotUpdateDialog(props: Props): React.JSX.Element {
  return (
    <Box flexDirection="column">
      <Text>Snapshot update UI is unavailable in this local copy.</Text>
      <Text>
        Continuing with existing snapshot for `{props.agentType}` ({props.snapshotTimestamp}
        ).
      </Text>
    </Box>
  )
}

export function buildMergePrompt(agentType: string, _scope: unknown): string {
  return `Merge snapshot update requested for ${agentType}, but snapshot merge is unavailable in this local build.`
}
