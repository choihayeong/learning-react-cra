import { useEffect } from "react";

function SubscriptionArea () {
  const clear = () => {
    // clean up function
  }

  const getSubscribeList = () => {
    // get subscription items

    return clear;
  }

  useEffect(getSubscribeList, []);

  return (
    <article> Here is your subscription items </article>
  )
}

export default SubscriptionArea;
