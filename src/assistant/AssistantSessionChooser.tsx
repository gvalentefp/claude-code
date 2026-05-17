import React from 'react'
import { Box, Text } from '../ink.js'

type Props = {
  sessions: Array<{ id: string }>
  onSelect: (id: string) => void
  onCancel: () => void
}

export function AssistantSessionChooser(_props: Props): React.JSX.Element {
  return (
    <Box>
      <Text>Assistant session chooser is unavailable in this local build.</Text>
    </Box>
  )
}
