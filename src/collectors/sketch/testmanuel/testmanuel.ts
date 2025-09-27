
import { SketchCollector } from '../../sketchCollector';

export class TestmanuelCollector extends SketchCollector {

    static CONFIG = {
        id: "testmanuel",
        name: "TestManuel",
        description: "i18n.collectors.testmanuel.description",
        version: "0",
        website: "ibcs.online/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2101864.jpg",
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
        entryUrl: "ibcs.online/invoice",
    }

    constructor() {
        super(TestmanuelCollector.CONFIG);
    }
}
