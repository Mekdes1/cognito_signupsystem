import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-west-2_A6kmAGFpN",
  ClientId: "27eo323jqms47lssq5hbiiujhc",
};

export default new CognitoUserPool(poolData);
