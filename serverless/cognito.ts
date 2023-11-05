import type { AWS } from "@serverless/typescript"

const CognitoResources: AWS["resources"]["Resources"] = {
  CognitoUserPool: {
    Type: "AWS::Cognito::UserPool",
    Properties: {
      UserPoolName: "${self:provider.stage}-user-pool",
      UsernameAttributes: ["email"],
      AutoVerifiedAttributes: ["email"],
      EmailVerificationSubject: "Your verification code",
      EmailVerificationMessage: "Your verification code is {####}",
      Policies: {
        PasswordPolicy: {
          MinimumLength: 8,
          RequireLowercase: true,
          RequireNumbers: true,
          RequireSymbols: true,
          RequireUppercase: true
        }
      }
    }
  },
  CognitoUserPoolClient: {
    Type: "AWS::Cognito::UserPoolClient",
    Properties: {
      ClientName: "${self:provider.stage}-user-pool-client",
      UserPoolId: { Ref: "CognitoUserPool" },
      ExplicitAuthFlows: ["ADMIN_NO_SRP_AUTH"],
      GenerateSecret: false
    }
  }
}

export default CognitoResources
