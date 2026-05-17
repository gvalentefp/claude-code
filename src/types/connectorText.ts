export type ConnectorTextDelta = {
  type: 'connector_text_delta'
  text: string
}

export type ConnectorTextBlock = {
  type: 'connector_text'
  text: string
}

export function isConnectorTextBlock(value: unknown): value is ConnectorTextBlock {
  if (!value || typeof value !== 'object') {
    return false
  }
  const candidate = value as { type?: unknown; text?: unknown }
  return candidate.type === 'connector_text' && typeof candidate.text === 'string'
}
