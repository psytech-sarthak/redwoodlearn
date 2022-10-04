import type { ComponentMeta, ComponentStory } from '@storybook/react'

import LearnLayout from './LearnLayout'

export const generated: ComponentStory<typeof LearnLayout> = (args) => {
  return <LearnLayout {...args} />
}

export default {
  title: 'Layouts/LearnLayout',
  component: LearnLayout,
} as ComponentMeta<typeof LearnLayout>
