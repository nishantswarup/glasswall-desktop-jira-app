import { Amplify } from 'aws-amplify'

export const isDevEnv = process.env.NODE_ENV === 'development'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    Amplify.configure({
        Auth: {
            mandatorySignIn: true,
            region: "eu-west-2",
            identityPoolId: "eu-west-2:1d4a723b-5786-4bb5-99c0-5c4f12123314",
            userPoolId: "eu-west-2_lcWmYlmTP",
            userPoolWebClientId: "3pvknpvr4i7741eg8cqcod3o0k",
        }
    });
}
