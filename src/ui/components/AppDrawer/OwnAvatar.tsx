//
// Copyright (c) 2019 Fuzznets. All rights reserved.
//

import React, { memo } from 'react';
import Avatar from '@material-ui/core/Avatar';

import useOwnAvatarStyle from './ownAvatarStyle';

import placeholder from '../../static/images/128.png';

const OwnAvatar: React.FC = () => {
  const classes = useOwnAvatarStyle();
  return <Avatar src={placeholder} className={classes.image} />;
};

export default memo(OwnAvatar);
