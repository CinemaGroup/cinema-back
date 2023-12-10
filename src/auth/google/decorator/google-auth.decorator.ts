import { applyDecorators, UseGuards } from '@nestjs/common'
import { GoogleAuthGuard } from '../guard/google-auth.guard'

export const GoogleAuth = () => applyDecorators(UseGuards(GoogleAuthGuard))
