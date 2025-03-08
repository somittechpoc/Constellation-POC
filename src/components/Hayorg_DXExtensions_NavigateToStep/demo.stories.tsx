import type { Meta, StoryObj } from '@storybook/react';

import HayorgDxExtensionsNavigateToStep from './index';
import type { HayorgDxExtensionsNavigateToStepProps } from './index';

import { configProps } from './mock';

const meta: Meta = {
  title: 'SL/HayorgDxExtensionsNavigateToStep',
  component: HayorgDxExtensionsNavigateToStep,
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

type Story = StoryObj<HayorgDxExtensionsNavigateToStepProps>;

export const Primary:Story = {
  args: {
    text: configProps.text,
    variant: configProps.variant,
    tooltip: configProps.tooltip,
    stepID: configProps.stepId,
    icon: configProps.icon,
    iconName: configProps.iconName as HayorgDxExtensionsNavigateToStepProps['iconName'],
    getPConnect: () => {
      return { 
        getActionsApi: () => {
          return {
            navigateToStep: (stepID, containerItemID) => {
              if(stepID==='ERROR') {
                return Promise.reject(new Error('Error navigating to step'));
              }
              return Promise.resolve(console.log(`Navigating to stepID: ${stepID} with 
              containerItemID: ${containerItemID}`));
            }
          }
        },
        getContextName: () => 'containerItemID',
      } as typeof PConnect;
    }
  }
};