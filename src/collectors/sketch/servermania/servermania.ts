
import { SketchCollector } from '../../sketchCollector';

export class ServermaniaCollector extends SketchCollector {

    static CONFIG = {
        id: "servermania",
        name: "ServerMania",
        description: "i18n.collectors.servermania.description",
        version: "0",
        website: "http://www.servermania.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8310.jpg",
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
        entryUrl: "http://www.servermania.com",
    }

    constructor() {
        super(ServermaniaCollector.CONFIG);
    }
}
