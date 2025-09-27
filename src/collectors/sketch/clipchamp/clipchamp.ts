
import { SketchCollector } from '../../sketchCollector';

export class ClipchampCollector extends SketchCollector {

    static CONFIG = {
        id: "clipchamp",
        name: "clipchamp",
        description: "i18n.collectors.clipchamp.description",
        version: "0",
        website: "https://app.clipchamp.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/752160.jpg",
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
        entryUrl: "https://app.clipchamp.com/account",
    }

    constructor() {
        super(ClipchampCollector.CONFIG);
    }
}
