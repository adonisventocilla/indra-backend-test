import type { AWS } from "@serverless/typescript"

import { swapiStarshipsRoutes, localStarshipsRoutes, starshipRoutes } from "@functions/index"
import CognitoResources from "./serverless/cognito"

const serverlessConfiguration: AWS = {
  service: "swapi-indra",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-auto-swagger", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: false
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      DB_HOST: "database-indra.cmt7n7nofvmu.us-east-2.rds.amazonaws.com",
      DB_PORT: "5432",
      DB_DATABASE: "database-indra",
      DB_USERNAME: "indra_db",
      DB_PASSWORD: "MZ30glBhb3skZ6KAC"
    }
  },
  functions: { swapiStarshipsRoutes, localStarshipsRoutes, starshipRoutes },
  resources: {
    Resources: {
       ...CognitoResources
    }
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node18",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10
    },
    documentation: {
      api: {
        info: {
          title: "Serverless Swapi Indra",
          version: 1.0
        }
      }
    }
  }
}

module.exports = serverlessConfiguration
