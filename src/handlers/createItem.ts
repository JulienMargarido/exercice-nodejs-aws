
import { APIGatewayProxyHandler } from 'aws-lambda';
import { ItemService } from '../services/itemService';

const service = new ItemService();

export const handler: APIGatewayProxyHandler = async (event) => {
  const body = event.body ? JSON.parse(event.body) : {};
  const item = await service.create(body.name);

  return {
    statusCode: 201,
    body: JSON.stringify(item)
  };
};

/**
 * BONUS :
 * - Add Cognito JWT validation here
 * - ...
 */
