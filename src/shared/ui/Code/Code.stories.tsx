import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { type StoryObj } from '@storybook/react';
import { Code } from 'shared/ui/Code/Code';
import { Theme } from 'app/providers/ThemeProvider';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'shared/Code',
  component: Code,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

type Story = StoryObj<typeof Code>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: `<pre
    className={classNames({
      cls: cls.Code,
      mods: {},
      additional: [className]
    })}
  >
    <Button className={cls.copyBtn} theme={ThemeButton.CLEAR}>
      <CopyIcon onClick={onCopy} className={cls.copyIcon} />;
    </Button>
    <code>{text}</code>
  </pre>
);`
  }
};
export const PrimaryDark: Story = {
  args: {
    text: `<pre
    className={classNames({
      cls: cls.Code,
      mods: {},
      additional: [className]
    })}
  >
    <Button className={cls.copyBtn} theme={ThemeButton.CLEAR}>
      <CopyIcon onClick={onCopy} className={cls.copyIcon} />;
    </Button>
    <code>{text}</code>
  </pre>
);`
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
