import { useAuthentication } from "./useAuthentication";
import userStack from "./userStack";

import UserauthStack from "./authStack";

export default function RootNavigation() {
    const {user} = useAuthentication();
    return user ? <userStack/> : <UserauthStack/>;
}