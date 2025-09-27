
import { SketchCollector } from '../../sketchCollector';

export class GithostCollector extends SketchCollector {

    static CONFIG = {
        id: "githost",
        name: "GitHost",
        description: "i18n.collectors.githost.description",
        version: "0",
        website: "https://githost.io/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20539.jpg",
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
        entryUrl: "https://githost.io/users/sign_in",
    }

    constructor() {
        super(GithostCollector.CONFIG);
    }
}
