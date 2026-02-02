
import { App } from 'aws-cdk-lib';
import { ApiStack } from './stack';

const app = new App();
new ApiStack(app, 'NodeSampleStack');
