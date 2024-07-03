import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import { useContextValue } from '../Context';
import { Avatar } from '@material-tailwind/react';

const Slider = () => {
  const { state, dispatch } = useContextValue();
  return (
    <Card className='h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
      <div className='mb-2 p-4 h-auto'>
        <div className='flex flex-col items-start justify-center gap-4'>
          <div className='flex items-center justify-center w-[80%]'>
            <Avatar
              src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
              alt='image'
              size='lg'
            />
          </div>
          <Typography variant='h5' color='blue-gray w-full'>
            Hello, {state.user}
          </Typography>
        </div>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className='h-5 w-5' />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserPlusIcon className='h-5 w-5' />
          </ListItemPrefix>
          Subscribtions
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <InboxIcon className='h-5 w-5' />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            {/* <Chip
              value='14'
              size='sm'
              variant='ghost'
              color='blue-gray'
              className='rounded-full'
            /> */}
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className='h-5 w-5' />
          </ListItemPrefix>
          Profile
        </ListItem>

        <ListItem>
          <ListItemPrefix>
            <PowerIcon className='h-5 w-5' />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};

export default Slider;
