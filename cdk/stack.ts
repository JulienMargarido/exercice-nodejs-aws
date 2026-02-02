
import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'ItemsHandler', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'src/handlers/createItem.handler',
      code: lambda.Code.fromAsset('dist'),
      timeout: Duration.seconds(10),
      // Cognito authorizer could be added here later
    });

    const api = new apigw.RestApi(this, 'ItemsApi');
    const items = api.root.addResource('items');
    items.addMethod('POST', new apigw.LambdaIntegration(fn));
  }
}
