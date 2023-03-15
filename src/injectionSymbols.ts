import { InjectionKey } from 'vue'
import { MaterialIcons } from '@/index'

export const hasSymbol =
  typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'

export const PolySymbol = (name: string): string | symbol =>
  // vr = vue router
  hasSymbol
    ? Symbol(name)
    : ('_vmi_') + name

/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */
export const iconsKey = /*#__PURE__*/ PolySymbol('i') as InjectionKey<MaterialIcons>
