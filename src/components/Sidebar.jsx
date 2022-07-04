import { Box, List, ListItem, ListItemButton, ListItemIcon, Switch } from '@mui/material'
import { Home, Article, Group, Storefront, Person, Settings, AccountBox, ModeNight } from '@mui/icons-material'
import React from 'react'
import MyListItem from './MyListItem'

const Sidebar = ({ mode, setMode }) => {
	return (
		<Box
			flex={1}
			p={2}
			sx={{ display: { xs: "none", sm: "block" } }}
		>
			<Box position='fixed'>
				<List>
					<MyListItem
						link="home"
						icon={<Home />}
						text="Homepage"
					/>
					<MyListItem
						link="pages"
						icon={<Article />}
						text="Pages"
					/>
					<MyListItem
						link="groups"
						icon={<Group />}
						text="Groups"
					/>
					<MyListItem
						link="marketplace"
						icon={<Storefront />}
						text="Marketplace"
					/>
					<MyListItem
						link="friends"
						icon={<Person />}
						text="Friends"
					/>
					<MyListItem
						link="settings"
						icon={<Settings />}
						text="Settings"
					/>
					<MyListItem
						link="profile"
						icon={<AccountBox />}
						text="Profile"
					/>

					<ListItem disablePadding>
						<ListItemButton component="a" href="#simple-list">
							<ListItemIcon>
								<ModeNight />
							</ListItemIcon>
							<Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')} 
								
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	)
}

export default Sidebar