import { VERIFY_PLAN_EXECUTION_TOOL_NAME } from './constants.js'

export class VerifyPlanExecutionTool {
  static readonly name = VERIFY_PLAN_EXECUTION_TOOL_NAME
  static isEnabled(): boolean {
    return false
  }
}
