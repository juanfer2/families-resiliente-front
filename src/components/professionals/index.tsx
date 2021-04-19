import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import { useProfessionals } from './useProfessionals'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

function ProfessionalsList() {
  const classes = useStyles()
  const {
    error,
    loanding,
    professionals,
    open,
    setOpen,
    handleClick,
  } = useProfessionals()

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
        className={classes.root}
      >
        {professionals &&
          professionals.map((professional: any, index: number) => (
            <div key={index}>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={professional.name} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {professional.familyDocuments &&
                  professional.familyDocuments.map(
                    (familyDocument: any, indexSubItem: number) => (
                      <List key={indexSubItem} component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary={familyDocument.code} />
                        </ListItem>
                      </List>
                    ),
                  )}
              </Collapse>
            </div>
          ))}
      </List>
    </div>
  )
}

export default ProfessionalsList
