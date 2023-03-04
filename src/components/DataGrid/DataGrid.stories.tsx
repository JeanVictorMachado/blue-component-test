import { ComponentStory, ComponentMeta } from '@storybook/react'

import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { data } from '../../pages/Home/mock'
import { Buttons } from '../Buttons'
import { DataGrid } from '.'

export default {
  title: 'Example/DataGrid',
  component: DataGrid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DataGrid>

const Template: ComponentStory<typeof DataGrid> = (args) => <DataGrid {...args} />

export const Default = Template.bind({})
Default.args = { data }

export const WithIcons = Template.bind({})
WithIcons.args = {
  data,
  actions: {
    columnName: 'Options',
    elements: [
      {
        id: 'edit-id',
        element: <EditOutlinedIcon />,
        onClick: (params) => console.log({ edit: params }),
      },
      {
        id: 'delete-id',
        element: <DeleteOutlineIcon />,
        onClick: (params) => console.log({ edit: params }),
      },
    ],
  },
}

export const WithButtons = Template.bind({})
WithButtons.args = {
  data,
  actions: {
    cellWidth: 244,
    columnName: 'Options',
    elements: [
      {
        id: 'buttons-id',
        element: <Buttons onButtonClick={(id, params) => console.log(id, params)} />,
      },
    ],
  },
}
