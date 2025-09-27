
import { SketchCollector } from '../../sketchCollector';

export class ManagewpCollector extends SketchCollector {

    static CONFIG = {
        id: "managewp",
        name: "ManageWP",
        description: "i18n.collectors.managewp.description",
        version: "0",
        website: "https://orion.managewp.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/17793.jpg",
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
        entryUrl: "https://orion.managewp.com/login",
    }

    constructor() {
        super(ManagewpCollector.CONFIG);
    }
}
