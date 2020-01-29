//
// Copyright (c) 2019 Fuzznets. All rights reserved.
//

import { useContext } from 'react';
import { GlobalContext } from '../../state/global/context';

// hook to access global state
export const useGlobalState = () => useContext(GlobalContext);
// like: const { theme } = useGlobalState();
