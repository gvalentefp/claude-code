import React from 'react'
import { homedir } from 'os'
import { Box, Text } from '../../ink.js'

type NewInstallWizardProps = {
  defaultDir: string
  onInstalled: (dir: string) => void
  onCancel: () => void
  onError: (message: string) => void
}

export function NewInstallWizard(_props: NewInstallWizardProps): React.JSX.Element {
  return (
    <Box>
      <Text>Assistant install wizard is unavailable in this local build.</Text>
    </Box>
  )
}

export async function computeDefaultInstallDir(): Promise<string> {
  return homedir()
}
