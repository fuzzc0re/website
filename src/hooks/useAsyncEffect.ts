//
// Copyright (c) 2019 Fuzznets. All rights reserved.
//

import { useEffect, Dispatch, SetStateAction } from 'react';

export function useAsyncEffect(
  asyncFunc: Promise<any>,
  stateChangeAction: Dispatch<SetStateAction<any>>,
  params: any[]
) {
  useEffect(() => {
    let cancel = false;
    async function fn() {
      let res = await asyncFunc;
      if (!cancel) {
        stateChangeAction(res);
      }
    }
    try {
      fn();
    } catch (err) {
      console.log(err);
    }

    return () => {
      cancel = true;
    };
    // eslint-disable-next-line
  }, params);
}
