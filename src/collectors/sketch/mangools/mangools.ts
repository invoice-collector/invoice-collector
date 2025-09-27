
import { SketchCollector } from '../../sketchCollector';

export class MangoolsCollector extends SketchCollector {

    static CONFIG = {
        id: "mangools",
        name: "Mangools",
        description: "i18n.collectors.mangools.description",
        version: "0",
        website: "https://mangools.com/users/sign_in?ref=header-mngls",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14251.jpg",
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
        entryUrl: "https://mangools.com/users/sign_in?ref=header-mngls",
    }

    constructor() {
        super(MangoolsCollector.CONFIG);
    }
}
