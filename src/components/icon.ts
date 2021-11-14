import { AllowedComponentProps, ComponentCustomProps, computed, defineComponent, h, VNodeProps } from 'vue'
import { IconsTypes } from 'jscache/icons-types'
import { Icons } from 'jscache/icons-names'
import { useIcons } from '@/index'

export interface AIconProps {
  type: IconsTypes
  name: Icons
  size: string
  filled: boolean
  outlined: boolean
  round: boolean
  sharp: boolean
  twoTone: boolean
}


const AIconImpl = defineComponent({
  name: 'AIcon',
  inheritAttrs: false,
  props: {
    type: { type: String, default: '' },
    name: { type: String, required: true },
    size: { type: String, default: '' },
    filled: Boolean,
    outlined: Boolean,
    round: Boolean,
    sharp: Boolean,
    twoTone: Boolean,
  },
  setup (props, { /*slots, */attrs }) {
    const icons = useIcons()
    const elStyle = computed(() => {
      let style = ''
      if (props.size !== '') {
        style += `font-size: ${props.size}px;`
        style += `width: ${props.size}px;`
        style += `height: ${props.size}px;`
      }
      return style
    })
    const typeClassFromType = computed(() => {
      switch (props.type) {
        case icons.types.filled: return 'f-filled'
        case icons.types.outlined: return 'f-outlined'
        case icons.types.round: return 'f-round'
        case icons.types.sharp: return 'f-sharp'
        case icons.types['two-tone']: return 'f-two-tone'
        default: return ''
      }
    })
    const typeClassFromParams = computed(() => {
      if (props.filled) return 'f-filled'
      if (props.outlined) return 'f-outlined'
      if (props.round) return 'f-round'
      if (props.sharp) return 'f-sharp'
      if (props.twoTone) return 'f-two-tone'
      else return ''
    })
    const elClass = computed(() => {
      return [
        'a-icon',
        typeClassFromType.value,
        typeClassFromParams.value,
      ]
    })
    return () => {
      return h(
        'i',
        {
          ...attrs,
          style: elStyle.value + ' ' + attrs.style,
          class: elClass.value.join(' ') + ' ' + attrs.class,
        },
        props.name
      )
    }
  }
})

// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to render a link that triggers a navigation on click.
 */
export const AIcon = AIconImpl as unknown as {
  new (): {
    $props: AllowedComponentProps &
        ComponentCustomProps &
        VNodeProps &
        AIconProps
  }
}
