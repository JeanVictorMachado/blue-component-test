import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link } from '@mui/material'

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

export const WithLink = Template.bind({})
WithLink.args = {
  data,
  actions: {
    columnName: 'Actions',
    elements: [
      {
        id: 'link-id',
        element: <Link style={{ color: 'black' }}>View</Link>,
        onClick: (params) => console.log({ link: params }),
      },
    ],
  },
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  data,
  actions: {
    columnName: 'Options',
    align: 'center',
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
    columnName: 'Options',
    align: 'center',
    cellWidth: 244,
    elements: [
      {
        id: 'buttons-id',
        element: <Buttons onButtonClick={(id, params) => console.log(id, params)} />,
      },
    ],
  },
}
