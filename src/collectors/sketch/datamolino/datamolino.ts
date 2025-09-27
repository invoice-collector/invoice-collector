
import { SketchCollector } from '../../sketchCollector';

export class DatamolinoCollector extends SketchCollector {

    static CONFIG = {
        id: "datamolino",
        name: "datamolino",
        description: "i18n.collectors.datamolino.description",
        version: "0",
        website: "https://app.datamolino.com/en/auth/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8230.jpg",
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
        entryUrl: "https://app.datamolino.com/en/auth/users/sign_in",
    }

    constructor() {
        super(DatamolinoCollector.CONFIG);
    }
}
