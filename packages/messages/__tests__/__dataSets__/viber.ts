import {
  ViberImage,
  ViberVideo,
  ViberText,
  ViberFile,
  ViberCategory,
  MessageSuccess,
  ViberTextRequest,
  ViberImageRequest,
  ViberVideoRequest,
  ViberFileRequest,
  ViberTextParams,
  ViberImageParams,
  ViberVideoParams,
  ViberFileParams,
  ViberService,
  ViberAction,
} from '../../lib';

import { Image } from '../../lib/classes/Viber/Image';
import { Text } from '../../lib/classes/Viber/Text';
import { MessageCategory } from '../../lib/enums/Viber/MessageCategory';

export default [
  {
    label: 'send Viber text',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              text: 'too many secrets',
              channel: 'viber_service',
              message_type: 'text',
            } as ViberTextRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberText({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
      } as ViberTextParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send Viber text with viber service',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              text: 'too many secrets',
              channel: 'viber_service',
              message_type: 'text',
              client_ref: 'my-ref',
              viber_service: {
                category: ViberCategory.PROMOTION,
                ttl: 42,
                type: 'type',
                action: {
                  url: 'https://example.com',
                  text: 'viber text',
                },
              },
            } as ViberTextRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberText({
        from: '12126875309',
        to: '14152739164',
        text: 'too many secrets',
        clientRef: 'my-ref',
        viberService: {
          category: ViberCategory.PROMOTION,
          ttl: 42,
          type: 'type',
          action: {
            url: 'https://example.com',
            text: 'viber text',
          } as ViberAction,
        },
      } as ViberTextParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send Viber text with old class',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              text: 'too many secrets',
              channel: 'viber_service',
              message_type: 'text',
              client_ref: 'my-ref',
              viber_service: {
                category: ViberCategory.PROMOTION,
                ttl: 42,
                type: 'type',
              },
            } as ViberTextRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new Text(
        'too many secrets', // text
        '14152739164', // to
        '12126875309', // from
        {
          category: MessageCategory.PROMOTINO,
          ttl: 42,
          type: 'type',
        },
        'my-ref', // client ref
      ),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send Viber image',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              channel: 'viber_service',
              message_type: 'image',
              image: {
                url: 'https://example.com',
              },
            } as ViberImageRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberImage({
        from: '12126875309',
        to: '14152739164',
        image: {
          url: 'https://example.com',
        },
      } as ViberImageParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send Viber image with viber service',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              channel: 'viber_service',
              message_type: 'image',
              image: {
                url: 'https://example.com',
              },
              client_ref: 'my-ref',
              viber_service: {
                category: ViberCategory.PROMOTION,
                ttl: 42,
                type: 'type',
                action: {
                  url: 'https://example.com',
                  text: 'viber text',
                },
              },
            } as ViberImageRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberImage({
        from: '12126875309',
        to: '14152739164',
        image: {
          url: 'https://example.com',
        },
        clientRef: 'my-ref',
        viberService: {
          category: ViberCategory.PROMOTION,
          ttl: 42,
          type: 'type',
          action: {
            url: 'https://example.com',
            text: 'viber text',
          } as ViberAction,
        } as ViberService,
      } as ViberImageParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send Viber image with old class',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              channel: 'viber_service',
              message_type: 'image',
              image: {
                url: 'https://example.com',
              },
              client_ref: 'my-ref',
              viber_service: {
                category: ViberCategory.PROMOTION,
                ttl: 42,
                type: 'type',
                action: {
                  url: 'https://example.com',
                  text: 'viber text',
                },
              },
            } as ViberImageRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new Image(
        {
          url: 'https://example.com',
        },
        '14152739164', // to
        '12126875309', // from
        {
          category: ViberCategory.PROMOTION,
          ttl: 42,
          type: 'type',
          action: {
            url: 'https://example.com',
            text: 'viber text',
          },
        },
        'my-ref', // client Ref
      ),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send Viber video',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              channel: 'viber_service',
              message_type: 'video',
              video: {
                url: 'https://example.com',
              },
            } as ViberVideoRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberVideo({
        from: '12126875309',
        to: '14152739164',
        video: {
          url: 'https://example.com',
        },
      } as ViberVideoParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send Viber video with viber service',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              channel: 'viber_service',
              message_type: 'video',
              video: {
                url: 'https://example.com',
              },
              client_ref: 'my-ref',
              viber_service: {
                category: ViberCategory.PROMOTION,
                ttl: 42,
                type: 'type',
                action: {
                  url: 'https://example.com',
                  text: 'viber text',
                },
              },
            } as ViberVideoRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberVideo({
        from: '12126875309',
        to: '14152739164',
        video: {
          url: 'https://example.com',
        },
        clientRef: 'my-ref',
        viberService: {
          category: ViberCategory.PROMOTION,
          ttl: 42,
          type: 'type',
          action: {
            url: 'https://example.com',
            text: 'viber text',
          } as ViberAction,
        } as ViberService,
      } as ViberVideoParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send Viber file',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              channel: 'viber_service',
              message_type: 'file',
              file: {
                url: 'https://example.com',
              },
            } as ViberFileRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberFile({
        from: '12126875309',
        to: '14152739164',
        file: {
          url: 'https://example.com',
        },
      } as ViberFileParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
  {
    label: 'send Viber file with viber service',
    request: [
      '/v1/messages',
      'POST',
            {
              from: '12126875309',
              to: '14152739164',
              channel: 'viber_service',
              message_type: 'file',
              file: {
                url: 'https://example.com/my-image.jpg',
                name: 'Keyboard Cat',
              },
              client_ref: 'my-ref',
              viber_service: {
                category: ViberCategory.PROMOTION,
                ttl: 42,
                type: 'type',
                action: {
                  url: 'https://example.com',
                  text: 'viber text',
                },
              },
            } as ViberFileRequest,
    ],
    response: [
      200,
      {
        message_uuid: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
      },
    ],
    method: 'POST',
    clientMethod: 'send',
    parameters: [
      new ViberFile({
        from: '12126875309',
        to: '14152739164',
        file: {
          url: 'https://example.com/my-image.jpg',
          name: 'Keyboard Cat',
        },
        clientRef: 'my-ref',
        viberService: {
          category: ViberCategory.PROMOTION,
          ttl: 42,
          type: 'type',
          action: {
            url: 'https://example.com',
            text: 'viber text',
          } as ViberAction,
        } as ViberService,
      } as ViberFileParams),
    ],
    expected: {
      messageUUID: '1d4723b0-9134-4440-8cf0-e9f39ccb1c6a',
    } as MessageSuccess,
  },
];
