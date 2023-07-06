import { Meta } from '@storybook/angular';
import { MyCmpComponent } from './my-cmp.component';

export default {
  title: 'MyCmpComponent',
  component: MyCmpComponent,
} as Meta<MyCmpComponent>;

export const Primary = {
  render: (args: MyCmpComponent) => ({
    props: args,
  }),
  args: {},
};
