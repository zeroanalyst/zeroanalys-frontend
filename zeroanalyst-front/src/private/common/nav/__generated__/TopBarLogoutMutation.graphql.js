/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TopBarLogoutMutationVariables = {||};
export type TopBarLogoutMutationResponse = {|
  +logout: ?string
|};
export type TopBarLogoutMutation = {|
  variables: TopBarLogoutMutationVariables,
  response: TopBarLogoutMutationResponse,
|};
*/


/*
mutation TopBarLogoutMutation {
  logout
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "logout",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TopBarLogoutMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TopBarLogoutMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "TopBarLogoutMutation",
    "operationKind": "mutation",
    "text": "mutation TopBarLogoutMutation {\n  logout\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ae24c77d6984e4c4cab69f882d7efc92';

module.exports = node;
