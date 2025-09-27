import { SketchCollector } from '../../sketchCollector';

export class FacebookCollector extends SketchCollector {

    static CONFIG = {
        id: "facebook",
        name: "Facebook",
        description: "i18n.collectors.facebook.description",
        version: "0",
        website: "https://facebook.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
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
        entryUrl: "https://facebook.com",
    }

    constructor() {
        super(FacebookCollector.CONFIG);
    }
}
