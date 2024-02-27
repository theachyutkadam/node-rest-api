const createUser = {
  tags: ['Users'],
  description: 'Create a new use in the system',
  operationId: 'createUser',
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createUserBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '201': {
      description: 'User created successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              _id: {
                type: 'number',
                example: 1,
              },
              first_name: {
                type: 'string',
                example: 'John',
              },
              last_name: {
                type: 'string',
                example: 'Snow',
              },
              email: {
                type: 'string',
                example: 'john.snow@email.com',
              },
              password: {
                type: 'string',
                example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
              },
              created_at: {
                type: 'string',
                example: '2021-03-20T19:40:59.495Z',
              },
              updated_at: {
                type: 'string',
                example: '2021-03-20T21:23:10.879Z',
              },
            },
          },
        },
      },
    },
    '500': {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Internal Server Error',
              },
            },
          },
        },
      },
    },
  },
};

const createUserBody = {
  type: 'object',
  properties: {
    first_name: {
      type: 'string',
      example: 'John',
    },
    last_name: {
      type: 'string',
      example: 'Snow',
    },
    email: {
      type: 'string',
      example: 'john.snow@email.com',
    },
    password: {
      type: 'string',
      description: "unencrypted user's password",
      example: '!1234aWe1Ro3$#',
    },
  },
};

// const deleteUser = {
//   paths: {
//     users: {
//       post: createUser,
//     },
//     'users/{id}': {
//       delete: deleteUser,
//     },
//   },
// }

export { createUser, createUserBody };