
import { SketchCollector } from '../../sketchCollector';

export class PdxConnectCollector extends SketchCollector {

    static CONFIG = {
        id: "pdx_connect",
        name: "pdx connect",
        description: "i18n.collectors.pdx_connect.description",
        version: "0",
        website: "https://pdx-connect.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2297677.jpg",
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
        entryUrl: "https://pdx-connect.com",
    }

    constructor() {
        super(PdxConnectCollector.CONFIG);
    }
}
