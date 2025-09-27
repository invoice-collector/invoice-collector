
import { SketchCollector } from '../../sketchCollector';

export class Auth0Collector extends SketchCollector {

    static CONFIG = {
        id: "auth0",
        name: "Auth0",
        description: "i18n.collectors.auth0.description",
        version: "0",
        website: "https://auth0.auth0.com/login?state=9j7VXnGdEc3g-nqviPl0Yn26rbqkhIX6&client=bLR9T5ar6nFtDO4zErGXdoqMCM4iNZSV&protocol=oauth2&response_type=code&redirect_uri=https%3A%2F%2Fauth0.com%2Fauth%2Fcallback&scope=openid%20profile%20email",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18675.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://auth0.auth0.com/login?state=9j7VXnGdEc3g-nqviPl0Yn26rbqkhIX6&client=bLR9T5ar6nFtDO4zErGXdoqMCM4iNZSV&protocol=oauth2&response_type=code&redirect_uri=https%3A%2F%2Fauth0.com%2Fauth%2Fcallback&scope=openid%20profile%20email",
    }

    constructor() {
        super(Auth0Collector.CONFIG);
    }
}
