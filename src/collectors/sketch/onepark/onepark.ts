
import { SketchCollector } from '../../sketchCollector';

export class OneparkCollector extends SketchCollector {

    static CONFIG = {
        id: "onepark",
        name: "OnePark",
        description: "i18n.collectors.onepark.description",
        version: "0",
        website: "https://www.onepark.fr/?origin=header&modal=connect",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137013.jpg",
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
        entryUrl: "https://www.onepark.fr/?origin=header&modal=connect",
    }

    constructor() {
        super(OneparkCollector.CONFIG);
    }
}
