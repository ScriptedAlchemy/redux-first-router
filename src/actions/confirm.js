// @flow
import { CONFIRM } from '../types'

export default (canLeave?: boolean = true) => ({
  type: CONFIRM,
  payload: { canLeave }
})

// NOTE: see `src/utils/formatRoutes.js` for implemenation of corresponding pathlessRoute
