export const BASE_PROTOCOL_SPEC = {
    sendCommand: {
        socket: {
            command: 'send',
            description: 'Send socket commands via WebDriver Bidi',
            ref: 'https://github.com/w3c/webdriver-bidi',
            parameters: [
                {
                    name: 'params',
                    type: 'CommandData',
                    description: 'socket payload',
                    required: true,
                },
            ],
            returns: {
                type: 'Object',
                name: 'CommandResponse',
                description: 'WebDriver Bidi response',
            },
        },
    },
    sendAsyncCommand: {
        socket: {
            command: 'sendAsync',
            description: 'Send asynchronous socket commands via WebDriver Bidi',
            ref: 'https://github.com/w3c/webdriver-bidi',
            parameters: [
                {
                    name: 'params',
                    type: 'CommandData',
                    description: 'socket payload',
                    required: true,
                },
            ],
            returns: {
                type: 'Number',
                name: 'id',
                description: 'id of WebDriver Bidi request',
            },
        },
    },
}

export const GENERATED_FILE_COMMENT = `/**
 * !!! PLEASE DO NOT EDIT THIS FILE !!!
 *
 * This source file, even though checked in, is auto-generated based on the
 * current development within the WebDriver Bidi spec. Any changes to this
 * file need to come from the specification. You can generate this file by calling
 *
 * \`\`\`
 * $ npm run generate:bidi
 * \`\`\`
 *
 * from the project root. You can find the scripts that generates this file in
 * ./scripts/bidi/**
 */`